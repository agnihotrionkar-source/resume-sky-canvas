import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "VP - Product",
      period: "Apr 2021 – Present",
      company: "Vay Network Services Pvt. Ltd., Pune",
      deliverables: [
        "Collaborating with cross-functional teams such as engineering, design, sales, and marketing to ensure successful product development and launch.",
        "Managing the entire product life cycle (LMS and Front-End Platform for SCF), from ideation to launch and post-launch evaluation for SCF Loan Management System."
      ]
    },
    {
      title: "Manager – Product and Operations",
      period: "June 2017 – 2021",
      company: "Vay Network Services Pvt. Ltd., Pune",
      deliverables: [
        "Analyzing product performance and user engagement metrics to make data-driven decisions about product development and improvements.",
        "Conducted User Acceptance Testing (UAT); supporting clients during Testing Weeks to build and strengthen their confidence in products.",
        "Developing and prioritizing product features based on customer feedback, market trends, and business objectives.",
        "Headed the entire operations for SCF business and GST Business for the PAN India region."
      ]
    },
    {
      title: "Sr Associate- Business Operations",
      period: "May 2015 – 2017",
      company: "Vay Network Services Pvt. Ltd., Pune",
      deliverables: [
        "Processing various types of transactions related to Trade Finance in operational capacity while providing high level of customer service knowledge and increase product penetration/ utilization of trade products.",
        "Monitoring the overall functioning of processes, identifying improvement areas, and implementing adequate measures to maximize customer satisfaction level.",
        "Lead strategic projects to enhance and improve current products, quality, systems, and features."
      ]
    },
    {
      title: "Associate- Business Operations",
      period: "May 2013 – Mar 2015",
      company: "Electra Card Services Pvt Ltd, Pune",
      deliverables: [
        "Performed end of day activities for Master, Visa & Repay settlement.",
        "Managed the merchant data and disputes (processing of charge-back, retrieval requests) of visa and master for different clients Outgoing files. Completed the reconciliation of settlements.",
        "Executed UAT testing as and when required by operations."
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-hero.secondary/30 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-hero.primary mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Deliverables</h4>
              <ul className="space-y-3">
                {exp.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hero.primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;