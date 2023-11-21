import { RiStarSFill, RiStarSLine } from "react-icons/ri";

interface StarsProps {
  number: number;
}

const Stars = ({ number }: StarsProps) => {
  const numberStartLine = 5 - number;
  const starFill = [];
  const starLine = [];
  for (let i = 0; i < number; i++) {
    starFill.push(i);
  }
  for (let i = 0; i < numberStartLine; i++) {
    starLine.push(i);
  }

  return (
    <div className="flex items-end">
      {starFill.map((item) => (
        <RiStarSFill key={item} size={24} className="text-yellow-400" />
      ))}
      {starLine.map((item) => (
        <RiStarSLine key={item} size={24} className="text-gray-300" />
      ))}
      <span className="mb-[2px] mt-1 text-xs font-semibold">{number}.0</span>
    </div>
  );
};

export default Stars;
