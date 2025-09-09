import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Your message was sent successfully! We will get back to you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        alert("There was a problem sending your message. Please try again later.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">

        <div 
          className="relative py-24 mb-16 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/768c05fc-f27c-4e76-990c-18a06f3d64e0.png')`
          }}
        >
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              Get In Touch
              <span className="block text-gramsak-green">
               Let's Build Together
              </span>
            </h1>
            
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Ready to start your next engineering project? Contact our team for expert consultation and competitive quotes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border-gray-200" required />
                  <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border-gray-200" required />
                </div>
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className="border-gray-200" required />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" className="border-gray-200" />
                <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company/Organization" className="border-gray-200" />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Project Details & Requirements" rows={4} className="border-gray-200" required />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-gray-900">Head Office</h3>
                    <p className="text-gray-600">
                      Boskruin View Office Park, 180 Girdwood Avenue<br />
                      Bush Hill, Randburg, Gauteng
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      📞 011 568 2130<br />
                      📱 079 118 2887
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      📧 admin@gramsak.co.za
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Emergency Services: 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
