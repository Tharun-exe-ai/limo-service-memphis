import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: "1",
      title: "5 Reasons to Choose a Luxury Car Service for Your Next Trip",
      excerpt: "Discover why more travelers are opting for professional chauffeur services over standard transportation options for both business and leisure travel.",
      content: "Full article content here...",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1611288875785-9eb7bc814cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "travel",
      author: "Michael Williams"
    },
    {
      id: "2",
      title: "The Ultimate Guide to Memphis Landmarks: Tour in Style",
      excerpt: "Explore Memphis' rich history and vibrant culture with our curated guide to the city's must-see attractions and how to visit them in luxury.",
      content: "Full article content here...",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1564638304161-5da59107efe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "memphis",
      author: "Jennifer Davis"
    },
    {
      id: "3",
      title: "Wedding Transportation: Tips for a Stress-Free Experience",
      excerpt: "Planning transportation for your wedding day? Here's everything you need to know to ensure seamless logistics for your special occasion.",
      content: "Full article content here...",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "weddings",
      author: "Sarah Mitchell"
    },
    {
      id: "4",
      title: "Corporate Travel: Impressing Clients with Premium Transportation",
      excerpt: "Learn how executive transportation can enhance your business image and create positive impressions that lead to stronger professional relationships.",
      content: "Full article content here...",
      date: "February 22, 2023",
      image: "https://images.unsplash.com/photo-1560624052-5e1415b6e14b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "business",
      author: "Robert Johnson"
    },
    {
      id: "5",
      title: "The History of Limousines: From Chauffeur-Driven Carriages to Modern Luxury",
      excerpt: "Take a journey through time exploring how the concept of chauffeur-driven transportation evolved into today's luxury limousine services.",
      content: "Full article content here...",
      date: "January 18, 2023",
      image: "https://images.unsplash.com/photo-1565638304211-15b0a4c1c850?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "history",
      author: "Michael Williams"
    },
    {
      id: "6",
      title: "Airport Transportation: Eliminating Travel Stress in Memphis",
      excerpt: "Discover how a professional airport transfer service can transform your travel experience at Memphis International Airport.",
      content: "Full article content here...",
      date: "December 10, 2022",
      image: "https://images.unsplash.com/photo-1495285840689-5d55208a007e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "travel",
      author: "Jennifer Davis"
    },
    {
      id: "7",
      title: "A Night to Remember: Planning the Perfect Prom Transportation",
      excerpt: "Tips for parents and teens on selecting and booking the ideal limousine service for an unforgettable prom night in Memphis.",
      content: "Full article content here...",
      date: "November 5, 2022",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "special-events",
      author: "Sarah Mitchell"
    },
    {
      id: "8",
      title: "Memphis Music Tour: Exploring the Birthplace of Blues and Rock 'n' Roll",
      excerpt: "A luxury tour of Memphis's rich musical heritage, from Beale Street to Sun Studio and Graceland, with insider transportation tips.",
      content: "Full article content here...",
      date: "October 17, 2022",
      image: "https://images.unsplash.com/photo-1505815758152-0fc26dccb5c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "memphis",
      author: "Robert Johnson"
    },
    {
      id: "9",
      title: "Choosing the Right Vehicle for Your Event: A Comprehensive Guide",
      excerpt: "From sedans to stretch limousines, learn how to select the perfect luxury vehicle to match your specific transportation needs and group size.",
      content: "Full article content here...",
      date: "September 8, 2022",
      image: "https://images.unsplash.com/photo-1566075247408-1bb035bdc685?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "tips",
      author: "Michael Williams"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "travel", name: "Travel" },
    { id: "memphis", name: "Memphis" },
    { id: "weddings", name: "Weddings" },
    { id: "business", name: "Business" },
    { id: "special-events", name: "Special Events" },
    { id: "tips", name: "Tips & Advice" },
    { id: "history", name: "History" }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === "all" || post.category === activeCategory) &&
      (searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and stories about luxury transportation and Memphis travel
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Search and Filter */}
              <div className="mb-10">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(category.id)}
                      className={activeCategory === category.id ? "" : "border-primary text-primary hover:bg-primary hover:text-secondary"}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Blog Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any posts matching your search criteria.</p>
                  <Button onClick={() => {setSearchTerm(""); setActiveCategory("all");}}>
                    Reset Search
                  </Button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold font-playfair mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map(category => (
                    <li key={category.id}>
                      <button 
                        onClick={() => setActiveCategory(category.id)}
                        className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-200 ${activeCategory === category.id ? 'bg-gray-200 font-medium' : ''}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold font-playfair mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 5).map(post => (
                    <li key={post.id}>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-sm hover:text-primary transition block"
                      >
                        {post.title}
                      </Link>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold font-playfair mb-4">Book Your Ride</h3>
                <p className="mb-6">Ready to experience the luxury and comfort of our premium transportation services?</p>
                <Button asChild className="w-full">
                  <Link href="/#book-now">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-playfair mb-4">Subscribe to Our <span className="text-primary">Newsletter</span></h2>
            <p className="text-gray-700">
              Stay updated with our latest articles, tips, and special offers for luxury transportation in Memphis.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow" 
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
