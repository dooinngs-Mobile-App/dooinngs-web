import { Review } from "@/types/bookings";

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">⭐</span>
        <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{review.name}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.time}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
