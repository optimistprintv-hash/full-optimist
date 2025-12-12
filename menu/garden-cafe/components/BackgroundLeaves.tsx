import React from 'react';

export const BackgroundLeaves: React.FC = () => {
    return (
        <>
            <svg className="fixed top-[10%] left-[5%] w-[200px] opacity-[0.03] pointer-events-none animate-float text-[#c8e6c9] fill-current" viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" />
            </svg>
            <svg className="fixed top-[60%] right-[10%] w-[250px] opacity-[0.03] pointer-events-none animate-float text-[#c8e6c9] fill-current" style={{ animationDelay: '5s' }} viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" />
            </svg>
            <svg className="fixed bottom-[20%] left-[15%] w-[180px] opacity-[0.03] pointer-events-none animate-float text-[#c8e6c9] fill-current" style={{ animationDelay: '10s' }} viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" />
            </svg>
        </>
    );
};