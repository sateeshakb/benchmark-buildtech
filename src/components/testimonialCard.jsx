import { Star } from "lucide-react";
import ReviewerProfile from "./reviewerProfile";

export default function TestimonialCard({
  startCount,
  reviewText,
  reviewerName,
}) {
  const stars = [];

  for (let i = 1; i <= startCount; i++) {
    stars.push(<Star key={i} size={25} fill="#eb2f2f" strokeWidth={0} />);
  }
  return (
    <div className="p-8 border-2 border-neutral-100 rounded-lg flex flex-col justify-between gap-3 relative overflow-hidden">
      {/* stars */}
      <div className="flex gap-1 ">{stars}</div>

      {/* review text */}
      <p>{reviewText}</p>

      {/* reviewer profile */}
      <div>
        <ReviewerProfile reviewerName={reviewerName} />
      </div>

      {/* glow */}
      <div className="absolute w-1/2 h-1/2 bottom-[-60%]  left-1/2 translate-x-[-50%] bg-secondary-500 blur-3xl"></div>
    </div>
  );
}
