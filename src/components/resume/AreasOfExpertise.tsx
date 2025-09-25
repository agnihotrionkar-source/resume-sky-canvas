import { Badge } from "@/components/ui/badge";

const AreasOfExpertise = () => {
  const expertiseAreas = [
    "Product Management",
    "Supply Chain Finance",
    "Payment Processing (Acquiring & Issuing)",
    "Client Servicing",
    "Project Management",
    "Multi-Dimensional Leadership",
    "Solution Delivery",
    "Corporate Finance",
    "Process Improvement"
  ];

  return (
    <section className="bg-hero.secondary/30 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Areas of Expertise
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {expertiseAreas.map((area, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-base py-2 px-4 bg-hero.secondary text-foreground hover:bg-hero.secondary/80 transition-colors"
            >
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;