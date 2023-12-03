"use client";

import { Root, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ReactNode, useState } from "react";
import { ItemSelect } from "../paciente/perfil/itemSelect";

interface TabsProps {
  data: Data[];
  current: string;
}

type Data = {
  content: ReactNode;
  icon: ReactNode;
  value: string;
  text: string;
};

export const Tabs = ({ data, current }: TabsProps) => {
  const [value, setValue] = useState(current);
  return (
    <Root className="flex h-full w-full" value={value} onValueChange={setValue}>
      <TabsList className="flex flex-col border-r border-gray-100 pt-4 shadow-sm">
        {data.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            <ItemSelect
              icon={item.icon}
              text={item.text}
              selected={value === item.value}
            />
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((item) => (
        <TabsContent key={item.value} value={item.value} className="mt-6">
          {item.content}
        </TabsContent>
      ))}
    </Root>
  );
};
