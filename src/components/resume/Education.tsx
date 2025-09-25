import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="bg-hero.secondary/30 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-hero.secondary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-hero.primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-hero.primary">
                  Bachelor of Computer Science
                </h4>
                <p className="text-muted-foreground">
                  S.P. College, University of Pune
                </p>
                <p className="text-muted-foreground">
                  Pune • 2011
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-hero.secondary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-hero.primary rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-hero.primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Six Sigma Green Belt Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;