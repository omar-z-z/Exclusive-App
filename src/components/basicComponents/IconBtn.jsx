const IconBtn = ({ icon: Icon, label }) => (
  <button aria-label={label} className="grid h-8 w-8 bg-gray-200 place-items-center rounded-full hover:bg-gray-100">
    <Icon className="h-5 w-5" />
  </button>
);

export default IconBtn;