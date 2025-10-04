import FeatureTile from "./FeatureTile";
import MainSection from "../basicComponents/MainSection";

const FeatureTiles = () => (
  <MainSection head="Featured" title="New Arrival">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:h-[600px]">
      
      <FeatureTile
        className=""
        title="PlayStation 5"
        description="Black and White version of the PS5 coming out on sale."
      >
        <img
          alt="PS5"
          src="https://images.unsplash.com/photo-1672772685267-04b983099b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMHBzNXxlbnwwfHwwfHx8MA%3D%3D"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
      </FeatureTile>

    <div className="grid grid-rows-1 sm:grid-rows-1 md:grid-rows-2 gap-4">
        <FeatureTile
          className=""
          title="Women’s Collections"
          description="Featured woman collections that give you another vibe."
        >
          <img
            alt="Women"
            src="https://images.unsplash.com/photo-1749016750415-d0952eb0a221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdvbWVuJUUyJTgwJTk5cyUyMENvbGxlY3Rpb25zfGVufDB8fDB8fHww"
            className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-80"
          />
        </FeatureTile>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureTile title="Speakers" description="Amazon wireless speakers">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            />
          </FeatureTile>

          <FeatureTile title="Perfume" description="PRADA INTENSE OUD EDP">
            <img
              alt="Perfume"
              src="https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            />
          </FeatureTile>
        </div>
      </div>
    </div>
  </MainSection>
);

export default FeatureTiles;
