import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CaseStudyLayoutProps {
  children: ReactNode;
  accentColor: string;
  bgColor?: string;
}

const CaseStudyLayout = ({ children, accentColor, bgColor = "hsl(0 0% 5%)" }: CaseStudyLayoutProps) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor }}>
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-24 px-6">
          <div className="max-w-5xl mx-auto mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-body transition-colors hover:opacity-80"
              style={{ color: accentColor }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </div>
        </div>
        {children}
        <Footer />
      </motion.div>
    </div>
  );
};

export default CaseStudyLayout;
