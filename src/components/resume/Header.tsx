import { Mail, Phone, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero.primary/90 to-hero.primary opacity-95"></div>
      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            ONKAR AGNIHOTRI
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 9764800549</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>agnihotri.onkar@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <a 
                href="https://www.linkedin.com/in/onkar-agnihotri-8610a32a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
    </div>
  );
};

export default Header;