import React from 'react';
import OrbitImages from '../common/OrbitImages';
import { clientLogos } from '../../data/clients';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Orbiting Clients Showcase */}
        <div className="overflow-hidden w-full select-none min-h-[700px] sm:min-h-[820px] flex items-center justify-center">
          <OrbitImages
            images={clientLogos.map((client) => ({ src: client.logo, alt: client.name }))}
            shape="ellipse"
            radiusX={540}
            radiusY={330}
            rotation={-6}
            duration={45}
            itemSize={102}
            itemRadius={18}
            depth={0.6}
            showPath
            pathColor="rgba(0, 0, 0, 0.08)"
            pathWidth={1.5}
            pathDash={6}
            draggable={false}
            clickToFront={false}
            hoverScale={1.05}
            hoverSpeed={0.5}
            imageFit="contain"
            itemClassName="bg-white border border-gray-200/80 shadow-sm"
            centerContent={
              <div className="text-center px-4 max-w-sm pointer-events-none">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#707070] block mb-1">
                  Trusted By Global Leaders
                </span>
                <h3 
                  className="text-2xl sm:text-4xl font-normal text-black tracking-tight"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  Our Valued Clients
                </h3>
              </div>
            }
          />
        </div>

      </div>
    </section>
  );
};

