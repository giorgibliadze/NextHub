// components/ModernContainer.js
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Sample data array for contacts
const contacts = [
  {
    id: 1,
    icon: <FaEnvelope />,
    title: "ელ-ფოსტა:",
    info: "info@NextHub.ge",
    color: "blue-400",
  },
  {
    id: 2,
    icon: <FaPhone />,
    title: "ტელეფონი:",
    info: "+995 555137003",
    color: "green-400",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "მისამართი:",
    info: "თბილისი, გაზაფხულის 6ა",
    color: "yellow-400",
  },
];

const ModernContainer = () => {
  return (
    <div className="w-full flex justify-center gap-8 mt-[150px] z-50">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`flex items-center p-6 w-[40%] h-[140px] bg-white rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105 group hover:bg-${contact.color} hover:text-white`}
        >
          <div
            className={`flex items-center justify-center rounded-full w-16 h-16 bg-${contact.color} text-white transition duration-300 group-hover:bg-white group-hover:text-${contact.color}`}
          >
            {React.cloneElement(contact.icon, {
              className: `text-4xl transition duration-300 group-hover:text-${contact.color} group-hover:text-white`,
            })}
          </div>
          <div className="ml-4 transition duration-300 group-hover:text-white">
            <h3 className="text-lg font-bold">{contact.title}</h3>
            <p className="text-sm">{contact.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModernContainer;
