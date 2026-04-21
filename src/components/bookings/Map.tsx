interface MapProps {
  latitude: number;
  longitude: number;
  address?: string;
  businessName?: string;
}

const Map = ({ latitude, longitude }: MapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=16`;

  return (
    <iframe
      src={src}
      className="w-full h-full rounded-xl border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
