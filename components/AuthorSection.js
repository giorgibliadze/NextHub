export default function AuthorSection({ author = "Next-Hub Solutions" }) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-black/20 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-lg font-bold text-accent">
          NH
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            ავტორი
          </p>
          <h2 className="mb-3 text-xl font-bold md:text-2xl">{author}</h2>
          <p className="text-sm leading-7 text-white/68 md:text-base md:leading-8">
            {author} ქმნის ვებსაიტებს, ვებ დიზაინს, SEO ოპტიმიზაციას,
            პროგრამულ სისტემებს და საიტის მოვლის სტრატეგიას ბიზნესებისთვის,
            რომლებსაც სჭირდებათ არა მხოლოდ ლამაზი გვერდი, არამედ გაზომვადი
            ციფრული შედეგი.
          </p>
        </div>
      </div>
    </section>
  );
}
