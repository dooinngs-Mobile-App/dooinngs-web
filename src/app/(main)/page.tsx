import ArtisansSection2 from "@/components/sections/ArtisansSection2";
import ArtisansSections from "@/components/sections/ArtisansSections";
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
      <ArtisansSections />
      <BookService />
      <ArtisansSection2 />
      <CtaSection />
      <PaymentPartnershipSection />
      <Footer />
    </div>
  );
}
