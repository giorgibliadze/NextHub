import { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentSuccess = () => {
  const router = useRouter();
  const { orderId } = router.query; // Assuming the payment system redirects with orderId in the URL

  useEffect(() => {
    // Any logic to fetch more payment details or update status if needed
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-green-600">
        გადახდა წარმატებით დასრულდა!
        </h1>
        <p className="mt-4 text-gray-700">
        გმადლობთ შესყიდვისთვის. თქვენი შეკვეთა დასრულებულია
        წარმატებით.
        </p>
        {orderId && <p className="mt-4 text-gray-500">Order ID: {orderId}</p>}
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          მთავარი
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
