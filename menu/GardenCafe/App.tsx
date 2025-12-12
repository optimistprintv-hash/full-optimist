import React, { useState } from 'react';
import { MENU_DATA } from './constants';
import Background from './components/Background';
import MenuSection from './components/MenuSection';
import ImageModal from './components/ImageModal';
import { Instagram, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
    // State to track which section is open. Default to the first section ('coffee').
    const [openSectionId, setOpenSectionId] = useState<string | null>('coffee');
    const [modalImage, setModalImage] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setOpenSectionId(prev => prev === id ? null : id);
    };

    return (
        <div className="min-h-screen relative font-hack overflow-x-hidden selection:bg-[#81c784] selection:text-[#1a3a2e]">
            <Background />

            {/* Header */}
            <header className="text-center pt-20 pb-16 px-5 relative z-10">
                <h1 className="text-5xl md:text-7xl font-light tracking-[8px] text-[#fde9b6] mb-4 animate-glow">
                    GARDEN CAFE
                </h1>
                <p className="text-lg md:text-xl text-[#fde9b6] tracking-[4px] italic opacity-90 mb-6">
                    Էսթետիկ • Նուրբ • Հյուրընկալ
                </p>
                <div className="flex justify-center items-center gap-4 text-[#c8e6c9] opacity-80 mb-2">
                    <span className="h-[1px] w-8 bg-[#81c784]"></span>
                    <span className="tracking-widest">EST. 2024</span>
                    <span className="h-[1px] w-8 bg-[#81c784]"></span>
                </div>
                
                <div className="mt-8 flex flex-col items-center gap-3 text-[#b9ddb9]">
                    <div className="flex items-center gap-2">
                       <span className="font-bold">7AM - 7PM / 07:00-19:00</span>
                    </div>
                     <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                       <MapPin size={18} />
                       <span>Abovyan 12, Yerevan</span>
                    </div>
                </div>
            </header>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#fde9b6] to-transparent mb-12 opacity-50"></div>

            {/* Main Menu Container */}
            <main className="max-w-7xl mx-auto pb-20 z-10 relative">
                <div className="flex flex-col gap-4">
                    {MENU_DATA.map((section) => (
                        <MenuSection
                            key={section.id}
                            title={section.title}
                            items={section.items}
                            isOpen={openSectionId === section.id}
                            onToggle={() => toggleSection(section.id)}
                            onImageClick={setModalImage}
                        />
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center py-12 px-5 text-[#a5d6a7] relative z-10 border-t border-[#81c784]/20">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#81c784] rounded-full flex items-center justify-center text-[#c8e6c9] text-2xl">
                   🌿
                </div>
                <div className="flex justify-center gap-8 mb-8">
                     <a href="#" className="hover:text-[#fde9b6] transition-colors"><Instagram /></a>
                     <a href="#" className="hover:text-[#fde9b6] transition-colors"><Phone /></a>
                     <a href="#" className="hover:text-[#fde9b6] transition-colors"><MapPin /></a>
                </div>
                <p className="font-bold tracking-wider mb-2">Optimist Print</p>
                <p className="opacity-70 font-mono">+374 77 40 40 51</p>
                <p className="mt-8 text-xs opacity-40">© {new Date().getFullYear()} Garden Cafe. All rights reserved.</p>
            </footer>

            {/* Modal */}
            <ImageModal 
                isOpen={!!modalImage} 
                imageSrc={modalImage} 
                onClose={() => setModalImage(null)} 
            />
        </div>
    );
};

export default App;