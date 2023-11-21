import FormLogin from "@/components/formLogin/formLogin";

const Login = () => {
  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl px-6">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-32 max-lg:gap-16 ">
            <FormLogin />
            <div className="w-full max-w-[537px] max-md:hidden">
              {/* <Icon /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
