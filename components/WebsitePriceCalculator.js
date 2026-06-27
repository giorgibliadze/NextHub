import { useMemo, useState } from "react";
import Link from "next/link";

const websiteTypes = [
  { label: "ლენდინგ გვერდი", value: "landing", price: 800 },
  { label: "ბიზნეს ვებსაიტი", value: "business", price: 1500 },
  { label: "ონლაინ მაღაზია", value: "store", price: 2500 },
  { label: "ინდივიდუალური ვებ აპლიკაცია", value: "app", price: 4000 },
];

const pageCounts = [
  { label: "1-3 გვერდი", value: "1-3", price: 0 },
  { label: "4-7 გვერდი", value: "4-7", price: 500 },
  { label: "8-15 გვერდი", value: "8-15", price: 1200 },
  { label: "15+ გვერდი", value: "15+", price: 2000 },
];

const designLevels = [
  { label: "საბაზისო", value: "basic", price: 0 },
  { label: "ინდივიდუალური დიზაინი", value: "custom", price: 700 },
  { label: "პრემიუმ UI/UX", value: "premium", price: 1500 },
];

const technologies = [
  { label: "WordPress", value: "wordpress", price: 0 },
  { label: "Next.js", value: "nextjs", price: 1000 },
  { label: "ინდივიდუალური სტეკი", value: "custom", price: 2000 },
];

const features = [
  { label: "საკონტაქტო ფორმა", value: "contact-form", price: 150 },
  { label: "ბლოგი", value: "blog", price: 300 },
  { label: "SEO გამართვა", value: "seo", price: 500 },
  { label: "Google Analytics/Search Console", value: "analytics", price: 250 },
  { label: "ონლაინ გადახდის ინტეგრაცია", value: "payment", price: 800 },
  { label: "ჯავშნის სისტემა", value: "booking", price: 1000 },
  { label: "მომხმარებლის ანგარიშები", value: "accounts", price: 1200 },
  { label: "მრავალენოვანი საიტი", value: "multilanguage", price: 700 },
  { label: "ადმინისტრატორის პანელი", value: "admin", price: 1500 },
  { label: "საიტის მოვლა პირველი თვე", value: "maintenance", price: 300 },
];

function formatPrice(price) {
  return String(Number(price)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPackageName(price) {
  if (price >= 7500) return "ინდივიდუალური";
  if (price >= 4500) return "ბიზნესი";
  if (price >= 2500) return "პრემიუმი";
  return "სტანდარტი";
}

const initialLeadForm = {
  name: "",
  phone: "",
  email: "",
  company: "",
  comment: "",
  consent: false,
  website: "",
};

export default function WebsitePriceCalculator() {
  const [websiteType, setWebsiteType] = useState(websiteTypes[1].value);
  const [pageCount, setPageCount] = useState(pageCounts[1].value);
  const [designLevel, setDesignLevel] = useState(designLevels[1].value);
  const [technology, setTechnology] = useState(technologies[0].value);
  const [selectedFeatures, setSelectedFeatures] = useState(["contact-form", "seo"]);
  const [leadForm, setLeadForm] = useState(initialLeadForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const estimate = useMemo(() => {
    const selectedType = websiteTypes.find((item) => item.value === websiteType);
    const selectedPages = pageCounts.find((item) => item.value === pageCount);
    const selectedDesign = designLevels.find((item) => item.value === designLevel);
    const selectedTechnology = technologies.find((item) => item.value === technology);
    const featuresTotal = features
      .filter((feature) => selectedFeatures.includes(feature.value))
      .reduce((total, feature) => total + feature.price, 0);

    return (
      selectedType.price +
      selectedPages.price +
      selectedDesign.price +
      selectedTechnology.price +
      featuresTotal
    );
  }, [designLevel, pageCount, selectedFeatures, technology, websiteType]);

  const maximumEstimate = Math.round(estimate * 1.2);
  const packageName = getPackageName(estimate);
  const selectedType = websiteTypes.find((item) => item.value === websiteType);
  const selectedPages = pageCounts.find((item) => item.value === pageCount);
  const selectedDesign = designLevels.find((item) => item.value === designLevel);
  const selectedTechnology = technologies.find((item) => item.value === technology);
  const selectedFeatureLabels = features
    .filter((feature) => selectedFeatures.includes(feature.value))
    .map((feature) => feature.label);

  const toggleFeature = (value) => {
    setSelectedFeatures((current) =>
      current.includes(value)
        ? current.filter((feature) => feature !== value)
        : [...current, value]
    );
  };

  const updateLeadForm = (event) => {
    const { name, type, checked, value } = event.target;

    setLeadForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitLead = async (event) => {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (leadForm.website) {
      setLeadForm(initialLeadForm);
      setFormSuccess("მოთხოვნა მიღებულია.");
      return;
    }

    if (!leadForm.name.trim()) {
      setFormError("გთხოვთ მიუთითოთ სახელი.");
      return;
    }

    if (!leadForm.phone.trim() && !leadForm.email.trim()) {
      setFormError("გთხოვთ მიუთითოთ ტელეფონი ან ელფოსტა.");
      return;
    }

    if (!leadForm.consent) {
      setFormError("გთხოვთ დაეთანხმოთ დაკავშირების პირობებს.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/website-calculator-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leadForm,
          name: leadForm.name.trim(),
          phone: leadForm.phone.trim(),
          email: leadForm.email.trim(),
          company: leadForm.company.trim(),
          comment: leadForm.comment.trim(),
          websiteType: selectedType.label,
          pageCount: selectedPages.label,
          designLevel: selectedDesign.label,
          selectedFeatures: selectedFeatureLabels,
          technology: selectedTechnology.label,
          estimatedPrice: `${formatPrice(estimate)} ₾`,
          priceRange: `${formatPrice(estimate)} ₾ - ${formatPrice(maximumEstimate)} ₾`,
          packageName,
          pageUrl: window.location.href,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setFormError(data.message || "მოთხოვნის გაგზავნა ვერ მოხერხდა.");
        return;
      }

      setLeadForm(initialLeadForm);
      setFormSuccess("მოთხოვნა წარმატებით გაიგზავნა. მალე დაგიკავშირდებით.");
    } catch {
      setFormError("მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="website-price-calculator-title"
      className="mx-auto mb-14 max-w-6xl rounded-[24px] border border-white/10 bg-white/5 px-4 py-8 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:px-6 md:py-12"
    >
      <div className="mb-8 text-center md:mb-10">
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:px-5 md:text-sm">
          ფასი
        </span>
        <h2
          id="website-price-calculator-title"
          className="mb-5 text-2xl font-bold leading-tight md:text-4xl"
        >
          ვებსაიტის ფასის კალკულატორი
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
          აირჩიეთ საჭირო ფუნქციონალი და მიიღეთ სავარაუდო ბიუჯეტი.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <OptionGroup
            title="ვებსაიტის ტიპი"
            name="website-type"
            options={websiteTypes}
            value={websiteType}
            onChange={setWebsiteType}
          />
          <OptionGroup
            title="გვერდების რაოდენობა"
            name="pages-count"
            options={pageCounts}
            value={pageCount}
            onChange={setPageCount}
          />
          <OptionGroup
            title="დიზაინის დონე"
            name="design-level"
            options={designLevels}
            value={designLevel}
            onChange={setDesignLevel}
          />
          <OptionGroup
            title="ტექნოლოგია"
            name="technology"
            options={technologies}
            value={technology}
            onChange={setTechnology}
          />

          <fieldset className="rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5">
            <legend className="px-1 text-base font-semibold text-white md:text-lg">
              ფუნქციონალი
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <label
                  key={feature.value}
                  className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 transition hover:border-accent/40 hover:bg-accent/10"
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature.value)}
                    onChange={() => toggleFeature(feature.value)}
                    className="mt-1 h-4 w-4 accent-accent"
                  />
                  <span className="flex-1">
                    <span className="block font-semibold text-white">
                      {feature.label}
                    </span>
                    <span className="text-white/60">+{formatPrice(feature.price)} ₾</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="self-start rounded-[24px] border border-accent/30 bg-accent/10 p-5 shadow-[0_24px_80px_rgba(241,48,36,0.12)] md:p-7 lg:sticky lg:top-24">
          <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70">
            სავარაუდო ღირებულება
          </span>
          <div className="text-4xl font-bold text-white md:text-5xl">
            {formatPrice(estimate)} ₾
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">ფასის დიაპაზონი</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {formatPrice(estimate)} ₾ - {formatPrice(maximumEstimate)} ₾
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">რეკომენდებული პაკეტი</p>
            <p className="mt-1 text-lg font-semibold text-accent">{packageName}</p>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/70">
            ფასი სავარაუდოა და საბოლოო ღირებულება განისაზღვრება პროექტის
            დეტალების მიხედვით.
          </p>

          <form onSubmit={submitLead} className="mt-6 space-y-4">
            <input
              type="text"
              name="website"
              value={leadForm.website}
              onChange={updateLeadForm}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="calculator-name" className="mb-2 block text-sm text-white/75">
                სახელი
              </label>
              <input
                id="calculator-name"
                name="name"
                type="text"
                value={leadForm.name}
                onChange={updateLeadForm}
                className="nh-input w-full px-4 py-3 text-sm transition placeholder:text-white/35"
                placeholder="თქვენი სახელი"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <label htmlFor="calculator-phone" className="mb-2 block text-sm text-white/75">
                  ტელეფონი
                </label>
                <input
                  id="calculator-phone"
                  name="phone"
                  type="tel"
                  value={leadForm.phone}
                  onChange={updateLeadForm}
                  className="nh-input w-full px-4 py-3 text-sm transition placeholder:text-white/35"
                  placeholder="+995"
                />
              </div>

              <div>
                <label htmlFor="calculator-email" className="mb-2 block text-sm text-white/75">
                  ელფოსტა
                </label>
                <input
                  id="calculator-email"
                  name="email"
                  type="email"
                  value={leadForm.email}
                  onChange={updateLeadForm}
                  className="nh-input w-full px-4 py-3 text-sm transition placeholder:text-white/35"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="calculator-company" className="mb-2 block text-sm text-white/75">
                კომპანიის სახელი
              </label>
              <input
                id="calculator-company"
                name="company"
                type="text"
                value={leadForm.company}
                onChange={updateLeadForm}
                className="nh-input w-full px-4 py-3 text-sm transition placeholder:text-white/35"
                placeholder="კომპანია"
              />
            </div>

            <div>
              <label htmlFor="calculator-comment" className="mb-2 block text-sm text-white/75">
                დამატებითი კომენტარი
              </label>
              <textarea
                id="calculator-comment"
                name="comment"
                value={leadForm.comment}
                onChange={updateLeadForm}
                rows={4}
                className="nh-input w-full resize-none px-4 py-3 text-sm transition placeholder:text-white/35"
                placeholder="მოკლედ აღწერეთ პროექტი"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/75">
              <input
                type="checkbox"
                name="consent"
                checked={leadForm.consent}
                onChange={updateLeadForm}
                className="mt-1 h-4 w-4 accent-accent"
                required
              />
              <span>
                ვეთანხმები, რომ Next-Hub Solutions დამიკავშირდეს ჩემს მიერ
                მითითებულ საკონტაქტო მონაცემებზე.
              </span>
            </label>

            {formError && (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                {formError}
              </p>
            )}
            {formSuccess && (
              <p className="rounded-2xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-200">
                {formSuccess}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-center font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-white hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-accent disabled:hover:text-white"
            >
              {isSubmitting ? "იგზავნება..." : "შემომთავაზეთ ზუსტი ფასი"}
            </button>
          </form>
        </aside>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 md:mt-10 md:p-6">
        <h3 className="mb-4 text-xl font-bold text-white">
          რა განსაზღვრავს ვებსაიტის ფასს?
        </h3>
        <p className="text-sm leading-7 text-white/70 md:text-base md:leading-8">
          ვებსაიტის ფასი დამოკიდებულია დიზაინის სირთულეზე, გვერდების რაოდენობაზე,
          ფუნქციონალზე, SEO ოპტიმიზაციაზე, CMS-ის არჩევანზე, ტექნოლოგიურ სტეკზე
          და საიტის მოვლის საჭიროებაზე. დეტალური დაგეგმვისთვის იხილეთ{" "}
          <Link href="/webdevelopment" className="text-accent hover:text-white">
            ვებსაიტის დამზადების სერვისი
          </Link>{" "}
          ან{" "}
          <Link href="/contact" className="text-accent hover:text-white">
            დაგვიკავშირდით
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function OptionGroup({ title, name, options, value, onChange }) {
  return (
    <fieldset className="rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5">
      <legend className="px-1 text-base font-semibold text-white md:text-lg">
        {title}
      </legend>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer rounded-2xl border p-4 transition ${
              value === option.value
                ? "border-accent/70 bg-accent/15 text-white"
                : "border-white/10 bg-white/[0.03] text-white/75 hover:border-accent/40 hover:bg-accent/10"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <span className="block text-sm font-semibold md:text-base">
              {option.label}
            </span>
            <span className="mt-2 block text-sm text-white/60">
              {option.price === 0 ? "+0 ₾" : `+${formatPrice(option.price)} ₾`}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
