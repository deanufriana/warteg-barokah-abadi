import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodCard } from "./FoodCard";

interface MenuItem {
  title: string;
  image: string;
  price: string;
  category: string;
  description: string;
  isPopular?: boolean;
}

interface MenuTabsProps {
  items: MenuItem[];
  categories: string[];
}

export function MenuTabs({ items, categories }: MenuTabsProps) {
  return (
    <Tabs defaultValue="Semua" className="w-full">
      <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-4 sm:pb-0 px-2.5 sm:px-0">
        <TabsList className="bg-white/50 dark:bg-zinc-900/50 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 backdrop-blur-md h-auto min-w-max">
          {categories.map((category) => (
            <TabsTrigger 
              key={category}
              value={category}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "select_menu_category", {
                    category_name: category,
                  });
                }
              }}
              className="rounded-full px-6 sm:px-8 py-2 md:py-2.5 data-[state=active]:bg-brand data-[state=active]:text-white transition-all duration-300 whitespace-nowrap"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent key={category} value={category} className="mt-0 animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items
              .filter(item => category === "Semua" || item.category === category)
              .map((item) => (
                <FoodCard key={item.title} {...item} />
              ))
            }
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
