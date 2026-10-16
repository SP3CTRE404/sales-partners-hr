import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';
import OrbitImages from '../common/OrbitImages';
import { clientLogos } from '../../data/clients';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
            Track Record &bull; Measurable Proof
          </div>
          <h2 
            className="text-4xl sm:text-6xl font-normal text-black tracking-tight leading-[1.08]" 
            style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
          >
            Measurable Results That Drive Leadership Confidence
          </h2>
          <p className="mt-4 text-lg text-[#707070] font-normal leading-relaxed">
            Data-backed performance and enduring executive partnerships across international high-growth companies.
          </p>
        </div>

        {/* Orbiting Clients Showcase */}
        <div className="mb-20 overflow-hidden w-full select-none min-h-[580px] sm:min-h-[660px] flex items-center justify-center">
          <OrbitImages
            images={clientLogos.map((client) => ({ src: client.logo, alt: client.name }))}
            shape="ellipse"
            radiusX={540}
            radiusY={220}
            rotation={-6}
            duration={42}
            itemSize={82}
            itemRadius={16}
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

        {/* Asymmetrical Testimonials with HoverToZoom */}
        <HoverToZoom className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" zoomScale="scale-[1.03]">
          
          {/* Card 1 (7 Cols): Black Card */}
          <div 
            className="lg:col-span-7 bg-black text-white p-8 sm:p-10 min-h-[290px] border border-black flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '35px 0px 35px 35px' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-5">
                <Quote className="w-4 h-4 text-white" />
              </div>
              <p className="text-white text-lg sm:text-xl font-normal leading-relaxed mb-6">
                "Their HR consulting team completely transformed our hiring process and organizational culture. We scale faster and retain top talent with complete confidence."
              </p>
            </div>

            <div className="pt-5 border-t border-neutral-800 flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-normal text-white" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Chief Executive Officer
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  High-Growth Tech Enterprise
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Card 2 (5 Cols): Light Card */}
          <div 
            className="lg:col-span-5 bg-white border border-gray-200 p-8 sm:p-10 min-h-[290px] flex flex-col justify-between group relative"
            style={{ borderRadius: '0px 35px 35px 35px' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-5">
                <Quote className="w-4 h-4" />
              </div>
              <p className="text-black text-base sm:text-lg font-normal leading-relaxed mb-6">
                "Navigating complex corporate compliance was seamless with their dedicated support. They are an invaluable extension of our operational leadership."
              </p>
            </div>

            <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Head of Operations
                </p>
                <p className="text-xs text-[#707070] mt-0.5">
                  Global Healthcare Organization
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
          </div>

        </HoverToZoom>

      </div>
    </section>
  );
};
