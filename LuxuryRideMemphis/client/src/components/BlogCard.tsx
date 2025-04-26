import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, date, image }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold font-playfair mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link 
          href={`/blog/${id}`}
          className="inline-flex items-center text-primary font-semibold hover:underline"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
