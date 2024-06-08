//next image
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 lg:-bottom-[120px]  mix-blend-color-dodge animate-pulse duration-76 z-10">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
