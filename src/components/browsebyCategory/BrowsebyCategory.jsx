import { useState } from 'react'; 
import browseCategories from "../data/browseCategories";
import ArrowButton from "../basicComponents/ArrowButton";
import MainSection from "../basicComponents/MainSection";

const BrowseByCategory = () => {
    const [activeCategory, setActiveCategory] = useState('Camera'); 
    return (
        <MainSection
            head="Categories"
            title="Browse By Category"
            right={
                <div className="md:ml-auto flex gap-2">
                    <ArrowButton direction="left" />
                    <ArrowButton direction="right" />
                </div>
            }
        >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
              {browseCategories.map((c) => {
                const isActive = c.label === activeCategory;
                
                const baseStyles = "flex flex-col items-center justify-center gap-2 rounded-xl border p-6 transition-all duration-150";
                
                const defaultStyles = "border-gray-300 bg-white hover:border-gray-900 text-gray-900";
                
                const activeStyles = "bg-[#DB4444] border-[#DB4444] text-white"; 
                
                return (
                    <button
                        key={c.label}
                        onClick={() => setActiveCategory(c.label)}
                        className={`${baseStyles} ${isActive ? activeStyles : defaultStyles}`}
                    >
                        <div className={`icon-container text-5xl ${isActive ? 'text-white' : 'text-black'}`} aria-hidden>
                            <c.icon />
                        </div>
                        <div className="text-sm font-medium">{c.label}</div>
                    </button>
                );
              })}
            </div>
            <hr className="mt-12 border-gray-200" />
        </MainSection>
    );
};

export default BrowseByCategory;