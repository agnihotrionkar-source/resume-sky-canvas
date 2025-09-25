const ProfessionalSummary = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Professional Summary
      </h2>
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-hero.secondary/30">
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          <p className="mb-6">
            I am currently working as a <strong className="text-hero.primary">VP - Product</strong> and spearheading the Loan Management System and Front-end transaction processing platform. This system has been successfully rolled out in 3+ private banks/NBFC and 1 PSU bank. Joined the project at its outset and remained involved throughout. As a PM, I have worked closely with cross-functional teams to define the product strategy, roadmap, and features.
          </p>
          <p className="mb-6">
            Implemented all the SCF modules (Dealer Financing, Vendor Financing, Payable financing and Factoring) within a span of 7 months. Current monthly throughput from the product is more than <strong className="text-hero.primary">1500 Crs</strong>. In current role, have worked on the implementation of transaction processing platform for SBI where I am responsible for leading integrations with Banks LMS system for smooth processing of transactions.
          </p>
          <p className="mb-6">
            Vayana is one of the GSP's appointed by Govt of India in 2017, was a core team member of the GST team in Vayana which rolled out GSP when it was launched. Was responsible for looking after the product and setting up the operations team for the GSP. Through different roles at current organisation, acquired a broad knowledge of the corporate banking (Expertise in SCF) landscape, having worked with several banks and financial institutions.
          </p>
          <p>
            Before Vayana, worked in a merchant acquiring and issuing domain for Electra card services (Acquired by Mastercard) as a Business Operations Analyst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;