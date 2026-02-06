import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import InterviewDemo from "@/components/landing/InterviewDemo";
import SmartFeedback from "@/components/landing/SmartFeedback";
import WhyChoose from "@/components/landing/WhyChoose";
import HowItWorks from "@/components/landing/HowItWorks";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-violet-500/30">
      <Navbar />
      <HeroSection />
      <InterviewDemo />
      <SmartFeedback />
      <WhyChoose />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
