import React from 'react';

const Background: React.FC = () => {
    return (
        <>
            <div className="fixed inset-0 bg-gradient-to-br from-[#1a3a2e] via-[#2d5a4a] to-[#1a3a2e] -z-20" />
            
            {/* Leaf 1 */}
            <svg className="fixed top-[10%] left-[5%] w-[200px] opacity-[0.03] pointer-events-none animate-float -z-10" viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" fill="#c8e6c9" />
            </svg>
            
            {/* Leaf 2 */}
            <svg className="fixed top-[60%] right-[10%] w-[250px] opacity-[0.03] pointer-events-none animate-float animation-delay-5000 -z-10" viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" fill="#c8e6c9" />
            </svg>
            
            {/* Leaf 3 */}
            <svg className="fixed bottom-[20%] left-[15%] w-[180px] opacity-[0.03] pointer-events-none animate-float animation-delay-10000 -z-10" viewBox="0 0 100 100">
                <path d="M50,10 Q70,30 60,50 Q70,70 50,90 Q30,70 40,50 Q30,30 50,10" fill="#c8e6c9" />
            </svg>
        </>
    );
};

export default Background;