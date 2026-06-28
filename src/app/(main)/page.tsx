import ArtisansSection2 from "@/components/sections/ArtisansSection2";
import ArtisansSections from "@/components/sections/ArtisansSections";
import BusinessSection from "@/components/sections/BusinessSection";
import BookService from "@/components/sections/BookService";
import CtaSection from "@/components/sections/CtaSection";
import Header from "@/components/sections/Header";
import PaymentPartnershipSection from "@/components/sections/PaymentSection";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <div className="bg-white">
      <PageLoader />
      <Header />
      <BusinessSection />
      <ArtisansSections />
      <BookService />
      <ArtisansSection2 />
      <CtaSection />
      <PaymentPartnershipSection />
      <Footer />
    </div>
  );
}
