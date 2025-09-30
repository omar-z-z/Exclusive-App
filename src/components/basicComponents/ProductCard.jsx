import Card from "./Card"
import Badge from "./Badge"
import Button from "./Button"
import PriceBlock from "./PriceBlock"

const ProductCard = ({ item, withAdd = false }) => (
  <Card className="group overflow-hidden">
    <div className="relative bg-gray-50 p-6">
      {item.discount ? (
        <div className="absolute left-3 top-3"><Badge>-{item.discount}%</Badge></div>
      ) : null}
      {item.badge ? (
        <div className="absolute left-3 top-3"><Badge color="bg-green-600">{item.badge}</Badge></div>
      ) : null}
      <img alt={item.title} src={item.img} className="mx-auto h-40 w-auto object-contain"/>
      {withAdd ? (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gray-900/90 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <Button className="w-full" variant="primary">Add To Cart</Button>
        </div>
      ) : null}
    </div>
    <div className="px-4 pb-4 pt-2">
      <div className="truncate text-sm font-medium text-gray-900">{item.title}</div>
      <PriceBlock price={item.price} strike={item.strike} discount={item.discount} />
      {!withAdd ? <Button className="mt-3 w-full" variant="outline">Add To Cart</Button> : null}
    </div>
  </Card>
);

export default ProductCard;