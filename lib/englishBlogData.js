import { websiteKeywordPosts } from "./englishWebsiteKeywordPosts";
import { aiVideoPosts } from "./englishAiVideoPosts";

const siteOrigin = "https://next-hub.pro";
const siteUrl = `${siteOrigin}/en`;

export const blogCategories = [
  {
    slug: "web-development",
    title: "Web Development.",
    description:
      "articles on website design, web development, Next.js-, WordPress and business website planning in Georgia.",
  },
  {
    slug: "web-design",
    title: "Web design.",
    description:
      "articles on web design, UX structure, landing page-, responsive design and conversion improvement for business.",
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "SEO Optimization, SEO Service, Google Business Profile, Google Maps, Content and technical SEO for Georgian businesses.",
  },
  {
    slug: "case-studies",
    title: "Case studies",
    description:
      "keywords based on real projects of Next-Hub: website building, online store building, SEO optimization and web design.",
  },
  {
    slug: "ai-video",
    title: "AI video",
    description:
      "Practical articles on AI video creation, promotional videos, Reels, AI avatars, multilingual content and pricing for Georgian businesses.",
  },
];

const projects = [
  [
    "NextHub Solutions",
    "nexthub-solutions",
    "Business website.",
    "a digital agency website focused on web development, SEO optimization, branding, Google Ads-, and business growth solutions.",
    ["Next.js", "React", "Tailwind CSS", "SEO"],
    "the website of the Web Development Agency, SEO Services and Digital Growth Agency.",
  ],
  [
    "PrintingLab",
    "printinglab",
    "Online store.",
    "3D Printing Company website with individual production, architectural rugs, NFC products and online ordering.",
    ["WordPress", "WooCommerce", "SEO", "Google Analytics"],
    "3D Printing Company's customized online ordering website.",
  ],
  [
    "PrinterMan",
    "printerman",
    "Online store.",
    "an online platform for selling printers, charging cartridges, making printers, and office printing services.",
    ["WordPress", "WooCommerce", "Yoast SEO", "Google Ads"],
    "the online store for printing and service.",
  ],
  [
    "ECPlus",
    "ecplus",
    "Financial Services.",
    "the website of a microfinance company with an online application system, chatbot integration and financial services presentation.",
    ["WordPress", "Elementor", "AI Chatbot", "SEO"],
    "the microfinance company's website with online application and chatbot.",
  ],
  [
    "CarWay Import",
    "carway-import",
    "Business website.",
    "the website of an automobile import company that focuses on getting leads and communicating with customers.",
    ["WordPress", "Elementor", "SEO"],
    "A website focused on the generation of automotive importing leaders.",
  ],
  [
    "Audio Visual Rent",
    "audio-visual-rent",
    "Business website.",
    "an audio and video equipment rental website that makes it easier to get to know the service and meet customer requests.",
    ["WordPress", "Elementor", "Performance"],
    "Audio-Video Rental Website.",
  ],
  [
    "GeoArt Construction",
    "geoart-construction",
    "Construction",
    "the website of a construction company that will introduce you to engineering, architecture and construction services.",
    ["WordPress", "Elementor", "SEO", "Google Ads"],
    "the website of a construction company for engineering and architecture services.",
  ],
  [
    "Hoppa",
    "hoppa",
    "Restaurant.",
    "a food delivery platform with modern ordering, dynamic content management and fully customized design.",
    ["Next.js", "React", "Sanity", "Vercel"],
    "a food delivery platform with a modern ordering experience.",
  ],
  [
    "Nailauri",
    "nailauri",
    "Beauty and Health.",
    "A beauty and wellness domain website with a sewing system, multilingual support and SEO optimization.",
    ["WordPress", "Elementor", "Vagaro", "SEO"],
    "a website dedicated to beauty and business.",
  ],
  [
    "Indian Express",
    "indian-express",
    "Restaurant.",
    "a restaurant website with online ordering system, menu management and local SEO optimization.",
    ["WordPress", "WooCommerce", "GloriaFood", "SEO"],
    "the restaurant website with online ordering and local SEO",
  ],
  [
    "Tena Handmade",
    "tena-handmade",
    "Online store.",
    "a handmade jewelry store online that focuses on product presentation and sales growth.",
    ["WordPress", "WooCommerce", "SEO"],
    "Handmade Jewelry Online Store.",
  ],
  [
    "Tabo Group",
    "tabo-group",
    "Construction",
    "the website of a construction inventory company that will present you with the manufacturing capabilities, products and industrial services.",
    ["WordPress", "Elementor", "GA4", "SEO"],
    "the website of a construction inventory company.",
  ],
  [
    "Jewelry Tools",
    "jewelry-tools",
    "Online store.",
    "An online store of jewelry making tools and accessories with WooCommerce integration.",
    ["WordPress", "WooCommerce", "SEO"],
    "WooCommerce jewelry store online",
  ],
  [
    "Echelon Engineering",
    "echelon-engineering",
    "Construction",
    "the website of an engineering company that includes structural design, technical drawings, construction planning and engineering consulting.",
    ["WordPress", "Elementor", "SEO"],
    "the website of an engineering company for technical and consulting services.",
  ],
  [
    "Ninosia",
    "ninosia",
    "Online store.",
    "a modern flower shop website with flower compositions, decorative plants and gifts, with the possibility of ordering online.",
    ["WordPress", "WooCommerce", "Elementor", "SEO"],
    "a website dedicated to online flower shop sales.",
  ],
];

const topics = [
  ["How to create a modern website for business.", "rogor-shevqmnat-tanamedrove-vebsaiti", "web-development", "modern website planning, structure, content, design and SEO optimization for Georgian business."],
  ["Next.js or WordPress  Which one should I choose?", "nextjs-vs-wordpress", "web-development", "Next.js and WordPress a practical comparison of website design, SEO, budget and management."],
  ["How to improve the Google rating.", "rogor-gavauketesot-google-reitingi", "seo", "Practical steps to optimize SEO to increase visibility and qualified traffic in Google."],
  ["How much does it cost to build a website in Georgia in 2026?", "website-cost-georgia-2026", "web-development", "Website Build Prices in Georgia in 2026: Design, Functional, SEO, CMS, Support and Realistic Budget."],
  ["SEO Optimization for Small Business", "seo-small-business-georgia", "seo", "SEO Optimization for Small Business in Georgia: How to Get More Visuality, Calls and Clients from Google."],
  ["How to get customers from Google", "rogor-movizidot-klientebi-google-idan", "seo", "Google Search, Google Business Profile and SEO using content to attract new customers."],
  ["10 principle of web design that increases conversion.", "veb-dizainis-10-principi", "web-design", "how web design builds trust, better UX- and more enquiry on a business website."],
  ["Building an online store: What to consider", "onlain-magaziis-sheqmna", "web-development", "the structure of the online store, the product catalog, the payments, SEO and conversion optimization."],
  ["How to use Google Business Profile as a source of sales.", "google-business-profile-sales", "seo", "Google Business Profile and Google Maps optimization as a source of real sales, calls and visits for local businesses."],
  ["Site maintenance: Why isn't the project completed on launch- today?", "saitis-movla-launchis-shemdeg", "web-development", "Site maintenance, technical support, security, speed and SEO stability after launch."],
  ["What is Landing Page and how does it increase sales?", "landing-page-servis-biznesistvis", "web-design", "what is Landing Page, when do Georgian businesses need it, how does it help to grow leads and sales, and how is it different from a full-fledged website?"],
  ["SEO Technical Audit: What to check", "teqnikuri-seo-auditi", "seo", "The main points of the SEO technical audit: indexation, sitemap, schema, speed, canonical and internal links."],
  ["Web development for small businesses.", "veb-development-mcire-biznesistvis", "web-development", "How web development helps small businesses grow trust, leads and sales."],
  ["how SEO content strategy works.", "seo-kontentis-strategia", "seo", "SEO content planning with keyword mapping-, topic cluster-, FAQ and internal links."],
  ["redesign: When is it needed to update?", "vebsaitis-redesign", "web-design", "when do businesses need a website redesign and how do they update the design without damaging the SEO?"],
  ["Software development for business processes.", "programuli-uzrunvelyofis-sheqmna", "web-development", "custom software development, dashboards, CRM processes and business automation for Georgian companies."],
  ["How to create a SEOfriendly service page.", "seo-friendly-servis-gverdi", "seo", "H1, H2, FAQ, schema, internal links and CTA structure for optimizing SEO."],
  ["web design or graphic design: the difference for business.", "veb-dizaini-tu-grafikuli-dizaini", "web-design", "the difference between web design and graphic design in the context of UX-, conversion and web development."],
  ["WordPress SEO: What to do before launching", "wordpress-seo-gashvebamde", "seo", "WordPress before the SEO checklist site launch: permalink, metadata, speed, schema, sitemap and Search Console."],
  ["Next.js The advantages of the website SEO", "nextjs-vebsaitis-seo-upiratesobebi", "web-development", "Why Next.js is a good choice for a fast, SEO-enabled, scalable website."],
];

const serviceLinks = [
  { href: "/en/webdevelopment", label: "making a website." },
  { href: "/en/software-development", label: "Software development." },
  { href: "/en/web-design", label: "Web design." },
  { href: "/en/seo-services", label: "SEO service" },
  {
    href: "/en/google-business-profile-optimization",
    label: "Google Business Profile Optimization",
  },
  { href: "/en/website-maintenance-services", label: "Site maintenance." },
  { href: "/en/contact", label: "Consultation." },
];

const calculatorCta = {
  title: "Find out the estimated cost of your website.",
  text:
    "select the type of website, the number of pages, the design level, and the functional calculator to calculate your estimated budget.",
  button: "Price calculation.",
  href: "/#website-calculator",
};

const coreBuyerLinks = [
  { href: "/en/webdevelopment", label: "a website-building service." },
  { href: "/en/seo-services", label: "SEO service" },
  { href: "/en/website-maintenance-services", label: "Site maintenance and support." },
  { href: "/en/contact", label: "Request for Consultation." },
];

function buyerPost({
  title,
  slug,
  category = "web-development",
  description,
  excerpt,
  readingTime = "12-15 minutes",
  keywords,
  sections,
  faqs,
  internalLinks = [],
  calculator = false,
}) {
  return {
    slug,
    type: "article",
    category,
    categoryTitle:
      blogCategories.find((item) => item.slug === category)?.title || "blog.",
    featured: false,
    title,
    metaTitle: `${title} | Next-Hub Solutions`,
    description,
    excerpt,
    author: "Next-Hub Solutions",
    date: "2026-06-30",
    readingTime,
    tags: keywords,
    keywords,
    sections,
    faqs,
    serviceLinks: [...coreBuyerLinks],
    internalLinks,
    calculatorCta: calculator ? calculatorCta : undefined,
  };
}

const websiteBuyerClusterPosts = [
  buyerPost({
    title: "Website development",
    slug: "vebgverdis-sheqmna",
    description:
      "The process of creating a website for businesses in Georgia: planning, design, structure, development, mobile optimization, SEO, analytics and launch.",
    excerpt:
      "learn how to build an effective website for a business: from idea to structure, from design to SEO, and after launch to improvement.",
    readingTime: "13-16 minutes",
    keywords: [
      "Website development",
      "creating a website.",
      "making a website.",
      "Web Development.",
      "Web design.",
      "SEO Optimization",
      "Mobile Optimization.",
      "Google Analytics",
    ],
    internalLinks: [
      { href: "/en/webdevelopment", label: "Web Development Service." },
      { href: "/en/web-design", label: "Web Design Services." },
      { href: "/en/seo-services", label: "SEO optimization for the website." },
      { href: "/en/blog/what-to-do-after-website-launch", label: "what happens when you launch the website." },
    ],
    sections: [
      {
        title: "creating a website starts with setting a goal.",
        paragraphs: [
          "This is the text of a website: a good website doesn't start with colors or templates. The first step is to define the business purpose: the site should bring in calls, orders, applications, trust, visibility in Google, or online sales of a product. When the goal is clear, it's easier to define the structure, text, design, and technical part.",
          "Many companies in Georgia need not just an online business card, but a digital channel that gives customers answers to key questions: what you offer, why you're trusted, what you're worth, how the service works, and how to get in touch with you.",
        ],
      },
      {
        title: "planning and content structure.",
        paragraphs: [
          "the planning stage defines the pages, sections, and user path. A business site often requires a homepage, service pages, about us, portfolio or keys, blog, FAQ, and contact. If SEO is important, each core service would prefer to have a separate page with its own title, description, and internal links.",
          "the content structure should be simple and logical. The user should see what the company is doing on the first screen, then see the benefits, examples, process, trust signals, and action key. This architecture helps both UX- and Google because the search engine reads the links between topics and pages better.",
        ],
      },
      {
        title: "design, UX and brand trust.",
        paragraphs: [
          "This is the text of a website: Web design is not just a beautiful visual. Its main task is to arrange the information so that the user makes a decision quickly. A correctly selected hierarchy, text size, CTA buttons, photos, spacing and cards creates a clean experience where the visitor does not have to search too much.",
          "trust is also important to a business: real projects, a description of the service, a team or company history, contact information, reviews, and a clear process. Next-Hub's approach to design is always about the business purpose, so the visual should serve to convert, not just make an effective first impression.",
        ],
      },
      {
        title: "development and technical foundation.",
        paragraphs: [
          "the design is actually a website at the development stage. It's important to choose the right technology: WordPress is good for manageable content and fast runtime, and Next.js is strong when you need high speed, flexible frontend, SEOfriendly architecture, and scale in the future.",
          "the technical basis includes clean code, responsive layout-, formwork, security, hosting-, domain-, sitemap-, robots.txt- and the necessary integrations. If the site has a payment, calculator, CRM connection or user cabinet, all of this must be arranged from the outset to ensure that the project develops steadily after launch.",
        ],
      },
      {
        title: "Mobile Optimization and Speed.",
        paragraphs: [
          "today, most websites are opened from a mobile device, so the mobile version is not a bit of a detail. The text should be easy to read, the buttons should be accessible, the forms should be short and comfortable, and the sections should be properly arranged. Hard navigation on a mobile device often means a lost user.",
          "speed directly affects the result. Slow page conversion reduces and damages SEO. So you need optimized images, correct lazy loading, minimal overhead scripts, control of Core Web Vitals-, and an enhanced configuration of hosting-. A fast website works better for both the user and Google.",
        ],
      },
      {
        title: "SEO foundations in the design phase.",
        paragraphs: [
          "SEO should not be added at the end. Website development should begin with keyword selection, a correct URL structure, H1 and H2 headings, a meta title and description, image alt text, internal links, schema markup, and canonical URLs. This creates the foundation Google needs to understand each page correctly.",
          "For Georgian businesses, the local context is particularly important: Tbilisi, Batumi or another city, service area, Google Business Profile, natural description of services and FAQ. If the website is SEOfriendly in the first place, the subsequent content and digital marketing work becomes much more efficient.",
        ],
      },
      {
        title: "analytics, launching and further improvement.",
        paragraphs: [
          "you need to test before launching: all the links, form, mobile version, speed, metadata, sitemap, Search Console and Analytics.. After that, the site is ready for real users, but the process doesn't end here.",
          "Google Analytics, Search Console, and the behavior analysis tools that show where the user comes from, what pages they see, and where they leave the site. This data can improve the text, CTA, sections, and SEO strategy. A strong website is a living system that grows with business.",
        ],
      },
    ],
    faqs: [
      { question: "How long does it take to build a website?", answer: "A simple landing page can be done in a matter of weeks, and a complete business site, a blog, with SEO structure and functionality, takes more planning and time." },
      { question: "Is SEO necessary to create a website?", answer: "Yes. The basic SEO should be considered in the first place, because URL-s, headings, metadata, speed and internal links will affect the future visibility of the site." },
      { question: "WordPress bag or Next.js?", answer: "it depends on the purpose. WordPress is practical for manageable content, and Next.js is good for fast, flexible frontend- and large scale projects." },
      { question: "Is the mobile version being made separately?", answer: "The modern website is built on the responsive principle, which means that one system automatically connects to desktop, tablet- and mobile screens." },
      { question: "What do you need after launching?", answer: "analytics control, Search Console verification, content updating, security, speed monitoring, and if necessary improving SEO." },
    ],
  }),
  buyerPost({
    title: "Website development",
    slug: "vebgverdis-damzadeba",
    description:
      "Building a website for business in Georgia: Why a company needs a professional website, how to increase sales, trust, visibility in Google and digital growth.",
    excerpt:
      "A professional website for businesses is a channel for sales, trust, communication and visibility in Google, not just an online presentation.",
    readingTime: "12-15 minutes",
    keywords: [
      "Website development",
      "making a website.",
      "Website development",
      "Business website.",
      "Web Development.",
      "SEO service",
      "Digital marketing.",
      "Visibility on Google",
    ],
    internalLinks: [
      { href: "/en/webdevelopment", label: "Building a website for business." },
      { href: "/en/seo-services", label: "SEO service and visibility in Google" },
      { href: "/en/services/digital_marketing", label: "Digital Marketing Service." },
      { href: "/en/contact", label: "Project Consulting." },
      { href: "/en/blog/website-cost-georgia-2026", label: "website prices in Georgia 2026 in" },
    ],
    sections: [
      {
        title: "a professional website, a business digital office.",
        paragraphs: [
          "Building a website for business means creating a space where the user can always get information about the company, the service, the price context, the keys, and the means of contact. If social networking helps with everyday communication, a website builds a stable and reliable foundation.",
          "In Georgia, a user often searches for a company first in Google, then scans the site, reads the services, and then comments or writes. If the site doesn't exist, is slow, outdated, or incomprehensible, the business loses the people who are already interested.",
        ],
      },
      {
        title: "How the website helps you sell.",
        paragraphs: [
          "a well-designed website takes the user step by step to a decision. The homepage answers the offer, the service pages respond to specific needs, the keys show the experience, the FAQ reduces doubt, and the CTA buttons simplify the call, letter or application.",
          "Sales increase when the site not only shows information, but also answers customer questions in advance, such as service processes, deadlines, budget ranges, results, and contact forms, to help the visitor quickly determine whether it's worth contacting the company.",
        ],
      },
      {
        title: "trust and brand awareness.",
        paragraphs: [
          "a professional website shows that the company takes its presentation and customer experience seriously. Clean design, the right texts, real projects, contact information, and a mobile version that's open-ended builds trust even before the first conversation.",
          "Trust is particularly important for service businesses: a construction company, a clinic, a legal service, a technical service, an agency, or an online store should show customers why it's a safe choice. The website brings these arguments together in one place.",
        ],
      },
      {
        title: "visibility in Google and new customers.",
        paragraphs: [
          "Building a website without SEO often means that a site exists but the user cannot find it. Search visibility requires proper service pages, keyword-, metadata, internal links, fast loading, a link to FAQ and Google Business Profile-.",
          "when the SEO structure is properly designed, businesses can be asked for things like the name of the service, the city, the problem, or the price. This traffic is more valuable because the customer is already looking for a specific solution and is close to the solution.",
        ],
      },
      {
        title: "Communication with the user.",
        paragraphs: [
          "the website simplifies communication. The contact form, phone button, WhatsApp or Messenger link, map, working hours and brief briefing gives the user a quick way to act. The fewer obstacles to contact, the more inquiry a business can get.",
          "the site can include FAQs, service steps, blogs, instructions and terms, reducing repeat requests and helping the sales team be more willing to talk to the customer.",
        ],
      },
      {
        title: "the foundation of digital marketing.",
        paragraphs: [
          "A website is a place where advertising, SEO, social media, email campaigns and analytics come together. Google Ads or Meta Ads is more effective when the user gets to know the ad quickly, easily and conversion-friendly landing page-.",
          "Analytics shows which channel is working, which page is getting the demand and where the customer is losing. Without that, marketing is often at risk. A professional website gives businesses data to better plan their budget and growth.",
        ],
      },
      {
        title: "Long-term growth and support.",
        paragraphs: [
          "building a website doesn't have to be a one-time project. As a business grows, you can add new service pages, blogs, keywords, languages, online payment, calculator, CRM integration, or a user portal. If the foundation is built right, development is easier and more economical.",
          "Next-Hub Solutions looks at the website as a business tool. The main goal of the site is to work on real results: trust, calls, applications, visibility in Google and digital growth. So web development, SEO and digital marketing are interrelated solutions.",
        ],
      },
    ],
    faqs: [
      { question: "Why do businesses need a website?", answer: "the website builds trust, shows service, simplifies communication, and builds the foundation for acquiring new customers from Google." },
      { question: "Is social media not enough?", answer: "the social network is useful, but the website is more stable: it has SEO, service pages, analytics, structure and complete control over the content." },
      { question: "How does the website increase sales?", answer: "the site answers user questions, shows trust signals, simplifies the process of solving and contacts, which increases the chances of enquirys and orders." },
      { question: "SEO is necessary when you're building a website?", answer: "Yes. If SEO is included in the first place, the site has a better chance of getting organic traffic to Google." },
      { question: "How do I start a website design?", answer: "The best place to start is with a brief consultation: what the site is for, who the user is, what pages and features you need, and how to measure the results." },
    ],
  }),
  buyerPost({
    title: "How do you define the budget of a website in Georgia?",
    slug: "website-development-price-georgia",
    description:
      "Website budgeting: how scope works, design, functionality, SEO and support for landing page-, business site and online store price.",
    excerpt:
      "A practical guide to website pricing in Georgia: what is included in the budget, when the project costs and how to calculate the starting cost.",
    readingTime: "14-17 minutes",
    keywords: ["the price of the website.", "making a website.", "the price of an online store.", "landing page", "Next.js", "WordPress", "SEO"],
    calculator: true,
    internalLinks: [
      { href: "/en/blog/website-cost-georgia-2026", label: "2026 website prices in the year" },
      { href: "/en/blog/online-store-price-georgia", label: "The online store price guide." },
      { href: "/en/blog/website-budget-calculation", label: "How to budget properly." },
    ],
    sections: [
      {
        title: "The price of the site is not a single number.",
        paragraphs: [
          "The cost of building a website in Georgia often starts with a simple question: How much does a site cost? The actual right answer depends on what the site should do for the business. If the goal is to present one service and contact form, the budget is one; if you need a catalog, online payment, a customer cabinet, CRM integration, or a SEO strategy, the project is already moving to a different scale.",
          "the initial landing page may cost about 500-1500 GEL, the small business website 500-3500 GEL, the more complete corporate site 500-7000 GEL, the online store 500-12000 GEL, and the custom web app or portal is often priced individually. These ranges are not a fixed rate; they help you understand what level the conversation starts at.",
        ],
      },
      {
        title: "what makes a website expensive.",
        paragraphs: [
          "the price is the most affected by the number of pages, design complexity, functionality, content creation, SEO requirements, and post-launch support. A five-page business site where texts are ready is made much faster than a platform with dozens of services, FAQ, a blog, a keyword, and a SEO structure.",
          "technology is also important. WordPress is a good choice when you need manageable content and relatively fast launch. Next.js is better when speed, flexible frontend, scalability and technically clean SEO. WooCommerce adds to the ecommerce logic: products, raw materials, checkout, payments and delivery.",
        ],
      },
      {
        title: "Practical price ranges.",
        paragraphs: [
          "a service landing page usually includes the main offer, benefits, process, price context, FAQ and CTA. Such a page is good for Google Ads- or for a specific service. A business website adds several pages: about us, services, portfolio, blog, contact, and SEO base.",
          "an online store's price increases with the number of products, filters, payment integrations, delivery rules, a store or accounting system. Custom web app is no longer just a website: it manages data, users, roles, processes, and often requires separate planning.",
        ],
      },
      {
        title: "How to get a realistic assessment.",
        paragraphs: [
          "The real price starts with a brief summary: what services you sell, how many pages you need, whether you have text and photos, whether you need SEO, online payment, a blog, language versions, or an administration panel. The clearer the requirements, the less budget uncertainty.",
          "Next-Hub is designed for this very initial assessment. Choose the type of site, the number of pages, the design level and functionality. Then you can consult more in detail where the budget fits the business purpose, deadlines and technical requirements.",
        ],
      },
      {
        title: "What a good offer should include.",
        paragraphs: [
          "the best offer is not just money. It should include what's in the design, development, SEO, mobile version, analytics, forms, testing and launch support. It should also include what's not included in the price: text writing, photography, complex API integration, or long-term maintenance.",
          "The price should always be evaluated in the context of returns. A professional website can seem expensive, but if it builds trust, simplifies communication, and gets qualified leads from Google, that cost is no longer just a design expense; it's a sales channel.",
        ],
      },
    ],
    faqs: [
      { question: "How much is a simple landing page?", answer: "often 500-1500 starts in the GEL range if the page is simple, the text is ready and no complex function is required." },
      { question: "How much is a business website?", answer: "A business site often starts with 500-3500 GEL-, and the budget increases with the requirements of a larger structure, blog, chess and SEO." },
      { question: "Why is an online store more expensive?", answer: "an online store needs a product catalog, a cart, checkout, payments, delivery, administration, and SEO categories." },
      { question: "SEO is included in the price of the website?", answer: "The basic technical SEO should be included in the quality project, but the complete SEO campaign and content strategy is a separate job." },
      { question: "Does the calculator show the final price?", answer: "the calculator shows the estimated budget. The final price is determined after considering the requirements, terms and functionality." },
      { question: "Why are companies priced differently?", answer: "price-changing experience, design quality, technical standard, SEO knowledge, support and responsibility level." },
    ],
  }),
  buyerPost({
    title: "How to budget the website properly?",
    slug: "website-budget-calculation",
    description:
      "calculating the budget of the website practically: pages, design, functionality, content, SEO, support and integrations into one formula.",
    excerpt:
      "learn how to budget a website without missing pages, features, content, SEO and the next running costs.",
    keywords: ["Website budget.", "the price of the website.", "Web Development.", "SEO", "Payment integration.", "Support the site."],
    calculator: true,
    internalLinks: [
      { href: "/en/blog/website-cost-georgia-2026", label: "website prices in Georgia 2026 in" },
      { href: "/en/blog/how-long-website-development-takes", label: "how long does it take to build a website?" },
      { href: "/en/blog/what-to-do-after-website-launch", label: "What happens when you launch." },
    ],
    sections: [
      { title: "Budget starts with purpose.", paragraphs: ["The website budget calculation doesn't start with colors or design examples. The first question is: What should the site do? If the goal is to introduce the company, it's one type of budget. If the goal is to get leads from Google, online sales, the menu or the customer portal, the requirements change.", "The correct budget formula looks like this: Page count + design level + functionality + content + SEO + integrations + support. Seeing these parts separately will help you figure out where to save and where not to compromise."] },
      { title: "the pages and the structure.", paragraphs: ["the first component is the number of pages. The home page, the services, a separate page for each service, the portfolio, the blog, the FAQ and the contact requires different work. One long page is sometimes cheap, but for SEO, separate service pages work better.", "the budget should include how many unique templates are being created. For example, the design of the service pages can be built on one system, but the text, metadata, FAQ, and internal links must be made separately for each."] },
      { title: "design, functionality and content.", paragraphs: ["the design level is the second big factor. The basic design uses simple sections and less custom element. The professional design adds conversion logic-, mobile details, micro interaction-s, and trust signals. The design is not just visual; it's the way the user makes decisions.", "the functionality includes forms, calculators, filters, online payments, a wallet, a user cabinet, language support, API links and analytics. The content is also part of the budget: if the texts, photos and keywords are not ready, it takes time and resources to prepare them."] },
      { title: "SEO and the integrations.", paragraphs: ["SEO does not only have title and description in the budget. The correct H1/H2 structure is required, canonical, sitemap, robots, schema markup, internal links, image alt, page speed and preparation for Search Console. If the site was built from scratch without SEO, the next exit is often more expensive.", "Payment integrations, CRM, Google Analytics, Clarity, Meta Pixel, Google Tag Manager and email automation should be calculated separately. Sending one form is easy, but ordering the full workflow is already a systematic job."] },
      { title: "How to make a starting estimate.", paragraphs: ["create a table: pages, purpose of each page, essential functions, desired functions, status of content, SEO requirements and need for support. Then type each part as must-have or later. so you get the MVP budget and the next stage of development.", "If you don't have the exact number yet, use a calculator. It doesn't change the consultation, but you get the first picture. Then you can write it down from the /contact page and turn the requirements into a real project."] },
    ],
    faqs: [
      { question: "What is the main factor in the budget of the website?", answer: "the most commonly changed budget is functional, page size, design complexity, and SEO requirements." },
      { question: "Can you break down the budget into stages?", answer: "Yes. Often the first step is to have the necessary pages and features, then the blog, SEO content or additional integrations." },
      { question: "Is content considered separate?", answer: "If the text, photos, keyboards and FAQ are not ready, it takes time and budget to prepare them." },
      { question: "How much does payment integration cost?", answer: "growing because you need checkout flow, security, testing, bank or provider requirements and error management." },
      { question: "Should I keep the site in the budget?", answer: "Yes. After launch, updates, backup, analytics verification, SEO changes and technical support are required." },
    ],
  }),
  buyerPost({
    title: "Why is SEO needed for a website?",
    slug: "why-seo-is-important-for-website",
    category: "seo",
    description:
      "Why a website needs SEO: Organic traffic, visibility in Google, technical SEO, content, local SEO and long-term leads.",
    excerpt:
      "SEO helps the site appear in Google, build customer trust and gain long-term leads without constant advertising costs.",
    keywords: ["SEO", "SEO Optimization", "Google visibility", "technical SEO", "local SEO", "organic traffic."],
    internalLinks: [
      { href: "/en/blog/teqnikuri-seo-auditi", label: "SEO Technical Audit" },
      { href: "/en/blog/seo-small-business-georgia", label: "SEO for small businesses." },
      { href: "/en/blog/why-website-not-showing-on-google", label: "Why is the site not in Google?" },
    ],
    sections: [
      { title: "SEO is a site detection system.", paragraphs: ["a website can be beautiful, fast, and well-organized, but if Google doesn't understand what you're offering to the user, it's going to have limited organic traffic. SEO is the search engine that shows the page's theme, service, location, reliability, and value to the user.", "SEO is not just the recording of keywords in the text. It includes the technical structure, metadata, H1/H2 hierarchy, internal links, schema markup-, speed, content, and local signals."] },
      { title: "organic traffic and leads.", paragraphs: ["Advertising works as long as the budget is spent. SEO is a slower channel, but when built correctly, it generates traffic in the long run. When a customer searches for a particular service and finds your page, their intent is often stronger and closer to acquiring.", "in the field of web development, legal, medical, construction, education or service, SEO is particularly important because the user often compares several companies before making a decision. A well-structured page looks more reliable in this comparison."] },
      { title: "technical SEO", paragraphs: ["the technical SEO includes indexing, sitemap-, robots.txt-, canonical URL-, page speed, mobile experience, structured data-, and error control. If this part is weak, good text may not work properly.", "Search Console helps you to understand which pages have been indexed, where errors are, which query- is displayed, and how CTR. changes after the Search Console site is launched."] },
      { title: "content and local SEO", paragraphs: ["SEO content answers questions from users, such as: how much is the service, how did I choose the company, how long is the project being done, what is the difference between the platforms. These articles not only generate traffic, but also provide pre-sales education.", "Local SEO is important for businesses operating in a particular city or region. Google Business Profile, review-s, service descriptions, and local landing pages help Google Maps and Search- to perform better."] },
      { title: "SEO as a long-term asset.", paragraphs: ["SEO is not a one-time checkout. The market is changing, competitors are writing new content, Google is processing new signals, and customer inquiries are changing.", "If you want the website to be a source of leads and not just an online business card, SEO should be part of the project. Start with the /seo-services page and plan for SEO first from the structure, then from the content, and finally from regular improvements."] },
    ],
    faqs: [
      { question: "SEO When should I start?", answer: "the best time to plan a website is because the URL-, headings, the content and the technical structure are all right from the start." },
      { question: "SEO How long does the result take to show?", answer: "technical changes are visible soon, but stable organic growth often takes several months." },
      { question: "Does the ad change to SEO?", answer: "No. Advertising is fast traffic, and SEO is a long-term viewing channel." },
      { question: "Who needs a local SEO?", answer: "all the businesses that are searched by city, district or service area, like clinics, service companies and stores." },
      { question: "Does the blog help SEO?", answer: "Yes, if the articles answer real questions and link to the pages of the service." },
    ],
  }),
  buyerPost({
    title: "What's the difference between a cheap and a professional website?",
    slug: "cheap-vs-professional-website",
    description:
      "the difference between a cheap and a professional website: design, speed, SEO, security, conversion, support, and long-term cost.",
    excerpt:
      "A cheap site can sometimes cut down on the initial cost, but it can be expensive if you don't have the SEO, speed, security, and conversion structure.",
    keywords: ["Cheap website.", "a professional website.", "Web design.", "Site speed.", "SEO", "Conversion."],
    internalLinks: [
      { href: "/en/blog/what-should-business-website-have", label: "What a good business website should have." },
      { href: "/en/blog/website-cost-georgia-2026", label: "2026 website prices in the year" },
      { href: "/en/blog/vebsaitis-redesign", label: "When do you need redesign?" },
    ],
    sections: [
      { title: "Cheap is not always economical.", paragraphs: ["A cheap website can be a good choice for a very small, temporary purpose, but the problem starts when the business is waiting for it as a sales channel. If the site is slow, it's not visible in Google, it's hard to read on mobile and it doesn't have CTA, the low starting price is actually a lost opportunity.", "A professional website is valued not only for its visuals, but also for how quickly it explains the offer to the customer, how trustworthy it is, and how easy it is to get in touch with them."] },
      { title: "design and user path.", paragraphs: ["Cheap sites often use random template, where the business message is designed and not the other way around, so the visitor doesn't understand what the company is doing, why they should trust it, and what they should do next.", "in professional design, the first screen shows the main offer, the benefits, the social proof and the way to act. The sections are scannable, the text on the mobile is not clipped, and the CTA is not lost."] },
      { title: "speed, SEO and security.", paragraphs: ["Cheap site often uses heavy theme-, excess plugin-, and unoptimized images. This damages speed and user experience. SEO often lacks the correct headings, metadata, sitemap, schema, and internal links.", "a professional design involves technical SEO, secure forms, backup-, correct hosting-, and updated architecture. This is especially important if the site is taking leads, ordering, or customer data."] },
      { title: "Conversion and long-term value.", paragraphs: ["the real value of the site is shown in how much enquiry, calls or orders it makes. A cheap site may not increase sales at all because it doesn't have trust signals, FAQ, price context, portfolio, or simplicity of contact.", "the site that needs to be set up is getting expensive in the long run. redesign, SEO, speed optimization, and content conversion often cost more than starting with the right structure."] },
      { title: "How to make the right decision.", paragraphs: ["If the budget is limited, it is not necessary to do everything on the first day. Better professional MVP: Home page, 2-3 Important Service page, contact, SEO foundation and analytics. Then you can add a blog, keywords and additional features.", "When you talk to the company, ask not just the price, but what's in the price, how SEO is made, who writes the text, how the mobile version is authenticated, and what support you have after launch."] },
    ],
    faqs: [
      { question: "Is a cheap site always bad?", answer: "No, but you should know its limitations. Temporary landing page is different, but the main sales channel of the business is different." },
      { question: "Why is a professional website worth more?", answer: "the price includes strategy, design, technical quality, SEO, testing, analytics and support." },
      { question: "Can I cheaply upgrade the SEO site?", answer: "You can, but if the structure, speed and code are bad, sometimes redesign is more efficient." },
      { question: "What's the biggest risk?", answer: "a site can be online, but it doesn't build trust, it doesn't generate traffic, and it doesn't lead." },
      { question: "How do I save without losing quality?", answer: "Start with the necessary pages and functions, but don't save on the UX-, speed and SEO base." },
    ],
  }),
  buyerPost({
    title: "WordPress or Next.js  Which platform is the best for business?",
    slug: "wordpress-vs-nextjs-business-website",
    description:
      "WordPress and Next.js for the business website: When is WordPress enough, when is Next.js good, speed, SEO, budget and scale.",
    excerpt:
      "WordPress and Next.js are both powerful choices, but for different tasks.",
    keywords: ["WordPress", "Next.js", "Business website.", "Web Development.", "SEO", "CMS", "Speed."],
    internalLinks: [
      { href: "/en/blog/nextjs-vs-wordpress", label: "Next.js or WordPress  Full comparison" },
      { href: "/en/blog/wordpress-seo-gashvebamde", label: "WordPress SEO before launch." },
      { href: "/en/blog/nextjs-vebsaitis-seo-upiratesobebi", label: "Next.js SEO advantages" },
    ],
    sections: [
      { title: "you have to choose the platform for the purpose.", paragraphs: ["WordPress or Next.js is not just a technical choice. It's a decision about how the content works, how fast you need it, how often pages change, how many features are added in the future, and what resources the team has to maintain the site.", "If a business needs a simple, fair website, blog, service pages, and fast launch, WordPress is often a practical choice. If high speed, custom frontend, complex integrations, or scalable web applications are a priority, Next.js is a stronger foundation."] },
      { title: "When is WordPress enough?", paragraphs: ["WordPress works well for small and medium-sized business websites where you need CMS, a blog, add-on services, a WooCommerce store, or simple landing pages. Its main advantage is its ease of administration and large ecosystem.", "but WordPress needs the right configuration. Excess plugin, heavy theme, and bad hosting slow down. So the WordPress project also needs the performance, security, SEO and backup approach."] },
      { title: "When is Next.js the better choice?", paragraphs: ["Next.js is better when the site needs to be very fast, the design is custom-, you need more control over frontend-, or the project needs to grow into a web application in the future. Next.js is particularly strong in terms of SEOfriendly rendering-, reusable component- and the modern deployment process.", "When choosing Next.js-, you should keep in mind that content management may require a separate CMS or admin-. This increases the importance of planning, but ultimately gives you a more flexible and scalable system."] },
      { title: "SEO, Budget and Maintenance", paragraphs: ["SEO is possible on both platforms. WordPress offers many SEO tools, but quality still depends on structure, speed, and content. In Next.js, SEO is often more technically controllable, but metadata, the sitemap, schema, and content logic still need to be built correctly.", "Budget-wise, WordPress is often more affordable in the early stages. Next.js can be expensive, but it's great for large projects when you need speed, secure architecture, and the cost of maintaining custom functionality. is different: WordPress needs plugin updates, and Next.js- needs developer workflow.."] },
      { title: "How to choose the practical", paragraphs: ["If you need a company website, blog, and a simple governance system, consider WordPress. If you need high-performance platform, custom UX, a lot of integration or a portal, consider Next.js.. The best answer often comes not from the platform, but from the correct description of the requirements.", "Next-Hub evaluates both approaches according to the business purpose. The consultation will discuss content management, SEO, budget, deadlines, future development, and the technical capabilities of the team."] },
    ],
    faqs: [
      { question: "Is WordPress SEO bad for you?", answer: "No. It's good for WordPress SEO if theme, speed, metadata, schema and the content structure is correctly articulated." },
      { question: "Is Next.js always better?", answer: "No. Next.js is strong for speed and custom is in development, but for a simple CMS, WordPress might be more practical." },
      { question: "Which one is best for an online store?", answer: "WooCommerce is practical for small and medium-sized stores. More custom ecommerce- may require Next.js frontend and a separate backend." },
      { question: "Which costs less?", answer: "often WordPress is cheap at the beginning, and Next.js requires a larger budget if custom is functional." },
      { question: "Can I switch from WordPress to Next.js-?", answer: "Yes, but you need to plan URL-, SEO, content and redirect- correctly." },
    ],
  }),
  buyerPost({
    title: "What does a good business website have to do?",
    slug: "what-should-business-website-have",
    description:
      "the essential elements of a good business website: offer, services, portfolio, CTA, FAQ, reviews, mobile design and analytics.",
    excerpt:
      "A business website should not only be beautiful, but it should be understandable, fast, reliable, and conversion-focused.",
    keywords: ["Business website.", "CTA", "Web design.", "Portfolio.", "FAQ", "Analytics.", "Mobile design."],
    internalLinks: [
      { href: "/en/blog/veb-development-mcire-biznesistvis", label: "Web development for small businesses." },
      { href: "/en/blog/landing-page-servis-biznesistvis", label: "landing page for Service Business." },
      { href: "/en/blog/cheap-vs-professional-website", label: "the difference between cheap and professional." },
    ],
    sections: [
      { title: "the main offer on the first screen.", paragraphs: ["A good business website has to answer three questions on the first screen: what you do, who you do for, and why customers should contact you. If those answers are vague, the visitor will often leave the page, even if the design is beautiful.", "H1 should be specific, while supporting text should be short and useful. A good CTA shows the user the next step: call, fill out a form, consult or calculate the price."] },
      { title: "services, portfolio and proof", paragraphs: ["the services should be presented in a way that makes it easy for the user to compare options. Each major service needs a brief explanation, who benefits, and when is the right choice. SEO often requires separate service pages as well.", "the portfolio, the cheys, the reviews and the partners' logos increase trust. The customer needs to see that the company has real experience and not just general promises."] },
      { title: "FAQ and resolving the conflict.", paragraphs: ["FAQ is not a formal block at the bottom of the page. It answers questions that keep users from contacting: price, deadlines, process, support, payment, technology, SEO and guarantees. A good FAQ increases conversions and helps search engines too.", "it's useful to show the context of the price, even if it's not a precise rate. The consumer makes better decisions when they know what factors affect the budget and what the service includes."] },
      { title: "mobile design and speed.", paragraphs: ["many users in Georgia view the website from their phones. So the mobile design should not be a scaled down version of the desktop. The text should be read, the buttons should be available, the forms should not be cut, and the CTA should not be lost.", "Speed directly affects confidence and SEO. Heavy images, excess JavaScript and bad hosting also hurt users and the Google rating."] },
      { title: "analytics and development.", paragraphs: ["a good site is measured after launch. Google Analytics, Search Console, Clarity, and conversion events help you understand where a user comes from, which page they're clicking on, and where they're missing.", "a business website should be a developing system. In the future, you can add a blog, new services, keywords, FAQ, landing page- and SEO content. So the architecture should be flexible from the beginning."] },
    ],
    faqs: [
      { question: "How many pages does a business website need?", answer: "at least the homepage, services, about us, portfolio or keys and contact. SEO also prefers separate service pages." },
      { question: "FAQ is necessary?", answer: "Yes, because it answers the user's questions and helps both conversion and SEO." },
      { question: "Does every business need a portfolio?", answer: "If you can show real examples, a portfolio or a key can significantly increase trust." },
      { question: "When should we use Analytics?", answer: "when you launch, you can see traffic, behavior and conversions from day one." },
      { question: "Should the mobile version be designed separately?", answer: "Yes. The mobile user path, buttons, spacing and forms should be checked separately." },
    ],
  }),
  buyerPost({
    title: "Why isn't my website in Google?",
    slug: "why-website-not-showing-on-google",
    category: "seo",
    description:
      "Why the website doesn't appear in Google: indexing, sitemap, robots, weak content, backlinks, technical errors and Search Console.",
    excerpt:
      "If the site doesn't appear in Google, it could be due to indexing, technical error, poor content, or just time.",
    keywords: ["Google is not visible.", "indexing.", "Search Console", "sitemap", "robots.txt", "SEO", "backlinks"],
    internalLinks: [
      { href: "/en/blog/teqnikuri-seo-auditi", label: "SEO technical audit checklist." },
      { href: "/en/blog/why-seo-is-important-for-website", label: "Why do we need SEO?" },
      { href: "/en/blog/rogor-gavauketesot-google-reitingi", label: "How to improve the Google rating" },
    ],
    sections: [
      { title: "First question: has the page been indexed?", paragraphs: ["selecting Google and being low in Google are different problems. If the page doesn't appear at all, you should first check the index.", "a new site often takes time. However, if nothing appears after a few weeks, it could be due to a lack of sitemap-, a robots.txt- error, a noindex meta, a canonical wrong page, or a technical problem."] },
      { title: "Sitemap, robots and canonical", paragraphs: ["Sitemap helps Google find the important URL-s. Robots.txt shows what can be scrolling and what not. Canonical tells you which version of the page is the main one. If any is incorrect, Google may not show the page you need at all.", "a common error is to test or leave preview URL-s in metadata." ] },
      { title: "Weak content and competition.", paragraphs: ["if the page was indexed but doesn't appear to be significant on query-, the problem may be content. Very short text, general headings, no existing FAQ, poor service description, and lack of internal links gives Google less context.", "Competition is important too. If other companies have strong service pages, blogs, reviews and backlinks, a new page needs time and better content. SEO is a process of trust building."] },
      { title: "technical and quality signals.", paragraphs: ["slow site, bad mobile UX, broken links, 404 pages, incorrect redirects and JavaScript rendering- problems affect visibility. It is especially important that the main content in HTML- is accessible and not hidden only behind client-side script-.", "Backlinks and branded signals are working. A brand new domain needs to gain trust. So Google Business Profile, social profiles, partner links, real keywords, and regular content are important."] },
      { title: "What to do in practice.", paragraphs: ["Start with Search Console: check the sitemap, coverage, URL Inspection, and performance. Then review the page title, description, H1, H2 headings, copy, FAQ, internal links, and schema. For a local business, check Google Business Profile as well.", "If the problem is technical, you need SEO audit. If the problem is content, you need to upgrade the service pages and plan the blog. If the problem is trust, you need keywords, reviews and external signals."] },
    ],
    faqs: [
      { question: "How long before a new site appears in Google?", answer: "often a few days to a few weeks, but it takes longer to get a position on competing query-s." },
      { question: "Search Console is necessary?", answer: "Yes. Without it, you can't understand the actual status of the indexing, sitemap- and query-." },
      { question: "robots.txt could be a problem?", answer: "Yes. An incorrect Disallow- or noindex- can block important pages." },
      { question: "Why is it only the homepage?", answer: "the internal pages may not have been indexed yet, they may not be in sitemap-, they may have weak content, or they may have bad internal links to the site." },
      { question: "SEO Audit When do I need it?", answer: "If a site is not visible for a few weeks, or it is visible but it is not getting traffic, then technical and content audits are needed." },
    ],
  }),
  buyerPost({
    title: "How long does it take to build a website?",
    slug: "how-long-website-development-takes",
    description:
      "how long to build the website: landing page, business site, online store and custom app deadlines, content delay and revisions.",
    excerpt:
      "the duration of the website depends on the structure, content, design, functionality and speed of the feedback.",
    keywords: ["the deadline for making the website.", "landing page", "Business site.", "Online store.", "custom app", "Web Development."],
    internalLinks: [
      { href: "/en/blog/website-budget-calculation", label: "Budgeting Guide." },
      { href: "/en/blog/what-should-business-website-have", label: "The Elements of a Good Business Site." },
      { href: "/en/blog/what-to-do-after-website-launch", label: "The next steps to launch." },
    ],
    sections: [
      { title: "The timing depends on the type of project.", paragraphs: ["a simple landing page can be prepared in a week if the texts, brand materials and solutions are ready. A small business website often requires a 3-6 week. An online store on average is a 5-10 week, while a custom web app can last up to several months.", "deadlines change not only because of development, but often the biggest delays come from content, feedback-, payment approval, product data, or changes to decisions."] },
      { title: "steps.", paragraphs: ["the project starts with the analysis and structure. It defines the pages, CTA, services, SEO keywords, functions and technology. Then comes the design, where the visual system and mobile behavior are created.", "the design becomes a real website at the development stage. Then you add the content, SEO metadata, schema, forms, analytics and testing."] },
      { title: "What delays a project", paragraphs: ["the most common reason is unfinished text. If a company doesn't know exactly how to describe the service, who it's talking to, and what proof has, the design and SEO are slow, and it also delays many decision makers and feedback delays.", "online stores spend time preparing growth products: photos, prices, categories, descriptions, supplies, delivery rules and payment integrations."] },
      { title: "How to speed up website creation.", paragraphs: ["start with a brief: goal, audience, services, competitors, desirable examples, text, photos, and contact information. If this material is ready, the project goes much faster.", "It's good to break down priorities: what should be in the first version and what can be added in the second. So the site goes quickly to live- and then evolves based on the data."] },
      { title: "Realistic expectations.", paragraphs: ["This is the text of a website: a quality website is not just about making pages. It requires content logic, SEO, design, technical verification, and conversion path. Too short a time frame often means that some important part is missing.", "The correct deadline should be sufficient for quality, but not indefinite. The timeline, milestone- agreed upon at the beginning of the project, and the responsibilities and responsibilities of both parties are protected."] },
    ],
    faqs: [
      { question: "How long does it take to make Landing page?", answer: "if the material is ready, often 1-3 a week. It takes more time to design or prepare more complex texts." },
      { question: "What is the average life expectancy of a business website?", answer: "often 3-6 week, by page count, design, and content availability." },
      { question: "Why is an online store taking so long?", answer: "products, categories, checkout, payments, delivery and testing requires extra time." },
      { question: "Who's the one who's the most delayed?", answer: "often delaying content, delaying feedback-, or changing requirements increases the project duration." },
      { question: "Can we start it off in phases?", answer: "Yes. The MVP version can be run quickly, and then you can add a blog, SEO pages, or a functional." },
    ],
  }),
  buyerPost({
    title: "How to choose a website company?",
    slug: "how-to-choose-web-development-company",
    description:
      "How to choose a website company: portfolio, SEO knowledge, support, communication, technology and price transparency.",
    excerpt:
      "When choosing a web development company, the price alone is not enough. Check the experience, the process, the knowledge and support of SEO.",
    keywords: ["the website company.", "Web Development.", "Portfolio.", "SEO Knowledge", "Support.", "price."],
    internalLinks: [
      { href: "/en/work", label: "Next-Hub portfolio." },
      { href: "/en/blog/cheap-vs-professional-website", label: "the difference between cheap and professional." },
      { href: "/en/blog/website-cost-georgia-2026", label: "2026 website prices in the year" },
    ],
    sections: [
      { title: "Start with the process, not the price.", paragraphs: ["The first question when choosing a company should not be just how much it costs. Better questions are: how do you plan the project, how do you rate SEO, how do you check the mobile version, what's included in the support, and who will be responsible for the communication.", "A good company doesn't start with design directly. It's trying to understand the purpose of the business, the audience, the competitors, the services, the status of the content, and the way it converts."] },
      { title: "the portfolio and real examples.", paragraphs: ["the portfolio shows not only the visual quality, but also how diverse the team has been working on projects. It's a good sign when projects show different industries, ecommerce, service pages, SEO structure and responsive design.", "ask for examples that show not only homepage, but internal pages, mobile version, speed and content logic."] },
      { title: "SEO Knowledge and Technical Standards", paragraphs: ["Today, building a website without SEO is incomplete. The company needs to know canonical, sitemap, robots, schema, heading structure, internal links, image alt and Core Web Vitals.. This is not just a SEO specialist's job; the development needs to be properly arranged.", "Ask what technologies they use and why. WordPress, Next.js, WooCommerce, or custom stack should be chosen according to the purpose of the project, not just because the team has one tool to train."] },
      { title: "communication, price, support.", paragraphs: ["good communication is obvious from the start: written offer, steps, deadlines, responsibilities and what the price includes. If the offer is too vague, future misunderstandings are almost guaranteed.", "support is important after launch. The form may be broken, the content updated, a SEO error appears, or a new page is needed. The company needs to explain what happens after launch-."] },
      { title: "How to compare offers", paragraphs: ["compare not just the price, but the volume: how many pages, what design, what SEO, what texts, what analytics, what testing, and how much support.", "If a decision is difficult, start with a consultation. A good team can help you decide what you need now and what you can move on to the next stage."] },
    ],
    faqs: [
      { question: "Is the portfolio enough to choose from?", answer: "a portfolio is essential, but also check the process, communication, SEO knowledge and support." },
      { question: "\"Should I choose the cheapest deal?\"", answer: "not always. Compare what's included in the price and how well the site fits the business purpose." },
      { question: "Why is it important to know SEO?", answer: "If a site was built without SEO, it becomes more difficult to get visibility and subsequent editing in Google." },
      { question: "Do I need a contract?", answer: "it's desirable because it should be written with scope, terms, fees and responsibilities." },
      { question: "Who should I turn to after launching?", answer: "you need to know in advance whether the company has a support or a site maintenance package." },
    ],
  }),
  buyerPost({
    title: "What is Google Business Profile and why does it need business?",
    slug: "google-business-profile-for-business",
    category: "seo",
    description:
      "Google Business Profile for Business: Google Maps, Local Search, reviews, calls, directions, service area and profile optimization.",
    excerpt:
      "Google Business Profile helps local businesses to appear in Google Search- and Maps-, receive calls and build trust.",
    keywords: ["Google Business Profile", "Google Maps", "local SEO", "reviews", "Calls.", "Service Zone."],
    internalLinks: [
      { href: "/en/google-business-profile-optimization", label: "Google Business Profile Optimization" },
      { href: "/en/blog/google-business-profile-sales", label: "How to use GBP as a source of sales." },
      { href: "/en/blog/rogor-movizidot-klientebi-google-idan", label: "How to get customers from Google" },
    ],
    sections: [
      { title: "Google Business Profile is the basis of local visibility.", paragraphs: ["Google Business Profile is a business profile that appears in Google Search- and Google Maps. The user sees the address, phone, business hours, reviews, photos, services and directions. Many local searches end here by calling or visiting.", "This is the text of a website: if a business is serving a specific city or region, the profile is often as important as a website. For example, a customer might first find you in Maps-, then go to the site, and only then contact you."] },
      { title: "What business benefits.", paragraphs: ["the profile increases calls, traffic, website traffic and trust. Reviews is often crucial because the user compares several companies and chooses one that is active, trustworthy and well-rated.", "service area, categories and descriptions of services are important for a service business. If filled in correctly, Google will better understand which query- profile to display."] },
      { title: "the basic elements of optimization.", paragraphs: ["optimization starts with the correct category, NAP data, working hours, description, services, and photos. Then you add posts, FAQ, review process management, and linking local signals to the website.", "incorrect or incomplete information damages trust. If your phone, address, or work hours are spelled differently elsewhere, the user and Google also have less confidence in the data."] },
      { title: "The role of the website in GBP-.", paragraphs: ["Google Business Profile works better when it's supported by a strong website. Service pages, local texts, schema markup, contact information, and reviews help Google understand the business context.", "if a user switches from a profile to a weak or slow site, the conversion is lost. So you should consider GBP and the website as a single system: Maps visibility + site trust + simple CTA."] },
      { title: "How to get started.", paragraphs: ["first, check if the profile is authenticated. Then update the categories, descriptions, services, photos, and links. Compose the natural process of review requesting and respond to reviews professionally.", "If you want to get organized quickly, using /google-business-profile-optimization. profile optimization is especially important for clinics, service companies, shops, restaurants, and local service-oriented businesses."] },
    ],
    faqs: [
      { question: "Google Business Profile is free?", answer: "Yes, it's free to create a profile, but it takes time and experience to fill and optimize properly." },
      { question: "Is the website necessary?", answer: "Not for the profile, but a strong website increases trust and helps local SEO." },
      { question: "How important is Reviews?", answer: "very important. It works on trust, conversion and local prominence-." },
      { question: "Will the service area business use the profile?", answer: "Yes. You can refer to service area even if the customer is not in your office." },
      { question: "How long does it take to see results?", answer: "Some changes are visible quickly, but reviews, activity and local signals are accumulating over time." },
    ],
  }),
  buyerPost({
    title: "What does it cost to build an online store in Georgia?",
    slug: "online-store-price-georgia",
    description:
      "Cost of setting up an online store in Georgia: WooCommerce, product catalogue, cartons, checkout, payments, delivery, SEO and support.",
    excerpt:
      "The budget of an online store depends on the products, checkout-, the payment, the delivery, SEO, and the ease of operation.",
    readingTime: "14-17 minutes",
    keywords: ["the price of an online store.", "WooCommerce", "checkout", "Payment integration.", "Delivery", "ecommerce SEO"],
    calculator: true,
    internalLinks: [
      { href: "/en/blog/onlain-magaziis-sheqmna", label: "Checkup for an online store." },
      { href: "/en/blog/website-cost-georgia-2026", label: "website prices in Georgia 2026 in" },
      { href: "/en/blog/wordpress-vs-nextjs-business-website", label: "WordPress or Next.js for business." },
    ],
    sections: [
      { title: "There's more to an online store than product pages.", paragraphs: ["creating an online store includes product catalog, categories, filters, cart, checkout-, payments, delivery, customer messages, and administration process, so it's usually more expensive than a business presentation site.", "A small WooCommerce store in Georgia can start with about 500-7000 GEL range, an average ecommerce 500-12000 GEL, and a custom store, API with complex integration and pricing logic, individually."] },
      { title: "What's Affecting the Price", paragraphs: ["the number of products, options, attributes, discounts, coupons, inventory, delivery rules, and payment providers increase the budget. If product descriptions and photos aren't ready, then content preparation is a separate job.", "It's important to have the simplicity of checkout-. The more complex the payment and delivery process, the more testing you need."] },
      { title: "WooCommerce When is a good choice?", paragraphs: ["WooCommerce is a good choice for small and medium-sized stores where you need a fair catalog, WordPress CMS, SEO capabilities, and relatively fast launch.", "If a store needs a very custom UX, headless architecture, a large traffic or a special business logic, then a Next.js frontend and a separate backend might be better."] },
      { title: "SEO and support for ecommerce-", paragraphs: ["The online store SEO includes category pages, product metadata, schema, breadcrumbs, image alt, filter URL- controls and internal links. If this is not planned in advance, the Google may not understand the structure of the store.", "support is required after launch: plugin updates, payment testing, backup, speed monitoring, product updates and Search Console control. ecommerce does not end on launch-."] },
      { title: "How to Budget", paragraphs: ["list the product categories, the number of products, payment methods, delivery rules, languages, SEO requirements and administration requirements, and then come up with the necessary and desirable functions.", "If you don't know what it's going to cost you, start with a calculator, and then consult with a consultant."] },
    ],
    faqs: [
      { question: "WooCommerce store.", answer: "Small WooCommerce stores often start with 500-7000 GEL-, but the price depends on the features and products." },
      { question: "Does payment integration include the price?", answer: "sometimes it comes in, sometimes it's considered separate. Depends on the provider, checkout flow-, and the testing volume." },
      { question: "Who makes product descriptions?", answer: "the client can create or organize separate content for the job." },
      { question: "Does an online store need SEO?", answer: "Yes. Categories, products, schema and internal links help with organic sales." },
      { question: "Do you need support after launch?", answer: "Yes. Payments, updates, backup, speed and product changes require constant attention." },
    ],
  }),
  buyerPost({
    title: "What do you need after you start a website?",
    slug: "what-to-do-after-website-launch",
    description:
      "The following steps to launch the website: Search Console, Analytics, Clarity, SEO updates, content, speed, backup and support.",
    excerpt:
      "launch is not the end of the site. After launch, the measurement, SEO control, content update and maintenance begins.",
    keywords: ["After the launch of the website.", "Search Console", "Analytics", "Clarity", "Site maintenance.", "backup", "SEO update"],
    internalLinks: [
      { href: "/en/website-maintenance-services", label: "Site maintenance service." },
      { href: "/en/blog/saitis-movla-launchis-shemdeg", label: "Why isn't the project completed by launch- today?" },
      { href: "/en/blog/why-website-not-showing-on-google", label: "Why is the site not in Google?" },
    ],
    sections: [
      { title: "Launch is just the beginning.", paragraphs: ["the launch date is important, but it's not the end of the project. This is the day when we start collecting real data: how the user enters, which pages work, where the conversion is lost, and what questions the audience asks.", "if the site is left unattended after launch, over time, there will be technical errors, outdated content, slow speed, plugin problems, and loss of SEO capabilities."] },
      { title: "Search Console and Analytics", paragraphs: ["the first step is to set up Google Search Console. It shows the index, sitemap- status, query-, CTR and technical issues. Analytics shows you the sources of traffic, user behavior and conversion events-.", "Clarity or something like that helps us understand UX-: where the user scrolls, what they click, where they stop and where they struggle. This data is used to improve design and content."] },
      { title: "SEO and the content update.", paragraphs: ["After launch, titles, descriptions, H1 and H2 headings, schema, image alt text, internal links, and crawl errors should be checked. Then the content plan begins: blog posts, FAQs, case studies, new service pages, and improvements to existing copy.", "SEO results rarely come in a day. It requires constant monitoring, analysis of query-s, and strengthening pages for the queries that users are actually looking for."] },
      { title: "speed, security and backup", paragraphs: ["the site must be certified for speed, uptime-, formwork and mobile UX-. WordPress projects require plugin/theme updates and backup. Next.js projects dependency updates, build monitoring and hosting configuration are important.", "Backup is particularly important for ecommerce or lead generation sites. If the form, checkout or data is lost, the business is directly damaged."] },
      { title: "Care Plan.", paragraphs: ["Best Practice is a monthly maintenance plan: technical checks, minor content updates, Search Console review, speed, backup, and security checks. More active sites may need weekly checks.", "If you want the site to run steadily and not lose SEO, you should plan support after launch."] },
    ],
    faqs: [
      { question: "Search Console is necessary?", answer: "Yes. It shows how Google sees your site and where there is an indexing or technical problem." },
      { question: "Analytics and Clarity are both required?", answer: "Analytics shows the quantitative data, and Clarity shows the behavior picture." },
      { question: "How often do you need to maintain the site?", answer: "Most business sites need monthly checks, and ecommerce- needs more frequent checks." },
      { question: "Why should content be updated?", answer: "the market, the services and the customer questions are changing. Updated content helps SEO and trust." },
      { question: "Backup Who should run it?", answer: "It's important that the technical team or the maintenance service actually verify the recovery." },
    ],
  }),
];

function slugifyProject(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function caseStudySections(project) {
  const [name, , category, description, tech, localized] = project;
  const techText = tech.join(", ");
  return [
    {
      title: "Project Review.",
      paragraphs: [
        `${name}'s case shows how a website can be more than a visual presentation and serve as a digital business channel. ${localized} This type of web development requires clear structure, effective web design, SEO, and a simple path from interest to action.`,
        `The initial description of the project was: ${description} This description shows that the page should serve as a space for trust, information and conversion. Projects like this are important for Next-Hub because they combine the practical business needs, technical performance and the fundamentals of SEO service.`,
        `Category: ${category}. Technologies used: ${techText}. This combination allows us to realistically assess the objectives of the project: where the flexibility of WordPress is needed, where the capabilities of WooCommerce are ecommerce, where the speed of Next.js- is, and where Google Analytics or SEO monitoring is needed.`,
      ],
    },
    {
      title: "Challenge.",
      paragraphs: [
        `${name}'s main project challenge was explaining a complex service or product clearly. A business may have a strong offer, but traffic will not convert if the website cannot explain what is sold, why it is trustworthy, and how a customer should make contact.`,
        `The second challenge was structure. Website building in Tbilisi and throughout Georgia often starts with design, but successful projects start with information architecture: what the user should see on the first screen, how to understand the services, where to deploy CTA, how to look like proof, and how to enhance SEO optimization.`,
        `The third challenge was technical simplicity. Businesses need a site that the team will use, update, and measure in the future. So it's not just launch that's important, but it's maintaining the site, supporting the site, and a structure that will load new pages and content in the future.`,
      ],
    },
    {
      title: "Solution.",
      paragraphs: [
        `the solution was built around the services and the customer journey. The project required a web design that was visually clean but didn't hide key information. The key sections were to help the user understand the offer, compare options, and quickly move on to contact or order action.`,
        `In terms of web development, the choice of technology is based on the purpose of the project. ${techText} used to make the site fair, ready for responsive and SEO. If the project needed ecommerce, WooCommerce provided the basis for product cataloging and order management; if high speed and flexibility were needed, Next.js/React was a stronger choice.`,
        `part of the SEO service included page headings, descriptions, sections, internal links and semantic structure planning. The goal was to get the Google right in the project area and to see the benefits to the user on the first visit.`,
      ],
    },
    {
      title: "the technologies used.",
      paragraphs: [
        `${name}'s technology foundation used ${techText}. Each technology served a specific purpose: content management, product catalogues, a fast frontend, tracking, SEO, or performance improvement.`,
        `WordPress and Elementor are especially useful when businesses need to update content frequently. WooCommerce is important for creating an online store because the product, cart, payment and ordering process are all in a single system. Next.js and React are powerful when you need a fast, modern and scalable website.`,
        `technology is just a tool. The real result comes when the technical choice matches the business goal. So when planning every project, Next-Hub evaluates not only what can be done, but what is most beneficial to the particular business.`,
      ],
    },
    {
      title: "the design process.",
      paragraphs: [
        `the design process began with the user asking questions: what is the visitor looking for, what information is needed to trust, what contradictions can be encountered, and what action to take.`,
        `the visual approach used in the project was focused on clear hierarchy. The headings should be straightforward, the cards easily scanned, the CTA visible, and the text detailed enough for the SEO and the user. This is the balance that makes website building a business tool.`,
        `responsive design was an important part. Mobile users needed to get the same information as on desktop, but in a shorter and more convenient way. So the layout, spacing, card grid and CTA sections were split into different screens.`,
      ],
    },
    {
      title: "SEO Optimization",
      paragraphs: [
        `SEO in the ${name} project was not treated as a plugin added at the end. It was considered in the structure through headings, text sections, image alt text, internal links, page purpose, and semantic topics.`,
        `In a service or ecommerce project, it's important that Google has clear signals: what products or services are, what location is important, what problems are being solved by the business, and how the pages are interconnected. This helps both ranking and CTR.`,
        `SEO service is particularly effective in Georgia when the website does not attempt to place everything on one page. The content of the project should be divided into themes, services and products.`,
      ],
    },
    {
      title: "results.",
      paragraphs: [
        `The main result was a clearer digital presentation. Visitors can quickly understand what ${name} offers, how the service or product works, and which step to take next. This reduces uncertainty and increases the chance of an enquiry.`,
        `the technical result is a more manageable and evolving website. When the content, sections and technology are properly planned, it is possible to add new pages in the future, expand the SEO content, create landing pages for advertising, and maintain the site with less risk.`,
        `The business result is that the website is no longer just an online business card, it becomes a channel that combines web design, web development, SEO optimization, Google Analytics-, and real-world user actions.`,
      ],
    },
    {
      title: "the content architecture and the user path.",
      paragraphs: [
        `In a project like ${name}, content architecture defines how users move from the first screen to an action. Information was organized so visitors could quickly understand what the company does, what benefit it offers, which technologies are used, and how to make contact or place an order.`,
        `creating a website always requires the right balance between short text and depth enough for SEO. If the text is too short, Google cannot get enough context; if it is too complex, the user loses interest. Therefore, sections must be scannable, headings direct, and each block must answer a real question.`,
        `the content architecture also helps in future development. When the project has clear services, technologies, FAQ and CTA, in the future it can add a blog, keyboards, support for Google Business Profile-, Google Ads landing page- and new directions for optimizing SEO so that the site is not built from scratch.`,
      ],
    },
    {
      title: "business growth potential.",
      paragraphs: [
        `For a project like ${name}, a website can become a continuous sales and communication channel. When configured correctly, it keeps working while the team is offline by collecting enquiries, explaining services, presenting products, building trust, and guiding customers to the next step.`,
        `SEO service is a key part of this growth. Following the project, it is possible to create new landing pages, add local keywords, optimize Google Maps, use a blog strategy and Search Console data. This approach makes the project a one-time website growth system.`,
        `a website is important for business growth. The technology, content, and search behavior are changing. Regular updates, speed checks, form testing, and SEO monitoring help the site to work steadily and create more value over time.`,
      ],
    },
    {
      title: "What other businesses can learn from this case study",
      paragraphs: [
        `The key lesson from this key is that web development shouldn't start with just design choices. First, it should define the path of the user, the business goal, the key services, the conversion points, and the SEO structure. Then the choice of technology becomes much simpler and more accurate.`,
        `The second lesson is that every project needs real content. General phrases like "high quality" or "best service" are no longer enough. The user needs specific information, examples, benefits, processes, and trust signals. Google needs thematic depth and clear semantics.`,
        `The third lesson is that the website needs to be scalable. A good starting structure for the future will make it easier to add SEO articles, create new service pages, expand an online store, add software modules, and strengthen the Google Business Profile strategy.`,
      ],
    },
    {
      title: "The next steps for a project like this.",
      paragraphs: [
        `If your business is planning a project similar to ${name}, the first step is to define the goal. Clarify whether the site should generate leads, sell online, strengthen brand credibility, or simplify internal processes. This choice determines the design, technology, SEO structure, and content scope.`,
        `the second step is to create a map of services and pages. Businesses often need not only a homepage, but separate service pages, FAQ, blog, keys, contact page, and if necessary part of an online store or booking system. Such a map is then relied upon for web design and web development.`,
        `the third step is to set up the measurement system. Google Analytics, Search Console, form goals and Google Business Profile data show what actually works. With this data, you can plan the next steps in SEO optimization, site maintenance and content development.`,
      ],
    },
    {
      title: "the conclusion.",
      paragraphs: [
        `${name}'s case shows that successful website development begins with understanding the business goal. Technology, design, and SEO work best when they are part of one strategy.`,
        `For Next-Hub, these projects are an example of how a website can become a platform for sales, trust and communication. Whether it's WordPress, WooCommerce, Next.js or software development, the main task is to create a user-friendly and measurable outcome for the business.`,
        `If your business needs web development, web design, SEO services, or building an online store, it's important to start the project with the right questions: Who's the customer, what's the customer looking for, what needs to be understood, and what action to take.`,
      ],
    },
  ];
}

function educationalSections(topic) {
  const [title, , category, summary] = topic;
  return [
    {
      title: "Introduction",
      paragraphs: [
        `${title} it's a topic that applies to almost every modern business. For Georgian companies, website building is no longer just about creating an online card; it's about a system of sales, trust, SEO optimization and customer experience. ${summary}`,
        `When a business starts thinking about web development, web design, or SEO service, the biggest mistake is making a decision only on the visual or just on the price.`,
        `This article will discuss a practical approach based on Next-Hub Solutions-'s projects and experience. Here you will see how Next.js, WordPress, software development, online store development, Google Business Profile and SEO optimization are related.`,
      ],
    },
    {
      title: "Why is this important for business?",
      paragraphs: [
        `For businesses, the website is often the first touch point. A user goes from Google, an ad, a social network or a recommendation to the site and evaluates whether it's worth continuing in a few seconds. If the page is not clear, slow to load, or doesn't deliver a service, a potential customer will choose another provider.`,
        `SEO optimization plays an important role here. Search engines need structure: a unique H1, correct H2 and H3 headings, internal links, schema markup, FAQs, image alt text, and logical URLs. Users need clear language, trust signals, examples, pricing context, and a CTA.`,
        `So building a good website in Tbilisi or Georgia should combine several areas: web design, web development, content, technical SEO, site maintenance and, if necessary, Google Business Profile optimization.`,
      ],
    },
    {
      title: "Strategic Planning.",
      paragraphs: [
        `the first step is to define the goal. Should the site bring in calls, form filings, online orders, checkouts, Google Maps visits, or just a professional presentation?`,
        `the audience comes next. Different users need different information. ecommerce customers search for price, supply, and product details. Service customers search for trust, experience, process, and contact path. B2B customers pay more attention to keywords, technology, and company credibility.`,
        `Strategic planning also includes keyword mapping-. For example, website building, web design, SEO services, online store building, and Google Business Profile optimization, you don't have to fight on one page. Each needs their own powerful landing page or supporting article..`,
      ],
    },
    {
      title: "Technology Choice.",
      paragraphs: [
        `technology should be compatible with business purpose. WordPress is a good choice when you need a simple CMS, frequent content updates, a WooCommerce store, or a relatively fast launch. Next.js is better when you need high speed, modern frontend, scalability, and a more flexible web application.`,
        `software is created when the business no longer believes in just the information page. If you need the dashboard, CRM process, booking system, client portal or API integrations, that's already the domain of custom software development-. At that point, the project needs to be designed as a product, not just a set of pages.`,
        `the technology selection applies to SEO. A site with fast, well-structured, clean code makes a better user experience-. But technology alone is not enough; it requires the right content, metadata, internal links, sitemap and regular site maintenance.`,
      ],
    },
    {
      title: "Web design and conversion.",
      paragraphs: [
        `Web design is not just about colors and images. Design is the way the customer reads the offer. Strong design answers questions like where I am, what matters, why I should trust, what it's worth, what I get, and how to connect.`,
        `a conversion-oriented page needs a clear hero section, benefit cards, process, pricing context, case study, FAQ, and CTA.. This structure helps the user make decisions and reduce uncertainty. The same structure helps SEO, because the page is rich in thematic text and headings.`,
        `responsive design is essential. The fastest inquiry. is often found on a mobile user if the text on the mobile is hard to read, the button is missing or the form is uncomfortable, the site is losing leads. So the design needs to be planned on different screens from the beginning.`,
      ],
    },
    {
      title: "SEO Optimization and Content",
      paragraphs: [
        `SEO optimization starts with the proper distribution of themes. Each major service needs its own page, and blogs and keyboards on these pages need to be enhanced with internal links. For example, an article on Next.js- should link to a web development page, and a Google Business Profile article to a local SEO service.`,
        `FAQ section is particularly useful. It answers real questions and creates the ability of FAQ schema. Questions should be natural: what it costs to build a website in Georgia, how long SEO lasts, when WordPress is good and when Next.js is, why the site needs to be maintained.`,
        `content should not be just a list of keywords. Good SEO text solves the problem, shows the process, gives an example, and helps the user with the solution. So keywords appear naturally and the page becomes more reliable.`,
      ],
    },
    {
      title: "Google Business Profile and local growth.",
      paragraphs: [
        `Google Business Profile is an important channel for local businesses. When a customer searches for a service close up, Google Maps and the results of the profile often come first. So the profile categories, services, description, photos, review-s and the website link should be properly executed.`,
        `Google Business Profile does not work alone. The website should have relevant service pages, contact information, LocalBusiness schema, and local content. This helps Google understand what the business does and where it works.`,
        `Google Maps optimization is particularly powerful for areas where the customer makes quick decisions: restaurant, beauty, maintenance, car maintenance, legal or accounting services. The website and profile should work together.`,
      ],
    },
    {
      title: "How to measure results.",
      paragraphs: [
        `it is necessary to measure the result. Google Analytics, Search Console, call tracking, form submissions and ecommerce events shows if the site is working for business.`,
        `Search Console is particularly useful for SEO. It shows query-, impressions-, CTR and the average position. If the page has many impressions but CTR is low, then you should check out title and description. If query- has impressions but no corresponding landing page, then this is the new page idea.`,
        `Site maintenance is also part of the result. After launch, you need to update the content, check the broken link-, speed control, update the sitemap-, and add new articles. So the site doesn't stop and gets stronger over time.`,
      ],
    },
    {
      title: "Common mistakes to avoid.",
      paragraphs: [
        `The first mistake is to only see the website visually. A beautiful page is useful, but without a clear message, the right structure, the SEO optimization and the way it works, it doesn't work perfectly for the business.`,
        `The second mistake is to put all the services on the same page. If a business offers web development, web design, SEO services, software development and site maintenance at the same time, it needs a separate, strong page for each direction. So Google gets a better understanding of the topic and the customer gets more accurate information.`,
        `the third mistake is to leave the site after launch-. The website is not finished on the day of launch. It requires site maintenance, content updating, Search Console verification, speed control, FAQ extension, and the addition of new articles. This process increases organic visibility over time.`,
      ],
    },
    {
      title: "How to get started in practice.",
      paragraphs: [
        `Write down your main services and the most frequently asked questions for each customer at the beginning, such as: How much does it cost to build a website, how long does it take to build an online store, when is WordPress, when is Next.js, what is included in the SEO service, and how does Google Business Profile help local businesses.`,
        `then compare the existing site. Does it have a unique title and description? Is there only one H1? Is there enough text on the service pages? Is there CTA visible? Do you see the trust signals? Does the form work? Is it fast on mobile? These simple questions often lead to the fastest improvements.`,
        `finally, plan the content system. Main service pages should be strong landing pages, and the blog should be stronger. The keys show experience, FAQ answers real questions, and the internal links help the user, and Google helps the relationship between the pages.`,
      ],
    },
    {
      title: "Next-Hub Solutions- approach.",
      paragraphs: [
        `Next-Hub Solutions looks at the project as a whole digital system. Web design, web development, SEO optimization, Google Business Profile, software development and site maintenance are interconnected. If any part is weak, the end result is weak.`,
        `Our approach starts with business purpose, not technology. Some projects need WordPress, some Next.js, some WooCommerce, some custom dashboard, and some just a well-planned SEO landing page.. The right choice depends on what the project wants to change in the business.`,
        `So every article and Chase in this blog has one goal: to get a better understanding of how to get real results from a website. If you need a website in Tbilisi, a SEO service in Georgia, an online store, or Google Maps optimization, you need to plan the right strategy from the very first step.`,
      ],
    },
    {
      title: "checklist for business.",
      paragraphs: [
        `check before you start the project whether you have a description of the key services, audience, competitors, desired examples, and contact actions. This information makes the website much easier to build and reduces any misunderstandings at the design and development stage.`,
        `Then prepare the SEO base: the main keywords, service names, locations, Google Business Profile link, frequently asked questions, and existing Search Console data. This material can make for better metadata, headings, schema and internal link structure.`,
        `finally decide how to proceed with the project after launch. You need to maintain the site, update the content, SEO service, Google Maps optimization, new blog articles or additional software modules?`,
        `The goal of this checklist- is simple: don't start a project with a vague desire to need a site. A better start is a specific task: we need more calls, more orders, better Google ratings, a credible presentation, a fast online store, or in-house process automation. When the task is accurate, web design, technology, text, and SEO optimization work in one direction.`,
        `a properly planned project is cheaper and more efficient because it requires less re-engineering. So strategy, content, design, development and SEO should be discussed together from the beginning.`,
        `so the website is no longer a one-time expense; it becomes a channel that builds experience, data, organic traffic, and customer trust over time.`,
        `that's what sets a result-oriented digital product apart from a regular online presentation.`,
        `This approach is particularly important in competitive niches where the customer compares several providers and makes a quick decision.`,
      ],
    },
    {
      title: "the conclusion.",
      paragraphs: [
        `${title} It means practically one thing: businesses need a digital system that helps the customer make decisions, and Google helps the page understand.`,
        `Next-Hub Solutions looks at projects like: website design, web design, SEO service, software development, online store development, and Google Business Profile optimization are interrelated directions.`,
        `If you want your site to be not only beautiful, but results-oriented, start with the right questions: Who's the user, what's the search engine, what's the decision-making disruption, and how can the website simplify the process?`,
      ],
    },
  ];
}

function faqForPost(post) {
  return [
    {
      question: "Why is this a topic that matters to businesses?",
      answer:
        "Because the website, SEO, and web design directly affect trust, visibility, and customer retention.",
    },
    {
      question: "Do I need to optimize SEO at launch?",
      answer:
        "Yes. SEO optimization works best when the structure, metadata, headings and internal links are properly programmed from the start.",
    },
    {
      question: "When should I contact Next-Hub Solutions-?",
      answer:
        "If you need a website design, web development, SEO service, online store creation, or website maintenance, consultation before planning a project is the best step.",
    },
  ];
}

export const buyerJourneySlugs = [
  "vebsaitis-damzadeba",
  "ratom-schirdeba-bizness-profesionaluri-vebsaiti",
  "ra-ghirs-vebsaitis-damzadeba-saqartveloshi",
  "vebsaiti-tu-facebook-gverdi",
  "rogor-avirchiot-veb-developeruli-kompania",
  "ratom-ar-moakvs-tqvens-vebsaits-klientebi",
  "rogor-mimdinareobs-vebsaitis-sheqmnis-procesi",
  "ramden-khanshi-mzaddeba-vebsaiti",
  "ratom-aris-seo-aucilebeli-vebsaitistvis",
  "nextjs-tu-wordpress-biznesistvis",
  "rogor-gazardot-gayidvebi-vebsaitis-dakhmarebit",
  "gavrcelebuli-shecdomebi-vebsaitis-shekvetisas",
];

const prioritySlugs = [
  ...buyerJourneySlugs,
  "website-cost-georgia-2026",
  "landing-page-servis-biznesistvis",
  "nextjs-vs-wordpress",
  "google-business-profile-sales",
  "seo-small-business-georgia",
  "printerman-website-case-study",
];

const priorityPostDetails = {
  "website-cost-georgia-2026": {
    title: "How Much Does a Website Cost in Georgia in 2026? Prices from ₾500",
    metaTitle: "How Much Does a Website Cost in Georgia in 2026? Prices from ₾500",
    description:
      "Website creation prices in Georgia in 2026 — types, a starting cost from ₾500, services, stages, and factors affecting the final price.",
    excerpt:
      "find out what it costs to build a website in Georgia in 2026, what defines the budget and how to plan the site so that the cost becomes a sales channel.",
    readingTime: "15-18 minutes",
    keywords: [
      "making a website.",
      "creating a website.",
      "Making a website in Georgia",
      "2026",
      "Web Development.",
      "Web design.",
      "Next.js",
      "WordPress",
      "SEO Optimization",
      "Site maintenance.",
    ],
    angle:
      "the price should not be measured by the number of pages only. The actual budget is determined by the goal, the depth of the content, the quality of the design, the functionality, the SEO requirements, ease of administration, and post-launch support.",
    businessExample:
      "For example, a small service business may need a fast landing page with a clear CTA, while an online store needs a catalog, payments, delivery logic, analytics, SEO categories, and site maintenance.",
    decision:
      "2026 This year, the right question is no longer how much is a site worth?",
    opening:
      "In Georgia, website building starts with 500. This is the starting price for a simple project and not the fixed cost for all types of websites; the final budget depends on the type of site, design, functionality, integrations, content and complexity.",
    faqs: [
      {
        question: "How much does it cost to build a website in Georgia in 2026?",
        answer:
          "website construction starts at 500. The final cost depends on the design, the number of pages, the CMS, the functionality, the SEO optimization and support; the ecommerce or custom Next.js project requires a larger budget.",
      },
      {
        question: "Is WordPress cheaper or Next.js?",
        answer:
          "often WordPress is faster and more economical for a small site, and Next.js is better when you need a high-speed, flexible frontend and a scalable product.",
      },
      {
        question: "Is SEO included in the price of the website?",
        answer:
          "The basic technical SEO should be included in a quality project, but the complete SEO service, content strategy and Google Business Profile optimization are separate jobs.",
      },
      {
        question: "What is the cost of starting a website?",
        answer:
          "hosting, domain, security updates, content changes, analytics control and, if necessary, site maintenance.",
      },
    ],
  },
  "landing-page-servis-biznesistvis": {
    title: "What is Landing Page and how does it increase sales?",
    metaTitle: "What is Landing Page and how does it increase sales?",
    description:
      "Find out what Landing Page is, when it's needed by Georgian businesses, how it helps to grow leads and sales, and how it differs from a full-fledged website.",
    excerpt:
      "Landing Page is a single-offer, single-action page. Find out when it's needed by a Georgian business and what makes it different from a full-fledged website.",
    readingTime: "12-15 minutes",
    keywords: [
      "What is Landing Page?",
      "Landing Page",
      "Landing page.",
      "Landing Page for Business",
      "Lead Generation.",
      "Online sales.",
      "Web design.",
    ],
    opening:
      "Landing Page is a single-service, single-core activity-focused website, such as filling out an application, calling, booking, or purchasing. Unlike a full-service website, it does not focus on multiple services and pages and leads users to a specific decision.",
    angle:
      "Georgian businesses need Landing Page especially to run an advertising campaign, specific service, event or new offer when the goal is to measure leads or sales.",
    businessExample:
      "For example, a service company can explain the offer on one page, show benefits and trust signals, answer frequently asked questions, and lead a customer to a short form.",
    decision:
      "If a business needs multiple services, a team, a blog, and a wide search visibility, a full website is the right choice; Landing Page works better for a single, clear campaign.",
    faqs: [
      {
        question: "What is Landing Page?",
        answer:
          "Landing Page is a single specific offer and action-oriented page that leads a user to announce, call, book, or buy.",
      },
      {
        question: "What's the difference between Landing Page and the full website?",
        answer:
          "Landing Page serves one purpose, while the full website combines several services, company information, a blog, keywords, and multiple search topics.",
      },
      {
        question: "When do businesses need Landing Page?",
        answer:
          "Landing Page is used to promote a promotional campaign, a specific service, an event, a special offer or a new product.",
      },
      {
        question: "How does Landing Page help sales?",
        answer:
          "clear offer, benefits, trust signals, FAQ, and one key CTA reduces confusion and makes it easier for the user to make decisions.",
      },
    ],
  },
  "nextjs-vs-wordpress": {
    metaTitle: "Next.js or WordPress  Which one should you choose?",
    description:
      "Next.js and WordPress A practical comparison for Georgian business: SEO, speed, budget, management, security, scale and the right choice of website design.",
    excerpt:
      "Next.js and WordPress are both powerful choices, but for different tasks.",
    readingTime: "15-18 minutes",
    keywords: [
      "Next.js",
      "WordPress",
      "Next.js or WordPress",
      "Web Development.",
      "making a website.",
      "SEO Optimization",
      "Web design.",
      "Software development.",
      "Create an online store.",
    ],
    angle:
      "choice is not a matter of fashion or taste. WordPress works best when you need a simple CMS, fast content management and a relatively flexible budget; Next.js is better when a site needs to be fast, technically clean, and turn into a more complex product in the future.",
    businessExample:
      "For a service company that needs to add a few blogs a week, WordPress can be comfortable. For a company that needs a custom calculator, a client portal, API integrations, or a high Core Web Vitals, Next.js is a stronger foundation.",
    decision:
      "The right choice starts not with the platform, but with the task: who manages the content, how often the pages change, what SEO goals you have, and how much the project will grow in the future.",
    faqs: [
      {
        question: "Is SEO a Next.js bag or WordPress?",
        answer:
          "both can be SEOfriendly. Next.js is powerful in speed and structure, and WordPress is comfortable for content management. The end result determines the quality of performance.",
      },
      {
        question: "When did I choose WordPress?",
        answer:
          "WordPress is good when you need CMS, a blog, easy-to-use pages, a WooCommerce store, or a project to run relatively quickly.",
      },
      {
        question: "When should I choose Next.js?",
        answer:
          "Next.js is a bag when you need high speed, custom functional, frontend control, integrations or product scale.",
      },
      {
        question: "Can WordPress and Next.js be combined?",
        answer:
          "Yes. Some projects use WordPress as headless CMS, and frontend as Next.js-. This approach combines ease of operation and technical speed.",
      },
    ],
  },
  "google-business-profile-sales": {
    metaTitle: "How to make Google Business Profile a sales source.",
    description:
      "Google Business Profile and Google Maps Optimization for Sales: Categories, Services, review-s, Photos, Posts, Website and Local SEO.",
    excerpt:
      "Google Business Profile is not just a map. A properly executed profile can be a permanent source of calls, visits and orders.",
    readingTime: "15-18 minutes",
    keywords: [
      "Google Business Profile",
      "Google Business Profile Optimization",
      "Google Maps Optimization",
      "local SEO",
      "SEO Optimization",
      "SEO service",
      "making a website.",
      "Customers from Google",
    ],
    angle:
      "the profile results depend on how well the information is filled in, how well it matches the website, how active the photos and posts are, how review-s are doing, and whether the business has a local SEO strategy.",
    businessExample:
      "a restaurant, a beauty studio, a printer service, a car company or a technician often takes a customer in the moment a customer searches for a solution in Google Maps.",
    decision:
      "Google Business Profile becomes a sales source when the profile, website, service pages, review is a strategy, and CTA works together, not separately.",
    faqs: [
      {
        question: "How does Google Business Profile help sales?",
        answer:
          "the profile increases local visibility, shows the call, route and website buttons, collects review-s, and helps the user make quick decisions.",
      },
      {
        question: "Is it enough to just fill out a profile?",
        answer:
          "No. You need the right categories, services, photos, posts, review-s, website compliance and regular optimization.",
      },
      {
        question: "Google Maps optimization is part of SEO?",
        answer:
          "Yes. It's an important part of the local SEO, and it's particularly powerful for businesses that need calls, visits, or local demand.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "The first improvements may appear in a few weeks, but steady growth requires constant activity, review-s, local content, and website support.",
      },
    ],
  },
  "seo-small-business-georgia": {
    metaTitle: "SEO optimization for small businesses in Georgia.",
    description:
      "SEO Optimization for Small Business: How to organize keywords, service pages, Google Business Profile, FAQ schema, content and technical SEO.",
    excerpt:
      "For small businesses, SEO is not just a tool for large companies.",
    readingTime: "15-18 minutes",
    keywords: [
      "SEO Optimization",
      "SEO service",
      "SEO for small businesses.",
      "SEO service in Georgia",
      "making a website.",
      "Google Business Profile",
      "Google Maps Optimization",
      "Site maintenance.",
    ],
    angle:
      "Small businesses often don't have a big advertising budget, so SEO needs to be accurate: the right service pages, local keywords, FAQ, schema, Google Business Profile, and content that answers real questions.",
    businessExample:
      "If a company offers accounting services, printing, web design or construction services, the customer is already looking for a solution in Google. The SEO's task is to be visible and convincing when the company is on demand.",
    decision:
      "SEO is best for small businesses when it starts with website structure and goes on to content, technical, local profiles and results measurement.",
    faqs: [
      {
        question: "Is SEO worth it for small businesses?",
        answer:
          "Yes. SEO helps small businesses get organic traffic, calls, and enquirys when a customer is already looking for a specific service.",
      },
      {
        question: "What should be done first?",
        answer:
          "first you need a technical audit, keyword mapping, service page improvement, metadata, internal links, FAQ and Google Business Profile optimization.",
      },
      {
        question: "How long does SEO take to produce results?",
        answer:
          "It usually takes SEO a few months, but the first positive signals can appear faster on low-competition local topics.",
      },
      {
        question: "Do I need a blog for SEO?",
        answer:
          "a blog is useful when it answers real questions and enhances the pages of the service with internal links.",
      },
    ],
  },
};

function priorityIntroSections(detail, title) {
  return [
    {
      title: "Priority Guide.",
      paragraphs: [
        ...(detail.opening ? [detail.opening] : []),
        `${title} one of the most practical questions for Georgian businesses, because the decision directly relates to budget, sales, SEO optimization and customer confidence.`,
        `${detail.angle} That's why Next-Hub Solutions looks at this as a whole digital strategy, not a one-time technical task.`,
        `${detail.businessExample} in these cases, website design, web development, SEO service and site maintenance are not separate items; they all come together to create a system that leads the user to decisions.`,
        `${detail.decision} If this approach is planned right from the start, the project becomes more transparent, scalable, and profitable in the long run.`,
      ],
    },
    {
      title: "how does this connect to the Next-Hub services?",
      paragraphs: [
        `the correct distribution of internal links and services is important in this type of decision. The basic requirement for building a website is to link to the /webdevelopment page, the more complex functional and dashboard-s link to the /software-development direction, the visual and UX part to the /web-design page.`,
        `If the goal is to get customers from Google, you need /seo-services strategy: keyword mapping, technical SEO, metadata, Article schema, FAQ schema, Breadcrumb schema, internal links and regular content. For local businesses, this is added to /google-business-profile-optimization, because Google Maps is often the first place where the customer makes a decision.`,
        `the project is not complete after launch. /website-maintenance-services is needed for security, speed control, content updating, and responding to Search Console data. When the user is ready to move on to the next step, the /contact page should be simple, visible, and specific.`,
      ],
    },
  ];
}

function priorityArticleSections(topic) {
  const [, slug] = topic;
  const detail = priorityPostDetails[slug];
  return [
    ...priorityIntroSections(detail, topic[0]),
    ...educationalSections(topic),
  ];
}

function priorityCaseStudySections(project) {
  const base = caseStudySections(project);
  return [
    {
      title: "Why is the Printerman- key a priority?",
      paragraphs: [
        `The Printerman- website is a good example of how to run the ecommerce and service business page at the same time. The company offers customers printer sales, cartridge filling, repair and office solutions, so the site needs to be open to product, service, trust and order path with a single logical structure.`,
        `The main task of this project was not just to make a beautiful design. It was to create a website that quickly showed the user what Printerman- can do, how to get help, how to choose a product, and why the company is a reliable choice.`,
        `Businesses like Printerman- are often found in Google with very practical query-s: making printers, filling cartridges, buying printers, office printing services. So the site needs to build not only a product catalogue but also a foundation for organic visibility that will be strengthened over time with SEO services and site traffic.`,
      ],
    },
    ...base,
  ];
}

function buildPostFromProject(project) {
  const [name, projectSlug, category, description, tech] = project;
  const isPrinterman = projectSlug === "printerman";
  const slug = isPrinterman
    ? "printerman-website-case-study"
    : `case-study-${projectSlug}`;
  return {
    slug,
    type: "case-study",
    category: "case-studies",
    categoryTitle: "Case studies",
    featured: isPrinterman,
    title: isPrinterman
      ? "How to create a Printerman- website."
      : `${name} the website building and SEO optimization keys.`,
    metaTitle: isPrinterman
      ? "How to create a Printerman- website."
      : `${name} the key to building the website and optimizing SEO.`,
    description: isPrinterman
      ? "Printerman- website key: ecommerce structure, WordPress, WooCommerce, web design, SEO optimization, product catalog and conversion-oriented UX."
      : `${name} The key to the project: web design, web development, technologies used, SEO optimization and business results.`,
    excerpt: isPrinterman
      ? "Printerman-'s key shows how a printer sales and service website can be turned into a reliable ecommerce and lead generation channel."
      : description,
    author: "Next-Hub Solutions",
    date: "2026-06-20",
    readingTime: isPrinterman ? "12-15 minutes" : "10-12 minutes",
    keywords: [
      "making a website.",
      "Web Development.",
      "Web design.",
      "SEO Optimization",
      "SEO service",
      ...(isPrinterman
        ? ["Printerman", "Create an online store.", "WordPress", "WooCommerce"]
        : []),
      ...tech,
    ],
    project: { name, category, description, tech },
    sections: isPrinterman ? priorityCaseStudySections(project) : caseStudySections(project),
    faqs: isPrinterman
      ? [
          {
            question: "What was the main purpose of the Printerman- website?",
            answer:
              "the goal was to integrate ecommerce and the service structure so that the user could easily find printers, cartridges, repair and contact routes.",
          },
          {
            question: "Why did you choose WooCommerce?",
            answer:
              "WooCommerce is a good choice when a business needs a product catalog, an order process, ease of administration, and a SEOfriendly WordPress environment.",
          },
          {
            question: "How did SEO help optimize Printerman-?",
            answer:
              "The SEO structure has made product and service pages more understandable for the Google and laid the foundation for the query-, such as printing, cartridge packing, and purchasing a printer.",
          },
          {
            question: "Can you create a website like this for other service businesses?",
            answer:
              "Yes. The same approach applies to maintenance, spare parts, sales of B2B, and other businesses where product and service are sold together.",
          },
        ]
      : faqForPost(),
    serviceLinks,
  };
}

function buildPostFromTopic(topic) {
  const [title, slug, category, summary] = topic;
  const priority = priorityPostDetails[slug];
  return {
    slug,
    type: "article",
    category,
    categoryTitle:
      blogCategories.find((item) => item.slug === category)?.title ||
      "blog.",
    featured: Boolean(priority),
    title: priority?.title || title,
    metaTitle: priority?.metaTitle,
    description: priority?.description || summary,
    excerpt: priority?.excerpt || summary,
    author: "Next-Hub Solutions",
    date: "2026-06-20",
    readingTime: priority?.readingTime || "12-15 minutes",
    keywords: priority?.keywords || [
      "making a website.",
      "Web Development.",
      "Web design.",
      "SEO Optimization",
      "SEO service",
      "Google Business Profile",
      "Next.js",
      "WordPress",
    ],
    sections: priority ? priorityArticleSections(topic) : educationalSections(topic),
    faqs: priority?.faqs || faqForPost(),
    serviceLinks,
  };
}

const requiredClusterLinks = [
  { href: "/en/webdevelopment", label: "making a website." },
  { href: "/en/software-development", label: "Software development." },
  { href: "/en/web-design", label: "Web design." },
  { href: "/en/seo-services", label: "SEO service" },
  {
    href: "/en/google-business-profile-optimization",
    label: "Google Business Profile Optimization",
  },
  { href: "/en/website-maintenance-services", label: "Site maintenance." },
  { href: "/en/contact", label: "Consultation." },
];

const clusterPillarLinks = [
  { href: "/en/blog/vebsaitis-damzadeba", label: "the main guide to making a website." },
  { href: "/en/blog/vebgverdis-sheqmna", label: "Website development" },
  { href: "/en/blog/website-cost-georgia-2026", label: "website prices in Georgia 2026 in" },
  { href: "/en/blog/online-store-price-georgia", label: "The online store price guide." },
];

const highIntentClusterTopics = [
  ["the cost of building a website.", "vebsaitis-damzadeba-fasi", "web-development", "price", "budgeting, scope, design, functional, SEO and support", ["the cost of building a website.", "the price of the website.", "Making a website in Georgia"]],
  ["Building a website in Tbilisi", "vebsaitis-damzadeba-tbilisshi", "web-development", "local", "website planning for businesses in Tbilisi, local SEO and getting customers from Google", ["Building a website in Tbilisi", "Web Development Tbilisi", "Building a website in Tbilisi"]],
  ["Building a business website.", "biznes-vebsaitis-damzadeba", "web-development", "business", "a service and sales website that builds trust, leads and Google visibility.", ["Business website.", "Building a business website.", "lead generation website"]],
  ["creating a company website.", "kompaniis-vebsaitis-sheqmna", "web-development", "business", "company presentation, service structure, team, keywords, SEO and contact conversion.", ["creating a company website.", "Corporate site.", "Web Development."]],
  ["Making a professional website.", "profesionaluri-vebsaitis-damzadeba", "web-development", "business", "professional site strategy, UX, speed, security and long-term SEO foundation", ["Making a professional website.", "Web design.", "SEO Optimization"]],
  ["Landing page development", "landing-page-damzadeba", "web-design", "conversion", "a one-page sales page with a clear offer, with CTA, proof-, and a quick download.", ["Landing page development", "landing page", "CTA", "conversion rate"]],
  ["creating a corporate website.", "korporatiuli-vebsaitis-sheqmna", "web-development", "business", "corporate structure, brand trust, service pages, career, keywords and technical SEO", ["creating a corporate website.", "the company's website.", "corporate website"]],
  ["Build an online store.", "onlain-magaziis-damzadeba", "web-development", "ecommerce", "product catalog, box, checkout, payments, delivery, SEO and analytics.", ["Build an online store.", "Create an online store.", "ecommerce"]],
  ["WooCommerce store.", "woocommerce-magaziis-sheqmna", "web-development", "ecommerce", "WooCommerce store planning, product management, payments, plugin security and SEO", ["WooCommerce store.", "WooCommerce", "WordPress ecommerce"]],
  ["E-commerce website building.", "ecommerce-vebsaitis-damzadeba", "web-development", "ecommerce", "E-commerce site architecture, UX, API integrations, conversion optimization and scale", ["E-commerce website building.", "ecommerce website", "Online sales."]],
  ["the price of an online store.", "onlain-magaziis-fasi", "web-development", "price", "the budget of the online store by product, payment, delivery, SEO and support.", ["the price of an online store.", "WooCommerce price", "ecommerce development Georgia"]],
  ["Next.js Development", "nextjs-development", "web-development", "nextjs", "Next.js development for fast, SEOfriendly and large websites.", ["Next.js Development", "Next.js", "React", "Core Web Vitals"]],
  ["Next.js Agency", "nextjs-saagento", "web-development", "nextjs", "Next.js choosing an agency for a business that needs performance, SEO and custom integrations", ["Next.js Agency", "Next.js agency", "Web Development."]],
  ["Next.js Developer in Georgia", "nextjs-developer-saqartveloshi", "web-development", "nextjs", "Next.js Developer in Georgia: What you need to know, how much the project costs and when is the stack correct", ["Next.js Developer in Georgia", "React developer Georgia", "Next.js developer"]],
  ["Headless CMS Next.js", "headless-cms-nextjs", "web-development", "nextjs", "Headless CMS and Next.js for combining content management, speed and SEO control.", ["Headless CMS Next.js", "headless CMS", "Next.js SEO"]],
  ["AI Chatbot for Business", "ai-chatbot-biznesistvis", "web-development", "ai", "AI Chatbot for automated query response, lead collection, and customer support-.", ["AI Chatbot for Business", "AI chatbot", "customer support automation"]],
  ["AI Automation for Business", "ai-automation-biznesistvis", "web-development", "ai", "AI Automation to simplify the iterative processes, lead processing, CRM- and support workflow-", ["AI Automation for Business", "AI automation", "business automation"]],
  ["AI Agency in Georgia", "ai-saagento-saqartveloshi", "web-development", "ai", "AI Agency's role in Georgian business: chatbots, automation, API integrations and functions of the website AI", ["AI Agency in Georgia", "AI agency Georgia", "AI integration."]],
  ["AI integration into the website.", "ai-integracia-vebsaitze", "web-development", "ai", "AI integration into the website for chatbot, referrals, form processing and support automation-", ["AI integration into the website.", "AI website integration", "API integration"]],
  ["AI Customer Support", "ai-customer-support", "web-development", "ai", "AI Customer Support, which reduces repetitive questions and gives users quick answers.", ["AI Customer Support", "AI support", "customer service automation"]],
  ["Google Maps Optimization", "google-maps-optimization", "seo", "localSeo", "Google Maps Optimization for local visibility, calls, directions and review-", ["Google Maps Optimization", "Google Maps SEO", "local SEO"]],
  ["Google Business Profile Management", "google-business-profile-management", "seo", "localSeo", "Google Business Profile Management by managing categories, services, posts, photos and review-", ["Google Business Profile Management", "Google Business Profile", "GBP management"]],
  ["Google Reviews Management", "google-reviews-management", "seo", "localSeo", "Google Reviews Management to boost trust, response process and local conversion.", ["Google Reviews Management", "Google Reviews", "review management"]],
  ["the first page in Google.", "googleshi-pirveli-gverdi", "seo", "seo", "Google has the strategy for the first page: technical SEO, content, authority and time.", ["the first page in Google.", "SEO Optimization", "Google ranking"]],
  ["Google Search Optimization", "google-search-optimization", "seo", "seo", "Google Search Optimization keyword mapping-, technical SEO, schema and enhanced content.", ["Google Search Optimization", "SEO service", "technical SEO"]],
  ["SEO Agency in Georgia", "seo-saagento-saqartveloshi", "seo", "seo", "SEO Agency in Georgia for businesses that need strategy, content and technical performance", ["SEO Agency in Georgia", "SEO agency Georgia", "SEO service"]],
  ["SEO company in Tbilisi", "seo-kompania-tbilisshi", "seo", "localSeo", "SEO company in Tbilisi for local services, Google Maps and for organic leaders.", ["SEO company in Tbilisi", "SEO Tbilisi", "local SEO"]],
  ["Local SEO", "local-seo", "seo", "localSeo", "Local SEO for service businesses, branches, Google Maps and city keyword-", ["Local SEO", "local SEO", "Google Business Profile"]],
  ["Google Maps SEO", "google-maps-seo", "seo", "localSeo", "Google Maps SEO profile, website, review- and local signals in a single system.", ["Google Maps SEO", "Google Maps Optimization", "GBP SEO"]],
  ["How to make a website faster.", "rogor-gavkhadot-saiti-stsrafi", "web-development", "performance", "speed up the site by improving the images, code, hosting-, Core Web Vitals-, and caching-.", ["How to make a website faster.", "Website speed optimization", "Core Web Vitals"]],
  ["Core Web Vitals", "core-web-vitals", "web-development", "performance", "Core Web Vitals as UX- and SEO as the technical basis: LCP, INP, CLS and real customer experience", ["Core Web Vitals", "LCP", "INP", "CLS", "PageSpeed"]],
  ["Why is the site slow?", "ratom-aris-saiti-neli", "web-development", "performance", "The reasons for the slow site: heavy images, excess scripts, hosting, plugins, render blocking and bad UX", ["Why is the site slow?", "Slow site.", "Speed Optimization."]],
  ["PageSpeed Optimization", "pagespeed-optimization", "web-development", "performance", "PageSpeed Optimization with technical and UX improvements that help the conversion and SEO", ["PageSpeed Optimization", "PageSpeed Insights", "Site speed."]],
  ["Website security.", "vebsaitis-usafrtkhoeba", "web-development", "security", "website security with SSL-, updates, access control-, backup- and monitoring.", ["Website security.", "website security", "SSL", "backup"]],
  ["SSL Certificate", "ssl-certificate", "web-development", "security", "SSL Certificate Trust, HTTPS-, SEO and the protection of user data.", ["SSL Certificate", "SSL certificate.", "HTTPS"]],
  ["WordPress Security", "wordpress-security", "web-development", "security", "WordPress Security plugin updates-, strong login-, backup-, firewall- and malware monitoring", ["WordPress Security", "WordPress Security", "plugin updates"]],
  ["Backup Strategy", "backup-strategy", "web-development", "security", "Backup Strategy to restore the site, protect data, and reduce business risk.", ["Backup Strategy", "backup", "disaster recovery"]],
  ["How to grow Conversion Rate", "rogor-gazardot-conversion-rate", "web-design", "conversion", "Conversion Rate growth with improvements in UX-, CTA, offer, proof- and analytics.", ["Conversion Rate", "conversion optimization", "UX design."]],
  ["Lead Generation Website", "lead-generation-website", "web-design", "conversion", "Lead Generation Website for a business service that turns a visitor into a enquiry or call.", ["Lead Generation Website", "Lead Generation.", "CTA"]],
  ["CTA Optimization", "cta-optimization", "web-design", "conversion", "CTA Optimization according to the text, location, design and user intent.", ["CTA Optimization", "CTA", "conversion rate"]],
  ["Landing Page Optimization", "landing-page-optimization", "web-design", "conversion", "Landing Page Optimization offer clarity-, trust signals-, FAQ and rapid testing.", ["Landing Page Optimization", "landing page", "A/B testing"]],
  ["CRM integration.", "crm-integracia", "web-development", "integration", "CRM integration to move leads from forms, chats, and checkout- into a single system.", ["CRM integration.", "CRM integration", "API"]],
  ["ERP integration.", "erp-integracia", "web-development", "integration", "ERP integration for synchronizing supply, order, prices, customers and operations.", ["ERP integration.", "ERP integration", "business software"]],
  ["Booking System", "booking-system", "web-development", "integration", "Booking System for the law of the jungle, the calendar, the messages, the payments and the CRM connection.", ["Booking System", "Booking system", "online booking"]],
  ["Online Appointment Website", "online-appointment-website", "web-development", "integration", "Online Appointment Website for clinics, salons and consultants online.", ["Online Appointment Website", "Online booking", "appointment booking"]],
  ["Customer Portal", "customer-portal", "web-development", "integration", "Customer Portal for the client's office, documents, orders, support ticket- and accounts.", ["Customer Portal", "the client portal.", "custom software"]],
];

const clusterGroupCopy = {
  price: {
    userIntent:
      "The user is often ready to make a decision about this topic and trying to understand the real budget, what the price is, and what the difference is between cheap, medium and professional performance.",
    execution:
      "The correct price calculation starts with scope-: page count, design depth, CMS, forms, payments, languages, SEO, analytics, speed and after-launch support.",
    faq: "How do you calculate the price?",
  },
  local: {
    userIntent:
      "in a local search, the user compares companies, checks for trust, examples, Google Business Profile-, and how fast the team can communicate.",
    execution:
      "A site customized to a specific service area or service area should combine service pages, local texts, Google Maps signals, reviews- and simple contact actions.",
    faq: "Local SEO Why do we need it?",
  },
  business: {
    userIntent:
      "When you're looking for a business website, you need not only a beautiful page, but a reliable presentation, clear services, keywords, CTA, and content that answers your questions.",
    execution:
      "proper performance includes information architecture, UX design, responsive development, SEOfriendly URL-, schema, analytics and site maintenance plan.",
    faq: "What pages does a business website need?",
  },
  ecommerce: {
    userIntent:
      "Online sales-focused searches are directly related to product presentation, checkout- simplicity, payment reliability, delivery, and SEO categories.",
    execution:
      "E-commerce project is critical of product structure, filters, boxes, checkout, payment providers, inventory, email messaging, security and analytics.",
    faq: "What's the difference between online store SEO?",
  },
  nextjs: {
    userIntent:
      "Next.js- is searched when a business needs a fast, technically clean, SEOfriendly and in the future, a scalable website or web application.",
    execution:
      "Next.js project is important in the server rendering, metadata, image optimization, routing, API connections, Core Web Vitals and deploy process stability.",
    faq: "Next.js when is WordPress?",
  },
  ai: {
    userIntent:
      "AI high on the intent theme means that businesses want to save time, automate support-, better manage leads, or add smarter experience to the website.",
    execution:
      "AI integration should start with a process map: what questions are repeated, where leads are lost, which data goes to CRM-, what the person should do and what can be done automatically.",
    faq: "Will AI automate people?",
  },
  localSeo: {
    userIntent:
      "Local SEO business is usually looking for more calls, directions, visits and a better position in the Google Maps in a particular city or neighborhood.",
    execution:
      "Google Business Profile, NAP consistency, reviews, service categories, photos, posts, local landing pages and schema together form the basis of visibility.",
    faq: "How do you improve your position in Google Maps?",
  },
  seo: {
    userIntent:
      "behind the SEO search is the desire to get businesses to appear in Google when a customer is already looking for a particular service or solution.",
    execution:
      "SEO strategy includes keyword mapping-, technical audit, service pages, blog cluster-, schema, internal links-, Search Console analysis and continuous improvement.",
    faq: "How long will I see the SEO result?",
  },
  performance: {
    userIntent:
      "Businesses often notice a speed problem when an ad costs a lot, a customer leaves a page, or Search Console Core Web Vitals alerts.",
    execution:
      "Performance improvements include image optimization, JavaScript- reduction, caching- evaluation, hosting- evaluation, font loading-, layout stability- testing and real-world devices.",
    faq: "Does speed work on SEO?",
  },
  security: {
    userIntent:
      "Security-related searches often come when there are forms, payments, WordPress plugins, customer data, or business-critical content on the site.",
    execution:
      "the secure foundation includes HTTPS-, updates, access control, backup-, malware monitoring, a strong password policy, and a verified recovery process.",
    faq: "How often should Backup be done?",
  },
  conversion: {
    userIntent:
      "Conversion-focused search means that traffic is already there or is expected, and now more calls, applications, sales, or recordings are needed from the same visitors.",
    execution:
      "Conversion optimization starts with the offer clarity, CTA's location, proof-, abbreviations, FAQ, speed, mobile UX- and changes to analytics.",
    faq: "How often should CTA appear?",
  },
  integration: {
    userIntent:
      "When looking for integrations, businesses already have an operational need: they don't have to lose data in forms, Excel-, or manually transfer it to different systems.",
    execution:
      "proper integration requires verification of API-s, data field alignment, error handling-, permissions-, logging, security and process testing in real-world scenarios.",
    faq: "Can you integrate with the existing site?",
  },
};

function clusterTopicLinks(slug, group) {
  const sameGroupLinks = highIntentClusterTopics
    .filter((topic) => topic[3] === group && topic[1] !== slug)
    .slice(0, 3)
    .map(([title, topicSlug]) => ({ href: `/en/blog/${topicSlug}`, label: title }));

  return [...requiredClusterLinks, ...clusterPillarLinks, ...sameGroupLinks];
}

function clusterSections({ title, category, group, focus }) {
  const copy = clusterGroupCopy[group];
  const categoryContext =
    category === "seo"
      ? "the main focus of this topic is visibility in Google, the correct keywords, technical SEO, Google Business Profile and content that responds to real search."
      : category === "web-design"
        ? "design is not valued for visual effects, but for how much it simplifies the decision, builds trust and increases conversion rate-."
        : "In this case, web development should be a part of strategy, UX-, SEO, speed, security and business processes.";

  return [
    {
      title: `${title}: what problem it solves`,
      paragraphs: [
        `${title} a search theme with a high intent-, because the user is already looking for a practical solution rather than a general explanation. ${focus}.`,
        `${copy.userIntent} So the purpose of this article is to help you evaluate what you should expect from a project, how to compare offers, and how not to waste your budget on things that don't serve your business purpose.`,
      ],
    },
    {
      title: "structure, UX and conversion.",
      paragraphs: [
        `${categoryContext} The strong page starts with a clear H1-, a short benefit formulation, a service description, elements of proof, FAQ, and a visible CTA.`,
        "the user needs to know what you're offering, who you're helping, why you're trusted, and what the next step is. If this path is confusing, the visitor may be interested, but the conversion is still lost.",
      ],
    },
    {
      title: "SEO and Google visibility.",
      paragraphs: [
        "SEOfriendly performance means that the page has the correct title, description, H1/H2 structure, internal links, schema markup, image alt text and content that corresponds to the specific search intent-.",
        "for Next-Hub this is particularly important in the Georgian market, where in many niches competition can still be won with the right structure, quality text and connection to Google Business Profile-.",
      ],
    },
    {
      title: "Technical performance and support.",
      paragraphs: [
        `${copy.execution} technical quality directly affects speed, security, SEO, and how easily a business can develop a website.`,
        "after launch, you need to control Search Console, analyze, update, monitor and improve the content of performance. A good project is not finished today with launch-; it starts from there with data-driven growth.",
      ],
    },
    {
      title: "How to plan the next step.",
      paragraphs: [
        "First write down the goal: more calls, more orders, better positioning in Google, faster site, secure checkout, AI automation or CRM/ERP integration. Then set the necessary functions and what you can do next.",
        "Next-Hub Solutions looks at these projects as a whole system: website building, web design, SEO service, Google Business Profile optimization, site maintenance, and custom software should be mutually reinforcing. This is the approach that creates a site that is not just an online presence and produces real business results.",
      ],
    },
  ];
}

function clusterFaqs({ title, group }) {
  const copy = clusterGroupCopy[group];
  return [
    {
      question: `${title} Who needs it?`,
      answer:
        "It needs a business that needs more trust, better Google visibility, clearer offerings, and a conversion-oriented digital channel.",
    },
    {
      question: copy.faq,
      answer:
        "the answer depends on the goal, the site, the competition, the technical situation, and what the business needs to get out of the first step.",
    },
    {
      question: "Should SEO be designed from scratch?",
      answer:
        "Yes. URL structure, metadata, headings, internal links, schema and content, and if you're organizing it right at first, then growing into Google is much easier.",
    },
    {
      question: "Can we start off in phases?",
      answer:
        "it's possible. Often the correct approach is to start with MVP or the necessary page, and then add SEO content, integrations, AI functions, or performance enhancements.",
    },
    {
      question: "How do I get a consultation with Next-Hub?",
      answer:
        "you can go to the /contact page, briefly describe the goal, the status and the desired outcome.",
    },
  ];
}

function buildHighIntentClusterPost(topic) {
  const [title, slug, category, group, focus, keywords] = topic;
  const categoryTitle =
    blogCategories.find((item) => item.slug === category)?.title || "blog.";

  return {
    slug,
    type: "article",
    category,
    contentCluster: group,
    categoryTitle,
    featured: false,
    title,
    metaTitle: `${title} | Next-Hub Solutions`,
    description: `${title}: a practical guide for Georgian businesses. Learn how to plan the project around ${focus}, so the website supports SEO, trust, and conversion.`,
    excerpt: `${title} for businesses: how to plan structure, SEO, UX, technical delivery, and support so the project can produce a practical result.`,
    author: "Next-Hub Solutions",
    date: "2026-07-10",
    readingTime: "9-12 minutes",
    tags: [
      ...keywords,
      "Next-Hub Solutions",
      "making a website.",
      "SEO service",
      "Google Business Profile",
    ],
    keywords: [
      ...keywords,
      "Next-Hub Solutions",
      "Web Development.",
      "Web design.",
      "SEO Optimization",
      "Site maintenance.",
    ],
    sections: clusterSections({ title, category, group, focus }),
    faqs: clusterFaqs({ title, group }),
    internalLinks: clusterTopicLinks(slug, group),
    serviceLinks,
  };
}

const highIntentClusterPosts = highIntentClusterTopics.map(
  buildHighIntentClusterPost
);

const buyerJourneyTopics = [
  {
    title: "making a website.",
    slug: "vebsaitis-damzadeba",
    category: "web-development",
    description:
      "complete buyer guide website building for Georgian business: strategy, price, process, SEO, design, technology, trust, conversion and selecting the right team.",
    excerpt:
      "a premium guide for businesses that answers all the important questions before you build a website and helps you make the right decision.",
    keywords: ["making a website.", "creating a website.", "Web Development.", "the price of the website.", "SEO Optimization", "Web design."],
    intent:
      "the user is already thinking about investing and they need to understand how to turn the website into a sales, trust and visibility channel in Google.",
    doubt:
      "the most common question is whether the site will become a beautiful page that will change nothing once it's launched.",
    example:
      "For a service company that needs a few calls a day, a fast mobile version, separate service pages, form, Google Maps link and FAQ are equally important, because a customer often makes a decision in minutes.",
    consultation:
      "consulting in this case helps businesses see not only the design option, but the right scope, budget, SEO structure and next launch plan.",
  },
  {
    title: "Why Businesses Need a Professional Website",
    slug: "ratom-schirdeba-bizness-profesionaluri-vebsaiti",
    category: "web-development",
    description:
      "Why businesses need a professional website: trust, sales, visibility in Google, brand control, lead acquisition, and competition.",
    excerpt:
      "a professional website is a business digital office, a sales assistant, and a trusted source that works even when the team is busy.",
    keywords: ["a professional website.", "Business website.", "making a website.", "the company's website.", "Visibility on Google"],
    intent:
      "a user is looking for a reason to spend a budget on a professional website and not just a social network or a cheap template.",
    doubt:
      "A common argument is that small businesses don't need a professional site yet, and it's enough to have a Facebook page or a Instagram profile.",
    example:
      "A clinic, a construction company, or a B2B service often loses a customer when the customer can't find the price context, the details of the services, the keys, or the exact contact.",
    consultation:
      "The consultation shows that a professional site can be designed in stages: first the core trust and lead structure, then the SEO content, integrations and improvements.",
  },
  {
    title: "What it costs to build a website in Georgia",
    slug: "ra-ghirs-vebsaitis-damzadeba-saqartveloshi",
    category: "web-development",
    description:
      "What it costs to build a website in Georgia: real budget factors, what is included in the price, what the project costs and how to compare offers.",
    excerpt:
      "The price of a website is not just the number of pages. Learn what you're actually paying for and how to budget in a safe way.",
    keywords: ["what it costs to build a website.", "The price of the website in Georgia", "the cost of building a website.", "The cost of web development."],
    intent:
      "a customer is close to buying and needs a transparent answer to properly compare cheap, medium and professional offers.",
    doubt:
      "The biggest question is why prices are so different and do businesses pay for what ultimately doesn't work.",
    example:
      "Landing page can be done relatively quickly, but the online store already needs a catalog, checkout, payments, delivery, security, email messages and ecommerce SEO.",
    consultation:
      "Consultation on price is useful when you don't know the full scope. yet, and with the right questions, you can figure out what's necessary at the first stage and what can be added later.",
  },
  {
    title: "the website or just the Facebook page?",
    slug: "vebsaiti-tu-facebook-gverdi",
    category: "web-development",
    description:
      "the website or just the Facebook page: what's the difference in control, trust, SEO, sales, advertising effectiveness and long-term digital assets.",
    excerpt:
      "Facebook is a communication channel, and the website is a business-owned digital space that gets its demand from Google.",
    keywords: ["the website or the Facebook page.", "Business website.", "Facebook page for business.", "SEO", "Leads from Google"],
    intent:
      "a user compares a simple and cheap way to a long-term asset and tries to figure out when a social network is enough and when it's not.",
    doubt:
      "a common misconception is that Facebook- is already receiving messages about why you should add a website, domain, hosting and SEO..",
    example:
      "The restaurant may need Facebook for daily posts, but the menu, booking, location, Google Maps, reviews and SEO landing page work better on the website.",
    consultation:
      "consulting doesn't mean you have to reject a social network. The right strategy is to combine Facebook-, Google, a website and contact channels on a single customer journey.",
  },
  {
    title: "How to choose a web development company.",
    slug: "rogor-avirchiot-veb-developeruli-kompania",
    category: "web-development",
    description:
      "How to choose a web development company: portfolio, process, SEO knowledge, communication, support, technology, cost and risk reduction.",
    excerpt:
      "Choosing a web development company is not just about seeing the design. Learn what to check before you start a project.",
    keywords: ["Web Development Company.", "the website company.", "Web Agency.", "Next.js Agency", "SEO Agency"],
    intent:
      "the user already chooses the artist and needs the criteria to not rely on just a low price or a beautiful presentation.",
    doubt:
      "The basic question is how do businesses know if the company is going to get the project right and help them after it's launched.",
    example:
      "If the agency is just talking about design and you're not asked about SEO keyword-, conversion, content, CMS, forms and support, it's a signal that the process is incomplete.",
    consultation:
      "You can check your idea, your existing brief, or even any other offer to see what's missing from the project plan.",
  },
  {
    title: "Why don't you bring customers to your website?",
    slug: "ratom-ar-moakvs-tqvens-vebsaits-klientebi",
    category: "web-design",
    description:
      "Why the website doesn't bring customers: poor offer, wrong UX, bad CTA, slow site, SEO problems, lack of trust and analytics.",
    excerpt:
      "If the site has traffic, but customers don't come, the problem could be structure, trust, CTA, SEO, or speed.",
    keywords: ["The website doesn't bring customers.", "conversion optimization", "CTA", "Web design.", "SEO Audit"],
    intent:
      "a user already has a website and needs to diagnose why a visitor is not responding to a call, an application or an order.",
    doubt:
      "Businesses often think that the only problem is with the advertising budget, when the structure and trust signals of the site are holding back conversions.",
    example:
      "A car company may have a beautiful homepage, but if it doesn't see the process, the warranties, the form, the WhatsApp button and the actual keys, the visitor can't make a decision.",
    consultation:
      "The consultation starts here with audit-: Let's look at traffic source, user path, CTA, shapes, speed, Search Console and the pages where the user is lost.",
  },
  {
    title: "how the website is built.",
    slug: "rogor-mimdinareobs-vebsaitis-sheqmnis-procesi",
    category: "web-development",
    description:
      "how the website design process is going: consulting, brief, structure, UX/UI design, development, SEO, testing, launch and support.",
    excerpt:
      "learn what happens from idea to launch, who's responsible, and how to build a website without too much uncertainty.",
    keywords: ["the process of creating a website.", "Web Development.", "UX UI design.", "Launching the website.", "SEO setup"],
    intent:
      "the user wants to know what the collaboration will be like, what materials are needed, how many stages and where the delay could occur.",
    doubt:
      "the frequent fear that the project will fail, that the requirements will be chosen, or that the end result will not meet the real needs of the business.",
    example:
      "if you don't agree on a list of pages at the beginning of the project, the responsibility for the text, the design process approve and launch checklist, the changes will cost you in the end.",
    consultation:
      "consultation before the start of the process reduces uncertainty: setting goals, deadlines, materials, technology, SEO requirements and support format.",
  },
  {
    title: "how long does it take to build a website?",
    slug: "ramden-khanshi-mzaddeba-vebsaiti",
    category: "web-development",
    description:
      "how long to build a website: deadlines for landing page-, business site, online store, Next.js project, and SEOready launch-.",
    excerpt:
      "the duration of the website depends on the scope-, the text, the design, the functionality and the speed of the solution.",
    keywords: ["how long does it take to build a website?", "the deadline for making the website.", "creating a website.", "landing page term"],
    intent:
      "a user needs a realistic time frame to plan a campaign, launch, sales activity or internal process.",
    doubt:
      "the most common question is whether a site can be made too fast so that the quality, SEO and testing won't be damaged.",
    example:
      "a simple landing page can be prepared in a few weeks, but a multi-faceted business site with text, SEO structure and forms requires greater coordination.",
    consultation:
      "The consultation is not by desire, but by scope-: how many pages are there, whether the content is ready, whether it is necessary to consult CMS, integrations, languages or ecommerce..",
  },
  {
    title: "Why SEO is essential for a website.",
    slug: "ratom-aris-seo-aucilebeli-vebsaitistvis",
    category: "seo",
    description:
      "Why SEO is essential for a website: visibility in Google, technical background, content, internal links, schema, local SEO and long-term leads.",
    excerpt:
      "SEO is not additional decoration. If the site is not SEOready in the first place, growing Google becomes slower, more expensive and more difficult.",
    keywords: ["SEO", "SEO Optimization", "technical SEO", "Google Search Optimization", "local SEO"],
    intent:
      "the user wonders if it's worth investing in SEO and how does a SEOready website differ from a regular site.",
    doubt:
      "The common objection is that SEO can be made later when the site is ready and the ad is loaded.",
    example:
      "If the service pages do not have the correct URL, H1, metadata, FAQ, schema and internal links, Google will have difficulty figuring out which query- to display the page on.",
    consultation:
      "SEO Consulting at the beginning of the project helps keyword mapping-, the page structure, blog cluster- and the Google Business Profile link.",
  },
  {
    title: "Next.js or WordPress for business.",
    slug: "nextjs-tu-wordpress-biznesistvis",
    category: "web-development",
    description:
      "Next.js or WordPress for business: A practical comparison of speed, SEO, CMS, security, budget, ecommerce- and scale.",
    excerpt:
      "Next.js and WordPress are both good choices when it comes to the right task.",
    keywords: ["Next.js or WordPress", "Next.js for Business", "WordPress Business site", "Headless CMS", "WooCommerce"],
    intent:
      "the user chooses technology and needs an explanation in the business language, not a developmental argument about framework-.",
    doubt:
      "Frequent questioning whether a business is overpaying for custom, or vice versa, whether it is restricted to the CMS template.",
    example:
      "For a small content-oriented site, WordPress may be practical, while with custom calculator, API integrations and high performance demand, Next.js is a better foundation.",
    consultation:
      "We choose technology for consultation not by fashion, but by purpose: who's running the content, how fast it's going to go, what kind of integration is expected, and how the project will grow.",
  },
  {
    title: "How to increase sales with the help of the website.",
    slug: "rogor-gazardot-gayidvebi-vebsaitis-dakhmarebit",
    category: "web-design",
    description:
      "How to increase sales with the help of the website: bid, UX, CTA, SEO, trust signals, landing pages, analytics, lead generation and conversion improvement.",
    excerpt:
      "A website increases sales when it gives the right answer to the right customer and then offers the right action.",
    keywords: ["Web sales.", "lead generation website", "conversion rate", "CTA optimization", "landing page optimization"],
    intent:
      "the user needs to know how to turn the site into a real sales channel, not just a company presentation.",
    doubt:
      "Businesses often think that sales are all about advertising, when the offer, the shape and the trust of the site are the most important.",
    example:
      "The inquiry may be more of a repair service than the new design, but a clear price range, before/after keys, quick shape, and the appearance of the Google reviews-.",
    consultation:
      "The consultation on sales growth begins with a customer roadmap: where the visitor is coming from, what they're looking for, what's going wrong, and what CTA should see next.",
  },
  {
    title: "The most common mistakes in ordering the website",
    slug: "gavrcelebuli-shecdomebi-vebsaitis-shekvetisas",
    category: "web-development",
    description:
      "The most common mistakes when ordering web pages: confusing brief, only cheaper choice, starting with SEO, delayed content, and poor support planning.",
    excerpt:
      "The most expensive mistake when ordering a website is often the first one. Learn how to save money, time, and results.",
    keywords: ["ordering the website.", "mistakes in website design.", "Web Development.", "SEO errors", "brief"],
    intent:
      "the user tries to avoid a bad experience, expired deadlines, incomprehensible scope, and a site that doesn't show results after launch-.",
    doubt:
      "the basic fear is that something important will go wrong in the project and then it will be reworked.",
    example:
      "If the order does not agree on who writes the text, how the design will be approved, what SEO is included in scope-, and who is visiting the site after launch-, the problem is almost guaranteed.",
    consultation:
      "Pre-order consulting helps you run brief-, set up priorities-, and see the risks that are not just in the price offer.",
  },
];

function buyerJourneyRelatedLinks(slug) {
  const siblingLinks = buyerJourneyTopics
    .filter((topic) => topic.slug !== slug)
    .slice(0, 5)
    .map((topic) => ({ href: `/en/blog/${topic.slug}`, label: topic.title }));

  return [
    { href: "/en/webdevelopment", label: "a website-building service." },
    { href: "/en/seo-services", label: "SEO service" },
    { href: "/en/contact", label: "Request for Consultation." },
    ...siblingLinks,
    { href: "/en/blog/vebgverdis-sheqmna", label: "Website development" },
    { href: "/en/blog/website-cost-georgia-2026", label: "2026 website prices in the year" },
    { href: "/en/blog/core-web-vitals", label: "Core Web Vitals" },
  ];
}

function buyerJourneySections(topic) {
  return [
    {
      title: `${topic.title}: a key business decision`,
      paragraphs: [
        `${topic.title} it's not just a technical or design issue. It's a decision about how the customer finds your business, how they value your credibility, and how easy it is to move on to the next step: call, application, order, or consultation. When you look at a website this way, the project doesn't start with colors and templates; it starts with a business purpose.`,
        `${topic.intent} That's why a visitor with a high commercial intent- often asks not one but several questions: what is it worth, how long is it going to take, who is going to make it, whether the SEO is included, what happens after launch, and how will the results be measured. A good article answers these questions in advance, and a good website puts the answers in the user's way.`,
        `Next-Hub Solutions looks at this topic as a complete digital system. Website building, SEO service, web design, Google Business Profile, site maintenance and if necessary, custom software should work together. If any part is missing, the site may be visually good, but it will not produce a sales or Google result.`,
      ],
    },
    {
      title: "what the user has doubts about before making a decision.",
      paragraphs: [
        `${topic.doubt} It's a completely natural fear, because many businesses already have experience when they create a site, but then nobody was watching traffic, forms, Search Console, CTA, or the number of actual customers.`,
        `The second doubt is price transparency. The user does not need a general answer because the general answer does not help with budgeting. He needs to know what is involved in the project: strategy, structure, texts, design, development, SEO setup, analytics, testing, launch and support.`,
        `The third question is about control. Who owns the domain, where is the hosting, who runs CMS, what happens if a new page is needed, how is backup made, how is security done, and how is the content changed? These questions are not small details; they determine how easy a business will use a site after launch-.`,
      ],
    },
    {
      title: "What should a trust-based structure look like?",
      paragraphs: [
        `A trust-focused website on the first screen answers four questions: what you do, who you help, why you should be trusted, and what the visitor should do next. If those four answers don't appear, the design can be beautiful, but the user is still confused.`,
        `here comes proof: real keys, detailed description of the service, reviews, partners, certificates, team or company experience, Google reviews and understandable process. E-E-A-T is not just a SEO term; in the Georgian market, the consumer compares reliability and often makes decisions based on trust signals.`,
        `${topic.example} Examples like this show that a professional site is not just one section or one beautiful animation. It's an information architecture that resolves the user's doubts in the right order.`,
      ],
    },
    {
      title: "SEO should be launched at the beginning of the project.",
      paragraphs: [
        `adding SEO later is often more expensive and slower than planning it from the start. If the page names, URL-s, H1/H2 titles, metadata, FAQ, schema and internal links are already properly built in, Google can better understand the designation of each page.`,
        `commercial keywords should be distributed naturally across pages, such as "Website Making", "SEO Service", "Web Development", "Website Price", "Next.js development", "Google Business Profile" and other terms should not be artificially inserted into the text. They should answer real questions that the client asks before buying.`,
        `AI search engines- also reads the content better when the answers are clear, the structure is logical, and the text does not hide practical information. So FAQ, the H2 descriptive sections, examples, comparison parts and internal links help both Google Search- and AI systems to understand your experience properly.`,
      ],
    },
    {
      title: "price, scope and realistic expectations.",
      paragraphs: [
        `The most important question when discussing the budget is not "How many pages will be?" but "What is the task for the site to solve?" You can make a small landing page- for a specific campaign-, and a company's site can include a service architecture, a blog, SEO cluster-s, forms, CRM integration and support process.`,
        `Price is affected by the design level, copy preparation, CMS, languages, animations, custom functionality, API connections, ecommerce, security, performance, and SEO. A lower-cost offer may suit a simple task, but it becomes risky when content, testing, technical SEO, and post-launch maintenance are not included.`,
        `the best approach is to break down the project into stages. The first step is to do what is necessary for trust and conversion; then add SEO content, automation, Google Business Profile enhancement, new landing pages, or CRM/ERP integrations. This reduces risk and increases control.`,
      ],
    },
    {
      title: "UX, CTA and the user path.",
      paragraphs: [
        `UX does not just mean that the site "looks good". UX means that the visitor does not have to worry about where to click, where to see the price, how to contact you, what is included in the service, and what happens after the application is sent. The less uncertainty, the higher the conversion rate..`,
        `CTA should be specific and natural. Some pages work better with "consultation request", others with "costing", others with "project review" or "audit request". The key is that CTA matches the stage where the customer is.`,
        `A good buyer journey serves several types of visitors: those who first meet you, those who compare prices, those who choose technology, those who have had bad experience, and those who need to get started quickly.`,
      ],
    },
    {
      title: "content that answers questions before you buy.",
      paragraphs: [
        `The text of the business website should not be just a general description of the company. A customer with high intent- is looking for specific answers: what you do, what kind of customers you work with, how the process starts, what it costs about, what it ends up getting, and why you're a reliable choice. If those answers don't show up, the customer moves to a competitor where the decision is easier.`,
        `it's useful to use sales team questions when planning content. The more frequently you're asked in a call or in a report, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're asked, the more you're prepared, the better you're prepared, the better you're prepared, the better you're prepared, the better you're prepared, the better you're prepared, the better you're prepared, the better you're prepared, and the better you're prepared.`,
        `AI search engines- is also helped by clear answers. When a page describes the process, the pricing factors, the mistakes, the comparisons, and the examples, it becomes easier to quote and understand. So Helpful Content doesn't just mean a lot of text; it means helpful, well-structured, and based on real-world experience.`,
      ],
    },
    {
      title: "E-E-A-T: Experience, expertise and trust.",
      paragraphs: [
        `Google and the user trust in the details. Experience is seen when the site talks about real-world scenarios, business types, common mistakes and practical consequences of decisions. Expertise is seen when the text does not hide complicated issues: SEO, Core Web Vitals, security, CMS, integrations, conversion rate, and site maintenance is easy to understand.`,
        `Author or the credibility of the organization is important, but not enough. It requires keys, process transparency, contact information, accurate service description, price or pricing logic, FAQ and internal links that show that the company is covering the topic rather than all at once, systematically.`,
        `Next-Hub Solutions-'s buyer journey content serves this purpose: the customer sees not just the offer, but the thinking. If the company can explain the risks, trade-off-s and the correct sequencing, it has a better chance of acting responsibly in the project process.`,
      ],
    },
    {
      title: "mobile experience and speed.",
      paragraphs: [
        `In Georgia, most users save a site from a mobile, so the desktop design is only half a picture. The main offer on the mobile should be CTA, contact buttons, fast navigation, and sections that do not turn into a heavy text wall on a small screen.`,
        `Speed is part of trust. A slow site gives the feeling that the company is technically weak or outdated, especially when the customer is looking for a price, service or quick help. Core Web Vitals, image optimization, correct hosting, minimal excess script-s, and caching are part of a commercial result, not just a technical score.`,
        `Performance is especially important during paid ads-. If an advertised visitor is found on a slow page, the budget is lost. So when creating a website, speed, SEO and conversion should be evaluated together: a faster page creates a better experience and gives CTA a better chance.`,
      ],
    },
    {
      title: "analytics and measuring results.",
      paragraphs: [
        `if the site is not measured, the solutions remain in the spectrum. A minimum is required Google Analytics, Search Console, conversion events, tracking forms and, if necessary, heatmap tools. The data shows which page is working, which query brings traffic-, and where the user path ends.`,
        `the result is not the same for all businesses. For some, the key KPI is calls, for others quote requests, for others online booking, ecommerce checkout, Google Maps directions or newsletter leads. so you have to define what is considered a success at the beginning of a project and how it will be measured after launch-.`,
        `Analytics also makes consulting more useful. When we know which page is getting traffic, which CTA isn't working, what mobile bounce rate is like, and what query-s the site looks like, the changes become more accurate. This is a way to make the site better over time, not just a once-run project.`,
      ],
    },
    {
      title: "Google Business Profile and the local trust.",
      paragraphs: [
        `for local businesses, the website and Google Business Profile are not separate channels. A user often starts with Google Maps, sees reviews-, then goes to the site, and only then reacts. If the profile and the site show different information, trust decreases.`,
        `the site is intended to display the same services, locations, contact details and trust signals that Google Business Profile shows. NAP consistency, local landing pages, reviews, schema and properly filled in service area helps Google and its users.`,
        `if a business is operating in Tbilisi, Batumi or a specific region, the local SEO should be planned from the outset. keywords in the city, the service area, Google Maps links, photos and review strategy are sometimes as important as the main website design.`,
      ],
    },
    {
      title: "security, ownership and control.",
      paragraphs: [
        `When ordering a website, businesses need to know who owns the domain, where the hosting is, who owns the admin access, how the backup is stored, and what happens in the event of a technical problem. These questions may seem awkward at first, but they're what's protecting businesses in a critical moment.`,
        `Security includes SSL Certificate-, a strong password policy, role-based access-, plugin or dependency updates-, spam protection-, malware monitoring- and a recovery plan. It is particularly important for online stores, forms, customer portal-, and sites where customer data is processed.`,
        `A good web development company doesn't hide these topics. On the contrary, we'll tell you first how access works, how to deliver a project, what's involved in maintenance, and what's the responsibility of the client.`,
      ],
    },
    {
      title: "When a project needs integration and automation.",
      paragraphs: [
        `not all websites need CRM, ERP or AI automation, but if a business receives a lot of requests, a supply, an order, or a support query, manual management will soon become restricted.`,
        `AI Chatbot and AI Customer Support are especially useful for repeat questions: price, hours of work, process, documents, booking, service selection or support status. but AI must be properly built in. It must collect leads, transmit data to the right system, and at the right moment, people are in the process of being released.`,
        `If you don't plan on integrating at first, you might need to re-code and restructure later on. So it's worth talking about not just the site today, but the future processes: what to automate in six months, what data to collect, and what systems to connect to the website.`,
      ],
    },
    {
      title: "How to compare offers correctly.",
      paragraphs: [
        `two offers may seem to mean the same thing: "Making website". Actually, one might include strategy, SEO, responsive design, analytics, testing and support, and the other one might just be a template setup. So comparing just the price is never enough.`,
        `check scope: How many pages are there who writes the text, is there a custom design, is there a CMS, SEO setup, schema, speed optimization, form testing, Search Console, training and launch support., and also ask what's not included in the price.`,
        `A good proposal should explain the process and responsibilities. If you don't see what steps are involved, how feedback is generated, how many design changes can be made, what time frames are in place, and who's providing what, the project can easily be scaled up.`,
      ],
    },
    {
      title: "technology: WordPress, Next.js or custom solution",
      paragraphs: [
        `The choice of technology should start with the task. WordPress is a good choice when you need a simple CMS, a blog management, WooCommerce, or a relatively fast run. Next.js is powerful when speed, technical control, custom frontend, integrations and high Core Web Vitals. are the priorities.`,
        `custom software or API integrations are needed when the website is no longer just a presentation and should link to CRM-, ERP-, booking system-, customer portal- or internal dashboard-. By this time development is already serving to improve business processes and not just the visual page.`,
        `There's no one platform for everyone. There's the right platform for a particular business, a specific budget, a specific growth plan. So we're choosing technology consulting based on need, not a pre-planned response.`,
      ],
    },
    {
      title: "What happens when you launch.",
      paragraphs: [
        `Launch is not in Finnish. When the site launches, real data starts: which page gets traffic, which query appears in Search Console, where the user leaves the page, which CTA works, and how it behaves as a mobile audience.`,
        `uptime, backup, Security, speed monitoring, plugin or dependency updates, new content, SEO upgrades and if necessary conversion optimization. if the site is left unattended, technical debts and lost capabilities will appear over time.`,
        `this is where the Next-Hub approach differs from a one-time site. The website should be a live asset that improves periodically and builds on real business data.`,
      ],
    },
    {
      title: "How can counseling help you?",
      paragraphs: [
        `${topic.consultation} It's not a hard selling process. A good consultation should first help you figure out what you need and what you don't need.`,
        `It's useful to consult with your goal, if you have an existing site, examples of competitors, list of services, estimated budget and questions.`,
        `If you're not ready to start a project, it's still worth the consultation: you'll learn what to prepare, how to compare offers, and what questions to ask any web development company.`,
      ],
    },
    {
      title: "internal links and the next issue.",
      paragraphs: [
        `following this topic, it is also useful to know the related guidelines: price, process, SEO, platform selection, Facebook page comparison, conversion and most common errors. These articles together form buyer journey-, where each question answers the next question.`,
        `If you're interested in a practical service, start with the /webdevelopment page. If the main goal is to get customers from Google, go to the /seo-services page. If you want to discuss your idea with specific recommendations, use the /contact page.`,
        `Internal links are not just for SEO. They help the reader to follow their decision process and gradually make a more peaceful, informed choice.`,
      ],
    },
    {
      title: "Practical checklist before ordering.",
      paragraphs: [
        `Write down the main purpose: more calls, more orders, brand trust, visibility in Google, recruitment, customer portal or internal process automation. Without a purpose, evaluating a website is difficult because a beautiful design may not be enough for a result.`,
        `make a list of services, existing texts, photos, logos, brand materials, competitor examples, and the questions you get asked often. These are the questions that become the basis of FAQ, service page, and SEO content-.`,
        `check if the project includes SEO, mobile testing, form testing, analytics, Search Console, sitemap, security, backup and post-launch support. If these points are clear from the beginning, collaboration is much quieter and result-oriented.`,
      ],
    },
    {
      title: "Conclusion: How to make the right decision.",
      paragraphs: [
        `${topic.title} Finally, we have to evaluate it with one key question: Will this solution help businesses to look more trustworthy, better find Google, and more easily acquire customers? If the answer is confusing, the project strategy has already been compromised.`,
        `a good website is not just a cost. It's a digital asset that builds trust, experience, organic traffic-, conversion data-, and answers to customer questions. The better this system is designed, the more powerful it becomes over time.`,
        `When you make the final decision, check three things: do you know what business results you're expecting, do you know how to measure that result, and do you have a team that can develop the site after launch-. If you have the answers to these three questions, the decision is much more peaceful and transparent.`,
        `The next step is to have a calm consultation: not a quick decision, but a clear understanding of the project's goal, budget, timing and outcome.`,
      ],
    },
  ];
}

function buyerJourneyFaqs(topic) {
  return [
    {
      question: `${topic.title} When is the right decision?`,
      answer:
        "right when a business needs more trust, visibility in Google, clear offerings, and the customer journey that goes to call, announcement, or order.",
    },
    {
      question: "Should SEO be part of the project in the first place?",
      answer:
        "Yes. The technical SEO, metadata, schema, sitemap, internal links and FAQ structure from the beginning if it is planned, the next growth is faster and less painful.",
    },
    {
      question: "Is it necessary to do the whole project at once?",
      answer:
        "No. Many businesses prefer to start with the necessary MVP or the main site and then step by step add SEO content, automation, CRM integration or new landing pages.",
    },
    {
      question: "How do I know if the site is going to work?",
      answer:
        "you need to pre-defin KPI: calls, forms, organic traffic, Google Business Profile clicks, conversion rate or a specific service inquiries. then these data should be measured.",
    },
    {
      question: "Why is it better to consult before ordering?",
      answer:
        "consulting helps you understand the requirements and risks of scope-, the budget, the technology, the SEO, so the decision is less based on assumptions and more on the real problem.",
    },
    {
      question: "How do I connect to Next-Hub Solutions-?",
      answer:
        "go to the /contact page and briefly describe your business, your goal, if you have a website, and the desired outcome.",
    },
  ];
}

function buildBuyerJourneyPost(topic, index) {
  const categoryTitle =
    blogCategories.find((item) => item.slug === topic.category)?.title || "blog.";

  return {
    slug: topic.slug,
    type: "article",
    category: topic.category,
    categoryTitle,
    featured: true,
    buyerJourneyFeatured: true,
    title: topic.title,
    metaTitle: `${topic.title} | Buyer Guide | Next-Hub Solutions`,
    description: topic.description,
    excerpt: topic.excerpt,
    author: "Next-Hub Solutions",
    date: "2026-07-10",
    readingTime: "18-24 minutes",
    tags: topic.keywords,
    keywords: [
      ...topic.keywords,
      "Next-Hub Solutions",
      "Making a website in Georgia",
      "SEO service in Georgia",
      "Consultation.",
      "AI search optimization",
    ],
    sections: buyerJourneySections(topic),
    faqs: buyerJourneyFaqs(topic),
    internalLinks: buyerJourneyRelatedLinks(topic.slug),
    serviceLinks,
    buyerJourneyOrder: index + 1,
  };
}

const buyerJourneyPosts = buyerJourneyTopics.map(buildBuyerJourneyPost);

const websiteCalculatorClusters = new Set([
  "price",
  "local",
  "business",
  "conversion",
  "ecommerce",
  "nextjs",
  "integration",
]);

const websiteCalculatorSlugs = new Set([
  "saitis-sheqmna",
  "saitis-damzadeba",
  "vebgverdis-sheqmna",
  "vebgverdis-damzadeba",
  "cheap-vs-professional-website",
  "wordpress-vs-nextjs-business-website",
  "what-should-business-website-have",
  "how-long-website-development-takes",
  "how-to-choose-web-development-company",
  "online-store-price-georgia",
  "rogor-shevqmnat-tanamedrove-vebsaiti",
  "nextjs-vs-wordpress",
  "website-cost-georgia-2026",
  "onlain-magaziis-sheqmna",
  "landing-page-servis-biznesistvis",
  "veb-development-mcire-biznesistvis",
  "vebsaitis-redesign",
  "nextjs-vebsaitis-seo-upiratesobebi",
  "veb-dizainis-10-principi",
  "ai-chatbot-biznesistvis",
  "ai-integracia-vebsaitze",
]);

function shouldShowWebsiteCalculator(post) {
  if (post.calculatorCta || post.type === "case-study") return true;
  if (post.buyerJourneyOrder && post.category !== "seo") return true;
  if (websiteCalculatorSlugs.has(post.slug)) return true;
  return websiteCalculatorClusters.has(post.contentCluster);
}

const generatedBlogPosts = [
  ...aiVideoPosts,
  ...websiteKeywordPosts,
  ...buyerJourneyPosts,
  ...websiteBuyerClusterPosts,
  ...highIntentClusterPosts,
  ...projects.map(buildPostFromProject),
  ...topics.map(buildPostFromTopic),
].map((post) =>
  shouldShowWebsiteCalculator(post) ? { ...post, calculatorCta } : post
);

export const blogPosts = generatedBlogPosts.sort((a, b) => {
  const aIndex = prioritySlugs.indexOf(a.slug);
  const bIndex = prioritySlugs.indexOf(b.slug);

  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;
  return 0;
});

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category) {
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(post, limit = 3) {
  return blogPosts
    .filter((item) => item.slug !== post.slug)
    .filter(
      (item) =>
        item.category === post.category ||
        item.keywords.some((keyword) => post.keywords.includes(keyword))
    )
    .sort((a, b) => {
      const aPriority = prioritySlugs.includes(a.slug) ? 0 : 1;
      const bPriority = prioritySlugs.includes(b.slug) ? 0 : 1;
      return aPriority - bPriority;
    })
    .slice(0, limit);
}

export function getPostUrl(post) {
  return `${siteUrl}/blog/${post.slug}`;
}

export function buildPostSchemas(post) {
  const url = getPostUrl(post);
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "blog.", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
        url: siteOrigin,
      },
      publisher: {
        "@type": "Organization",
        name: "Next-Hub Solutions",
        logo: {
          "@type": "ImageObject",
          url: `${siteOrigin}/logo.svg`,
        },
      },
      mainEntityOfPage: url,
      articleSection: post.categoryTitle,
      keywords: post.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
