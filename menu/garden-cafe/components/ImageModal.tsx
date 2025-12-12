import React, { useEffect } from 'react';

interface ImageModalProps {
    src: string | null;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
    useEffect(() => {
        if (src) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [src]);

    if (!src) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-[fadeIn_0.3s_ease]"
            onClick={onClose}
        >
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-[#81c784] text-[#c8e6c9] bg-[#1a3a2e]/80 flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer"
            >
                &times;
            </button>
            <img 
                src={src} 
                alt="Enlarged view" 
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-[0_0_50px_rgba(129,199,132,0.5)] animate-[zoomIn_0.3s_ease]"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
    );
};