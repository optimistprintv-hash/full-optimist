import React, { useRef, useEffect } from 'react';
import { MenuItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface MenuSectionProps {
    title: string;
    items: MenuItem[];
    isOpen: boolean;
    onToggle: () => void;
    onImageClick: (src: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, isOpen, onToggle, onImageClick }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full mb-8">
            {/* Clickable Header */}
            <button 
                onClick={onToggle}
                className="w-full group flex flex-col items-center justify-center cursor-pointer py-4 focus:outline-none"
            >
                <div className="relative flex items-center gap-3">
                    <h2 className={`text-2xl md:text-3xl text-[#fde9b6] tracking-[6px] font-bold transition-all duration-300 ${isOpen ? 'text-[#fff5d6]' : ''}`}>
                        {title}
                    </h2>
                    <ChevronDown 
                        className={`text-[#81c784] transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        size={24} 
                    />
                </div>
                {/* Decorative underline */}
                <div className={`mt-4 h-[2px] bg-gradient-to-r from-transparent via-[#81c784] to-transparent transition-all duration-500 ${isOpen ? 'w-48 opacity-100' : 'w-24 opacity-60'}`} />
            </button>

            {/* Collapsible Content */}
            <div 
                ref={contentRef}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 mt-8' : 'opacity-0 mt-0'}`}
                style={{ 
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight ? contentRef.current.scrollHeight + 100 : 1000}px` : '0px' 
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 px-4 md:px-[10%] pb-8">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className="group relative flex flex-col sm:flex-row gap-6 p-4 border-b border-[#81c784]/20 hover:border-[#81c784]/50 transition-all duration-300 hover:translate-x-2"
                        >
                            <img 
                                src={item.img} 
                                alt={item.name}
                                className="w-full sm:w-[140px] h-[200px] sm:h-[140px] object-cover rounded-xl border-2 border-[#81c784]/30 group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgba(129,199,132,0.3)] transition-all duration-500 cursor-zoom-in flex-shrink-0"
                                onClick={() => onImageClick(item.img)}
                            />
                            
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex justify-between items-baseline mb-3">
                                    <span className="text-xl md:text-2xl text-[#e8f5e9] tracking-wider font-bold">
                                        {item.name}
                                        {item.badge && (
                                            <span className="inline-block ml-3 px-3 py-1 bg-[#81c784]/20 border border-[#81c784] rounded-full text-xs text-[#c8e6c9] tracking-wide align-middle">
                                                {item.badge}
                                            </span>
                                        )}
                                    </span>
                                    <span className="text-xl text-[#a5d6a7] font-bold whitespace-nowrap ml-4">{item.price}</span>
                                </div>
                                <p className="text-[#b9ddb9] leading-relaxed text-sm md:text-base italic">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Divider between sections if open */}
            {isOpen && <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#fde9b6]/30 to-transparent my-8" />}
        </div>
    );
};

export default MenuSection;