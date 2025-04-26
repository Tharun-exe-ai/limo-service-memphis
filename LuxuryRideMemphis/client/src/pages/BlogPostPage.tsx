import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlogCard from "@/components/BlogCard";

const BlogPostPage = () => {
  const [_, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // In a real application, this would fetch from an API
    // For this implementation, we'll use our static data
    const blogPosts = [
      {
        id: "1",
        title: "5 Reasons to Choose a Luxury Car Service for Your Next Trip",
        excerpt: "Discover why more travelers are opting for professional chauffeur services over standard transportation options for both business and leisure travel.",
        content: `
          <p class="mb-6">When planning your next trip, whether for business or pleasure, transportation is a critical element that can significantly impact your overall experience. While rideshares and taxis offer convenience, a luxury car service elevates your journey to an entirely different level.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">1. Professional Chauffeurs Make All the Difference</h2>
          <p class="mb-6">Unlike rideshare drivers who may treat driving as a side gig, professional chauffeurs are career transportation specialists. They undergo rigorous training in defensive driving, etiquette, and customer service. Our chauffeurs at LimoServiceMemphis are background-checked, licensed professionals who know Memphis intimately, ensuring timely arrivals and the most efficient routes.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">2. Reliability You Can Count On</h2>
          <p class="mb-6">One of the most frustrating travel experiences is transportation uncertainty. With a luxury car service, your vehicle arrives 10-15 minutes early, waiting for you rather than the other way around. For airport pickups, we monitor flight status in real-time and adjust for delays, ensuring we're there when you land, regardless of schedule changes.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">3. Superior Comfort and Amenities</h2>
          <p class="mb-6">Luxury vehicles offer unparalleled comfort with plush leather seating, climate control, and ample legroom. Our fleet is equipped with complimentary WiFi, bottled water, and charging stations, allowing you to work, relax, or prepare for your next meeting while on the move. The difference in ride quality between a standard vehicle and a luxury sedan or SUV is immediately noticeable.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">4. Make a Lasting Impression</h2>
          <p class="mb-6">Whether meeting clients, attending special events, or celebrating occasions, arriving in a chauffeur-driven luxury vehicle creates an immediate impression. It demonstrates attention to detail and appreciation for quality that reflects positively on you personally and professionally.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">5. Stress-Free Travel Experience</h2>
          <p class="mb-6">Perhaps the greatest benefit of a luxury car service is the peace of mind it provides. No navigating unfamiliar roads, searching for parking, or dealing with traffic stress. Your chauffeur handles all these concerns while you enjoy a serene, productive environment. This stress reduction is invaluable, especially when traveling for important business or during hectic schedules.</p>
          
          <p class="mb-6">For your next trip to Memphis or any travel need in the area, consider how a luxury car service can transform your journey from simple transportation to an elegant, efficient, and enjoyable experience.</p>
        `,
        date: "May 12, 2023",
        image: "https://images.unsplash.com/photo-1611288875785-9eb7bc814cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "travel",
        author: "Michael Williams"
      },
      {
        id: "2",
        title: "The Ultimate Guide to Memphis Landmarks: Tour in Style",
        excerpt: "Explore Memphis' rich history and vibrant culture with our curated guide to the city's must-see attractions and how to visit them in luxury.",
        content: `
          <p class="mb-6">Memphis, Tennessee, is a city rich with cultural heritage, musical history, and Southern charm. From the birthplace of rock 'n' roll to civil rights landmarks, Memphis offers visitors a unique blend of experiences. This guide highlights the must-see attractions and how to explore them in comfort and style.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Graceland: Elvis Presley's Legendary Home</h2>
          <p class="mb-6">No visit to Memphis is complete without experiencing Graceland, Elvis Presley's iconic mansion. Tour the King's home, see his impressive collection of cars, costumes, and gold records, and pay respects at the Meditation Garden where Elvis and members of his family are buried. A luxury car service enhances this experience, allowing you to arrive refreshed and depart on your schedule, avoiding crowded tour buses and parking challenges.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Beale Street: The Heart of Memphis Music</h2>
          <p class="mb-6">Beale Street is the entertainment hub of Memphis and one of the most iconic streets in America. With blues clubs, restaurants, and shops lining the street, it's the perfect place to experience Memphis nightlife. Having a chauffeur means you can enjoy the vibrant atmosphere and live music without worrying about driving afterward. Your luxury vehicle will be waiting to whisk you away when you're ready to leave.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">National Civil Rights Museum</h2>
          <p class="mb-6">Located at the Lorraine Motel, where Dr. Martin Luther King Jr. was assassinated, the National Civil Rights Museum offers a moving and comprehensive exploration of the American Civil Rights Movement. This powerful experience often leaves visitors reflective; having a chauffeur-driven car waiting provides the privacy and comfort needed to process this profound historical site.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Sun Studio: The Birthplace of Rock 'n' Roll</h2>
          <p class="mb-6">Known as the "Birthplace of Rock 'n' Roll," Sun Studio is where musical legends like Elvis Presley, Johnny Cash, and B.B. King recorded their early hits. The studio still functions as a recording space by night while offering fascinating tours by day. A professional chauffeur familiar with Memphis can provide insights about the city's musical heritage en route to enhance your experience.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Memphis Riverfront and Mud Island</h2>
          <p class="mb-6">The Mississippi River is integral to Memphis's identity. Explore Mud Island River Park with its scale model of the Lower Mississippi River, or take a riverboat cruise for stunning views of the Memphis skyline. Your chauffeur can drop you off at the entrance and be ready when your river adventure concludes.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Creating the Perfect Memphis Tour</h2>
          <p class="mb-6">While each of these landmarks deserves individual attention, many visitors prefer to combine several sites into a comprehensive Memphis tour. This is where a luxury transportation service truly shines. Our chauffeurs can create a customized itinerary that maximizes your time, avoids traffic congestion, and ensures comfortable transitions between attractions.</p>
          
          <p class="mb-6">When exploring Memphis's rich cultural tapestry, the journey between landmarks should be as enjoyable as the destinations themselves. A luxury car service transforms ordinary sightseeing into an exceptional experience, allowing you to absorb the soul of Memphis in comfort and style.</p>
        `,
        date: "April 28, 2023",
        image: "https://images.unsplash.com/photo-1564638304161-5da59107efe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "memphis",
        author: "Jennifer Davis"
      },
      {
        id: "3",
        title: "Wedding Transportation: Tips for a Stress-Free Experience",
        excerpt: "Planning transportation for your wedding day? Here's everything you need to know to ensure seamless logistics for your special occasion.",
        content: `
          <p class="mb-6">Your wedding day is one of the most important celebrations of your life, and every detail matters—including transportation. Proper planning ensures you and your guests arrive punctually, comfortably, and stylishly at each venue. Here's a comprehensive guide to wedding transportation that will help you create seamless logistics for your special day.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Start Planning Early</h2>
          <p class="mb-6">Wedding transportation should be secured 6-9 months before your wedding date, especially if you're marrying during peak season (May-October) or on a popular date. Luxury vehicles and specialty options like vintage cars book quickly, so early reservation ensures you get exactly what you want.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Consider All Transportation Needs</h2>
          <p class="mb-6">Make a comprehensive list of who needs transportation and when. This typically includes:</p>
          <ul class="list-disc pl-8 mb-6">
            <li>The bride and bridesmaids to the ceremony</li>
            <li>The groom and groomsmen to the ceremony</li>
            <li>The newlyweds from the ceremony to the photo location and reception</li>
            <li>Parents and grandparents</li>
            <li>Out-of-town guests from hotels to venues</li>
            <li>The newlyweds' getaway transportation</li>
          </ul>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Choose the Right Vehicles</h2>
          <p class="mb-6">Different occasions call for different vehicles. Consider these options:</p>
          <ul class="list-disc pl-8 mb-6">
            <li><strong>Luxury Sedan:</strong> Perfect for transporting parents or the couple's getaway</li>
            <li><strong>SUV:</strong> Ideal for small wedding parties with more luggage space</li>
            <li><strong>Stretch Limousine:</strong> Classic choice for the wedding party, accommodating 6-10 passengers</li>
            <li><strong>Shuttle or Van:</strong> Efficient for transporting guests between venues</li>
            <li><strong>Vintage or Specialty Cars:</strong> For making a grand entrance or exit</li>
          </ul>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Create a Detailed Timeline</h2>
          <p class="mb-6">Work with your transportation provider to create a minute-by-minute schedule that includes:</p>
          <ul class="list-disc pl-8 mb-6">
            <li>Pickup times and locations with buffer time for traffic</li>
            <li>Drive times between venues (always add 15-20 minutes extra)</li>
            <li>Photo session transportation</li>
            <li>Return transportation or late-night services</li>
          </ul>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Coordinate with Your Venue and Photographer</h2>
          <p class="mb-6">Ensure your vehicles can access all locations, especially historic venues with limited access. Share your transportation timeline with your photographer so they can plan for arrival shots, grand exit photos, and any special car-related portraits you want.</p>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Add Personal Touches</h2>
          <p class="mb-6">Customize your wedding transportation with:
          <ul class="list-disc pl-8 mb-6">
            <li>Custom "Just Married" signs</li>
            <li>Ribbon or floral decorations (check with your provider first)</li>
            <li>Champagne service for post-ceremony celebration</li>
            <li>Specialized playlists for the drive</li>
          </ul>
          
          <h2 class="text-2xl font-bold font-playfair mb-4">Ask the Right Questions</h2>
          <p class="mb-6">When booking your transportation, ensure you understand:
          <ul class="list-disc pl-8 mb-6">
            <li>Total costs, including gratuity, fuel surcharges, and overtime fees</li>
            <li>Cancellation and refund policies</li>
            <li>Insurance coverage</li>
            <li>Backup plans for vehicle breakdowns</li>
            <li>Driver attire and service standards</li>
          </ul>
          
          <p class="mb-6">Remember that wedding transportation isn't just about getting from point A to point B; it's an integral part of your wedding experience. The right vehicles and service create memorable moments, provide stunning photo opportunities, and ensure everyone arrives relaxed and on time.</p>
          
          <p class="mb-6">At LimoServiceMemphis, we specialize in creating seamless wedding transportation experiences. Our wedding coordinators work directly with you to design a custom transportation plan that complements your vision for the perfect day.</p>
        `,
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
      }
    ];
    
    const currentPost = blogPosts.find(p => p.id === params?.id);
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts (same category, excluding current)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [params?.id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-40 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})` 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Share */}
              <div className="mt-12 border-t border-b border-gray-200 py-6">
                <div className="flex items-center">
                  <span className="font-semibold mr-4 flex items-center">
                    <Share2 className="h-4 w-4 mr-2" /> Share this article:
                  </span>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80" aria-label="Share on Facebook">
                      <Facebook />
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80" aria-label="Share on Twitter">
                      <Twitter />
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80" aria-label="Share on LinkedIn">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Author */}
              <div className="mt-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-primary mr-4">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">About {post.author}</h3>
                        <p className="text-gray-600">Content Writer at LimoServiceMemphis</p>
                      </div>
                    </div>
                    <p>
                      With extensive knowledge of the luxury transportation industry and Memphis area, 
                      our writers provide valuable insights and tips to enhance your travel experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* CTA */}
                <div className="bg-secondary rounded-lg p-6 text-white mb-8">
                  <h3 className="text-xl font-semibold font-playfair mb-4">Ready to Travel in Style?</h3>
                  <p className="mb-6">Experience the luxury transportation services featured in this article.</p>
                  <Button asChild className="w-full">
                    <Link href="/#book-now">Book Your Ride</Link>
                  </Button>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold font-playfair mb-6">Related Articles</h3>
                    <div className="space-y-6">
                      {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="flex gap-4">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <Link href={`/blog/${relatedPost.id}`} className="font-medium hover:text-primary">
                              {relatedPost.title}
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold font-playfair mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/blog" className="hover:text-primary transition block px-2 py-1 rounded hover:bg-gray-100">
                        All Posts
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-primary transition block px-2 py-1 rounded hover:bg-gray-100">
                        Travel
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-primary transition block px-2 py-1 rounded hover:bg-gray-100">
                        Memphis
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-primary transition block px-2 py-1 rounded hover:bg-gray-100">
                        Weddings
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-primary transition block px-2 py-1 rounded hover:bg-gray-100">
                        Business
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair mb-10 text-center">More Articles You Might Enjoy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Select 3 random articles that aren't the current one or in related */}
            {relatedPosts.slice(0, 3).map(post => (
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
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Experience Memphis in <span className="text-primary">Style</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Book your luxury transportation today and travel in comfort, elegance, and security.
            </p>
            <Button asChild size="lg" className="btn-hover-effect">
              <Link href="/#book-now">Book Your Ride</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
