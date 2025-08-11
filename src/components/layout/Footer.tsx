import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Strategic<span className="text-primary-light">Consult</span>
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transforming businesses through strategic excellence and innovative solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Strategic Planning</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Digital Transformation</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Organizational Development</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Risk Management</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li className="hover:text-primary-light transition-smooth cursor-pointer">About Us</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Our Team</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Careers</li>
              <li className="hover:text-primary-light transition-smooth cursor-pointer">Case Studies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <span>info@strategicconsult.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-light" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70">
              © 2024 StrategicConsult. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <Linkedin className="w-5 h-5 text-background/70 hover:text-primary-light transition-smooth cursor-pointer" />
              <Twitter className="w-5 h-5 text-background/70 hover:text-primary-light transition-smooth cursor-pointer" />
              <Facebook className="w-5 h-5 text-background/70 hover:text-primary-light transition-smooth cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};