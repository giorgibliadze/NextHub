import Link from "next/link";
import { useRouter } from "next/router";

const solutions = [
  {
    path: "/real-estate-websites",
    kaTitle: "უძრავი ქონების ვებსაიტები",
    enTitle: "Real estate websites",
    kaText: "ბინების ინტერაქტიული შერჩევა, გეგმები, სტატუსები, ფილტრები და მიზნობრივი მოთხოვნები.",
    enText: "Interactive apartment selection, floor plans, availability, filters, and qualified enquiries.",
  },
  {
    path: "/clinic-booking-systems",
    kaTitle: "კლინიკის დაჯავშნის სისტემები",
    enTitle: "Clinic booking systems",
    kaText: "სპეციალობისა და ექიმის არჩევა, განრიგი, ხელმისაწვდომი დროები და ჯავშნების მართვა.",
    enText: "Specialty and doctor selection, schedules, available times, and booking management.",
  },
  {
    path: "/tourism-websites",
    kaTitle: "ტურიზმის ვებსაიტები",
    enTitle: "Tourism websites",
    kaText: "ტურების კატალოგი, მიმართულებები, თარიღები, დაჯავშნის მოთხოვნები და ინდივიდუალური ტურები.",
    enText: "Tour catalogues, destinations, dates, booking requests, and custom tour enquiries.",
  },
];

export default function IndustrySolutions({ className = "" }) {
  const router = useRouter();
  const isEnglish = router.asPath === "/en" || router.asPath.startsWith("/en/");

  return (
    <section
      className={`max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl ${className}`}
      aria-labelledby="industry-solutions-title"
    >
      <div className="text-center mb-8 md:mb-10">
        <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
          {isEnglish ? "Industry solutions" : "ინდუსტრიული გადაწყვეტილებები"}
        </span>
        <h2 id="industry-solutions-title" className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
          {isEnglish
            ? "Web platforms shaped around real business workflows"
            : "რეალურ ბიზნეს პროცესებზე მორგებული ვებ პლატფორმები"}
        </h2>
        <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
          {isEnglish
            ? "Explore dedicated solutions for property sales, patient appointments, and tour enquiries."
            : "გაეცანით უძრავი ქონების გაყიდვების, პაციენტების ვიზიტებისა და ტურების მოთხოვნებისთვის შექმნილ გადაწყვეტილებებს."}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {solutions.map((solution) => (
          <Link
            key={solution.path}
            href={`${isEnglish ? "/en" : ""}${solution.path}`}
            className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6 text-white/75 hover:text-white hover:border-accent/40 transition-colors"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              {isEnglish ? solution.enTitle : solution.kaTitle}
            </h3>
            <p className="text-sm md:text-base leading-7">
              {isEnglish ? solution.enText : solution.kaText}
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-accent">
              {isEnglish ? "Explore solution" : "გაიგე მეტი"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
