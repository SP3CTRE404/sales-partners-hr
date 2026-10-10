'use client';

import React, { useEffect, useRef, useMemo, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    start?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.22,
    baseRotation = 2,
    blurStrength = 2.5,
    containerClassName = '',
    textClassName = '',
    start = 'top 85%',
    rotationEnd = 'bottom 45%',
    wordAnimationEnd = 'bottom 45%'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="inline-block word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { transformOrigin: '0% 50%', rotate: baseRotation },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: start,
                        end: rotationEnd,
                        scrub: 0.5
                    }
                }
            );

            const wordElements = el.querySelectorAll<HTMLElement>('.word');

            gsap.fromTo(
                wordElements,
                { opacity: baseOpacity, willChange: 'opacity' },
                {
                    ease: 'none',
                    opacity: 1,
                    stagger: 0.04,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: start,
                        end: wordAnimationEnd,
                        scrub: 0.5
                    }
                }
            );

            if (enableBlur) {
                gsap.fromTo(
                    wordElements,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: 'none',
                        filter: 'blur(0px)',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: start,
                            end: wordAnimationEnd,
                            scrub: 0.5
                        }
                    }
                );
            }
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, start, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <div ref={containerRef} className={containerClassName}>
            <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
        </div>
    );
};

export default ScrollReveal;
