import categories from "../data/categories.js";

const CategorySidebar = () => (
  <aside className="hidden w-64 shrink-0 border-r border-gray-200 md:block">
    <ul className="space-y-3 py-6 text-sm">
      {categories.map((c) => (
        <li key={c} className="flex items-center justify-between px-6 text-gray-700">
          <span>{c}</span>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50"><path d="M7 5l5 5-5 5"/></svg>
        </li>
      ))}
    </ul>
  </aside>
);

export default CategorySidebar;