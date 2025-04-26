import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
}

const ServiceCard = ({ title, description, icon: Icon, image, href }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:-translate-y-2 duration-300 h-full flex flex-col">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <Icon className="text-primary mr-2" />
          <h3 className="text-xl font-semibold font-playfair">{title}</h3>
        </div>
        <p className="text-gray-700 mb-5">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link 
          href={href}
          className="inline-flex items-center text-primary font-semibold hover:underline"
        >
          Book This Service <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
