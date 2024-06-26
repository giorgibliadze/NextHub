// components/ModernContainer.js
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import classNames from "classnames";

// Sample data array for contacts
const contacts = [
  {
    id: 1,
    icon: (
      <FaEnvelope className="text-4xl transition duration-300 text-white group-hover:text-blue-400" />
    ),
    title: "ელ-ფოსტა:",
    info: "info@NextHub.ge",
    bgColor: "bg-blue-400",
    hoverBgColor: "hover:bg-blue-400",
    textColor: "text-blue-400",
    hoverTextColor: "text-white",
    shadowColor: "hover:shadow-blue-400",
    hoverInfoColor: "group-hover:text-white", // Change to white on hover
  },
  {
    id: 2,
    icon: (
      <FaPhone className="text-4xl transition duration-300 text-white group-hover:text-green-400" />
    ),
    title: "ტელეფონი:",
    info: "+995 555137003",
    bgColor: "bg-green-400",
    hoverBgColor: "hover:bg-green-400",
    textColor: "text-green-400",
    hoverTextColor: "text-white",
    shadowColor: "hover:shadow-green-400",
    hoverInfoColor: "group-hover:text-white", // Change to white on hover
  },
  {
    id: 3,
    icon: (
      <FaMapMarkerAlt className="text-4xl transition duration-300 text-white group-hover:text-yellow-400" />
    ),
    title: "მისამართი:",
    info: "თბილისი, გაზაფხულის 6ა",
    bgColor: "bg-yellow-400",
    hoverBgColor: "hover:bg-yellow-400",
    textColor: "text-yellow-400",
    hoverTextColor: "text-white",
    shadowColor: "hover:shadow-yellow-400",
    hoverInfoColor: "group-hover:text-white", // Change to white on hover
  },
];

const ModernContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full flex flex-col mt-[250px] md:flex-row items-center gap-8 z-50 px-4 md:px-16">
      {contacts.map((contact, index) => (
        <div
          key={contact.id}
          className={classNames(
            "container flex items-center p-4 w-full min-w-[250px] md:w-[450px] sm:w-[300px] h-[180px] bg-white rounded-lg shadow-md cursor-pointer mb-5 transition duration-300 transform hover:scale-105 group",
            {
              [contact.hoverBgColor]: hoveredIndex === index,
            }
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={classNames(
              "flex items-center justify-center rounded-full w-12 h-12 sm:w-16 sm:h-16 transition duration-300",
              `${contact.bgColor} group-hover:bg-white group-hover:shadow-lg ${contact.shadowColor}`
            )}
          >
            {contact.icon}
          </div>
          <div
            className={classNames("ml-2 sm:ml-4 transition duration-300", {
              [contact.textColor]: hoveredIndex !== index,
              [contact.hoverTextColor]: hoveredIndex === index,
            })}
          >
            <h3 className="text-sm sm:text-lg font-bold">{contact.title}</h3>
            <p
              className={classNames(
                "text-xs sm:text-sm transition duration-300",
                {
                  [contact.textColor]: hoveredIndex !== index,
                  [contact.hoverInfoColor]: hoveredIndex === index,
                }
              )}
            >
              {contact.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModernContainer;
