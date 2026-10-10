import React, { useState, createContext, useContext, ReactNode, HTMLAttributes } from 'react';

export interface HoverToZoomContextType {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  getTransformClass: (index: number) => string;
}

const HoverToZoomContext = createContext<HoverToZoomContextType | null>(null);

export const useHoverToZoom = () => {
  const context = useContext(HoverToZoomContext);
  if (!context) {
    throw new Error('useHoverToZoom must be used within a HoverToZoom container');
  }
  return context;
};

export interface HoverToZoomProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  zoomScale?: string;
  enableSiblingPush?: boolean;
}

export const HoverToZoom: React.FC<HoverToZoomProps> = ({
  children,
  className = '',
  zoomScale = 'scale-[1.03]',
  enableSiblingPush = true,
  ...rest
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getTransformClass = (index: number) => {
    if (hoveredIndex === null) {
      return 'scale-100 translate-x-0 z-0';
    }
    if (hoveredIndex === index) {
      return `${zoomScale} -translate-y-2 z-20`;
    }
    if (!enableSiblingPush) {
      return 'scale-[0.99] z-0';
    }
    const diff = index - hoveredIndex;
    if (diff === 1) return 'lg:translate-x-3 z-10 scale-[0.98]';
    if (diff > 1) return 'lg:translate-x-2 z-0 scale-[0.99]';
    if (diff === -1) return 'lg:-translate-x-3 z-10 scale-[0.98]';
    if (diff < -1) return 'lg:-translate-x-2 z-0 scale-[0.99]';
    return '';
  };

  const contextValue: HoverToZoomContextType = {
    hoveredIndex,
    setHoveredIndex,
    getTransformClass
  };

  // Enhance each direct child with hover state and responsive push transforms
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    const childProps = child.props as Record<string, any>;
    const childClassName = childProps.className || '';
    const transformClasses = getTransformClass(index);

    return React.cloneElement(child, {
      onMouseEnter: (e: React.MouseEvent) => {
        setHoveredIndex(index);
        childProps.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        setHoveredIndex(null);
        childProps.onMouseLeave?.(e);
      },
      className: `${childClassName} transition-all duration-300 ease-out will-change-transform cursor-pointer ${transformClasses}`.trim()
    } as any);
  });

  return (
    <HoverToZoomContext.Provider value={contextValue}>
      <div
        className={className}
        onMouseLeave={() => setHoveredIndex(null)}
        {...rest}
      >
        {enhancedChildren}
      </div>
    </HoverToZoomContext.Provider>
  );
};

export default HoverToZoom;
