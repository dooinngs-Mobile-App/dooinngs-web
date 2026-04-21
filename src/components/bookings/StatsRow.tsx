interface StatsRowProps {
  priceRange: string;
  completedJobs: number;
  rating: number;
}

const StatsRow = ({ priceRange, completedJobs, rating }: StatsRowProps) => {
  return (
    <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-lg">💰</span>
        <div>
          <p className="font-semibold text-gray-900">{priceRange}</p>
          <p className="text-sm text-gray-500">Service cost</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">💼</span>
        <div>
          <p className="font-semibold text-gray-900">{completedJobs}</p>
          <p className="text-sm text-gray-500">Completed jobs</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">⭐</span>
        <div>
          <p className="font-semibold text-gray-900">{rating}</p>
          <p className="text-sm text-gray-500">Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
