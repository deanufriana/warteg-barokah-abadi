import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

interface FoodCardProps {
  title: string;
  image: string;
  price: string;
  description: string;
  category: string;
  isPopular?: boolean;
}

export function FoodCard ({ title, image, price, description, category, isPopular }: FoodCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already loaded (common in SSR/hydration)
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group relative overflow-hidden rounded-xl border-none bg-zinc-50/50 dark:bg-zinc-900/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer p-0">
          <div className="aspect-[1.1/1] w-full overflow-hidden relative rounded-t-xl">
            {/* Skeleton Loader */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse transition-opacity duration-500" />
            )}

            <img
              ref={imgRef}
              src={image}
              alt={title}
              onLoad={() => setIsLoaded(true)}
              onError={() => console.error(`Failed to load image: ${image}`)}
              className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            />
            {isPopular && (
              <Badge className="absolute top-6 left-6 bg-brand text-white border-none px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-brand/20">
                Favorit
              </Badge>
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                <Eye className="text-white h-7 w-7" />
              </div>
            </div>
          </div>

          <CardHeader className="p-5 pb-2">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
              <h3 className="font-heading text-xl md:text-2xl text-zinc-900 dark:text-white leading-tight group-hover:text-brand transition-colors">
                {title}
              </h3>
              <span className="text-brand font-bold text-lg whitespace-nowrap mt-1 sm:mt-0">
                Rp {price}
              </span>
            </div>
          </CardHeader>

          <CardContent className="px-5 pb-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] rounded-3xl overflow-hidden p-0 border-none bg-white dark:bg-zinc-950">
        <div className="relative aspect-video w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white border-white/30">
            {category}
          </Badge>
        </div>
        <div className="p-8">
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <DialogTitle className="font-heading text-3xl text-zinc-900 dark:text-white">{title}</DialogTitle>
              <div className="text-2xl font-bold text-brand">Rp {price}</div>
            </div>
            <DialogDescription className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4 pt-4">
            <Button
              className="flex-1 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl gap-2 font-medium"
              onClick={() => trackEvent("click_order_item", { item_name: title })}
              asChild
            >
              <a
                href={BUSINESS.whatsappUrl(`Halo Warteg Barokah, saya ingin pesan ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingCart className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
