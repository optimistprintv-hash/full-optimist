import React, { useState } from 'react';
import { BackgroundLeaves } from './components/BackgroundLeaves';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MenuSection } from './components/MenuSection';
import { ImageModal } from './components/ImageModal';
import { MENU_DATA } from './data';

const App: React.FC = () => {
  // State to track the currently active section tab
  const [activeSectionId, setActiveSectionId] = useState<string>(MENU_DATA[0].id);
  
  // State for the image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeSection = MENU_DATA.find(s => s.id === activeSectionId);

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col">
      <BackgroundLeaves />
      
      <Header />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#fde9b6] to-transparent mt-4 mb-8 relative z-10"></div>

      {/* Tab Navigation */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {MENU_DATA.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`
                text-lg md:text-xl tracking-[2px] py-2 px-4 transition-all duration-300 border-b-2 font-light
                ${activeSectionId === section.id 
                  ? 'text-[#fde9b6] border-[#fde9b6] scale-105' 
                  : 'text-[#a5d6a7] border-transparent opacity-70 hover:opacity-100 hover:text-[#c8e6c9] hover:border-[#81c784]/30'
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <main className="relative z-10 min-h-[50vh] flex-grow">
        {activeSection && (
          <MenuSection
            key={activeSection.id}
            section={activeSection}
            onImageClick={setSelectedImage}
          />
        )}
      </main>

      <Footer />

      <ImageModal 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
};

export default App;