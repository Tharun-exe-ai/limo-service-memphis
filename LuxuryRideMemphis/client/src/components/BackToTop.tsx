import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackToTopProps {
  visible: boolean;
}

const BackToTop = ({ visible }: BackToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-opacity duration-300 btn-hover-effect ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;
