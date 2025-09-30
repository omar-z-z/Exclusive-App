const exploreProducts = [
  { title: "Breed Dry Dog Food", price: 100 },
  { title: "CANON EOS DSLR Camera", price: 360 },
  { title: "ASUS FHD Gaming Laptop", price: 700 },
  { title: "Curology Product Set", price: 500 },
  { title: "Kids Electric Car", price: 960, badge: "NEW" },
  { title: "Jr. Zoom Soccer Cleats", price: 1160, badge: "NEW" },
  { title: "GP11 Shooter USB Gamepad", price: 660 },
  { title: "Quilted Satin Jacket", price: 660 },
].map((p, i) => ({ ...p, img: `https://picsum.photos/seed/explore_${i}/600/600` }));

export default exploreProducts;