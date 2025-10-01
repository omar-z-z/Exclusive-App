const SectionCategory = ({ children }) => (
    <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <span className="text-[#DB4444] font-semibold">{children}</span>
    </div>
)

export default SectionCategory;