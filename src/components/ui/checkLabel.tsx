import { Checkbox } from "./checkbox";
import { Label } from "./label";

interface onChangeCheckedProps {
  fieldName: string;
  value: boolean;
}
interface CheckProps {
  label: string;
  fieldName: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChangeChecked: ({ fieldName, value }: onChangeCheckedProps) => void;
}

const CheckLabel = ({
  label,
  checked,
  fieldName,
  onChangeChecked,
  ...props
}: CheckProps) => {
  const onCheckedChange = (checked: boolean) => {
    onChangeChecked({ fieldName, value: checked });
  };
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <Checkbox
        id={label}
        onCheckedChange={onCheckedChange}
        checked={checked}
        {...props}
      />
      <Label className=" cursor-pointer" htmlFor={label}>
        {label}
      </Label>
    </div>
  );
};

export default CheckLabel;
