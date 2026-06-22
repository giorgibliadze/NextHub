// components/ImageGallery.js
import Image from "next/image";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-[10%] mb-[30px] z-30 w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-[220px] md:h-[300px] overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-lg shadow-accent/10"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
