import Image from "next/image";

const TeamMember = ({ name, position, imageSrc }) => {
  return (
    <div className="max-w-xs text-center">
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default TeamMember;
