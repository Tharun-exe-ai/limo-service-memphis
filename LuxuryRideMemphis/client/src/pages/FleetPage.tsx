import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FleetPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");

  const handleBookVehicle = (vehicleName: string) => {
    toast({
      title: `${vehicleName} Selected`,
      description: "Redirecting to booking form. Please complete your reservation details.",
    });
    
    // In a real application, we might set some state or use query params
    // For now, we'll just redirect to the booking form
    window.location.href = "/#book-now";
  };

  const vehicles = [
    {
      id: "sedan",
      name: "Luxury Sedan",
      description: "Our luxury sedans represent the perfect combination of elegance and efficiency. Ideal for business travel, airport transfers, or intimate special occasions, these vehicles offer premium comfort for up to three passengers with modest luggage requirements.",
      image: "https://images.unsplash.com/photo-1552642762-f55d06580015?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 3 passengers",
      luggage: "3 standard suitcases",
      features: [
        "Professional chauffeur",
        "Bottled water and amenities",
        "Climate controlled cabin",
        "Leather interior",
        "Device charging ports",
        "WiFi available upon request"
      ],
      ideal_for: ["Airport transfers", "Business meetings", "Date nights", "Small group travel"],
      type: "sedan",
      popular: true
    },
    {
      id: "suv",
      name: "Executive SUV",
      description: "Our executive SUVs offer the perfect blend of luxury and spaciousness. With additional legroom and luggage capacity, these vehicles are perfect for small groups, airport transfers with luggage, or corporate outings requiring a professional image combined with comfort.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 6 passengers",
      luggage: "6 standard suitcases",
      features: [
        "Professional chauffeur",
        "Extra luggage capacity",
        "Premium entertainment system",
        "Privacy partition available",
        "Leather interior",
        "Complimentary refreshments"
      ],
      ideal_for: ["Airport transfers", "Corporate groups", "Family events", "VIP transportation"],
      type: "suv",
      popular: true
    },
    {
      id: "stretch",
      name: "Stretch Limousine",
      description: "Make a statement with our classic stretch limousines. These iconic vehicles offer spacious interiors with luxurious amenities perfect for special celebrations, wedding parties, proms, or nights on the town when you want to travel in style and comfort.",
      image: "https://images.unsplash.com/photo-1565638304211-15b0a4c1c850?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 10 passengers",
      luggage: "Limited luggage space",
      features: [
        "Professional chauffeur",
        "Bar setup with glassware",
        "Premium sound system",
        "LED lighting and ambiance",
        "Privacy partition",
        "Red carpet service available"
      ],
      ideal_for: ["Weddings", "Proms", "Bachelor/Bachelorette parties", "Special occasions"],
      type: "stretch",
      popular: true
    },
    {
      id: "van",
      name: "Luxury Van",
      description: "Our luxury vans provide comfortable transportation for larger groups without sacrificing style or amenities. Perfect for corporate teams, airport shuttles, or family events where spaciousness and comfort are priorities.",
      image: "https://images.unsplash.com/photo-1609520505167-4c02bae7534f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 14 passengers",
      luggage: "10+ standard suitcases",
      features: [
        "Professional chauffeur",
        "Individual leather seating",
        "High roof for easy entry",
        "Climate control",
        "Bottled water and amenities",
        "USB charging ports"
      ],
      ideal_for: ["Corporate groups", "Airport transfers", "Tour groups", "Family reunions"],
      type: "van",
      popular: false
    },
    {
      id: "sprinter",
      name: "Sprinter Van",
      description: "The ultimate combination of luxury and functionality, our sprinter vans offer exceptional comfort for medium-sized groups. With premium interiors and ample headroom, these vehicles are ideal for corporate shuttles or group outings requiring extended travel time.",
      image: "https://images.unsplash.com/photo-1612200686806-ac3345ed7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 12 passengers",
      luggage: "8 standard suitcases",
      features: [
        "Professional chauffeur",
        "Standing height interior",
        "Custom luxury seating",
        "Entertainment system",
        "WiFi connectivity",
        "Premium sound system"
      ],
      ideal_for: ["Corporate events", "Wine tours", "Group transportation", "Casino trips"],
      type: "van",
      popular: false
    },
    {
      id: "mini-coach",
      name: "Mini Coach",
      description: "When you need to transport larger groups without compromising on comfort, our mini coaches offer the perfect solution. These vehicles provide a smooth ride with professional service for corporate, wedding, or tour groups requiring coordinated transportation.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 24 passengers",
      luggage: "Large luggage compartment",
      features: [
        "Professional chauffeur",
        "Plush reclining seats",
        "Overhead storage",
        "PA system",
        "DVD/TV entertainment",
        "Climate control"
      ],
      ideal_for: ["Wedding guest shuttles", "Corporate transportation", "Tour groups", "Event transportation"],
      type: "bus",
      popular: false
    }
  ];

  const filteredVehicles = activeTab === "all" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              Our <span className="text-primary">Luxury Fleet</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our meticulously maintained vehicles offering the perfect blend of style, comfort, and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All Vehicles</TabsTrigger>
                <TabsTrigger value="sedan">Sedans</TabsTrigger>
                <TabsTrigger value="suv">SUVs</TabsTrigger>
                <TabsTrigger value="stretch">Limousines</TabsTrigger>
                <TabsTrigger value="van">Vans</TabsTrigger>
                <TabsTrigger value="bus">Mini Coaches</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredVehicles.length > 0 ? (
            <div className="space-y-20">
              {filteredVehicles.map((vehicle, index) => (
                <div 
                  key={vehicle.id} 
                  id={vehicle.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 items-center`}
                >
                  <div className="lg:w-1/2 relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="rounded-lg shadow-xl w-full h-auto object-cover"
                      style={{ maxHeight: "500px" }}
                    />
                    {vehicle.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-black py-1 px-3 rounded-full font-semibold text-sm">
                        Popular Choice
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold font-playfair mb-4">{vehicle.name}</h2>
                    
                    <div className="flex items-center gap-6 mb-4 text-gray-700">
                      <div>
                        <span className="font-semibold">Capacity:</span> {vehicle.capacity}
                      </div>
                      <div>
                        <span className="font-semibold">Luggage:</span> {vehicle.luggage}
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      {vehicle.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {vehicle.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-3">Ideal For</h3>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.ideal_for.map((use, i) => (
                          <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleBookVehicle(vehicle.name)}
                      className="btn-hover-effect"
                    >
                      Book This Vehicle
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No vehicles found in this category</h3>
              <Button onClick={() => setActiveTab("all")}>
                View All Vehicles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Fleet Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Choose Our <span className="text-primary">Fleet</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              When you choose LimoServiceMemphis, you're selecting more than just a vehicle – you're choosing an exceptional transportation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z"></path>
                  <path d="M6 12h12"></path>
                  <path d="M8 16h8"></path>
                  <path d="M9 12v6"></path>
                  <path d="M15 12v6"></path>
                  <path d="M12 12v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meticulously Maintained</h3>
              <p className="text-gray-700">
                Our fleet undergoes rigorous maintenance checks and cleaning protocols to ensure each vehicle performs flawlessly and presents immaculately for every service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Models</h3>
              <p className="text-gray-700">
                We continuously update our fleet to include the latest vehicle models, ensuring you enjoy the most current comfort features and safety technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-700">
                Our entire fleet is comprehensively insured with commercial transportation coverage that exceeds industry standards, providing peace of mind for every journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Transportation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Custom transportation solutions" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-playfair mb-6">Need a <span className="text-primary">Custom Solution?</span></h2>
              <p className="text-lg text-gray-700 mb-5">
                Don't see exactly what you're looking for? LimoServiceMemphis specializes in creating tailored transportation solutions for unique needs and special events.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Whether you require multiple vehicles for a large corporate event, specialized transportation for a film production, or have unique accessibility needs, our team can customize a solution to meet your specific requirements.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Contact us to discuss your transportation needs, and let our experienced team create the perfect logistics plan for your occasion.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-hover-effect">
                  <Link href="/contact">Request Custom Quote</Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-secondary btn-hover-effect"
                >
                  <a href="tel:901-555-1234">Call 901-555-1234</a>
                </Button>
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
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FleetPage;
