import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 z-10 w-[200px] xl:w-[400px] opacity-50 blend-fix">
      <Image
        src="/top-left-img-removebg-preview.png"
        width={411}
        height={405}
        alt="Decorative Image"
        priority // Ensure this image is always loaded first
        placeholder="blur" // Adds a blur placeholder effect
        blurDataURL="/path-to-small-placeholder-image.png" // Optional: a very small image for the blur effect
        className="blend-fix-img" // New class to handle blending issues
      />
    </div>
  );
};

export default TopLeftImg;
