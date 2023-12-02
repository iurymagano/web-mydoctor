import { Card } from "./card";
import { HeaderSettings } from "./headerSetting";

const Header = async () => {
  return (
    <Card className="flex items-center justify-between rounded-none border-none bg-[#F8F9FA] px-6 shadow-none">
      <h1 className=" my-0  text-[32px] font-bold text-primary">MYDOCTOR</h1>
      <div className="flex items-center gap-4">
        <HeaderSettings />
      </div>
    </Card>
  );
};

export default Header;
