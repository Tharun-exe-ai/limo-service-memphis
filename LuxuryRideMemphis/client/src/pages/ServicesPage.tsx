import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Briefcase, 
  Heart, 
  GlassWater, 
  Moon, 
  Map, 
  CheckCircle2,
  Building,
  Music,
  GraduationCap,
  Utensils
} from "lucide-react";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: "airport",
      title: "Airport Transfers",
      description: "Start and end your journey with our reliable airport transfer service. We offer timely pickups and drop-offs to and from Memphis International Airport, ensuring a stress-free travel experience. Our professional chauffeurs monitor flight schedules for delays, allowing plenty of time for you to reach your destination.",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1495285840689-5d55208a007e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Flight monitoring for delays",
        "Meet and greet service at arrivals",
        "Complimentary 30-minute wait time for domestic flights",
        "Luggage assistance",
        "Bottled water and amenities"
      ],
      recommended: "Luxury Sedan or Executive SUV"
    },
    {
      id: "corporate",
      title: "Corporate Travel",
      description: "Make a lasting impression with our premium corporate transportation service. We understand the importance of punctuality and professionalism in business. Whether you need transportation for executives, clients, or event attendees, our service provides a seamless experience that reflects your company's standards.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1560624052-5e1415b6e14b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Professional, suited chauffeurs",
        "Corporate accounts available",
        "Multiple pickup options for team transportation",
        "Complimentary Wi-Fi",
        "Confidentiality assured"
      ],
      recommended: "Executive SUV or Luxury Sedan"
    },
    {
      id: "wedding",
      title: "Wedding Transportation",
      description: "Your special day deserves extraordinary transportation. Our wedding service ensures the bridal party and guests arrive in style and on time. We coordinate with your wedding planner to ensure flawless logistics, allowing you to focus on the celebration while we handle the transportation details.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Decorated vehicles upon request",
        "Red carpet service",
        "Champagne service available",
        "Photo stop coordination",
        "Group transportation for guests"
      ],
      recommended: "Stretch Limousine or multiple vehicles"
    },
    {
      id: "events",
      title: "Special Events",
      description: "Elevate your special occasions with our luxury transportation service. From proms and anniversaries to birthdays and retirement parties, we provide elegant and reliable transportation that makes your celebration even more memorable. Arrive together, leave together, and enjoy every moment in between.",
      icon: GlassWater,
      image: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Multi-stop service available",
        "Red carpet entry",
        "Group accommodations",
        "Custom routes",
        "Extended service hours"
      ],
      recommended: "Stretch Limousine or Executive SUV"
    },
    {
      id: "night-out",
      title: "Night Out",
      description: "Experience Memphis nightlife without the hassle of driving or parking. Our night out service is perfect for dinner reservations, concert attendance, club hopping, or celebrating special occasions. Enjoy the evening with friends while our professional chauffeur ensures a safe and luxurious transportation experience.",
      icon: Moon,
      image: "https://images.unsplash.com/photo-1505815758152-0fc26dccb5c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Door-to-door service",
        "Multiple venue stops",
        "Wait time between venues",
        "Safe, prompt return home",
        "Privacy and discretion"
      ],
      recommended: "Luxury Sedan or Stretch Limousine"
    },
    {
      id: "tours",
      title: "Memphis Tours",
      description: "Discover the rich culture and history of Memphis with our custom city tours. Visit iconic landmarks like Beale Street, Graceland, Sun Studio, and the National Civil Rights Museum. Our knowledgeable chauffeurs provide insights about the city while you enjoy the comfort of luxury transportation between destinations.",
      icon: Map,
      image: "https://images.unsplash.com/photo-1564686444178-3c7c08dde525?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Customizable itineraries",
        "Local knowledge and recommendations",
        "Convenient door-to-door service",
        "Flexible duration options",
        "Photo opportunity stops"
      ],
      recommended: "Executive SUV or Luxury Sedan"
    },
    {
      id: "concerts",
      title: "Concert & Theater",
      description: "Enjoy Memphis's vibrant music and arts scene with our specialized transportation service for concerts, theater performances, and cultural events. Avoid the stress of parking and traffic while arriving in style to venues like the Orpheum Theatre, FedExForum, or Mud Island Amphitheater.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "VIP entrance arrival when possible",
        "Prompt pickup after the show",
        "Pre/post show dinner transportation",
        "Group accommodation",
        "Flexible scheduling"
      ],
      recommended: "Luxury Sedan or Executive SUV"
    },
    {
      id: "graduation",
      title: "Graduation Service",
      description: "Celebrate academic achievements with our graduation transportation service. Whether it's high school, college, or graduate school, we provide elegant transportation for graduates and their families to ceremonies, photo sessions, and celebration dinners across Memphis.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Campus drop-off and pickup",
        "Multi-location service",
        "Family group accommodation",
        "Photo opportunity transportation",
        "Celebration venue transfers"
      ],
      recommended: "Executive SUV or Stretch Limousine"
    },
    {
      id: "dining",
      title: "Fine Dining",
      description: "Enhance your dining experience in Memphis with our restaurant transportation service. We'll take you to and from the city's finest restaurants like Flight, Folk's Folly, or The Capital Grille, allowing you to enjoy the evening without concerns about driving or parking.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Reservations coordination available",
        "Multiple restaurant stops",
        "Wine tour options",
        "Birthday/anniversary arrangements",
        "Late-night service"
      ],
      recommended: "Luxury Sedan"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.id === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience Memphis in style with our comprehensive range of luxury transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Button 
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "" : "border-primary text-primary hover:bg-primary hover:text-secondary"}
            >
              All Services
            </Button>
            {services.map(service => (
              <Button 
                key={service.id}
                variant={activeTab === service.id ? "default" : "outline"}
                onClick={() => setActiveTab(service.id)}
                className={activeTab === service.id ? "" : "border-primary text-primary hover:bg-primary hover:text-secondary"}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    style={{ maxHeight: "500px" }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <service.icon className="text-primary mr-3 h-8 w-8" />
                    <h2 className="text-3xl font-bold font-playfair">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                      Service Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold">Recommended Vehicle:</h3>
                    <p className="text-primary font-medium">{service.recommended}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="btn-hover-effect">
                      <Link href="/#book-now">Book This Service</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
                    >
                      <Link href="/fleet">View Our Fleet</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Custom <span className="text-primary">Services</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don't see exactly what you need? We specialize in creating customized transportation solutions for any occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Building className="text-primary mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold">Corporate Packages</h3>
              </div>
              <p className="text-gray-700">
                Customized solutions for businesses including employee shuttles, executive transportation, and corporate event services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <GlassWater className="text-primary mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold">Multi-Day Events</h3>
              </div>
              <p className="text-gray-700">
                Comprehensive transportation plans for conventions, festivals, or multi-day celebrations requiring consistent service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Map className="text-primary mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold">Out-of-Town Trips</h3>
              </div>
              <p className="text-gray-700">
                Long-distance transportation to Nashville, Little Rock, or other destinations within driving distance of Memphis.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="btn-hover-effect">
              <Link href="/contact">Request Custom Service</Link>
            </Button>
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

export default ServicesPage;
