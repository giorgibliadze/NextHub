/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function SeoFaqPage({ groups, schemas }) {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl md:text-6xl font-bold xl:mt-8 text-center"
        >
          Frequently asked questions <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
        >
          Answers to common questions about website development, software development, web design, SEO, Google Business Profile optimization, and website maintenance.
        </motion.p>

        <motion.section
          variants={fadeIn("up", 0.22)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-6xl mx-auto mt-10 md:mt-12 mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              SEO Knowledge Base
            </span>

            <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
              Practical answers for better websites
            </h2>

            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
              Use these answers to compare services, prepare a project brief, understand maintenance needs, and choose the right next step.
            </p>
          </div>

          <div className="mb-10 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              View services
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                ["/en/software-development", "Software development"],
                ["/en/web-design", "Web design"],
                ["/en/seo-services", "SEO services"],
                [
                  "/en/google-business-profile-optimization",
                  "Google Business Profile",
                ],
                ["/en/website-maintenance-services", "Website maintenance"],
                ["/en/webdevelopment", "Website development"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-accent/80 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {groups.map((group) => (
              <section key={group.title}>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {group.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {group.faqs.map(([question, answer]) => (
                    <div
                      key={question}
                      className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
                    >
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                        {question}
                      </h3>
                      <p className="text-white/70 leading-7 text-sm">
                        {answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mobile-bottom-safe-space rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8 mt-10 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              Are you still planning a project?
            </h2>
            <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
              Share the goal of your website, software system, or SEO project with Next-Hub Solutions. We will help you choose the right service before you invest in the wrong page, platform, or campaign.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
            >
              Contact Next-Hub
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
}
