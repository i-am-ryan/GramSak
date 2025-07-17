
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin,
  Shield
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-green text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-industrial-green font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold">GRAMSAK</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              © 2025 Gramsak (Pty) Ltd
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              CIDB & CSD Registered | BBBEE Level 1
            </p>
            <p className="text-white/80 leading-relaxed">
              Built with reliability and compliance at our core
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Phone
                </h4>
                <p className="text-white/80">011 568 2130</p>
                <p className="text-white/80">079 118 2887</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </h4>
                <p className="text-white/80">admin@gramsak.co.za</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Head Office
                </h4>
                <p className="text-white/80">Randburg, Gauteng</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Shield className="mr-2 h-6 w-6" />
              Certifications & Compliance
            </h3>
            <div className="space-y-2">
              {['CIDB Registered', 'NHBRC Certified', 'Department of Labour', 'SABS Approved', 'OSHACT Compliant'].map((cert) => (
                <Badge key={cert} variant="outline" className="border-white/30 text-white block w-fit mb-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Gramsak (Pty) Ltd. All rights reserved. | Est. 2013
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
