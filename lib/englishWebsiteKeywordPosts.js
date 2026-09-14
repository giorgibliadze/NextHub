const serviceLinks = [
  { href: "/en/webdevelopment", label: "Web Development Service." },
  { href: "/en/web-design", label: "Web design." },
  { href: "/en/seo-services", label: "SEO service" },
  { href: "/en/website-maintenance-services", label: "Site maintenance." },
  { href: "/en/contact", label: "Consultation." },
];

const creationSections = [
  {
    title: "What does it mean to create a website?",
    paragraphs: [
      "Website design is a planned process that combines business purpose, audience research, page structure, design, programming, content, SEO, and testing. It's not enough to just have a nice screen setup. A site needs to quickly explain to the user what the business is offering, why the offer is important, and what the next step is.",
      "A good website is a company's digital workspace. It answers customer questions at any time, displays services, collects applications, and builds a reliable foundation for advertising and traffic from Google. So the quality of a project should be judged not only by visual, but also by how easily a person finds information and performs desired actions.",
    ],
  },
  {
    title: "defining the purpose of the site.",
    paragraphs: [
      "the first step is figuring out what the site should be doing. The goal can be to get more calls, ask for advice, sell a product, book a meeting, provide information to partners, or increase brand awareness. One key and several supporting goals help the team define the pages, functions, and calls to action correctly.",
      "a general desire, such as a modern site, is not a sufficient task. A better formulation is: the user should understand our three services, see the projects being done, and fill out a contact form. This goal is to define the content hierarchy, CTA buttons and analytics events and reduce the time spent on over-the-top functions.",
    ],
  },
  {
    title: "target audience analysis.",
    paragraphs: [
      "The structure of the site should be based on people who are actually looking for a product or service. It needs to know who is making decisions, what problem they have, what questions they ask before they buy, and what might be bothering them. The way a customer at B2B is different from the way a customer is going to an online store, clinic, restaurant or professional service.",
      "the information is based on the experience of the sales team, existing customer questions, searches, Search Console data, and short interviews. Based on this material, the text responds to real needs rather than internal terms of the company.",
    ],
  },
  {
    title: "Competitor Survey.",
    paragraphs: [
      "The goal of competitors' research is not to copy their designs. We need to see how they share services, what questions they answer, how they trust and what they click on their pages. It's also useful to look at the results of Google because it shows what type of pages respond to a specific search intent.",
      "the survey includes direct local competitors and high-quality international examples. The end result is a list of possibilities: a more understandable price context, a better FAQ, real keys, easy mobile navigation, or a separate page of each important service. The difference should be made by the real benefits of the business, not just by efficient animation.",
    ],
  },
  {
    title: "designing the structure of the site.",
    paragraphs: [
      "when planning the structure, all the necessary pages and links are defined. A business site often needs a homepage, separate service pages, company information, projects or keywords, a blog, FAQ, and a contact. An online store adds categories, product pages, baskets, ordering and customer information pages.",
      "a good architecture helps both the user and the search engine. The menu must be predictable, the URL-s  short and clear, and the internal links  thematically natural. If all the services are combined on one long page, it is difficult to give a complete answer to a specific question. The map of the pages must be approved before the design and code start.",
    ],
  },
  {
    title: "design and user experience.",
    paragraphs: [
      "Web design makes information a comprehensive visual hierarchy. Headings, spaces, colors, photos, cards, and buttons should help people read a page quickly. The first screen should clearly show what the company is doing, who it works for, and how they can connect. Decoration cannot replace these basic answers.",
      "UX is the process of predicting the user path: how to go from home page to service, key to contact, or product to order. The prototype provides logical verification to programming. At the same time, we need to consider the availability of  sufficient contrast, readable text, clear keys and keyboard control. This approach makes the site more convenient for all users.",
    ],
  },
  {
    title: "Technology Selection.",
    paragraphs: [
      "technology should be based on project requirements, not just popularity. It's important who updates content, how often pages change, whether online payment is required, multilingualism, a user account, a plugin, or connectivity to other systems. The right choice makes future development easier and reduces overhead technical costs.",
      "CMS for a simple business site can be practical, while for an individual portal or web application  separate frontend and backend architecture. The price of the hosting, security updates, developer availability and data transfer capabilities are selected. The technical solution must be explained in a language that the client understands and for specific reasons.",
    ],
  },
  {
    title: "WordPress or Next.js?",
    paragraphs: [
      "WordPress is practical when a business needs a familiar dashboard, blog and page update, or a WooCommerce store. Its advantage is a large ecosystem, but it requires a quality theme, a reasonable number of plugins, security updates, and speed controls.",
      "Next.js is a good choice for an individual design, high performance, complex integration and scalable web product. It does not automatically mean a better SEO  results in the right rendering, metadata, content and architecture. The choice should be based on functionality, management model and long-term plan rather than the assumption that one platform is best for all projects.",
    ],
  },
  {
    title: "Content creation.",
    paragraphs: [
      "Content design is not a material; it's a core part of the site's work. Each page needs a specific topic, a user-language title, an explanation of benefits, relevant evidence, and a call to action. The service text should be about what the client gets, how the process goes, and why they can trust the company.",
      "texts, real photos, videos, project descriptions, and contact information must be collected in advance. Search phrases are naturally shared where they serve to define the topic; their artificial repetition damages the text. When editing, the facts, tones, terms, links, and content prepared by CTA. also significantly shorten the project duration.",
    ],
  },
  {
    title: "Mobile Optimization.",
    paragraphs: [
      "Modern website design starts with a small screen. On mobile, people often operate with one hand, so menus, buttons, forms, and phone numbers should be easily accessible. desktop design is not enough to simply distract. Sometimes you need to change the order of sections, the volume of text, and the layout of visual elements.",
      "testing is done on different screen widths and real devices. It is proven by horizontal folding, keyboard opening shape, touch button size, menu, fixed elements and image uploading. A well-optimized mobile version reduces confusion and increases the chance that a user returning from a search will perform the desired action on the site.",
    ],
  },
  {
    title: "technical SEO",
    paragraphs: [
      "there is no single plugin to add to the technical SEO site after launch. When planning, you need to find out which page is the search purpose. Then you create a unique title, description, H1, the correct hierarchy of headings, canonical address, internal links, and the corresponding schema.. Such allocation reduces unnecessary competition between pages.",
      "the technical basis includes the availability of crawl-, sitemap-, robots rules, correct status codes, image alt texts, and server-rendered important content. Although technical references cannot replace useful page. If the text does not fully answer the user's query, only metadata will not produce the result.",
    ],
  },
  {
    title: "Site speed.",
    paragraphs: [
      "Speed affects first impressions, conversion and Core Web Vitals-. Frequent problems are very large images, too many external scripts, heavy fonts, incorrect cache, and over-customer side JavaScript. optimization needs to start from scratch and not just by getting one automatic account before launch.",
      "the images are selected in a modern format, with the right size of the actual display and the right loading strategy. The main content should appear quickly, and the less important modules should be uploaded later. The result is verified by both laboratory tools and real user data, because a fast office Internet does not show the experience of all mobile devices and networks.",
    ],
  },
  {
    title: "Testing.",
    paragraphs: [
      "a detailed checklist. menu and all internal links are required before launch, form validation and letter receipt, online payment, various browsers, mobile layout, 404 page, redirects, metadata and schema. are especially important to go through real scenarios  for example, searching for services by a customer coming from an advertisement and sending an application.",
      "verifying the content is as important as a technical test. It should correct errors, temporary text, incorrect phone, unprocessed photos, and outdated information. Responsibilities are also shared in advance: who validates the text, who is functional, and who gives final permission to run. Such a process reduces last-minute confusion.",
    ],
  },
  {
    title: "Launching the website.",
    paragraphs: [
      "Running means moving an approved version to the production environment, connecting the domain, verifying the SSL-, and opening pages for search engines. If an old site is changed, it is necessary to have an important URL- map and 301 redirects so that users, existing links, and accumulated SEO signals are not lost.",
      "On launch day, re-certify forms, analytics, robots, sitemap, canonical, and Search Console. are desirable for a monitoring period to quickly detect a problem with the DNS-, cache-, or integration. A successful launch is a pre-planned operation, not a last-minute experiment.",
    ],
  },
  {
    title: "the cost of building a website.",
    paragraphs: [
      "the cost of building a site depends on the number of pages, the depth of design, the content preparation, CMS, languages, product volume, payments, and integration with other systems. Also included are SEO research, texts, photos, analytics, hosting and support for later. So one fixed amount cannot reflect the actual volume of all projects.",
      "When comparing offers, you should not only compare the final price. You need to know what pages, features, design work, testing and support are included in each offer. A list of the same requirements makes it easier to estimate the same volume. A small start-up version can also be a good choice if it fulfills the necessary purpose and allows for future expansion.",
    ],
  },
  {
    title: "Website development timeline",
    paragraphs: [
      "The timing depends on the size of the project and the speed of the decision. A small landing page can be prepared in a few weeks, while a multi-faceted business site, online store or individual web application requires more research, design, integration and testing. An accurate schedule is only created after agreement on requirements, content and responsibilities.",
      "the reason for the delay is often not the code, but late texts, photos, feedback, or third-party access. The realistic plan shows the steps, the responsible people, and the approval periods. Some projects are helped by a MVP approach: the necessary functions run in time, while additional capabilities are developed based on real user data and business priorities.",
    ],
  },
  {
    title: "Common mistakes.",
    paragraphs: [
      "frequent mistakes include starting a design without a business purpose, putting all services on one page, checking the mobile version late, and leaving the text at the end of the project. There are also problems with over-plugins, uncertain CTA, untimely runtime, and analytics. Such decisions can lead to later rework and additional costs.",
      "The SEO is at risk of identical headings, duplicate pages, incorrect canonical, test domain indexing, and deleting old URL-s without redirect-. The security issue is common passwords and uncertain access. Written requests, step-by-step acceptance, and launch checklist avoid much of these errors.",
    ],
  },
  {
    title: "the conclusion.",
    paragraphs: [
      "Building a successful website starts with a sense of purpose and audience, then moves on to structure, design, technology, content and SEO, and ends with testing and measurable launches. Missing one stage often costs a lot to fix the problem at another stage.",
      "If you're planning a website for a business, start with a brief summary: goal, user, necessary pages, features, content, timing, and budget context. Then the development team can justify the technology, steps, and evaluations. A good project doesn't start with code. It starts with correctly asked questions and clear priorities.",
    ],
  },
];

const productionSections = [
  {
    title: "What does it involve?",
    paragraphs: [
      "Site development involves aggregating requirements, analyzing commercial tasks, page planning, design, development, content placement, SEO foundation, integrations, testing and launch. When accepting an offer, it is important to determine which of these steps is included in the service and which remains the responsibility of the client or other provider.",
      "The end result should be a website that is legitimately operating in the production environment: with a secure domain, mobile version, working forms, analytics, and manageable rules.",
    ],
  },
  {
    title: "What kind of sites exist?",
    paragraphs: [
      "Landing page is focused on one offer and one action. A business site brings together several services, companies, projects and contacts. A corporate website can have many directions, languages, careers and news. An online store is added to the catalog, catalog, payment, delivery, and order management process.",
      "an individual web application performs a specific process: a user cabinet, a dashboard, a CRM portal, a calculator, or data dashboard. site type to properly define directly affects the price, duration, and experience required by the performer. Sometimes a small version is sufficient at the first stage if the architecture is to accommodate future features and content growth.",
    ],
  },
  {
    title: "What determines the price of the website?",
    paragraphs: [
      "The cost of building a site varies the most depending on the volume and functionality. The number of pages, individual UX, multilingualism, product import, online payment, stock, API integrations, user roles, and administrative panel requires different work. Content preparation, photographic material, and SEO research are also separate resources.",
      "Price is affected by quality control as well: prototypes, responsive design details, browser testing, accessibility, performance and launch support. cheap offerings Some stages may not be included at all. For proper comparison, send several companies a list of requirements and ask them to clearly write down both the work volume, as well as the exceptions and additional costs.",
    ],
  },
  {
    title: "Building a Business Website.",
    paragraphs: [
      "a business site is needed for companies that have multiple services, different audiences, and a relatively long sales process. Usually, a homepage, separate pages of services, a company, projects, blog, and contact are created. This structure helps users make choices and allows them to search for each important topic.",
      "commercial results require not just a description of the service, but proof: real projects, workflow, team experience, and transparent contact information. Businesses need to determine in advance who is updating content and how leads are measured. These questions distinguish a professional business tool from a simple online business card.",
    ],
  },
  {
    title: "What value does a website create for businesses?",
    paragraphs: [
      "a site gives businesses a channel they control themselves. Unlike a social network, the structure of the pages, content, analytics, and customer trajectory serve the company's goals. A well-planned site answers a segment of repeat questions to a sales team, gives the customer the information they need to make a decision, and links advertising traffic to a specific service.",
      "value is not expressed only in direct online sales. A corporate website builds trust with partners, helps candidates to get to know the company, and creates space to share ideas, news, and knowledge. To measure the result, you have to pre-determine the important actions: call, form, bidding, booking, or ordering.",
    ],
  },
  {
    title: "Build an online store.",
    paragraphs: [
      "building an online store is not just about loading products. It requires category architecture, search and filters, product data, inventory, cart, payment, delivery, messaging, and order management. Each integration provider, commission, and technical limitation must be checked before the project starts.",
      "Price is heavily influenced by the quantity of products and the state of the data. Cleaning up a large catalogue and importing may be a lot of work on development. It also requires a mobile test of checkout-, e-commerce analytics, SEOfriendly categories and visual placement of rules. The offer must specify exactly what data and functions will be transferred to launch-.",
    ],
  },
  {
    title: "template and individual design.",
    paragraphs: [
      "Here's the website text: Template design can be a good choice for a small budget and a fast term if the template is high quality and fits the business content. The limitations are one-size-fits-all visuals, unnecessary features, and the difficulty of making profound changes. Before we get a deal, we need to know what can change and what's left in the system.",
      "Individual design is created for a specific audience, brand and content. It requires more research, prototyping and approval, but it gives you better control when demanding complex services or high conversion. The choice should not be made just by visual prestige; it should be assessed how much additional work justifies the purpose of the business and future development.",
    ],
  },
  {
    title: "WordPress, React or Next.js?",
    paragraphs: [
      "WordPress is often effective for content-oriented business sites and WooCommerce stores. React is a user interface library and is usually part of a broader architecture. Next.js React--based framework- combines routing-, server rendering-, and performance- tools. These options are different technical approaches, not just a different price package.",
      "the provider must justify the choice by content management, SEO requirements, integration, security and development plans. Also ask who can manage the system and how the data export. is done. If the answer is simply that the technology in question is fastest, the decision is not well-founded. The technology should serve the purpose of the project.",
    ],
  },
  {
    title: "domain and hosting.",
    paragraphs: [
      "the domain is required to be registered with a client or their company account. The user may be granted technical access, but ownership and updating responsibility must be documented. The same applies to hosting-, email, Analytics-, and Search Console. Infrastructure linked to someone else's personal account poses a risk of future control and transmission.",
      "Hosting is chosen based on technology, traffic, audience location, and support. You should compare backup- frequency, SSL, resources, uptime, restore process, and cost increases. The cheapest plan may be slow or limited, and an overly powerful server is not necessary for a small site. Periodic costs should be separately priced in the offer.",
    ],
  },
  {
    title: "SEO Optimization",
    paragraphs: [
      "the offer includes the phrase SEO  need specification. Basic technical SEO may refer to crawlable pages, metadata, sitemap-, robots-, canonical-, heading structure- and image alt texts. The full SEO service includes keyword research, competition, content plan, internal links and results compiling engines.",
      "check who writes title- and the texts, how many pages are covered, and whether each page links to a different search purpose. A few of the same landing page is not a quality strategy just by renaming the city. A new site should be launched with a clean canonical URL-, a production domain and information that is really useful to the user.",
    ],
  },
  {
    title: "the mobile version.",
    paragraphs: [
      "Responsive recording is the minimum requirement in the offer, but good mobile experience requires detailed testing. You need to check the menu, forms, button size, text reading, images, checkout and fixed elements. Ask the supplier which screens, devices and browsers are being quality controlled.",
      "Hiding content on a mobile device just to save space is often wrong. Key information needs to stay available and just be better organized. Speed is especially important on a mobile network. In real life, the test shows problems that a quick office Wi-Fi- scan will not detect. A bad mobile path means lost applications and orders directly.",
    ],
  },
  {
    title: "the deadlines for making the website.",
    paragraphs: [
      "the provider must present the stages: research, structure, design, development, content placement, testing, and launch. each stage must have an expected result, accountability, and approval time. Only the deadline without interim control creates uncertainty on both sides and increases the risk of late detection of the problem.",
      "the deadline also depends on the customer feedback. It is useful to specify who is providing the text and photos, how many days the approval takes, and how the delay affects the schedule. Third party API- can also change the deadline for payment or domain access. Real-time storage protects quality testing and smooth launch.",
    ],
  },
  {
    title: "What should be included in the service?",
    paragraphs: [
      "Good technical task listing pages, languages, functions, design format, responsive requirement, CMS, integrations, SEO deliverable-, analytics, testing and launch-. It also requires a defined correction process, administration training, documentation, warranty period and subsequent support terms.",
      "specify what is not included in the price: text writing, professional photo, logo, translation, product input, hosting, price plugin, or third-party commission. Knowing the exceptions in advance will reduce the sudden cost. Final admission criteria should also be objective  for example, working forms, approved pages, tested mobile version, and broadcast access.",
    ],
  },
  {
    title: "How to choose an artist?",
    paragraphs: [
      "When choosing a site development company, evaluate not only the visual aspect of the portfolio, but also similarly complex projects, the clarity of the process, and the quality of the questions asked. A strong performer tries to understand the goal, audience, content, and limitations before offering the technology or final price. An overly quick universal response can lead to a superficial assessment.",
      "request two or three relevant works and open it yourself from your mobile. Check the speed, shape, navigation and quality of the content. Ask who will be the project manager, who will be executing the design and code, and how you will get the progress updated.",
    ],
  },
  {
    title: "Who owns the code and the domain?",
    paragraphs: [
      "the contract must specify who owns the custom code, design and content after the final payment. A template, font, photo, or plugin may have its own license and have not been granted full ownership. The provider must specify these restrictions in advance and specify the periodic cost of the license.",
      "the client must have appropriate administrative access to the domain, hosting-, repository-, CMS, Analytics-, and other business accounts. Instead of sharing passwords, separate users and rights are preferred.",
    ],
  },
  {
    title: "Technical support.",
    paragraphs: [
      "After launch support may include guaranteed bug fixes, CMS and plugin updates, backup-, security, uptime-, minor content changes and new feature development. These services differ from one another, so the hours, response times, working days and communication channel should be defined accurately.",
      "also find out what is considered to be bug- and what is a new requirement. You need an emergency process and be responsible for recovering from backup-. If a business orders or receives applications from the site, maintenance is not an added luxury, but part of operational sustainability.",
    ],
  },
  {
    title: "Common mistakes.",
    paragraphs: [
      "a frequent mistake for a buyer is to choose only the lowest price without comparing the amount of work. The second is to start a project without the person responsible for the content. There is also the risk of registering for the domain name of the author, leaving the agreement only in the chat and requesting the first version of all possible features until their need is confirmed.",
      "the caveats from the supplier are uncertain results, someone else's job showing, a promise of guaranteed seats in the Google, a lack of access allocation and a lack of a testing plan. To avoid a problem, use written briefing, incremental payment, acceptance criteria and regular demo. A transparent process protects the interests of both parties.",
    ],
  },
  {
    title: "the conclusion.",
    paragraphs: [
      "building a site becomes the right business decision when a company knows what results it needs and compares offers to the same criteria. The price has to be assessed with the pages, features, design, SEO, testing and support. The most expensive option is not automatically the best, but the uncertainly low price will hide the often-missed work.",
      "the next step is to prepare a short requirements document and discuss it with teams with relevant experience. Ask for valid technology, steps, responsibilities, ownership terms and costs. A good provider doesn't just offer coding; it helps you define the volume correctly and build a website that serves the real business process.",
    ],
  },
];

export const websiteKeywordPosts = [
  {
    slug: "saitis-sheqmna",
    type: "article",
    category: "web-development",
    categoryTitle: "Web Development.",
    featured: false,
    title: "creating a website.",
    metaTitle: "How to build a website.",
    description:
      "learn how a website is being built: planning, design, technology selection, SEO, mobile optimization, launch and development.",
    excerpt:
      "the complete process of building a website -- from business purpose and structural to design, technology to SEO and launch.",
    author: "Next-Hub Solutions",
    date: "2026-07-17",
    readingTime: "16-19 minutes",
    tags: ["creating a website.", "Web Development.", "WordPress", "Next.js", "SEO"],
    keywords: [
      "creating a website.",
      "the steps of building the website.",
      "the cost of building a website.",
      "Building a business website.",
      "WordPress",
      "Next.js website development",
    ],
    sections: creationSections,
    faqs: [
      { question: "What is the first step in building a website?", answer: "the first step is to define the business goal, the target audience, and the desired action, and then the pages, the content, and the technology." },
      { question: "How much does website development cost?", answer: "the price depends on the number of pages, design, content, CMS, languages, integrations, and SEO work. An accurate estimate is made after considering the requirements." },
      { question: "WordPress or Next.js?", answer: "WordPress is practical for simple content management, and Next.js is practical for individual, fast, and scalable projects." },
      { question: "How long does it take to build a business website?", answer: "a small site can be built in a few weeks, and a multi-faceted, multilingual or integration-laden project takes more time." },
      { question: "SEO should be done when you're creating a website?", answer: "Yes. The page map, URL-s, metadata, headings, internal links, speed, and schema should be planned from the beginning." },
    ],
    internalLinks: [
      { href: "/en/webdevelopment", label: "a website-building service." },
      { href: "/en/web-design", label: "Web design services." },
      { href: "/en/seo-services", label: "SEO Optimization" },
      { href: "/en/website-maintenance-services", label: "\"Site maintenance after launch\"." },
      { href: "/en/blog/nextjs-vs-wordpress", label: "Next.js and WordPress comparison" },
      { href: "/en/blog/saitis-damzadeba", label: "a website design guide." },
    ],
    serviceLinks,
  },
  {
    slug: "saitis-damzadeba",
    type: "article",
    category: "web-development",
    categoryTitle: "Web Development.",
    featured: false,
    title: "Website development",
    metaTitle: "Building a website, cost and steps.",
    description:
      "a complete guide to building the site: prices, deadlines, design, technology, SEO and the right artist selection.",
    excerpt:
      "how to compare the cost of building a website, the amount of services, the technology, and choose the right one for the business.",
    author: "Next-Hub Solutions",
    date: "2026-07-17",
    readingTime: "15-18 minutes",
    tags: ["Website development", "the price of the website.", "Web Development.", "Online store."],
    keywords: [
      "Website development",
      "the cost of building a website.",
      "Building a Business Website.",
      "the website development company.",
      "Build an online store.",
      "Technical support.",
    ],
    sections: productionSections,
    faqs: [
      { question: "How much does it cost to build a website?", answer: "there is no one universal price. The price depends on the pages, the design, the functions, the languages, the content, the SEO, the integrations and the support." },
      { question: "How do I trade company offers?", answer: "Send a list of requests to all suppliers and compare the workload, the exceptions, the deadline, the repairs, the ownership, the warranty and the support." },
      { question: "Why is an online store worth more?", answer: "the store needs a catalog, product data, cart, payment, delivery, messaging, order management, and more extensive testing." },
      { question: "Who should own the domain and the code?", answer: "the domain and business accounts must be under the control of the client. The terms of the individual code, design and licensed parts are set out in the contract." },
      { question: "What support is needed after launch?", answer: "minimum required backup, security updates, uptime and form control. Additional content changes, SEO and new features as needed." },
    ],
    internalLinks: [
      { href: "/en/webdevelopment", label: "a website development service." },
      { href: "/en/web-design", label: "individual web design." },
      { href: "/en/seo-services", label: "SEOready Web developer" },
      { href: "/en/website-maintenance-services", label: "Technical Support Plans." },
      { href: "/en/blog/website-cost-georgia-2026", label: "The price factors of the website." },
      { href: "/en/blog/saitis-sheqmna", label: "the complete process of building a website." },
    ],
    serviceLinks,
  },
];
