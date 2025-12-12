import React from 'react';
import { MenuSection as MenuSectionType } from '../types';

interface MenuSectionProps {
    section: MenuSectionType;
    onImageClick: (src: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section, onImageClick }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-12 animate-[fadeIn_0.5s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12 py-10">
                {section.items.map((item, index) => (
                    <div 
                        key={`${section.id}-${index}`}
                        className="group flex flex-col sm:flex-row gap-6 pb-8 border-b border-[#81c784]/20 hover:border-[#81c784]/50 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                    >
                        <div className="shrink-0 overflow-hidden rounded-xl border-2 border-[#81c784]/30 w-full sm:w-[140px] h-[200px] sm:h-[140px]">
                            <img 
                                src={item.img} 
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onImageClick(item.img);
                                }}
                            />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-baseline mb-3">
                                <h3 className="text-xl md:text-2xl text-[#e8f5e9] tracking-wider">
                                    {item.name}
                                    {item.badge && (
                                        <span className="ml-3 inline-block px-3 py-1 bg-[#81c784]/20 border border-[#81c784] rounded-full text-xs text-[#c8e6c9] tracking-wide align-middle">
                                            {item.badge}
                                        </span>
                                    )}
                                </h3>
                                <span className="text-xl text-[#a5d6a7] font-bold ml-4 whitespace-nowrap">{item.price}</span>
                            </div>
                            <p className="text-[#b9ddb9] leading-relaxed opacity-80">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};