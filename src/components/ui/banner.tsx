import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full ">
      <Image
        width={200}
        height={220}
        sizes=""
        className="h-40 w-full object-cover"
        src={
          "https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg"
        }
        alt="banner"
      />
    </div>
  );
};
export default Banner;
