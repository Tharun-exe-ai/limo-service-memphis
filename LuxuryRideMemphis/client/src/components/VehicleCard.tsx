import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

interface VehicleCardProps {
  name: string;
  image: string;
  capacity: string;
  features: string[];
  onBook: () => void;
}

const VehicleCard = ({ name, image, capacity, features, onBook }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-4">
          <span className="text-primary font-semibold">{capacity}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold font-playfair mb-2">{name}</h3>
        <ul className="space-y-2 mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={onBook} className="w-full" variant="default">
          Book This Vehicle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
