"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguageState } from "../LanguageStateProvider";

const websiteTypes = [
  { label: "Landing page", value: "landing", price: 500 },
  { label: "Business website", value: "business", price: 1500 },
  { label: "Online store", value: "store", price: 2500 },
  { label: "Custom web application", value: "app", price: 4000 },
];

const pageCounts = [
  { label: "1-3 pages", value: "1-3", price: 0 },
  { label: "4-7 pages", value: "4-7", price: 500 },
  { label: "8-15 pages", value: "8-15", price: 1200 },
  { label: "15+ pages", value: "15+", price: 2000 },
];

const designLevels = [
  { label: "Basic", value: "basic", price: 0 },
  { label: "Custom design", value: "custom", price: 700 },
  { label: "Premium UI/UX", value: "premium", price: 1500 },
];

const technologies = [
  { label: "WordPress", value: "wordpress", price: 0 },
  { label: "Next.js", value: "nextjs", price: 1000 },
  { label: "Custom stack", value: "custom", price: 2000 },
];

const features = [
  { label: "Contact form", value: "contact-form", price: 150 },
  { label: "Blog", value: "blog", price: 300 },
  { label: "SEO setup", value: "seo", price: 500 },
  { label: "Google Analytics/Search Console", value: "analytics", price: 250 },
  { label: "Online payment integration", value: "payment", price: 500 },
  { label: "Booking system", value: "booking", price: 1000 },
  { label: "User accounts", value: "accounts", price: 1200 },
  { label: "Multilingual website", value: "multilanguage", price: 700 },
  { label: "Admin panel", value: "admin", price: 1500 },
  { label: "First month of maintenance", value: "maintenance", price: 300 },
];

function formatPrice(price) {
  return String(Number(price)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPackageName(price) {
  if (price === 0) return "Select options";
  if (price >= 7500) return "Individual";
  if (price >= 4500) return "Business";
  if (price >= 2500) return "Premium";
  return "Standard";
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

const initialCalculatorState = {
  websiteType: "",
  pageCount: "",
  designLevel: "",
  technology: "",
  selectedFeatures: [],
};

const TAP_SCROLL_THRESHOLD = 8;

const blurActiveElement = () => {
  if (typeof document !== "undefined") {
    document.activeElement?.blur?.();
  }
};

export default function WebsitePriceCalculator({
  compact = false,
  title = "Website price calculator",
  description = "Choose the features you need and get an estimated budget range.",
}) {
  const [websiteType, setWebsiteType] = useLanguageState(
    "website-calculator-type",
    initialCalculatorState.websiteType,
  );
  const [pageCount, setPageCount] = useLanguageState(
    "website-calculator-pages",
    initialCalculatorState.pageCount,
  );
  const [designLevel, setDesignLevel] = useLanguageState(
    "website-calculator-design",
    initialCalculatorState.designLevel,
  );
  const [technology, setTechnology] = useLanguageState(
    "website-calculator-technology",
    initialCalculatorState.technology,
  );
  const [selectedFeatures, setSelectedFeatures] = useLanguageState(
    "website-calculator-features",
    initialCalculatorState.selectedFeatures
  );
  const [leadForm, setLeadForm] = useLanguageState(
    "website-calculator-lead",
    initialLeadForm,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const leadFormRef = useRef(null);
  const featureTouchStartY = useRef(0);
  const featureMovedRef = useRef(false);

  const resetSelections = () => {
    setWebsiteType(initialCalculatorState.websiteType);
    setPageCount(initialCalculatorState.pageCount);
    setDesignLevel(initialCalculatorState.designLevel);
    setTechnology(initialCalculatorState.technology);
    setSelectedFeatures(initialCalculatorState.selectedFeatures);
  };

  const resetCalculatorLeadForm = () => {
    leadFormRef.current?.reset();
    resetSelections();
    setLeadForm(initialLeadForm);
    setFormError("");
    blurActiveElement();
  };

  const estimate = useMemo(() => {
    const selectedType = websiteTypes.find((item) => item.value === websiteType);
    const selectedPages = pageCounts.find((item) => item.value === pageCount);
    const selectedDesign = designLevels.find((item) => item.value === designLevel);
    const selectedTechnology = technologies.find((item) => item.value === technology);
    const featuresTotal = features
      .filter((feature) => selectedFeatures.includes(feature.value))
      .reduce((total, feature) => total + feature.price, 0);

    return (
      (selectedType?.price || 0) +
      (selectedPages?.price || 0) +
      (selectedDesign?.price || 0) +
      (selectedTechnology?.price || 0) +
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

  const trackFeatureTouchStart = (event) => {
    featureTouchStartY.current = event.touches[0].clientY;
    featureMovedRef.current = false;
  };

  const trackFeatureTouchMove = (event) => {
    if (
      Math.abs(event.touches[0].clientY - featureTouchStartY.current) >
      TAP_SCROLL_THRESHOLD
    ) {
      featureMovedRef.current = true;
    }
  };

  const toggleFeatureFromCard = (value) => {
    if (featureMovedRef.current) return;
    toggleFeature(value);
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
      resetCalculatorLeadForm();
      setFormSuccess("Request received.");
      return;
    }

    if (!leadForm.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }

    if (!leadForm.phone.trim() && !leadForm.email.trim()) {
      setFormError("Please enter a phone number or email address.");
      return;
    }

    if (!leadForm.consent) {
      setFormError("Please consent to being contacted.");
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
          websiteType: selectedType?.label || "Not selected",
          pageCount: selectedPages?.label || "Not selected",
          designLevel: selectedDesign?.label || "Not selected",
          selectedFeatures: selectedFeatureLabels,
          technology: selectedTechnology?.label || "Not selected",
          estimatedPrice: `${formatPrice(estimate)} ₾`,
          priceRange: `${formatPrice(estimate)} ₾ - ${formatPrice(maximumEstimate)} ₾`,
          packageName,
          pageUrl: window.location.href,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setFormError(data.message || "The request failed.");
        return;
      }

      resetCalculatorLeadForm();
      setFormSuccess("The request has been successfully sent.");
    } catch {
      setFormError("The request failed. Try it later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="website-price-calculator-title"
      className="website-calculator mx-auto mb-14 max-w-6xl rounded-[24px] border border-white/10 bg-white/5 px-4 py-8 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:px-6 md:py-12"
    >
      <div className="mb-8 text-center md:mb-10">
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:px-5 md:text-sm">
          Pricing
        </span>
        <h2
          id="website-price-calculator-title"
          className="mb-5 text-2xl font-bold leading-tight md:text-4xl"
        >
          {title}
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
          {description}
        </p>
      </div>

      <div
        className={`grid gap-6 ${
          compact ? "grid-cols-1" : "lg:grid-cols-[1.2fr_0.8fr]"
        }`}
      >
        <div>
          <OptionGroup
            title="Website type"
            name="website-type"
            options={websiteTypes}
            value={websiteType}
            onChange={setWebsiteType}
          />
          <OptionGroup
            title="Number of pages"
            name="pages-count"
            options={pageCounts}
            value={pageCount}
            onChange={setPageCount}
          />
          <OptionGroup
            title="Design level"
            name="design-level"
            options={designLevels}
            value={designLevel}
            onChange={setDesignLevel}
          />
          <OptionGroup
            title="Technology"
            name="technology"
            options={technologies}
            value={technology}
            onChange={setTechnology}
          />

          <section className="calculator-section">
            <SectionTitle>Functionality</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.value}
                  className="calculator-option-card flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 transition hover:border-accent/40 hover:bg-accent/10"
                  onTouchStart={trackFeatureTouchStart}
                  onTouchMove={trackFeatureTouchMove}
                >
                  <input
                    id={`calculator-feature-${feature.value}`}
                    type="checkbox"
                    name="features"
                    value={feature.value}
                    checked={selectedFeatures.includes(feature.value)}
                    onMouseDown={() => {
                      featureMovedRef.current = false;
                    }}
                    onChange={() => {
                      if (featureMovedRef.current) return;
                      toggleFeature(feature.value);
                    }}
                    className="mt-1 h-4 w-4 shrink-0 accent-accent"
                  />
                  <button
                    type="button"
                    className="block flex-1 text-left"
                    onMouseDown={() => {
                      featureMovedRef.current = false;
                    }}
                    onClick={() => toggleFeatureFromCard(feature.value)}
                  >
                    <span className="block font-semibold text-white">
                      {feature.label}
                    </span>
                    <span className="text-white/60">+{formatPrice(feature.price)} ₾</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside
          className={`self-start rounded-[24px] border border-accent/30 bg-accent/10 p-5 shadow-[0_24px_80px_rgba(241,48,36,0.12)] md:p-7 ${
            compact ? "" : "lg:sticky lg:top-24"
          }`}
        >
          <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70">
            Estimated price
          </span>
          <div className="text-4xl font-bold text-white md:text-5xl">
            {formatPrice(estimate)} ₾
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Price range</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {formatPrice(estimate)} ₾ - {formatPrice(maximumEstimate)} ₾
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Recommended package</p>
            <p className="mt-1 text-lg font-semibold text-accent">{packageName}</p>
          </div>
          <button
            type="button"
            onClick={resetSelections}
            disabled={
              estimate === 0 &&
              selectedFeatures.length === 0 &&
              !websiteType &&
              !pageCount &&
              !designLevel &&
              !technology
            }
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-accent/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reset selections
          </button>
          <p className="mt-5 text-sm leading-7 text-white/70">
            This is an estimate. The final cost is determined by the project details.
          </p>

          <form ref={leadFormRef} onSubmit={submitLead} className="mt-6 space-y-4">
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
                Name
              </label>
              <div className="form-field-shell">
                <input
                  id="calculator-name"
                  name="name"
                  type="text"
                  value={leadForm.name}
                  onChange={updateLeadForm}
                  className="nh-field text-sm transition"
                  placeholder="Your name"
                  autoComplete="name"
                  data-autofill-safe="true"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <label htmlFor="calculator-phone" className="mb-2 block text-sm text-white/75">
                  Phone
                </label>
                <div className="form-field-shell">
                  <input
                    id="calculator-phone"
                    name="phone"
                    type="tel"
                    value={leadForm.phone}
                    onChange={updateLeadForm}
                    className="nh-field text-sm transition"
                    placeholder="+995"
                    autoComplete="tel"
                    data-autofill-safe="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="calculator-email" className="mb-2 block text-sm text-white/75">
                  Email
                </label>
                <div className="form-field-shell">
                  <input
                    id="calculator-email"
                    name="email"
                    type="email"
                    value={leadForm.email}
                    onChange={updateLeadForm}
                    className="nh-field text-sm transition"
                    placeholder="name@example.com"
                    autoComplete="email"
                    data-autofill-safe="true"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="calculator-company" className="mb-2 block text-sm text-white/75">
                Company name
              </label>
              <div className="form-field-shell">
                <input
                  id="calculator-company"
                  name="company"
                  type="text"
                  value={leadForm.company}
                  onChange={updateLeadForm}
                  className="nh-field text-sm transition"
                  placeholder="Company"
                  autoComplete="organization"
                  data-autofill-safe="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor="calculator-comment" className="mb-2 block text-sm text-white/75">
                Additional comments
              </label>
              <div className="form-field-shell">
                <textarea
                  id="calculator-comment"
                  name="comment"
                  value={leadForm.comment}
                  onChange={updateLeadForm}
                  rows={4}
                  className="nh-field text-sm transition"
                  placeholder="Briefly describe your project"
                  autoComplete="off"
                />
              </div>
            </div>

            <div
              className="calculator-option-card flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/75"
            >
              <input
                id="calculator-consent"
                type="checkbox"
                name="consent"
                checked={leadForm.consent}
                onChange={updateLeadForm}
                className="mt-1 h-4 w-4 shrink-0 accent-accent"
                required
              />
              <label htmlFor="calculator-consent" className="flex-1 cursor-pointer">
                I agree to have Next-Hub Solutions contact me with the contact details I have provided.
              </label>
            </div>

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
              {isSubmitting ? "Sending..." : "Request an exact quote"}
            </button>
          </form>
        </aside>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 md:mt-10 md:p-6">
        <h3 className="mb-4 text-xl font-bold text-white">
          What determines the price of the website?
        </h3>
        <p className="text-sm leading-7 text-white/70 md:text-base md:leading-8">
          The cost of a website depends on design complexity, page count, functionality, SEO, the CMS, the technology stack, and maintenance needs. For detailed planning, see{" "}
          <Link href="/en/webdevelopment" className="text-accent hover:text-white">
            our website development service
          </Link>{" "}
          or{" "}
          <Link href="/en/contact" className="text-accent hover:text-white">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function OptionGroup({ title, name, options, value, onChange }) {
  const touchStartY = useRef(0);
  const movedRef = useRef(false);

  const trackTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
    movedRef.current = false;
  };

  const trackTouchMove = (event) => {
    if (
      Math.abs(event.touches[0].clientY - touchStartY.current) >
      TAP_SCROLL_THRESHOLD
    ) {
      movedRef.current = true;
    }
  };

  const selectOption = (optionValue) => {
    if (movedRef.current) return;
    onChange(value === optionValue ? "" : optionValue);
  };

  return (
    <section className="calculator-section" aria-label={title}>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            aria-label={`${option.label}, ${
              option.price === 0 ? "+0 ₾" : `+${formatPrice(option.price)} ₾`
            }`}
            name={name}
            className={`calculator-option-card block w-full cursor-pointer rounded-2xl border p-4 text-left transition ${
              value === option.value
                ? "border-accent/70 bg-accent/15 text-white"
                : "border-white/10 bg-white/[0.03] text-white/75 hover:border-accent/40 hover:bg-accent/10"
            }`}
            onTouchStart={trackTouchStart}
            onTouchMove={trackTouchMove}
            onMouseDown={() => {
              movedRef.current = false;
            }}
            onClick={() => selectOption(option.value)}
          >
            <span className="block text-sm font-semibold md:text-base">
              {option.label}
            </span>
            <span className="mt-2 block text-sm text-white/60">
              {option.price === 0 ? "+0 ₾" : `+${formatPrice(option.price)} ₾`}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="calculator-section-title-wrap">
      <h3 className="calculator-section-title">{children}</h3>
      <span className="calculator-section-accent" aria-hidden="true" />
    </div>
  );
}
