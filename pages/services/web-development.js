import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; // Importing fadeIn animation from your variants file
import Link from "next/link";
//counter
import CountUp from "react-countup";

const WebDevelopment = () => {
  // Define an array of pricing packages
  const packages = [
    {
      name: "Startup",
      price: "1000",
      features: [
        "5 გვერდი",
        "ენების არჩევა",
        "სამართავი პანელი",
        "სტატისტიკაზე წვდომა",
        "სოციალური ქსელების ინტეგრაცია",
        "Slideshow - სურათების სლაიდშოუ",
        "ონლაინ ჩატი",
        "1 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Standard",
      price: "2500",
      features: [
        "10 გვერდი",
        "მოიცავს startup პაკეტს",
        "E-commerce ფუნქციონალი",
        "ონლაინ გადახდები",
        "ავტორიზაციის ფუნქცია",
        "ქეშირების მოდულის კონფიგურაცია",
        "3 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Premium",
      price: "5000",
      features: [
        "მოიცავს standard პაკეტს",
        "SEO მოდულის კონფიგურაცია",
        "რთული პლაგინების კონფიგურაცია",
        "B2B & B2C მოდულები",
        "6 თვე მხარდაჭერის სერვისი",
      ],
    },
  ];

  const nextJsPackages = [
    {
      name: "Basic Package",
      price: "1500",
      features: [
        "Basic setup",
        "5 გვერდი",
        "რესპონსიული დიზაინი",
        "SEO setup",
        "1 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Standard Package",
      price: "3000",
      features: [
        "Standard setup",
        "10 გვერდი",
        "გაფართოებული SEO დაყენება",
        "მორგებული დიზაინი",
        "ანალიტიკა",
        "API ინტეგრაცია",
        "3 თვე მხარდაჭერის სერვისი",
      ],
    },
    {
      name: "Premium Package",
      price: "6000",
      features: [
        "ულიმიტო გვერდები",
        "გაფართოებული SEO დაყენება",
        "ინდივიდუალური დიზაინი ანიმაციებით",
        "სისწრაფის ოპტიმიზაცია",
        "ანალიტიკა",
        "E-commerce ფუნქციონალი",
        "ფაილები",
        "6 თვე მხარდაჭერის სერვისი",
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
          Wordpress
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
      <div className="min-h-screen bg-primary/30 py-12">
        <div className="container mx-auto text-center">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl font-bold mt-20 mb-12"
          >
            Next
          </motion.h1>

          {/* Pricing Segments for Next.js Apps */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center"
          >
            {nextJsPackages.map((pkg, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg max-w-[300px] text-left"
              >
                <h2 className="text-2xl font-bold mb-4">{pkg.name}</h2>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  ₾ <CountUp start={0} end={pkg.price} duration={1} /> +
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
      </div>
    </div>
  );
};

export default WebDevelopment;
