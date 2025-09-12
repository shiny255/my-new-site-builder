import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:shanivarun2003@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the pre-filled message.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">CONTACT</h2>
          <h3 className="text-xl text-muted-foreground">Contact with me</h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            If you have any questions or concerns, please don't hesitate to contact me. 
            I am open to any work opportunities that align with my skills and interests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name:</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email:</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message:</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="cta" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-muted-foreground">shanivarun2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91-83296-11558</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Let's Connect!</h4>
              <p className="text-muted-foreground text-sm">
                I'm always interested in discussing cybersecurity challenges, 
                ethical hacking opportunities, and innovative security solutions. 
                Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;