// components/ModernContainer.js
import React from "react";
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
    hoverBgColor: "group-hover:bg-white",
    textColor: "text-blue-400",
    hoverTextColor: "group-hover:text-blue-400",
  },
  {
    id: 2,
    icon: (
      <FaPhone className="text-4xl transition duration-300 text-white group-hover:text-green-400" />
    ),
    title: "ტელეფონი:",
    info: "+995 555137003",
    bgColor: "bg-green-400",
    hoverBgColor: "group-hover:bg-white",
    textColor: "text-green-400",
    hoverTextColor: "group-hover:text-green-400",
  },
  {
    id: 3,
    icon: (
      <FaMapMarkerAlt className="text-4xl transition duration-300 text-white group-hover:text-yellow-400" />
    ),
    title: "მისამართი:",
    info: "თბილისი, გაზაფხულის 6ა",
    bgColor: "bg-yellow-400",
    hoverBgColor: "group-hover:bg-white",
    textColor: "text-yellow-400",
    hoverTextColor: "group-hover:text-yellow-400",
  },
];

const ModernContainer = () => {
  return (
    <div className="w-full flex justify-center gap-8 mt-[150px] z-50">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={classNames(
            "flex items-center p-6 w-[35%] h-[160px] bg-white rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105 group",
            `hover:${contact.bgColor} hover:text-white`
          )}
        >
          <div
            className={classNames(
              "flex items-center justify-center rounded-full w-16 h-16 transition duration-300",
              `${contact.bgColor} ${contact.hoverBgColor}`
            )}
          >
            {contact.icon}
          </div>
          <div
            className={classNames(
              "ml-4 transition duration-300",
              `${contact.textColor} group-hover:text-white`
            )}
          >
            <h3 className="text-lg font-bold">{contact.title}</h3>
            <p
              className={classNames(
                "text-sm",
                `${contact.textColor} group-hover:text-white`
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
