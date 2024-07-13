import Image from "next/image";

const TeamMember = ({ name, position, imageSrc, className }) => {
  const imageClass = className
    ? `rounded-full mx-auto ${className}`
    : "rounded-full mx-auto mb-4";

  return (
    <div className="max-w-xs text-center">
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className={imageClass}
      />
      {/* <h3 className="text-xl font-bold text-gray-100">{name}</h3>
      <p className="text-gray-400">{position}</p> */}
    </div>
  );
};

export default TeamMember;
