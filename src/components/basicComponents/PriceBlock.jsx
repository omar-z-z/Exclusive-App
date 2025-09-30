import Badge from "./Badge";

const PriceBlock = ({ price, strike, discount }) => (
  <div className="mt-2 flex items-center gap-2">
    <div className="text-lg font-semibold text-gray-900">${price}</div>
    {strike ? <div className="text-sm text-gray-400 line-through">${strike}</div> : null}
    {discount ? <Badge>-{discount}%</Badge> : null}
  </div>
);

export default PriceBlock;