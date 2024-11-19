"use client";

import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define the type for the configuration
type SheetSideConfig = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for Lucide Icons
  label: string;
};

// Store icons or configuration
const SHEET_SIDES: SheetSideConfig[] = [{ icon: AlignJustify, label: "" }];

export default function SheetSide() {
  return (
    <div className="md:hidden">
      {SHEET_SIDES.map(({ icon: Icon, label }, index) => (
        <Sheet key={index}>
          {/* Sheet Trigger */}
          <SheetTrigger asChild>
            <div>
              <Icon className="mr-2 w-4" />
              {label}
            </div>
          </SheetTrigger>

          {/* Sheet Content */}
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
            </SheetHeader>
            {/* Add more content here */}
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
