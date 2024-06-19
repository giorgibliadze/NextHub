import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; // Importing fadeIn animation from your variants file
import CountUp from "react-countup"; // Importing CountUp for the counter animation

const WebDevelopment = () => {
  // Define an array of pricing packages
  const packages = [
    {
      name: "Startup",
      startPrice: 1000,
      price: 2500,
      features: [
        "1 გვერდი",
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "სოციალური ქსელების ინტეგრაცია",
        "Slideshow - სურათების სლაიდშოუ",
        "ჩვენს შესახებ",
        "სიახლეები",
        "სერვისები",
        "პარტნიორების ლოგოები",
        "ფოტო გალერეა",
        "ონლაინ ჩატი",
        "კონტაქტი",
        "1 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Standard",
      startPrice: 2500,
      price: 4000,
      features: [
        "5 გვერდი",
        "მარტივი სამართავი პანელი",
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "მთავარი",
        "ჩვენს შესახებ",
        "სიახლეები",
        "სერვისები",
        "კონტაქტი",
        "ფილიალები",
        "პროექტები – მიმდინარე, დასრულებული",
        "ფოტო გალერეა",
        "ვიდეო გალერეა",
        "ვიზიტორების სტატისტიკა",
        "სოციალური ქსელების ინტეგრაცია",
        "Slideshow – სურათების სლაიდშოუ",
        "ონლაინ ჩატი",
        "პოპულარული სიახლეები",
        "კლიენტების მოდული",
        "პარტნიორების ლოგოები",
        "3 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Premium",
      startPrice: 5000,
      price: 7000,
      features: [
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "სამართავი პანელი",
        "პოპულარული სიახლეები",
        "Top პროდუქცია",
        "პარტნიორების ლოგოები",
        "ონლაინ ჩატი",
        "პროდუქციის ძიება",
        "პროდუქციის სორტირება და ფილტრაცია",
        "სასურველი პროდუქცია – Wish List",
        "პროდუქციის კალათაში დამატება",
        "პროდუქციის შეკვეთა",
        "ვიზიტორების სტატისტიკა",
        "სოციალური ქსელების ინტეგრაცია",
        "რეგისტრაციის ფორმა – ფიზ, იურიდ.",
        "Facebook-ით რეგისტრაცია",
        "Google-თ რეგისტრაცია",
        "პროდუქციის შეძენა Visa/Mastercard/Amex ბარათებით",
        "პროდუქციის შეძენა ონლაინ განვადებით",
        " გაყიდვების სტატისტიკა",
        " ადგილზე მიტანის მოდული",
        "B2B & B2C მოდულები",
        "6 თვე მხარდაჭერის სერვისი",
        "და სხვა",
      ],
    },
  ];

  const [expandedPackage, setExpandedPackage] = useState(null);

  const handleShowMore = (index) => {
    setExpandedPackage(expandedPackage === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto text-center">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl font-bold mt-20 mb-12 text-gray-800"
        >
          Web Development
        </motion.h1>

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
              className={`p-6 rounded-lg shadow-lg bg-white transform transition-transform duration-300 ${
                expandedPackage === index ? "max-h-[1000px]" : "max-h-[400px]"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {pkg.name}
              </h2>
              <div className="text-xl xl:text-3xl font-extrabold text-accent mb-2">
                <span className="text-gray-800">₾</span>{" "}
                <CountUp
                  start={pkg.startPrice}
                  end={pkg.startPrice}
                  duration={0}
                />
                <span className="text-gray-800"> - </span>
                <CountUp start={pkg.startPrice} end={pkg.price} duration={1} />
              </div>
              <ul className="list-disc list-inside mb-4 text-left text-gray-700">
                {pkg.features
                  .slice(
                    0,
                    expandedPackage === index ? pkg.features.length : 10
                  )
                  .map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
              </ul>
              <div className="flex justify-center">
                <button
                  className="w-[150px] lg:w-[200px] py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-colors duration-300"
                  onClick={() => handleShowMore(index)}
                >
                  {expandedPackage === index ? "Show Less" : "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
