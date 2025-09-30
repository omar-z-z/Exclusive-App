import Container from "../basicComponents/Container";

const TopBanner = () => (
  <div className="w-full bg-black text-white">
    <Container className="flex items-center justify-center gap-3 py-3 text-sm">
      <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
      <a className="font-semibold underline" href="#">ShopNow</a>
      <div className="ml-auto flex items-center gap-2">
        <span>English</span>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80"><path d="M5 7l5 5 5-5"/></svg>
      </div>
    </Container>
  </div>
);

export default TopBanner;