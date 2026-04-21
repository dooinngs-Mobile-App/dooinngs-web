interface AvailabilityTagsProps {
  homeService: boolean;
  walkIn: boolean;
}

const AvailabilityTags = ({ homeService, walkIn }: AvailabilityTagsProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
        <span>🏠</span>
        <span className="text-sm font-medium">Home Service</span>
        {homeService ? (
          <span className="text-green-500">✓</span>
        ) : (
          <span className="text-red-500">✗</span>
        )}
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
        <span>🚶</span>
        <span className="text-sm font-medium">Walk-In</span>
        {walkIn ? (
          <span className="text-green-500">✓</span>
        ) : (
          <span className="text-red-500">✗</span>
        )}
      </div>
    </div>
  );
};

export default AvailabilityTags;
