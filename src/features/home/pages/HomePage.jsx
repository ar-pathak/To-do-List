import BoardPreviewSection from "../components/BoardPreviewSection";
import FeaturesSection from "../components/FeaturesSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WorkflowSection from "../components/WorkflowSection";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#E0F2FE] to-[#F0F9FF] text-gray-900">


            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-32 left-10 w-[600px] h-[400px] bg-gradient-to-r from-[#93C5FD]/50 to-[#A5B4FC]/40 blur-[120px] rotate-12 opacity-70" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-gradient-to-l from-[#A5F3FC]/40 to-[#C4B5FD]/40 blur-[140px] opacity-70" />
            </div>



            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <Navbar />
                <HeroSection />
                <FeaturesSection />
                <BoardPreviewSection />
                <WorkflowSection />
                <StatsSection />
                <TestimonialsSection />
                <FinalCTASection />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;