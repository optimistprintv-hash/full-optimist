import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="text-center pt-20 px-5 pb-10 relative z-10">
            <h1 className="text-5xl md:text-7xl font-light tracking-[8px] text-[#fde9b6] mb-4 animate-glow">
                GARDEN CAFE
            </h1>
            <div className="text-lg md:text-xl text-[#fde9b6] tracking-[4px] italic opacity-90 font-light">
                Էսթետիկ • Նուրբ • Հյուրընկալ
            </div>
            <div className="my-6 text-[#fde9b6] opacity-50">--------</div>
            <p className="text-[#a5d6a7] tracking-widest text-sm md:text-base">7AM - 7PM / 07:00-19:00</p>
            <p className="mt-2 opacity-70 text-[#a5d6a7] text-xs md:text-sm tracking-widest">Հասցե • Հեռախոս</p>
        </header>
    );
};