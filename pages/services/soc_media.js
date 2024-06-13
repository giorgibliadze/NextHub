import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const soc_media = () => {
  const packages = [
    {
      name: "Startup",
      price: "700",
      features: [
        "თვეში 4 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
      ],
    },
    {
      name: "Standard",
      price: "1000",
      features: [
        "თვეში 8 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, Linkdin",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "ყოველთვიური ანგარიში",
      ],
    },
    {
      name: "Premium",
      price: "1500",
      features: [
        "ორენოვანი 8 პოსტი თვეში",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, Linkdin",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "Google ADS კამპანია",
        "E-MAIL მარკეტინგი",
        "ყოველთვიური ანგარიში",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-primary/30 py-12">
      <div className="container mx-auto text-center">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl font-bold mt-20 mb-12"
        >
          სოციალური მედია მენეჯმენტი
        </motion.h1>

        {/* Pricing Segments for WordPress */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg max-w-[300px] text-left"
            >
              <h2 className="text-2xl font-bold mb-4">{pkg.name}</h2>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                ₾ <CountUp start={500} end={pkg.price} duration={1} /> +
              </div>
              <ul className="list-disc list-inside mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* Add a button or link for purchasing */}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="min-h-screen bg-primary/30 py-12"></div>
    </div>
  );
};

export default soc_media;
