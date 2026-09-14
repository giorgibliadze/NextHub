const siteUrl = "https://next-hub.pro/en";

const serviceLinks = [
  { href: "/en/software-development", label: "Software development" },
  { href: "/en/web-design", label: "Web design" },
  { href: "/en/seo-services", label: "SEO services" },
  {
    href: "/en/google-business-profile-optimization",
    label: "Google Business Profile Optimization",
  },
  { href: "/en/website-maintenance-services", label: "Website maintenance" },
  { href: "/en/webdevelopment", label: "Website development" },
  { href: "/en/ai-faq", label: "AI FAQ" },
];

const sharedPricing = {
  software: [
    {
      name: "Start.",
      price: "From ₾2,500",
      features: [
        "Business Process Analysis.",
        "basic functional planning.",
        "a mobile interface.",
        "the process of the administrator.",
        "Basic integrations.",
        "Support for launch.",
      ],
    },
    {
      name: "Development.",
      price: "From ₾6,000",
      features: [
        "individual application architecture.",
        "User roles and rights.",
        "API integrations.",
        "a dashboard or a portal.",
        "Events Analytics.",
        "3 months of support",
      ],
    },
    {
      name: "scale.",
      price: "Individual",
      features: [
        "Complex product plan.",
        "a multi-modular system.",
        "Extended Data Structure.",
        "Automation processes.",
        "Performance optimization",
        "Long-term development support.",
      ],
    },
  ],
  standard: [
    {
      name: "Standard.",
      price: "From ₾700",
      features: [
        "Strategic Consulting.",
        "Page-level recommendations.",
        "Mobile performance.",
        "SEO customized structure.",
        "Running Analytics.",
        "Launching checklist.",
      ],
    },
    {
      name: "Premium.",
      price: "From ₾1,500",
      features: [
        "Everything is standard.",
        "conversion-focused sections.",
        "Technical Optimization.",
        "Content support.",
        "the reporting dashboard.",
        "3 months of support",
      ],
    },
    {
      name: "Business.",
      price: "Individual",
      features: [
        "complete strategy and execution.",
        "several landing pages.",
        "Extended Integrations.",
        "monthly optimization.",
        "Chase-based reporting.",
        "Dedicated support",
      ],
    },
  ],
};

function pageBase({
  slug,
  title,
  description,
  h1,
  badge,
  heroHeading,
  heroText,
  intro,
  serviceType,
  keywords,
  images,
  featureCards,
  sections,
  process,
  cta,
  caseStudy,
  faqs,
  deepDive = [],
  pricing = sharedPricing.standard,
  pricingNote = "",
  showWebsiteCalculator = false,
}) {
  const planningDepth = [
    {
      title: `${serviceType}: how to evaluate a project before investing`,
      paragraphs: [
        `${serviceType} should not be judged by visual impressions alone. A strong project needs a clear business goal, a well-defined audience, logical content structure, a realistic launch plan, and measurable outcomes. At Next-Hub Solutions, we treat design, web development, SEO, performance, and conversion as one system that explains the offer, builds trust, and leads users toward a specific action.`,
        `Initial analysis is where an idea becomes focused and unnecessary cost is avoided. We examine what the business sells, how customers search, what competitors communicate, which pages already exist, the technical constraints, and the most important action—such as a call, form submission, order, booking, Google Business Profile visit, or return visit. This information defines the scope and protects the project from looking polished without supporting real customer decisions.`,
        `${serviceType} should also be maintainable over time. Copy should be easy to update, components should be reusable, metadata should match each page's purpose, schema should describe the service accurately, and internal links should connect related services. A consistent design language also lets users move between software, web design, SEO, Google Business Profile optimization, and maintenance without relearning the interface.`,
      ],
    },
    {
      title: "What the client should prepare",
      paragraphs: [
        `the best results come when the business is given a practical context from the very beginning. It's useful for existing website links, examples of competitors, desired services, frequent customer inquiries, price range, project photos, recommendations, brand materials, and Search Console or analytics data. This information helps us create text and structure that reflects real business rather than marketing phrases in general.`,
        `it's also important to determine in advance what the project needs to change. Some businesses need more organic lead, some need better web design, stable site support, Google Maps optimization, an individual dashboard, or a strong landing page. for advertising when the measure of success is clear, H1, H2 headlines, price cards, CTA, FAQ, schema and internal links work around one goal.`,
        `Strong projects continue to develop after launch. Search data shows new pages, user queries become FAQ, the key enhances the service page, and site maintenance can be converted to conversion improvement. Next-Hub Solutions considers each page as part of a growth system: we run the best source version, we measure user and search engine response, and then we improve based on facts.`,
        `this approach simplifies future work. When the first page is structured with a strong structure, the same component system can be used by new service pages, local landing pages, case study-s, and campaign pages so that the brand experience is not compromised. As a result, the website grows and maintains a uniform visual language, technical excellence, and ease of maintenance.`,
      ],
    },
  ];

  return {
    slug,
    url: `${siteUrl}/en${slug}`,
    title,
    description,
    h1,
    badge,
    heroHeading,
    heroText,
    intro,
    serviceType,
    keywords,
    images,
    featureCards,
    sections,
    deepDive: [...deepDive, ...planningDepth],
    process,
    cta,
    caseStudy,
    faqs,
    pricing,
    pricingNote,
    showWebsiteCalculator,
    internalLinks: serviceLinks.filter((link) => link.href !== `/en${slug}`),
  };
}

const softwareFaqs = [
  {
    question: "What kind of software does Next-Hub Solutions make?",
    answer:
      "we're building web applications, dashboards, client portals, search engines, internal work tools, CRM type processes, ecommerce systems, API integrations, and automation platforms that help businesses reduce manual workload.",
  },
  {
    question: "What's the difference between software development and website development?",
    answer:
      "the website basically provides information to the user and collects leads, while the software manages processes, users, data, rights, and business logic. In many projects, both work together: a public website for marketing and a closed system for operations.",
  },
  {
    question: "Can you update your existing business system?",
    answer:
      "Yes, we're analyzing the process, finding the weaknesses, improving the interface, building the necessary modules, integrating API-s, and gradually moving the business to a cleaner, more orderly digital system.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Software projects include launch support, monitoring and, if desired, long-term development for new features, bug fixes, integrations and performance improvements.",
  },
];

const webDesignFaqs = [
  {
    question: "What is included in the web design services?",
    answer:
      "Web design includes page structure, visual direction, responsive layout-, conversion sections, UI components, typography, color use, CTA layout, and a design system ready for development.",
  },
  {
    question: "Are you designing a mobile-friendly website?",
    answer:
      "Yes. All designs are designed for mobile, tablet and desktop, so that headings, cards, shapes, images, and action buttons are clear and usable for all sizes.",
  },
  {
    question: "Is it possible to have an existing website redesign?",
    answer:
      "Yes, we analyze the existing site, we maintain what helps the conversion, and we prevent weak sections with clearer messages, the right hierarchy, trust signals, and better customer behavior.",
  },
  {
    question: "Are you creating a landing page design?",
    answer:
      "Yes, we're building landing pages for services, Google Ads for campaigns, for lead collection and product launches, where there's profit, evidence, prices, FAQ and conversion-oriented CTA..",
  },
];

const seoFaqs = [
  {
    question: "What's in the SEO service?",
    answer:
      "SEO service includes keyword research, technical audit, metadata, page structure, internal links, content planning, running Search Console, local SEO recommendations, reporting and continuous improvement.",
  },
  {
    question: "How long does the SEO optimization result take?",
    answer:
      "Some technical improvements work quickly, but stable organic growth usually takes a few months. Google takes time to refresh, evaluate, and trust pages.",
  },
  {
    question: "Are you doing a technical SEO audit?",
    answer:
      "Yes. We check crawlability-, indexing, metadata, canonical URL-, page speed, schema markup-, internal links, duplicate content-, headings and conversion issues.",
  },
  {
    question: "SEO service helps service businesses in Georgia?",
    answer:
      "Yes, a service business can be strengthened in local and commercial searches with dedicated landing page-, Google Business Profile optimization, review strategy, and location-specific content.",
  },
];

const gbpFaqs = [
  {
    question: "What is Google Business Profile optimization?",
    answer:
      "Google Business Profile optimization improves the business profile that you see in Google Search- and Google Maps. We process categories, services, descriptions, photos, posts, review process, attributes and local signals.",
  },
  {
    question: "\"Can you help me appear on Google Maps?\"",
    answer:
      "We improve relevance and local signals by filling out profiles, optimizing services, local content, citation-, review strategy, and landing page- website that supports Google Maps optimization.",
  },
  {
    question: "Do review-s affect local visibility?",
    answer:
      "Yes. review-s are an important signal of confidence and prominence-. The natural process of asking for, responding to and analyzing review-s helps both visibility and conversion.",
  },
  {
    question: "Is a website necessary for Google Business Profile-?",
    answer:
      "a website is not necessary to create a profile, but a strong site is a significant contributor to the relevance, trust, conversion and organic results of the services that are associated with the profile.",
  },
];

const maintenanceFaqs = [
  {
    question: "What is website maintenance and maintenance?",
    answer:
      "Site maintenance means the website is running safely, up to date, quickly and smoothly: backup-s, monitoring, content updating, technical errors, SEO checks and performance improvements.",
  },
  {
    question: "How often does the website need maintenance?",
    answer:
      "Most business websites need monthly maintenance. ecommerce, high-traffic or lead-oriented sites often need weekly checks, as downtime, outdated modules or broken forms directly damage revenue.",
  },
  {
    question: "Can you support a site that you haven't shut down?",
    answer:
      "Yes. We start with an audit, we check the technical status, we identify the risks, and then we design the care plan based on the platform, the business objectives, and the technical status.",
  },
  {
    question: "Does maintaining the site include SEO?",
    answer:
      "Site maintenance can include basic SEO checks: metadata updating, broken link- correcting, speed improving, Search Console monitoring and content updating.",
  },
];

export const seoPages = {
  "software-development": pageBase({
    slug: "software-development",
    title: "Software development.",
    description:
      "Software development for business: Web applications, CRM processes, dashboards, API integrations and custom software development.",
    h1: "Software development.",
    badge: "individual software.",
    serviceType: "Software development.",
    showWebsiteCalculator: true,
    keywords:
      "website design, web application development, Next.js development, WordPress site, React developer Georgia, web development Tbilisi, business website Georgia, custom software development Georgia, CRM system, business software",
    intro:
      "Next-Hub Solutions creates practical software for businesses that no longer have a presentation-only website. We design and develop business portals, dashboards, cloud systems, customer spaces, internal work tools, and processes related to API- that make everyday operations cleaner and more scalable.",
    heroHeading: "individual software for real business processes.",
    heroText:
      "A strong software project starts with understanding how your business actually works, analyzing users, data, decisions, rights, and replay jobs, and then building a web system that's fast, user-friendly, and easy to use for your team.",
    images: [
      { src: "/technology.webp", alt: "Software development." },
      { src: "/Data-analytics.webp", alt: "Create a Business Dashboard." },
    ],
    featureCards: [
      {
        title: "Business portals.",
        text: "closed portals for customers, employees or partners with secure access, easy navigation, download and role-based processes.",
      },
      {
        title: "Automation Systems.",
        text: "a software system that manually minimizes work forms, databases, messages, approvals, reports, and third-party tools.",
      },
      {
        title: "Scalable Architecture.",
        text: "React, Next.js and API-first approach to make the app work fast today and add new modules easily tomorrow.",
      },
    ],
    sections: [
      {
        title: "What we build",
        items: [
          {
            title: "dashboards and admin panel-s.",
            text: "we create dashboards that make operational data understandable. Managers can control orders, leads, customer activity, payments, supplies, tasks, and results in one space.",
          },
          {
            title: "the demand and demand systems.",
            text: "We're building systems for Javshn, quotation request-, and appointment that collect the right information, scan fields, send messages, and minimize messaging.",
          },
          {
            title: "CRM and the user processes.",
            text: "If the team needs customer management, we start the process with lead steps, records, contact history, reminder-, documents and reports.",
          },
          {
            title: "API integrations.",
            text: "we're combining payments, analytics, email services, CRM-, delivery systems, maps, forms, and internal databases to make the information move less manually.",
          },
        ],
      },
      {
        title: "Why Business Chooses custom software-",
        items: [
          {
            title: "Less operational chaos.",
            text: "An individual program is especially useful when the same thing is repeated every day, the team is dependent on spreadsheet-, or the requirements for email- are lost in the chats.",
          },
          {
            title: "Better visibility.",
            text: "a properly organized system gives businesses a better view of the work in progress, revenue opportunities, customer demands, and bottleneck-.",
          },
          {
            title: "pure customer experience",
            text: "the client can send a request, view the status, upload information, pay or receive update with a structured interface.",
          },
          {
            title: "Long-term control.",
            text: "When the core process is in your business-specific system, you can add modules, integrations, and gradually reduce the chaotic subscription-s.",
          },
        ],
      },
      {
        title: "Technical Approach.",
        items: [
          {
            title: "analysis before development.",
            text: "before we write the code, we determine the users, roles, rights, data model, edge case-s, and success metrics to make sure the budget is spent on the right function.",
          },
          {
            title: "convenient delivery.",
            text: "the goal is not just to launch. The goal is to create a system that can be updated, expanded, monitored, and clearly passed on to the team in the future.",
          },
        ],
      },
    ],
    deepDive: [
      {
        title: "When is custom software the right choice?",
        paragraphs: [
          "Custom software is a good investment when the team has already grown to spreadsheet-s, general applications, or manual coordination. If each new customer creates a long chain of messages, data copying, status checks, and reminder-s, the individual system will quickly reduce the friction-. The goal is not to create technology, but to build a single workspace for business.",
          "Many companies start with a ready-made software, which is often the right step. The problem arises when the process becomes specific: different roles, local payments, approval routes, closed client space, accounting, or integrations that are not naturally interconnected.",
          "a strong software project should be planned in phases. The first version should solve the most important operating problem, not all the functions that are represented. After launch, the data and the feedback team will show which module is worth expanding.",
        ],
      },
      {
        title: "How the software helps grow and SEO",
        paragraphs: [
          "software helps grow even when public pages and a closed system are properly connected. For example, a marketplace-, booking platform-, or a service portal may be needed to detect SEOfriendly landing page and secure dashboard operations.",
          "In lead-dependent businesses, custom software improves conversion after the first visit. quote request tool raises better demand, customer dashboard reduces support calls, reporting portal increases retention-, and booking system reduces the gap between interest and action.",
          "The best software projects are measurable. Before we start, we define the signals: fewer leads lost, faster response, fewer hands on update, more finished stock, clean accounts, or better customer retention..",
        ],
      },
    ],
    process: {
      title: "the process of creating software.",
      steps: [
        "Discovery call, work process audit and business goals.",
        "function prioritization, roles and technical specifications.",
        "UX structure, screen layout and flow- review.",
        "Frontend, backend, database and integration development.",
        "testing, performance testing, launch and development plan.",
      ],
    },
    cta: {
      title: "Do you need an individual business program?",
      text: "Tell us what your team is doing today, hand-in-hand, and help you decide whether custom software, a website, an integration or a site support plan is the best next step.",
    },
    caseStudy: {
      title: "Chase's example: Service Operations Dashboard.",
      text: "A service company that receives requests via phone, social media and forms needs a single space for leaders and follow-up-s to be fair. Custom dashboard combines requests, statuses, customer notes-, missed opportunity-s and messages. The result is fewer leads lost, faster response, and better team accountability.",
    },
    faqs: softwareFaqs,
    pricing: sharedPricing.software,
  }),

  "web-design": pageBase({
    slug: "web-design",
    title: "Web design.",
    description:
      "Web design for business: responsive website design, landing page design, redesign and conversion-oriented UI/UX structure.",
    h1: "Web design.",
    badge: "UI and Website Design",
    serviceType: "Web design.",
    showWebsiteCalculator: true,
    keywords:
      "website design, website design, web design, responsive website design, landing page design, web design Tbilisi, website design Georgia, business website Georgia, website design, redesign, Next-Hub Solutions",
    intro:
      "Next-Hub Solutions creates a web design that looks modern, clean and reliable, but doesn't lose business function. We use the same visual language as our web development pages: clear sections, responsive cards, powerful CTA, and a structure that quickly shows the user what you're offering.",
    heroHeading: "Responsive Web design that focuses on action.",
    heroText:
      "Good web design is not decoration. It's a structure that helps users understand the service, endorse the business, compare options, and take the next step. We project pages on real decision making, not empty visual trends.",
    images: [
      { src: "/user-experience.webp", alt: "Web design." },
      { src: "/well-structured.webp", alt: "the structure of the website design." },
    ],
    featureCards: [
      {
        title: "conversion structure.",
        text: "the sections are arranged according to the user's intent: problem, offer, benefit, process, proof, prices, FAQ and CTA.",
      },
      {
        title: "Responsive behavior",
        text: "the design is designed for mobile, tablet, and desktop to make text, cards, images, and CTA work properly for all sizes.",
      },
      {
        title: "Brand clarity.",
        text: "we're creating a visual system that shows businesses trustworthy, focused, and unified on all the important pages.",
      },
    ],
    sections: [
      {
        title: "What is Web Design?",
        items: [
          {
            title: "Homepage and service pages",
            text: "we design the homepage and the service page, which respond quickly to the offer and create a clear thematic structure for the search engines with headings, text and internal links.",
          },
          {
            title: "Landing page design.",
            text: "The campaign page needs a clearer focus. We're creating landing pages with profit-based sections, trust signals-, context, forms, and FAQ.",
          },
          {
            title: "redesign",
            text: "for an existing site, we evaluate what works, find weak messages, clear the excesses, and we change the experience so that the user can find the information they need quickly.",
          },
          {
            title: "Design system",
            text: "single buttons, cards, forms, spacing, image treatment and sections that speed up future pages and make the site more user-friendly.",
          },
        ],
      },
      {
        title: "The benefits of professional web design.",
        items: [
          {
            title: "More trust.",
            text: "The customer quickly appreciates trust. Clean design, the right hierarchy, the real proof, the contact routes, and the consistent brands make the business more trustworthy.",
          },
          {
            title: "Better engagement.",
            text: "easy-to-read text, scanning cards, and clear sections to help the user stay on the page.",
          },
          {
            title: "SEO support",
            text: "the design also applies to SEO because it defines the structure of the content. The headings, internal links, visual text, speed, and mobile usability help Google understand the page.",
          },
          {
            title: "Simple development.",
            text: "Practical design gives the developer clear components and responsive rules, which reduces the overhaul and makes the final site more consistent.",
          },
        ],
      },
      {
        title: "Design Principles.",
        items: [
          {
            title: "\"Clearness instead of noise\".",
            text: "we don't use visual noise. Each section has a specific function: the user needs to know what the page is about, why it's important, and what to do next.",
          },
          {
            title: "Business-specific visuals.",
            text: "design is for the offer. Images, cards, buttons, colors, and animations are chosen to enhance the service, not to distract.",
          },
        ],
      },
    ],
    deepDive: [
      {
        title: "Why Web Design Affects Business Results.",
        paragraphs: [
          "a website can have a strong development, but it can work badly if the design doesn't fit the offer. The customer comes up with questions like, what does this company do, is it right for me, can I trust it, what's next, and how do I get in touch with it?",
          "The visual language of the Next-Hub service pages is effective because it creates a repeating rhythm: hero, Visual proof, service description, cards, CTA, prices and additional details. The new landing pages also maintain this rhythm to help the user understand the site quickly.",
          "Good design is responsive- from the beginning. The page may be impressive to desktop, but a large number of users compare the providers to the phone. If the headlines go wrong, the cards go too long, or the CTA disappears, the page loses leads.",
        ],
      },
      {
        title: "trust, transparency, conversion design.",
        paragraphs: [
          "trust is made up of many small signals. Clear typography, consistent spacing, real-world examples, contact routes, transparent text, useful FAQ, and a quiet hierarchy that gives the user a sense of being in the right place.",
          "Conversion-oriented web design doesn't mean aggressive popup-s or huge buttons. It means that the page gives the user enough information and confidence to take the next step. A powerful service page- requires an explanation, benefits, process, prices, case, internal links and FAQ..",
          "the design also shapes SEO. Search engines need visible and crawlable content, and users need readable sections. when the design supports headings, text, internal links and structured content, a page can meet both search intent- and human needs.",
        ],
      },
    ],
    process: {
      title: "the process of web design.",
      steps: [
        "business objectives, audience, competitors, and analysis of the existing site.",
        "page sections, message hierarchy, and conversion path planning.",
        "the design of the components responsive layout- and reusable UI.",
        "checking mobile behavior, CTA layout and content transparency.",
        "designing for development and implementation of SEO.",
      ],
    },
    cta: {
      title: "Do you need a strong web design?",
      text: "send us an existing site or idea, to help you define the sections, the messages, and the design logic that leads the user.",
    },
    caseStudy: {
      title: "Chase's example: service landing page redesign",
      text: "A service business that has traffic but a little bit of inquiry often helps to set up a page around search intent-. redesign adds a clear H1-, a visual description of the service, benefits cards, process, context of pricing, proof-, FAQ and repeatable CTA. As a result, the page is more secure and users have fewer reasons to leave.",
    },
    faqs: webDesignFaqs,
  }),
};

seoPages["seo-services"] = pageBase({
  slug: "seo-services",
  title: "SEO in Tbilisi SEO service",
  description:
    "SEO Agency for Business in Georgia: Technical audit, keyword research, on-page and local SEO, content and reporting.",
  h1: "SEO Agency and SEO Service",
  badge: "SEO in Tbilisi.",
  serviceType: "SEO service",
  keywords:
    "SEO Agency, SEO Agency, SEO Service, SEO Service, SEO Agency Tbilisi, SEO Optimization, Local SEO, technical SEO, SEO audit, Google Search Console, Next-Hub Solutions",
  intro:
    "Next-Hub Solutions helps businesses make a website a stable source of qualified organic traffic. We're improving the technical foundation, page targeting, content structure, internal links, and local SEO signals to make Google and customers better understand your offer.",
  heroHeading: "SEO, which links the search intent to a useful page.",
  heroText:
    "SEO is not a one-time checklist., it's a continuous process where real search behavior has to match the pages that actually deserve the position.",
  images: [
    { src: "/seo.webp", alt: "SEO Optimization and SEO Service" },
    { src: "/analytics.webp", alt: "SEO reporting and analytics" },
  ],
  featureCards: [
    {
      title: "technical SEO",
      text: "Crawlability, metadata, canonical URL-s, schema, origin, indexation, internal links and Core Web Vitals verification.",
    },
    {
      title: "Content Strategy.",
      text: "keywords mapping, landing page- planning, title improvements, FAQ extensions and search intent brief-s.",
    },
    {
      title: "local SEO",
      text: "Google Business Profile, local landing pages, citation-s, review-s and service area relevancy.",
    },
  ],
  sections: [
    {
      title: "What does SEO work include",
      items: [
        {
          title: "keyword research and mapping",
          text: "we find commercial, local and informative keywords and we link each group to the correct URL-. So one page is no longer trying to fight all the query-s.",
        },
        {
          title: "On-page SEO Optimization",
          text: "We're upgrading the title-, descriptions-, H1/H2 headings, the visual text, image alt-, internal anchors-, and CTA to make the page more relevant and engaging.",
        },
        {
          title: "Technical Audit.",
          text: "we check the build problems, crawl path-, sitemap-, robots rules, duplicate content-, schema markup-, mobile usability-, JavaScript rendering-, speed and broken links-.",
        },
        {
          title: "Accounting and Development.",
          text: "SEO decisions should be based on data. Search Console, analytics and ranking trend- show us pages that have impressions, but CTR or position is weak.",
        },
      ],
    },
    {
      title: "SEO benefits",
      items: [
        {
          title: "Qualified traffic.",
          text: "a page that appears on the right query- will get a person who is already looking for a service.",
        },
        {
          title: "better CTR",
          text: "a strong title and description will show users why your page is relevant in the search results.",
        },
        {
          title: "Long-term leads.",
          text: "the ad stops when the budget is suspended. SEO takes longer, but strong pages of service and useful content keep the viewership going for a long time.",
        },
        {
          title: "Clean Site Architecture.",
          text: "SEO often shows missing pages, weak internal links, and keyword overlap-. Their resolution makes the site better for both the user and Google.",
        },
      ],
    },
    {
      title: "SEO Priorities for Service Business",
      items: [
        {
          title: "Dedicated landing pages",
          text: "all the major services need their own page with unique H1-, metadata, useful text, proof-, FAQ, schema and internal links.",
        },
        {
          title: "Local Evidence.",
          text: "For local query-, the website needs to reinforce Google Business Profile: Unified business information, service descriptions, location, and review strategy.",
        },
      ],
    },
  ],
  deepDive: [
    {
      title: "Why does ranking dedicated page- weaken without ranking dedicated page-?",
      paragraphs: [
        "Many service websites try to appear on a single common page on all commercial keyword-. This undermines relevance. The web development page may mention SEO, site maintenance, software, web design, and Google Business Profile, but it cannot answer each search intent- in depth.",
        "The correct structure is focused on all the important landing page services. The SEO service page should not be a small block in general services. It should explain the technical SEO, keyword allocation, content flaws, metadata, internal links, schema markup, Search Console report and local SEO.",
        "Low CTR often appears when title and description are very general. If a user searches for a SEO service in Georgia and sees general digital services, he will not click often. Better metadata, accurate headings and rich content improves both relevance and click appeal-.",
      ],
    },
    {
      title: "SEO, which is getting stronger over time.",
      paragraphs: [
        "The first SEO results often come from obvious bug fixes: lost landing pages, weak title-s, duplicate targeting, bad internal links, broken schema and thin content.. The growth is then based on new pages, updated content and Search Console data.",
        "The most valuable SEO path for a business like Next-Hub is commercial architecture: software development, web design, SEO service, Google Business Profile optimization, and site maintenance each require a separate strong page.",
        "SEO should also be related to conversion. On keyword-, ranking is only worth the price if the page takes the visitor to enquiry. So the SEO page needs proof, the process, the context of the prices, FAQ and CTA.",
      ],
    },
  ],
  process: {
    title: "SEO optimization process.",
    steps: [
      "the existing pages, the ranking, the Search Console data, and the technical health audit.",
      "identifying keyword mapping and content gap-.",
      "metadata, headings, internal links and the service text improvements.",
      "schema, FAQ, local signals and the new landing pages.",
      "impressions, CTR, monthly monitoring of positions and conversions.",
    ],
  },
  cta: {
    title: "Do you want more qualified organic traffic?",
    text: "We can evaluate your site and show you which pages, keywords and technical changes will create the first strongest SEO result.",
  },
  caseStudy: {
    title: "examples of existing projects: Printerman and CarWay Import",
    text: "The Printerman- project combines the ecommerce catalog, service pages, and SEOready structure into one system. The CarWay Import- business website focuses on car import services and lead acquisition. These existing projects show how the page structure and SEO fit different business purposes.",
  },
  faqs: seoFaqs,
});

seoPages["google-business-profile-optimization"] = pageBase({
  slug: "google-business-profile-optimization",
  title: "Google Business Profile optimization.",
  description:
    "Google Business Profile optimization for local business: Google Maps SEO, categories, services, photos, posts and review strategy.",
  h1: "Google Business Profile Optimization",
  badge: "local SEO and Google Maps",
  serviceType: "Google Business Profile Optimization",
  keywords:
    "Google Business Profile optimization, Google Maps optimization, SEO optimization, Google appearance, search engine optimization, Google ranking Georgia, SEO services Georgia, local SEO Tbilisi, GBP management Georgia",
  intro:
    "Next-Hub Solutions helps local businesses improve the Google Business Profile, which is seen in Google Search- and Google Maps. We process categories, services, descriptions, photos, posts, the review process and website signals to make the profile better fit what users are looking for.",
  heroHeading: "increase local visibility in Google Search- and Maps-.",
  heroText:
    "Google Business Profile is often the first place a local customer sees a business. A fully-filled, active, and properly structured profile increases trust, clicks, calls, referrals, and website transfers.",
  images: [
    { src: "/location.webp", alt: "Google Business Profile Optimization" },
    { src: "/seo.webp", alt: "Google Maps optimization for local businesses." },
  ],
  featureCards: [
    {
      title: "Profile completion.",
      text: "categories, services, descriptions, working hours, photos, attributes and contact information in accordance with search intent-.",
    },
    {
      title: "Review strategy",
      text: "the natural process of requesting, organizing and responding to review-s so that the profile looks reliable and active.",
    },
    {
      title: "Local landing pages",
      text: "the website pages that enhance the services, the relevance of the location, the trust and the conversion from Google Maps.",
    },
  ],
  sections: [
    {
      title: "What we improve",
      items: [
        {
          title: "categories and services.",
          text: "Primary and secondary categories should reflect what the business actually does. Service descriptions should use the user language and link to the landing page- of the website.",
        },
        {
          title: "Business Description.",
          text: "a description should be concise, specific, and locally relevant: who you're helping, what services you're providing, and why you should be hired by a customer.",
        },
        {
          title: "photos and posts.",
          text: "new photos and posts are activating the profile. We plan the service highlights-, the project update-, offers and useful posts.",
        },
        {
          title: "Review management",
          text: "Review-s build trust and local visibility. We create a process of asking for reviews, rules of response, and simple periodicity to make satisfied customer experience a public proof.",
        },
      ],
    },
    {
      title: "GBP Optimization Benefits",
      items: [
        {
          title: "More calls and visits.",
          text: "the right profile quickly shows the service to the user, builds trust and helps them to take action right from the start of the search.",
        },
        {
          title: "Better Local Relevance.",
          text: "When the profile services, the website pages and the citation- match, the Google gets a better understanding of what the business offers and where it works.",
        },
        {
          title: "Stronger conversion.",
          text: "photos, review-s, service descriptions and accurate information reduce uncertainty and make the profile a real conversion asset-.",
        },
        {
          title: "local SEO base",
          text: "GBP works by combining Google Maps visibility, review-, landing page- website and a single business information.",
        },
      ],
    },
    {
      title: "The role of the website in Google Maps ranking.",
      items: [
        {
          title: "landing page- services.",
          text: "the services mentioned in the profile should have detailed pages on the website. This depth cannot be inserted into the profile, but it helps ranking and conversion.",
        },
        {
          title: "Single Local Signals.",
          text: "business name, phone, service area, contact details, schema and citation- should be in sequence everywhere.",
        },
      ],
    },
  ],
  deepDive: [
    {
      title: "Why does Google Business Profile- need support for the website?",
      paragraphs: [
        "Google Business Profile may appear in Maps- and local searches, but the profile alone does not work. The linked website confirms what the business does, where it operates, and how reliable it is. If the site has dedicated service pages, contact information, LocalBusiness schema, and related descriptions, the profile is much stronger.",
        "Many businesses fill out profiles once and then forget about them. Competitors add better photos, collect review-s, post posts, improve service descriptions, and create strong local pages. The profile still exists, but it's less credible.",
        "the strongest local strategy is to combine a profile, a website, and a reputation. The profile needs to show the right services, the website needs to explain those services in depth, the review-s need to show real experience, and the citation-s need to use the same business information.",
      ],
    },
    {
      title: "How GBP improves conversion optimization",
      paragraphs: [
        "local users make decisions quickly. They compare rating-, photos, categories, service details, distance, hours of operation, and the website link. An incomplete profile often loses clicks even when it appears in the results.",
        "a good profile should answer the basic questions before calling: what services, what area of business it serves, what the company looks like, whether other users trust it, and what the next step is.",
        "Google Business Profile optimization is particularly valuable for service businesses, as Google Maps visibility often calls directly and generates directional requests. The profile does not have to be a static directory listing; it is a local conversion channel.",
      ],
    },
  ],
  process: {
    title: "Google Business Profile optimization process.",
    steps: [
      "a review of the profile completeness, categories, services, review- and competitors.",
      "processing the service description, business description, and conversion details.",
      "the highlights- plan of photos, posts, products or services.",
      "creating a process of asking and responding to reviews.",
      "linking the profile strategy to the local SEO landing page- and citation-.",
    ],
  },
  cta: {
    title: "Do you want better local visibility?",
    text: "Send us your Google Business Profile link. We'll evaluate your profile, website support, and local SEO signals that affect visibility and conversion.",
  },
  caseStudy: {
    title: "Chase's example: improving the profile of local service.",
    text: "a local service business can lose leads if the profile has general categories, incomplete services, few photos, and no review process. Optimization adds clear service descriptions, photos, cadence- posts, review answers, and links to dedicated service page-.",
  },
  faqs: gbpFaqs,
});

seoPages["website-maintenance-services"] = pageBase({
  slug: "website-maintenance-services",
  title: "Technical support.",
  description:
    "Web site technical support for business: site maintenance, updates, backup, security, speed, form verification and SEO control.",
  h1: "Site maintenance.",
  badge: "Support the site.",
  serviceType: "Site maintenance.",
  keywords:
    "Web site technical support, website optimization, website maintenance Georgia, website support Tbilisi, site maintenance, site support, site maintenance, website security, SEO maintenance Georgia",
  intro:
    "Next-Hub Solutions provides site maintenance for businesses that need a website to be secure, fast, updated and functional even after launch. We do technical checks, content updates, backup-s, basic SEO control, form testing, speed improvements, and ongoing support.",
  heroHeading: "keep the website stable, secure, and ready for leads.",
  heroText:
    "the website is not up to date on launch day-. Modules are getting old, content is changing, forms are broken, tracking is down, pages are slowing down, and search requirements are changing.",
  images: [
    { src: "/security.webp", alt: "Site security and maintenance." },
    { src: "/speed-optimization.webp", alt: "Website speed optimization." },
  ],
  featureCards: [
    {
      title: "Technical support.",
      text: "Bug fix-s, broken forms, layout problems, hosting checks, redirects, tracking problems and platform updates.",
    },
    {
      title: "Performance maintenance",
      text: "speed checking, image optimization, Core Web Vitals and recommendations for a better user experience-.",
    },
    {
      title: "SEO maintenance",
      text: "Metadata update, broken link- verification, Search Console monitoring, sitemap review and content improvement support.",
    },
  ],
  sections: [
    {
      title: "What it means to maintain the site.",
      items: [
        {
          title: "updates and backup",
          text: "regular updates and backup reduce the risk. If something goes wrong, documented care makes it easier to recover.",
        },
        {
          title: "Changes to content.",
          text: "businesses often need to update services, prices, images, team, contact information, and landing page text.",
        },
        {
          title: "Security Check.",
          text: "we're checking out obsolete components, suspicious behavior, vulnerable plugin-s, SSL problems, spam submissions- and basic configuration.",
        },
        {
          title: "Conversion check",
          text: "a beautiful site means nothing if the forms, phone links, payment flow or tracking events don't work.",
        },
      ],
    },
    {
      title: "The benefits of website maintenance.",
      items: [
        {
          title: "Less risk.",
          text: "Small technical problems are cheap until they become a crisis. Site maintenance reduces downtime-, broken pages-, and the lost enquiry.",
        },
        {
          title: "better user experience",
          text: "fast pages, new content, functional forms, and a stable layout that gives the user confidence.",
        },
        {
          title: "SEO stability",
          text: "Search results fail when pages fail, metadata disappears, redirects doesn't work, or content gets old.",
        },
        {
          title: "Continuous improvement.",
          text: "The site support plan makes room for small improvements, instead of businesses waiting for a full redesign- every few years.",
        },
      ],
    },
    {
      title: "Who needs support from the site?",
      items: [
        {
          title: "Lead generation websites.",
          text: "If the site is getting inquiry, every form, CTA, tracking script and landing page is important.",
        },
        {
          title: "Growing service businesses.",
          text: "when the services change, the website must change, and the regular update site is accurate for the user and useful for the Google.",
        },
      ],
    },
  ],
  deepDive: [
    {
      title: "Why is it important to maintain a website after launch-?",
      paragraphs: [
        "Launching a website is the beginning of lifecycle-, not the end. In real business, services change, prices close, teams grow, campaigns start, requirements change, and tracking moves. Without maintenance, the site slowly becomes less accurate and less reliable.",
        "Site maintenance is also risk management. Small problems can be fixed at an early stage. A corrupt contact form can lose leads over weeks. Slow landing page- can reduce conversion.",
        "SEO for maintenance protects the foundation on which ranking stands. Metadata should match services, internal links should point to the best pages, Search Console issues should be checked, sitemap should be updated, and old content needs refresh-.",
      ],
    },
    {
      title: "What is a healthy maintenance plan?",
      paragraphs: [
        "A healthy maintenance plan combines technical verification, content support and production control. It includes backups, updates, form testing, analytics checks, speed review, broken link review, security basics and a short record of the work done.",
        "Website maintenance should also create room for improvement. If analytics shows that a service page receives traffic but few enquiries, its CTA, proof, pricing context, or FAQ may need work. If Search Console shows impressions for a keyword without a dedicated page, that is an idea for a new landing page.",
        "Businesses often overload maintenance- because nothing appears to be broken on the surface. But tracking scripts is quietly stopped, the form goes to the wrong inbox-, the pages slow down, and search visibility slows down.",
      ],
    },
  ],
  process: {
    title: "the process of maintaining the site.",
    steps: [
      "the platform, hosting-, the forms, the speed, the security and the SEO baseline audit.",
      "documenting the urgent errors and the repeated maintenance needs.",
      "update, backup, monitoring and reporting cadence-",
      "content, technical and production work done on a monthly basis.",
      "recommendations for improvements based on analytics and business priorities.",
    ],
  },
  cta: {
    title: "Do you need support from a trusted site?",
    text: "Send us your website URL., we'll assess the risks of maintenance, and we'll recommend a practical care plan for your platform, traffic, and business goals.",
  },
  caseStudy: {
    title: "Chase Example: lead-generation Site Maintenance",
    text: "a service website that periodically lacks forms, has heavy images and outdated text, silently loses enquirys. The maintenance plan checks the forms, compresses the images, updates the service sections, monitors the Search Console and corrects technical issues before it works on revenue.",
  },
  faqs: maintenanceFaqs,
});

seoPages["ai-video-creation"] = pageBase({
  slug: "ai-video-creation",
  title: "AI video created in Georgia.",
  description:
    "AI Video Making for Business: Creating a promotional video, Reels, product presentation, AI avatar and multilingual video content in Georgia.",
  h1: "AI video creation",
  badge: "AI video for business.",
  serviceType: "AI video creation",
  keywords:
    "AI video creation, AI video creation, advertising video creation, video content for business, Reels creation, social media videos, AI avatar video, video advertising in Georgia, multilingual video",
  intro:
    "Next-Hub Solutions creates videos made with AI technology for Georgian businesses from idea and script processing to visual, audio and final installation. Depending on the service selected, the project may include a promotional video, product or service presentation, social media, Reels, AI avatar and multilingual versions.",
  heroHeading: "video content for business -- fast, flexible, and purposeful.",
  heroText:
    "AI reduces the need for complex recording and makes it easier to adapt an idea to different formats. Businesses get a customized video with clear message, professional processing, and sizes that match the specific channel and location.",
  images: [
    {
      src: "/digital-marketing.webp",
      alt: "AI video creation and digital video advertising in Georgia",
    },
    {
      src: "/soc-media.webp",
      alt: "Social Media videos and Reels for business.",
    },
  ],
  featureCards: [
    {
      title: "faster production.",
      text: "AI tools reduce the complexity of the shooting process and speed up the preparation of scripts, visuals, audio and various versions.",
    },
    {
      title: "Flexible budgeting.",
      text: "the volume of work fits the purpose: it can be one short video, several promotional versions or a regular video series without too much production.",
    },
    {
      title: "multiple-channel use.",
      text: "This is web text: One concept can fit a social media, advertising, website, or presentation with the right length, size, and screen text.",
    },
  ],
  sections: [
    {
      title: "what kind of AI videos do we make?",
      items: [
        {
          title: "AI promotional videos.",
          text: "We create short, targeted videos for offers, campaigns, new product launches and video ads in Georgia.",
        },
        {
          title: "Social media videos and Reels",
          text: "We're making short vertical videos for Instagram-, Facebook-, and TikTok- with a strong start, subtitles, and clear action.",
        },
        {
          title: "presentation of the product and service.",
          text: "we show you the main advantage of the offer, the use scenario, and the next step.",
        },
        {
          title: "AI avatar video.",
          text: "AI avatar or virtual guide will present the approved text. Depending on the service selected, it is possible to prepare a Georgian, English or Russian version.",
        },
      ],
    },
    {
      title: "What is the full production?",
      items: [
        {
          title: "idea and scenario.",
          text: "we set the goal, the audience, the offer, the tone, then we make a scenario that's clear from the first few seconds.",
        },
        {
          title: "visual direction.",
          text: "I choose the brand-appropriate images, the AI visuals, the graphics, the text animation, and the screen composition.",
        },
        {
          title: "voice and language adaptation.",
          text: "we're creating the corresponding wording, subtitles and screen text. The multilingual version includes not only translation, but natural formulation.",
        },
        {
          title: "the installation and the final files.",
          text: "we combine audio, visual, music, subtitles, and call to action, and we create agreed-upon formats for the selected services.",
        },
      ],
    },
    {
      title: "What business is AI video for?",
      items: [
        {
          title: "Startups and Online Shops.",
          text: "AI video helps you quickly and easily present a new product, feature, discount, or usage rule across multiple digital channels.",
        },
        {
          title: "Clinics and Service Companies.",
          text: "an explanatory video or a virtual guide that informs the user about the service, the recipe, the frequently asked question, or the booking process.",
        },
        {
          title: "Tourism and Real Estate.",
          text: "the visual material of a hotel, tour, apartment or new project can be converted into a Georgian and foreign language presentation to a different audience.",
        },
        {
          title: "Construction and other services.",
          text: "construction, engineering and other service companies can explain complex processes, project stages, or key benefits in a short video.",
        },
      ],
    },
    {
      title: "Why Next-Hub Solutions",
      items: [
        {
          title: "a business purpose-based scenario.",
          text: "We start the video by defining the target audience, so that the text, the visual, and the call to action serve a specific task.",
        },
        {
          title: "Full Production Management.",
          text: "we run the script, AI visual or avatar, the rendering, subtitles, music and installation in one process.",
        },
        {
          title: "Brand Consistency.",
          text: "we use the company's colors, logo, terminology, and tone of communication to make the video look like a natural extension of an existing brand.",
        },
        {
          title: "clear volume and feedback.",
          text: "we agree in advance on the number of videos, languages, formats, and editing steps to make the workload and the final result clear.",
        },
      ],
    },
  ],
  deepDive: [
    {
      title: "AI video of business benefits and realistic expectations",
      paragraphs: [
        "Traditional video production often requires location, technique, a film crew, an actor, and several days of filming. The AI--based process digitizes some of these components, so a short ad or explanatory video can be made faster and converted into several versions easily.",
        "faster production does not automatically mean better results. Video quality is defined by a strong script, brand-appropriate visual direction, correct sound, clear subtitles, and installation. AI is a production tool, while business purpose and creative control remains the foundation of the process.",
        "This approach is particularly useful for businesses in Georgia that need frequent social media content, seasonal offers or simultaneous Georgian and foreign language communication.",
      ],
    },
    {
      title: "How to Maintain Brand Trust.",
      paragraphs: [
        "When using AI video, the text, facts, prices and promises must be approved before publication. The product's visual should not create false expectations, while the use of virtual leads should match the context of the brand and audience.",
        "based on the customer's brand colors, logo, terminology, and call to action, this uniformity ensures that the video doesn't appear to be a standalone experiment, but continues the entire company's communication.",
      ],
    },
  ],
  process: {
    title: "AI video creation process.",
    steps: [
      "Brief: Defining the target audience, channel, language and length of time you want.",
      "preparing and approving the script, the main message and the call to action.",
      "selecting visual style, AI avatar or footage and sound.",
      "video editing, editing, subtitles, and adding brand elements.",
      "considering feedback and preparing final formats for different platforms and deployments.",
    ],
  },
  cta: {
    title: "Do you want AI video for your business?",
    text: "Write down what product, service or offer you want to show and where you're going to post the video. We'll help you choose the right format, duration, and volume for your purpose.",
  },
  caseStudy: {
    title: "a practical example: three formats for one offer.",
    text: "a Georgian service company can receive a 30- minute promotional video from one approved scenario, a 15- minute vertical Reels version, and an English-language presentation. The overall visual style and message remain the same, with each version suited to a specific audience and location.",
  },
  faqs: [
    {
      question: "What's in the AI video creation service?",
      answer: "Depending on the service selected, the project can include an idea, a script, a AI visual or avatar, a rendering, music, subtitles, installation, brand elements, and the preparation of the final files.",
    },
    {
      question: "Is it possible to create a video in English?",
      answer: "Yes. It is possible to create natural Georgian text, corresponding subtitles and subtitles. Depending on the service selected, English and Russian versions of the same video can be created.",
    },
    {
      question: "Does AI video completely change the actual recording?",
      answer: "not always. AI is often enough for short ads, explanatory videos, avatar and social content. Detailed demonstration of a real product or human history may require existing photos, product footage or separate footage.",
    },
    {
      question: "How long does it take to make a AI video?",
      answer: "the timing depends on the complexity of the script, the length, the number of languages and the amount of corrections. The exact timing is determined after agreement on the brief and the amount of work.",
    },
    {
      question: "What determines the price of a AI video?",
      answer: "the price is affected by the length, the script, the visual difficulty, the AI avatar, the number of languages and formats, the length, the mounting and the amount of corrections.",
    },
  ],
  pricing: [
    {
      name: "Starter AI video",
      price: "₾350–₾550",
      schemaPrice: 350,
      features: [
        "1 short AI video  30 for a second",
        "Adaptation of the basic script.",
        "Basic AI visuals and installation",
        "music and subtitles, as needed.",
        "1 the format chosen and the language 1",
        "one stage of correction.",
        "Choose: Make or AI",
      ],
    },
    {
      name: "Business AI video",
      price: "₾850–₾1,500",
      schemaPrice: 850,
      features: [
        "1 video — up to 60 seconds",
        "individual scripting.",
        "extended AI views or AI leads",
        "subtitles or subtitles.",
        "the logo, the colors, the brand elements.",
        "2 platform format.",
        "two correction steps.",
        "Optional: Additional language or format  with separate ratings",
      ],
    },
    {
      name: "individual project.",
      price: "Individual offer.",
      omitStructuredPrice: true,
      features: [
        "the price depends on the project.",
        "a complex campaign, multilingual video, or extended AI scenes.",
        "length of video.",
        "the number of scenes and the complexity.",
        "AI Avatar Requirements",
        "the complexity and complexity of the script.",
        "the number of languages.",
        "the difficulty of animation and installation.",
        "the final number of formats.",
        "delivery time and the number of corrections.",
      ],
    },
  ],
  pricingNote:
    "the amounts shown are the initial orientation ranges. The final price is confirmed after the estimate of the price, materials, duration and production volume required.",
});

seoPages["ai-video-creation"].deepDive =
  seoPages["ai-video-creation"].deepDive.slice(0, 2);

seoPages["ai-video-creation"].internalLinks = [
  {
    href: "/en/blog/ai-video",
    label: "AI video tips for business",
  },
  {
    href: "/en/blog/ra-aris-ai-video-da-rogor-exmareba-bizness",
    label: "what is AI video and how it helps businesses",
  },
  {
    href: "/en/blog/rogor-gamoviyenot-ai-video-socialuri-mediisa-da-reklamistvis",
    label: "AI video for social media and advertising.",
  },
  {
    href: "/en/blog/ra-ghirs-ai-videos-sheqmna-da-ra-shedis",
    label: "AI video cost and conditions",
  },
  {
    href: "/en/services/soc_media",
    label: "Social Media Management.",
  },
  {
    href: "/en/services/digital_marketing",
    label: "Digital marketing.",
  },
];

export const faqGroups = [
  {
    title: "making a website.",
    faqs: [
      ["What is involved in building a website?", "website design includes structure, responsive pages, frontend implementation, backend or CMS execution, forms, analytics, SEO base, performance verification and launch support-."],
      ["How long does it take to build a business website?", "a simple business website can take weeks to build, and a large site with integration, content and approval stages takes longer."],
      ["Do you also make online stores?", "Yes. We're building ecommerce websites with the product catalog, checkout flow-, with payment, search, filtering and management tools."],
      ["WordPress can you build a website?", "Yes. We use WordPress when a client needs a flexible CMS and easy content management."],
      ["Is it possible to build a website with Next.js-?", "Yes. Next.js is a good choice for fast, scalable and SEOfriendly for websites or web applications."],
      ["Can I help you with the text on the website?", "Yes. We help with the structure, the processing of the text and the SEO optimization so that the page offers a clear explanation."],
      ["Will the site be mobile-friendly?", "Yes. All pages are intended for mobile, tablet and desktop layout-."],
      ["Can you get redesign from the existing site?", "Yes, we analyze the existing site, we find weak sections, and we rearrange the structure, design, and content for business purposes."],
    ],
  },
  {
    title: "Software development.",
    faqs: [
      ...softwareFaqs.map((faq) => [faq.question, faq.answer]),
      ["Can you create a CRM system?", "Yes, we're building CRM-like processes for leads, users, records, statuses, reminder-, and reporting."],
      ["Are you making Admin dashboard-?", "Yes. Dashboards and admin panel-s are among the most common custom software projects for operational data justice."],
      ["Custom software API-?", "Yes. We're adding payments, analytics, CRM-, email-, maps, supply and internal API-."],
      ["How do you calculate the cost of a software system?", "the price depends on the users, the roles, the functions, the integrations, the data structure, the complexity and the need for support."],
    ],
  },
  {
    title: "Web design.",
    faqs: [
      ...webDesignFaqs.map((faq) => [faq.question, faq.answer]),
      ["Are you planning a pre-development design?", "Yes, pre-development design planning reduces the rework and creates a clear way to execute."],
      ["What makes web design good for SEO?", "clear headings, readable text, quick layout, crawlable content, internal links and mobile usability SEO help."],
      ["Do you also create landing pages?", "Yes. Service landing pages are expected to be around search intent-, benefits, proof-, prices and FAQ."],
      ["Are you also making UI components?", "yes. We're going to create reusable buttons, cards, forms, sections and navigation patterns.."],
    ],
  },
  {
    title: "SEO",
    faqs: [
      ...seoFaqs.map((faq) => [faq.question, faq.answer]),
      ["Are you optimizing Metadata-?", "Yes. We write title- and descriptions- to make it more like search intent- and increase CTR.."],
      ["Are you adding Schema markup-?", "Yes. We add Service, BreadcrumbList, FAQPage and LocalBusiness schema as needed."],
      ["Are you using Search Console data?", "Yes. Search Console shows query-s with impressions-, low CTR with weak positions and lost landing page capabilities."],
      ["Can you improve internal links?", "Yes. Internal links helps users and the search engine to understand which pages are important."],
      ["Are you creating SEO landing pages?", "Yes. Dedicated landing pages for service businesses are often the highest ROI- SEO step."],
    ],
  },
  {
    title: "Google Business Profile",
    faqs: [
      ...gbpFaqs.map((faq) => [faq.question, faq.answer]),
      ["Do you want to improve your profile?", "Yes. The services must be specific, relevant and consistent with the landing page- of the website."],
      ["Google Business Profile posts help?", "posts help with activity, offers and service education, especially if used regularly."],
      ["Can I help you with local citation-?", "Yes, the citation-s in sequence increase local trust and business information accuracy."],
      ["Do you want to improve your profile picture?", "Yes. Better photos build trust and help customers understand business before they call."],
    ],
  },
  {
    title: "Site maintenance.",
    faqs: [
      ...maintenanceFaqs.map((faq) => [faq.question, faq.answer]),
      ["Do you correct the broken forms?", "Yes. The forms, phone links and conversion path- are an important part of maintenance-."],
      ["Can you update the text and images of the website?", "Yes. Content updates are part of many monthly maintenance plan-."],
      ["Do you control the speed of the site?", "Yes. We are testing speed and we are recommending images, script-, layout- and hosting-."],
      ["Do you visit WordPress sites?", "Yes. We are making WordPress for updates, backups, content changes and technical checks.."],
      ["Does maintenance report include?", "Yes. The care plan can include a monthly brief report on work done, problems identified, and recommendations."],
    ],
  },
];

export function buildSchemas(page) {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: page.url,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.serviceType,
    url: page.url,
    description: page.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Next-Hub Solutions",
      url: siteUrl,
      telephone: "+995555137003",
      areaServed: "Georgia",
      logo: `${siteUrl}/logo.svg`,
    },
    areaServed: {
      "@type": "Country",
      name: "Georgia",
    },
    offers: page.pricing.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      ...(!plan.omitStructuredPrice && {
        priceCurrency: "GEL",
        price:
          String(plan.schemaPrice || "") ||
          plan.price.replace(/[^0-9]/g, "") ||
          "0",
      }),
      availability: "https://schema.org/InStock",
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [breadcrumbs, service, faq];
}

export function buildFaqSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQs.",
          item: `${siteUrl}/en/faq`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqGroups.flatMap((group) =>
        group.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        }))
      ),
    },
  ];
}
