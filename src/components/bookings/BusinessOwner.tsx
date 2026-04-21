interface BusinessOwnerProps {
  name: string;
  title: string;
  avatar?: string;
}

const BusinessOwner = ({ name, title, avatar }: BusinessOwnerProps) => {
  return (
    <div className="flex items-center gap-4 py-4 border-t border-gray-100">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
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
        )}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default BusinessOwner;
