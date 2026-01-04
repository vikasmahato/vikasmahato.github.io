import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
import { generateResumePDF } from "@/utils/generatePDF";

const ResumePage = () => {
  const handleDownload = () => {
    generateResumePDF();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 pb-12">
        <Resume onDownload={handleDownload} />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;

