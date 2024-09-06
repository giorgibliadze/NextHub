import { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentFail = () => {
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    // Any additional logic (e.g., logging the failure) can be added here
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">
          გადახდა ვერ მოხერხდა
        </h1>
        <p className="mt-4 text-gray-700">
          სამწუხაროდ, თქვენი გადახდა ვერ დამუშავდა. გთხოვთ, სცადოთ ხელახლა.
        </p>
        {orderId && <p className="mt-4 text-gray-500">Order ID: {orderId}</p>}
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          მთავარი
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
