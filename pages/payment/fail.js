import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const PaymentFail = () => {
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    // Any additional logic, like logging the failure
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-red-600">
          გადახდა წარუმატებელია
        </h1>
        <p className="mt-4 text-gray-700">
          თქვენი გადახდის პროცესი წარუმატებლად დასრულდა. გთხოვთ სცადოთ თავიდან.
        </p>
        {orderId && <p className="mt-4 text-gray-500">Order ID: {orderId}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded transition duration-300 hover:bg-red-600"
        >
          მთავარი
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PaymentFail;
