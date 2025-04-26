import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to book? Reach out to our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-playfair mb-6">Send Us a <span className="text-primary">Message</span></h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and one of our team members will get back to you as soon as possible. We look forward to hearing from you!
              </p>
              
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h2 className="text-3xl font-bold font-playfair mb-6">Get in <span className="text-primary">Touch</span></h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold font-playfair mb-2">Our Location</h3>
                      <p className="text-gray-700">
                        123 Beale Street<br />
                        Memphis, TN 38103<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold font-playfair mb-2">Phone Numbers</h3>
                      <p className="text-gray-700">
                        Bookings: <a href="tel:901-555-1234" className="hover:text-primary">901-555-1234</a><br />
                        Customer Service: <a href="tel:901-555-5678" className="hover:text-primary">901-555-5678</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold font-playfair mb-2">Email Address</h3>
                      <p className="text-gray-700">
                        Bookings: <a href="mailto:bookings@limoservicememphis.com" className="hover:text-primary">bookings@limoservicememphis.com</a><br />
                        Info: <a href="mailto:info@limoservicememphis.com" className="hover:text-primary">info@limoservicememphis.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold font-playfair mb-2">Business Hours</h3>
                      <p className="text-gray-700">
                        24/7 Service Available<br />
                        Office Hours: Mon-Fri: 9am-6pm<br />
                        Weekends: 10am-4pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold font-playfair mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:bg-primary/80 transition" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:bg-primary/80 transition" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:bg-primary/80 transition" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:bg-primary/80 transition" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Find <span className="text-primary">Us</span></h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Located in the heart of downtown Memphis, we're easily accessible and ready to serve your transportation needs.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.9727240523717!2d-90.05209738474945!3d35.138837780324784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e976aca1ce1%3A0x901d034c7ba45c!2sBeale%20St%2C%20Memphis%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1628525798417!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="LimoServiceMemphis location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions. If you don't see your question here, please contact us directly.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">How far in advance should I book?</h3>
                <p className="text-gray-700">
                  We recommend booking at least 1-2 weeks in advance for standard services and 1-3 months for special events such as weddings or proms. However, we can often accommodate last-minute requests depending on availability.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  Cancellations made more than 48 hours before the scheduled service receive a full refund minus a small processing fee. Cancellations within 48 hours are subject to a 50% fee. Cancellations within 24 hours or no-shows are charged the full amount.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Do you provide services outside of Memphis?</h3>
                <p className="text-gray-700">
                  Yes, we serve the entire Memphis metropolitan area including suburbs and surrounding counties. We also offer longer distance services to locations such as Nashville, Little Rock, and Oxford. Additional fees may apply based on distance.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Is gratuity included in the price?</h3>
                <p className="text-gray-700">
                  A standard 20% gratuity is added to all reservations. This ensures our chauffeurs receive appropriate compensation for their professional service. Additional tips for exceptional service are always appreciated but never expected.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I request a specific chauffeur?</h3>
                <p className="text-gray-700">
                  Yes, if you've had a positive experience with one of our chauffeurs, you can request them for your next service. While we cannot guarantee availability, we will make every effort to accommodate your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Experience <span className="text-primary">Luxury Transportation?</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Book your premium Memphis transportation service today and travel in comfort, style, and security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-hover-effect">
                <Link href="/#book-now">Book Now</Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
              >
                <a href="tel:901-555-1234">Call 901-555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
