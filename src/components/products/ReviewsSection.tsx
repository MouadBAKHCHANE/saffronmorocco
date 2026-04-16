"use client";

import FadeUp from "@/components/animations/FadeUp";

const REVIEWS = [
  {
    name: "Sophie L.",
    location: "Paris, France",
    rating: 5,
    text: "The most aromatic saffron I have ever used. You can taste the difference in every dish. The packaging is exquisite too.",
    date: "March 2026",
  },
  {
    name: "Ahmed K.",
    location: "Dubai, UAE",
    rating: 5,
    text: "Exceptional quality. The color it gives to my rice is unmatched. I have been buying from iD BAKHCHANE for two years now.",
    date: "February 2026",
  },
  {
    name: "Maria T.",
    location: "Milan, Italy",
    rating: 5,
    text: "As a chef, I am very particular about saffron. This Grade I quality from Taliouine is simply the best available.",
    date: "January 2026",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-icons-outlined text-sm ${
            i < count ? "text-primary" : "text-stone-700"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <div className="space-y-6 md:space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">
            Testimonials
          </p>
          <h3 className="font-headline text-2xl md:text-4xl text-on-surface italic">
            Customer Reviews
          </h3>
        </div>
        <div className="text-right hidden md:block">
          <div className="flex items-center gap-2 justify-end">
            <Stars count={5} />
            <span className="text-sm text-on-surface font-bold">5.0</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">Based on {REVIEWS.length} reviews</p>
        </div>
      </div>

      {/* Reviews - horizontal scroll on mobile, grid on desktop */}
      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0">
        {REVIEWS.map((review, i) => (
          <FadeUp key={review.name} delay={i * 0.1}>
            <div className="bg-surface-container-low/30 border border-outline-variant/10 p-5 md:p-8 rounded-sm space-y-3 md:space-y-4 h-full min-w-[280px] md:min-w-0">
              <Stars count={review.rating} />
              <p className="text-on-surface-variant text-sm leading-relaxed font-light italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-outline-variant/10">
                <p className="text-on-surface text-sm font-bold">{review.name}</p>
                <p className="text-stone-500 text-xs">{review.location} &middot; {review.date}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
