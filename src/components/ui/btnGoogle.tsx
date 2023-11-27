import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";

const BtnGoogle = ({ ...props }) => {
  return (
    <Button
      className="gap-4 bg-white text-slate-600 shadow hover:bg-white"
      {...props}
    >
      <FcGoogle size={32} /> Sign in with Google
    </Button>
  );
};
export default BtnGoogle;
