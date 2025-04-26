import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-playfair text-white mb-4">LimoServiceMemphis</h3>
            <p className="mb-4 text-gray-300">
              Memphis's premier luxury transportation service, providing exceptional black car and limousine services for all occasions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-playfair text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition">Our Fleet</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-playfair text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#airport" className="hover:text-primary transition">Airport Transfers</Link></li>
              <li><Link href="/services#corporate" className="hover:text-primary transition">Corporate Travel</Link></li>
              <li><Link href="/services#wedding" className="hover:text-primary transition">Wedding Transportation</Link></li>
              <li><Link href="/services#events" className="hover:text-primary transition">Special Events</Link></li>
              <li><Link href="/services#night-out" className="hover:text-primary transition">Night Out</Link></li>
              <li><Link href="/services#tours" className="hover:text-primary transition">Memphis Tours</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-playfair text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white focus:border-primary" 
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  <FaPaperPlane />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} LimoServiceMemphis. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
