import React, { useEffect, useRef, useState } from "react";

const ADCard = ({ slides = [], interval = 5000 }) => {
  const slideCount = Array.isArray(slides) ? slides.length : 0;
  const extendedSlides = slideCount > 0 ? [...slides, slides[0]] : [];
  const extendedCount = extendedSlides.length;

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (slideCount <= 1) return;
    startAuto();
    return stopAuto;
  }, [slideCount, interval]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, interval);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleTransitionEnd = () => {
    if (index === slideCount) {
      setAnimating(false);
      requestAnimationFrame(() => {
        setIndex(0);
        requestAnimationFrame(() => setAnimating(true));
      });
    }
  };

  if (slideCount === 0) return null;

  const trackWidth = `${extendedCount * 100}%`;
  const translatePercent = (index * 100) / extendedCount;
  const trackStyle = {
    width: trackWidth,
    transform: `translateX(-${translatePercent}%)`,
    transition: animating ? "transform 700ms ease-in-out" : "none",
  };

  return (
    <div
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      className="relative flex-1 overflow-hidden bg-black p-8 text-white"
      role="region"
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((s, i) => (
            <div
              key={s.id ?? i}
              role="group"
              style={{ width: `${100 / extendedCount}%` }}
              className="flex flex-shrink-0 items-center justify-between gap-6 px-4"
            >
              <div className="w-1/2 max-w-[620px] flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  {s.badge ? (
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs">
                      {s.badge}
                    </span>
                  ) : null}
                  {s.kicker ? <span>{s.kicker}</span> : null}
                </div>

                <h2 className="text-4xl font-bold leading-snug">
                  {s.titleLines?.map((l, idx) => (
                    <React.Fragment key={idx}>
                      {l}
                      {idx < (s.titleLines?.length ?? 0) - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>

                <a
                  href={s.ctaHref || "#"}
                  className="inline-flex items-center gap-2 font-medium underline underline-offset-4 hover:text-gray-300"
                >
                  {s.ctaText || "Shop Now"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              <div className="w-1/2 flex items-center justify-end">
                <img
                  alt={s.alt || `slide-${i}`}
                  src={s.img}
                  className="h-[250px] w-[300px] object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full focus:outline-none ${
              i === index % slideCount ? "bg-red-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ADCard;
