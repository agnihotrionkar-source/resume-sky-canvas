import Header from "@/components/resume/Header";
import ProfessionalSummary from "@/components/resume/ProfessionalSummary";
import AreasOfExpertise from "@/components/resume/AreasOfExpertise";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProfessionalSummary />
      <AreasOfExpertise />
      <Experience />
      <Education />
      
      {/* Footer */}
      <footer className="bg-hero.primary text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg">
            Thank you for viewing my resume. I look forward to connecting with you!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;