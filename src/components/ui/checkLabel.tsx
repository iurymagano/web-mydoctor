import { Checkbox } from "./checkbox";
import { Label } from "./label";

interface CheckProps {
  label?: string;
}

const CheckLabel = ({ label }: CheckProps) => (
  <div className="flex cursor-pointer items-center gap-2">
    <Checkbox id={label} />
    <Label className=" cursor-pointer" htmlFor={label}>
      {label}
    </Label>
  </div>
);

export default CheckLabel;
