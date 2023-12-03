import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeInput?: keyof Size;
  fieldName?: string;
  setValue?: (state: object) => void;
  required?: boolean;
  msgErro?: string;
}

interface Size {
  default?: string;
  lg?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      sizeInput,
      setValue,
      fieldName,
      required,
      msgErro,
      ...props
    },
    ref,
  ) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue && setValue({ fieldName, value });
    };

    const stylesSize: Size = {
      default: "h-9",
      lg: "h-12",
    };

    const style = sizeInput ? stylesSize[sizeInput] : stylesSize.default;
    const styleRequired = required && "after:text-red-500 after:content-['*']";

    return (
      <div className={`relative  flex w-full flex-col ${className}`}>
        <label className={`${styleRequired}  ml-2 text-sm text-gray-500`}>
          {label}
        </label>
        <input
          className={cn(
            `flex ${style} w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-[1px]  focus:border-[--primary] focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 `,
          )}
          type={type}
          ref={ref}
          onChange={onChange}
          {...props}
        />
        {msgErro && (
          <div className="absolute bottom-[-16px] left-1 text-xs text-red-500">
            {msgErro}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
