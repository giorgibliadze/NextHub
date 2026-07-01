import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const CANONICAL = "https://next-hub.pro/payment/success";
const title = "გადახდა წარმატებით დასრულდა | Next-Hub Solutions";
const description =
  "Next-Hub Solutions-ის გადახდის წარმატების გვერდი შეკვეთის ან სერვისის გადახდის დადასტურებისთვის.";

const PaymentSuccess = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        noindex={true}
        nofollow={true}
        canonical={CANONICAL}
        title={title}
        description={description}
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title,
          description,
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "NextHub გადახდა, Next-Hub Solutions payment, ვებსაიტის შეკვეთა, website development Georgia, digital agency Georgia",
          },
        ]}
      />
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-bold text-green-600">
            გადახდა წარმატებით დასრულდა
          </h1>
          <p className="mt-4 text-gray-700">
            გმადლობთ! თქვენი გადახდა წარმატებით შესრულდა.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded transition duration-300 hover:bg-green-600"
          >
            მთავარი
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default PaymentSuccess;
