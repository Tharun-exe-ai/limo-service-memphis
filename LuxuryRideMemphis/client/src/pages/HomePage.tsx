import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Heart, GlassWater, Moon, Map } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import VehicleCard from "@/components/VehicleCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import BookingForm from "@/components/BookingForm";
import { useToast } from "@/hooks/use-toast";

const HomePage = () => {
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookVehicle = () => {
    scrollToSection("book-now");
    toast({
      title: "Ready to book?",
      description: "Fill out the form to get a quote for your luxury transportation needs.",
    });
  };

  const services = [
    {
      title: "Airport Transfers",
      description: "Start and end your journey in comfort with our reliable airport pickup and drop-off service to Memphis International Airport.",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1592853625511-ad0ff4605651?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#airport",
    },
    {
      title: "Corporate Travel",
      description: "Impress clients and provide executive transportation for your team with our punctual and professional corporate service.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1560624052-5e1415b6e14b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#corporate",
    },
    {
      title: "Wedding Service",
      description: "Make your special day unforgettable with our elegant wedding transportation packages for the bridal party and guests.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#wedding",
    },
    {
      title: "Special Events",
      description: "From proms to anniversaries, our luxury transportation ensures your special occasions are celebrated in style.",
      icon: GlassWater,
      image: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#events",
    },
    {
      title: "Night Out",
      description: "Enjoy Memphis nightlife worry-free with our night out service, perfect for dinners, concerts, and club hopping.",
      icon: Moon,
      image: "https://images.unsplash.com/photo-1505815758152-0fc26dccb5c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#night-out",
    },
    {
      title: "Memphis Tours",
      description: "Explore Memphis in luxury with our custom city tours, visiting Beale Street, Graceland, and other iconic landmarks.",
      icon: Map,
      image: "https://images.unsplash.com/photo-1564686444178-3c7c08dde525?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/services#tours",
    },
  ];

  const vehicles = [
    {
      name: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 3 passengers",
      features: [
        "Professional chauffeur",
        "Bottled water and amenities",
        "Climate controlled cabin",
        "Leather interior",
      ],
    },
    {
      name: "Executive SUV",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 6 passengers",
      features: [
        "Professional chauffeur",
        "Extra luggage capacity",
        "Premium entertainment system",
        "Privacy partition available",
      ],
    },
    {
      name: "Stretch Limousine",
      image: "https://images.unsplash.com/photo-1565638304211-15b0a4c1c850?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 10 passengers",
      features: [
        "Professional chauffeur",
        "Bar setup with glassware",
        "Premium sound system",
        "LED lighting and ambiance",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Outstanding service from booking to drop-off. The chauffeur was professional, the car was immaculate, and they made our anniversary celebration truly special.",
      author: "John Davidson",
      initials: "JD",
    },
    {
      quote: "We hired LimoServiceMemphis for our daughter's wedding, and they exceeded our expectations. The vehicles were beautiful, and the service was flawless.",
      author: "Sarah Mitchell",
      initials: "SM",
    },
    {
      quote: "As a business traveler, I rely on consistent, reliable service. LimoServiceMemphis has been my go-to for airport transfers for years. Always on time, always professional.",
      author: "Robert Johnson",
      initials: "RJ",
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "5 Reasons to Choose a Luxury Car Service for Your Next Trip",
      excerpt: "Discover why more travelers are opting for professional chauffeur services over standard transportation options...",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1597172576810-17394de46f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "The Ultimate Guide to Memphis Landmarks: Tour in Style",
      excerpt: "Explore Memphis' rich history and vibrant culture with our curated guide to the city's must-see attractions...",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1564638304161-5da59107efe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Wedding Transportation: Tips for a Stress-Free Experience",
      excerpt: "Planning transportation for your wedding day? Here's everything you need to know to ensure seamless logistics...",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-screen flex items-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1563897539633-7d4814e4c7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
        id="book-now"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair leading-tight mb-6 text-shadow">
                Luxury Transportation <span className="text-primary">in Memphis</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Experience the finest in luxury transportation with our professional chauffeur service. Reliable, elegant, and always on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="btn-hover-effect"
                  onClick={() => scrollToSection("book-now")}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
                  onClick={() => scrollToSection("services")}
                >
                  Our Services
                </Button>
              </div>
            </div>
            
            <div className="lg:w-5/12 w-full max-w-md mx-auto">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Premium <span className="text-primary">Services</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer exceptional transportation services tailored to your specific needs, ensuring comfort, reliability, and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-hover-effect">
              <Link href="/contact">Request Custom Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our <span className="text-primary">Luxury Fleet</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our meticulously maintained vehicles offer the perfect blend of style, comfort, and reliability for all your transportation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                name={vehicle.name}
                image={vehicle.image}
                capacity={vehicle.capacity}
                features={vehicle.features}
                onBook={handleBookVehicle}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="btn-hover-effect">
              <Link href="/fleet">View Entire Fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1589395595558-8392d8961013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional chauffeur opening car door" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold font-playfair">10+ Years</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">About <span className="text-primary">LimoServiceMemphis</span></h2>
              <p className="text-lg text-gray-700 mb-5">
                For over a decade, LimoServiceMemphis has been the premier luxury transportation provider in Memphis and the surrounding areas. We take pride in offering exceptional service that exceeds expectations.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Our commitment to excellence is reflected in our meticulously maintained fleet, professional chauffeurs, and attention to the smallest details to ensure your journey is comfortable, safe, and memorable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Premium Service</h3>
                    <p>Dedicated to exceeding expectations with every ride.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6" />
                      <path d="M23 11h-6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Professional Chauffeurs</h3>
                    <p>Experienced, background-checked, and professional drivers.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-8 btn-hover-effect">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Client <span className="text-primary">Testimonials</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what our valued clients have to say about their experiences with LimoServiceMemphis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                initials={testimonial.initials}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-hover-effect">
              <Link href="/contact">Experience Our Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our <span className="text-primary">Blog</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Stay updated with the latest news, travel tips, and insights about luxury transportation in Memphis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
            >
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
