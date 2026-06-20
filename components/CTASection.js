import Link from "next/link";

export default function CTASection({
  title = "გსურთ მსგავსი შედეგი თქვენი ბიზნესისთვის?",
  text = "დაუკავშირდით Next-Hub Solutions-ს და ერთად დავგეგმოთ ვებსაიტის დამზადება, ვებ დეველოპმენტი, SEO მომსახურება ან Google Business Profile ოპტიმიზაცია.",
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-accent/30 bg-accent/10 p-6 shadow-[0_24px_80px_rgba(241,48,36,0.14)] md:p-9">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70">
            Next-Hub Solutions
          </span>
          <h2 className="mb-4 max-w-2xl text-2xl font-bold leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-white/74 md:text-base md:leading-8">
            {text}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 hover:bg-white hover:text-accent md:w-auto"
        >
          დაგვიკავშირდით
        </Link>
      </div>
    </section>
  );
}
