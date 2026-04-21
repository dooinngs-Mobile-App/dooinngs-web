import Image from "next/image";

interface QRCodeSectionProps {
  providerName: string;
}

const QRCodeSection = ({ providerName }: QRCodeSectionProps) => {
  return (
    <div className="sticky top-24 bg-gray-50 rounded-xl p-6 text-center">
      {/* QR Code */}
      <div className="w-44 h-44 bg-white mx-auto mb-4 rounded-xl flex items-center justify-center p-3 shadow-sm border border-gray-100">
        <Image
          src="/assets/qr-code-black.svg"
          alt="Download Dooinngs App"
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">Scan to download</h3>
      <p className="text-sm text-gray-500">
        Download dooinngs to book services of
      </p>
      <p className="text-sm font-medium text-gray-900">{providerName}</p>
    </div>
  );
};

export default QRCodeSection;
