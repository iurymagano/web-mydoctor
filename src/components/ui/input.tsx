import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeInput?: keyof Size;
}

interface Size {
  default?: string;
  lg?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, sizeInput, ...props }, ref) => {
    const stylesSize: Size = {
      default: "h-9",
      lg: "h-12",
    };

    const style = sizeInput ? stylesSize[sizeInput] : stylesSize.default;

    return (
      <div className={`flex  w-full flex-col ${className}`}>
        <label className="ml-2 text-sm">{label}</label>
        <input
          type={type}
          className={cn(
            `flex ${style} w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-[1px]  focus:border-[--primary] focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 `,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
