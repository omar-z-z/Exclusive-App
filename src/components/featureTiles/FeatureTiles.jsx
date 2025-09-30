import Badge from "../basicComponents/Badge";
import Section from "../basicComponents/Section";
import Button from "../basicComponents/Button";
import Card from "../basicComponents/Card";

const FeatureTiles = () => (
  <Section title={(<div className="flex items-center gap-3"><Badge>Featured</Badge><span className="text-gray-900">New Arrival</span></div>)}>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="relative overflow-hidden bg-gray-900 p-6 text-white">
        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold">PlayStation 5</h3>
          <p className="mt-2 text-sm text-gray-300">Black and White version of the PS5 coming out on sale.</p>
          <Button variant="dark" className="mt-4">Shop Now</Button>
        </div>
        <img alt="PS5" src="https://images.unsplash.com/photo-1606813907291-76a360cfcc56?q=80&w=1200&auto=format&fit=crop" className="absolute right-0 top-1/2 hidden h-[260px] -translate-y-1/2 md:block" />
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Card className="relative overflow-hidden bg-gray-100 p-6">
          <div className="max-w-[220px]">
            <h3 className="text-lg font-semibold">Women’s Collections</h3>
            <p className="mt-1 text-sm text-gray-600">Featured woman collections that give you another vibe.</p>
            <Button variant="ghost" className="mt-2">Shop Now</Button>
          </div>
          <img alt="Women" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" className="absolute -right-6 bottom-0 h-[180px] object-cover" />
        </Card>
        <div className="grid grid-rows-2 gap-4">
          <Card className="relative overflow-hidden bg-gray-100 p-6">
            <h3 className="text-lg font-semibold">Speakers</h3>
            <p className="mt-1 text-sm text-gray-600">Amazon wireless speakers</p>
            <Button variant="ghost" className="mt-2">Shop Now</Button>
            <img alt="Speaker" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop" className="absolute right-3 bottom-0 h-[120px]" />
          </Card>
          <Card className="relative overflow-hidden bg-gray-100 p-6">
            <h3 className="text-lg font-semibold">Perfume</h3>
            <p className="mt-1 text-sm text-gray-600">GUCCI INTENSE OUD EDP</p>
            <Button variant="ghost" className="mt-2">Shop Now</Button>
            <img alt="Perfume" src="https://images.unsplash.com/photo-1592945403244-b3fb9b62c3a0?q=80&w=1200&auto=format&fit=crop" className="absolute right-3 bottom-0 h-[120px]" />
          </Card>
        </div>
      </div>
    </div>
  </Section>
);

export default FeatureTiles;