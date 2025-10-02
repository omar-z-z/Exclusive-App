import Button from "../basicComponents/Button";
import Card from "../basicComponents/Card";
import MainSection from "../basicComponents/MainSection";
import FeatureTile from "./FeatureTile";

const FeatureTiles = () => (
  <MainSection head="Featured" title="New Arrival">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* <Card className="relative overflow-hidden p-6">
        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold">PlayStation 5</h3>
          <p className="mt-2 text-sm text-gray-300">Black and White version of the PS5 coming out on sale.</p>
          <Button variant="dark" className="mt-4">Shop Now</Button>
        </div>
      </Card> */}
      <FeatureTile className="max-w-sm" title="PlayStation 5" description="Black and White version of the PS5 coming out on sale.">
        <img
          alt="PS5"
          src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
          className="z-30 absolute right-5 top-1/2 hidden h-[260px] -translate-y-1/2 md:block"
        />
      </FeatureTile>
      <div className="grid grid-rows-2 gap-4">
        {/* <Card className="relative overflow-hidden p-6">
          <div className="max-w-[220px]">
            <h3 className="text-lg font-semibold">Women’s Collections</h3>
            <p className="mt-1 text-sm text-gray-300">Featured woman collections that give you another vibe.</p>
            <Button variant="dark" className="mt-2">Shop Now</Button>
          </div>
        </Card> */}
        <FeatureTile className="max-w-[220]" title="Women’s Collections" description="Featured woman collections that give you another vibe.">
          <img
            alt="Women"
            src="https://images.unsplash.com/photo-1749016750415-d0952eb0a221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdvbWVuJUUyJTgwJTk5cyUyMENvbGxlY3Rpb25zfGVufDB8fDB8fHww"
            className="z-30 absolute -right-6 bottom-0 h-[180px] object-cover"
          />
        </FeatureTile>
        <div className="grid grid-cols-2 gap-4">
          {/* <Card className="relative overflow-hidden p-6">
            <h3 className="text-lg font-semibold">Speakers</h3>
            <p className="mt-1 text-sm text-gray-300">
              Amazon wireless speakers
            </p>
            <Button variant="dark" className="mt-2">
              Shop Now
            </Button>
          </Card>
          <Card className="relative overflow-hidden p-6">
            <h3 className="text-lg font-semibold">Perfume</h3>
            <p className="mt-1 text-sm text-gray-300">GUCCI INTENSE OUD EDP</p>
            <Button variant="dark" className="mt-2">
              Shop Now
            </Button>
          </Card> */}
          <FeatureTile title="Speakers" description="Amazon wireless speakers">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
              className="z-30 absolute right-3 bottom-0 h-[120px]"
            />
          </FeatureTile>
          <FeatureTile title="Perfume" description="GUCCI INTENSE OUD EDP">
            <img
              alt="Perfume"
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
              className="z-30 absolute right-3 bottom-0 h-[120px]"
            />
          </FeatureTile>
        </div>
      </div>
    </div>
  </MainSection>
);

export default FeatureTiles;
