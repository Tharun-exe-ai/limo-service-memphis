import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  Car, 
  Heart, 
  MapPin 
} from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              About <span className="text-primary">LimoServiceMemphis</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Memphis's premier luxury transportation provider with a commitment to excellence and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Our <span className="text-primary">Story</span></h2>
              <p className="text-lg text-gray-700 mb-5">
                Founded in 2010, LimoServiceMemphis began with a vision to transform luxury transportation in Memphis. What started with a single limousine and a passion for exceptional service has grown into a premier fleet of luxury vehicles serving thousands of satisfied clients throughout the Mid-South region.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                For over a decade, we've been the trusted transportation partner for corporate executives, wedding parties, tourists, and locals seeking a premium travel experience. Our deep understanding of Memphis and commitment to personalized service has established us as the city's leading luxury transportation provider.
              </p>
              <p className="text-lg text-gray-700">
                Today, LimoServiceMemphis continues to build on its reputation for reliability, professionalism, and attention to detail, setting the standard for luxury ground transportation in Memphis and beyond.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                  alt="Luxury fleet of LimoServiceMemphis" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold font-playfair">EST. 2010</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Core <span className="text-primary">Values</span></h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                These principles guide every aspect of our business and ensure we deliver an exceptional experience with every ride.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="text-primary text-4xl mb-4">
                  <Award />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We strive for perfection in every aspect of our service, from vehicle maintenance to customer interactions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="text-primary text-4xl mb-4">
                  <Clock />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-700">
                  Punctuality and dependability are non-negotiable commitments we make to every client, every time.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="text-primary text-4xl mb-4">
                  <ShieldCheck />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety</h3>
                <p className="text-gray-700">
                  The wellbeing of our clients is our top priority, reflected in our maintenance protocols and chauffeur training.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="text-primary text-4xl mb-4">
                  <UserCheck />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We conduct business with honesty, transparency, and the highest ethical standards in all our dealings.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Meet Our <span className="text-primary">Team</span></h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our success is driven by our dedicated team of professionals committed to providing an exceptional experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Michael Williams, Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Michael Williams</h3>
                  <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  <p className="text-gray-700">
                    With over 20 years in the luxury transportation industry, Michael founded LimoServiceMemphis with a vision to provide unparalleled service excellence.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Jennifer Davis, Operations Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Jennifer Davis</h3>
                  <p className="text-primary font-medium mb-4">Operations Director</p>
                  <p className="text-gray-700">
                    Jennifer oversees our daily operations, ensuring seamless coordination and maintaining our high standards of service delivery.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Robert Johnson, Head Chauffeur" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Robert Johnson</h3>
                  <p className="text-primary font-medium mb-4">Head Chauffeur</p>
                  <p className="text-gray-700">
                    With extensive knowledge of Memphis and exceptional customer service skills, Robert leads our team of professional chauffeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Choose <span className="text-primary">Us</span></h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Experience the LimoServiceMemphis difference that has made us the preferred choice for luxury transportation in Memphis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-2xl mt-1">
                  <ThumbsUp />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
                  <p className="text-gray-700">
                    We go beyond transportation to create memorable experiences, anticipating needs and exceeding expectations at every turn. Our commitment to service excellence is reflected in our 98% client satisfaction rate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-2xl mt-1">
                  <Car />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
                  <p className="text-gray-700">
                    Our meticulously maintained vehicles represent the pinnacle of luxury, comfort, and style. Each vehicle undergoes rigorous quality and safety inspections before every service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-2xl mt-1">
                  <UserCheck />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Professional Chauffeurs</h3>
                  <p className="text-gray-700">
                    Our chauffeurs are more than drivers – they're hospitality professionals who undergo extensive training in safety, etiquette, and customer service to ensure your journey is comfortable and secure.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-2xl mt-1">
                  <MapPin />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    With deep knowledge of Memphis and surrounding areas, we provide seamless transportation with optimized routes, avoiding traffic and ensuring punctual arrivals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Service <span className="text-primary">Areas</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We proudly serve Memphis and the surrounding areas with our premium transportation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-center">Memphis Metro Area</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Downtown Memphis</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Midtown</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>East Memphis</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Cordova</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Germantown</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Collierville</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-center">Surrounding Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Bartlett</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Arlington</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Lakeland</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Olive Branch, MS</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Southaven, MS</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>West Memphis, AR</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-center">Extended Service</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Nashville, TN (3 hours)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Little Rock, AR (2 hours)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Oxford, MS (1 hour)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Jackson, MS (3 hours)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>St. Louis, MO (4 hours)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span>Custom destinations available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-hover-effect">
              <Link href="/contact">Inquire About Your Location</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Experience the <span className="text-primary">Difference</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to experience Memphis's finest luxury transportation service? Book your ride today and discover why we're the preferred choice for discerning clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-hover-effect">
                <Link href="/#book-now">Book Your Ride</Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
