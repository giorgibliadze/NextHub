import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img-removebg-preview.png"
        width={400}
        height={400}
        alt="Decorative top left image"
        priority
        sizes="(max-width: 768px) 200px, 400px"
      />
    </div>
  );
};

export default TopLeftImg;
