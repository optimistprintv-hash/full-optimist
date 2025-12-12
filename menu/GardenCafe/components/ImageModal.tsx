import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string | null;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen || !imageSrc) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
            onClick={onClose}
        >
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-[#81c784] bg-[#1a3a2e]/80 flex items-center justify-center text-[#c8e6c9] hover:bg-[#1a3a2e] transition-colors z-50"
            >
                <X size={40} />
            </button>
            <img 
                src={imageSrc} 
                alt="Full size" 
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-[0_0_50px_rgba(129,199,132,0.5)] animate-in zoom-in-90 duration-300 object-contain"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
    );
};

export default ImageModal;