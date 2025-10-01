const Star = ({ type = 'full' }) => {
    const starPath = "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z";
    return (
         <div className="relative w-5 h-5">
            <svg className="w-5 h-5 text-gray-300 absolute inset-0" fill="currentColor" viewBox="0 0 20 20">
                <path d={starPath} />
            </svg>
            <div className="absolute inset-0 overflow-hidden" style={{ width: type === 'full' ? '100%' : type === 'half' ? '50%' : '0%' }}>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d={starPath} />
                </svg>
            </div>
        </div>
    )
};

const StarRating = ({ rating, count }) => {
    const validRating = typeof rating === 'number' ? Math.max(0, Math.min(5, rating)) : 0;

    return (
        <div className="flex items-center gap-2">
            <div className="flex">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    let type = 'empty';
                    if (starValue <= validRating) {
                        type = 'full';
                    } else if (starValue - 0.5 <= validRating) {
                        type = 'half';
                    }
                    return <Star key={index} type={type} />;
                })}
            </div>
            <span className="text-gray-500 text-sm font-semibold">({count})</span>
        </div>
    );
};;

export default StarRating;