// components/ImageGallery.js
import Image from "next/image";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-[10%] mb-[30px] z-30">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={500}
            height={300}
            className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
