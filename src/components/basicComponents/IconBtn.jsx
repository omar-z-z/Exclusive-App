const IconBtn = ({ icon: Icon, label }) => (
  <button aria-label={label} className="grid h-9 w-9 place-items-center rounded-md border border-gray-200 hover:bg-gray-50">
    <Icon className="h-5 w-5" />
  </button>
);

export default IconBtn;