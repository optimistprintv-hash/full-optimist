import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="text-center py-20 px-5 text-[#a5d6a7] text-sm md:text-base relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#81c784] rounded-full flex items-center justify-center text-2xl text-[#c8e6c9]">
                <span>❦</span>
            </div>
            <p className="font-bold tracking-widest uppercase mb-3">Optimist Print</p>
            <p className="opacity-70 tracking-wider">+374 77 40 40 51</p>
        </footer>
    );
};