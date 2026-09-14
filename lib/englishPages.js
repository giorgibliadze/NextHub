export const ENGLISH_SITE_URL = "https://next-hub.pro";

const sharedProcess = [
  {
    title: "Discovery",
    text: "We clarify your audience, commercial goals, operating workflow, content, and the actions the website must support.",
  },
  {
    title: "Planning",
    text: "We map pages, user journeys, required functionality, integrations, responsibilities, and a realistic delivery scope.",
  },
  {
    title: "Design and development",
    text: "We create a responsive interface and build the approved experience around real business requirements.",
  },
  {
    title: "Testing",
    text: "We check key journeys, forms, content, responsive layouts, browser behavior, accessibility basics, and technical SEO.",
  },
  {
    title: "Launch and support",
    text: "We prepare the production release and remain available for maintenance, improvements, and the next development phase.",
  },
];

const relatedSolutions = [
  {
    title: "Real estate websites",
    text: "Property discovery, apartment availability, floor plans, filters, and qualified lead collection.",
    href: "/en/real-estate-websites",
  },
  {
    title: "Clinic booking systems",
    text: "Patient-friendly appointment selection with schedules and practical booking management.",
    href: "/en/clinic-booking-systems",
  },
  {
    title: "Tourism websites",
    text: "Tour catalogues, destination content, availability, booking requests, and custom trip enquiries.",
    href: "/en/tourism-websites",
  },
];

export const englishPages = {
  home: {
    path: "/en",
    url: `${ENGLISH_SITE_URL}/en`,
    title: "Custom Websites and Booking Platforms | Next-Hub",
    description:
      "Next-Hub Solutions builds custom websites, booking platforms, and management tools for international businesses in real estate, healthcare, and tourism.",
    keywords:
      "custom website development, Next.js web development agency, booking platform development, business websites, international web development",
    eyebrow: "Web development for international businesses",
    h1: "Websites and booking platforms built around your business",
    intro:
      "Next-Hub Solutions plans, designs, and develops modern digital products for companies that need more than a generic template. We connect clear customer journeys with practical booking, lead-management, and administration workflows.",
    primaryCta: { label: "Discuss your project", href: "mailto:info@next-hub.pro" },
    secondaryCta: { label: "Explore solutions", href: "#solutions" },
    sections: [
      {
        id: "solutions",
        eyebrow: "Industry solutions",
        title: "Focused platforms for service-driven businesses",
        intro:
          "Each industry has a different decision journey. We shape the website, information architecture, and management tools around how your customers actually search, compare, and enquire.",
        cards: relatedSolutions,
      },
      {
        eyebrow: "Why Next-Hub",
        title: "A clear path from business need to working product",
        cards: [
          {
            title: "Business-focused development",
            text: "The scope begins with your commercial goal and operating process, not with a preselected template.",
          },
          {
            title: "Responsive interfaces",
            text: "Pages and booking journeys are designed to remain clear and usable across mobile, tablet, and desktop.",
          },
          {
            title: "Booking and management workflows",
            text: "Where required, we plan availability, enquiries, schedules, administration, and customer follow-up as one connected flow.",
          },
          {
            title: "SEOready structure",
            text: "Crawlable content, clear headings, page-specific metadata, internal links, and structured data are considered from the start.",
          },
          {
            title: "Transparent process",
            text: "Discovery, scope, responsibilities, review stages, testing, and launch expectations are defined before implementation expands.",
          },
          {
            title: "Continued support",
            text: "A digital product continues to evolve after launch, so maintenance and improvement can be planned as part of the roadmap.",
          },
        ],
      },
    ],
    showcase: {
      eyebrow: "Selected work",
      title: "Existing projects, clearly identified",
      intro:
        "These links are examples from the existing Next-Hub portfolio. Industry solution pages below also describe concept workflows where a public client demo is not available.",
      items: [
        {
          title: "GeoArt Construction",
          text: "A current construction-sector website project listed in the Next-Hub portfolio.",
          image: "/GeoArtConstruction.png",
          href: "https://geoartconstruction.ge",
          label: "Current project",
        },
        {
          title: "Printerman",
          text: "An existing ecommerce and service website with product discovery and enquiry paths.",
          image: "/printerman.png",
          href: "https://printerman.ge/",
          label: "Client project",
        },
        {
          title: "CarWay Import",
          text: "An existing lead-oriented business website for an automotive import company.",
          image: "/carwayimport.png",
          href: "https://carwayimport.com/",
          label: "Client project",
        },
      ],
    },
    process: sharedProcess,
    relatedPages: relatedSolutions,
    finalCta: {
      title: "Have a project that needs a clearer digital workflow?",
      text: "Tell us what customers need to do, what your team needs to manage, and where the current process creates friction. We will help you define a practical scope.",
    },
    languageAlternates: [
      { hrefLang: "ka-GE", href: ENGLISH_SITE_URL },
      { hrefLang: "en", href: `${ENGLISH_SITE_URL}/en` },
      { hrefLang: "x-default", href: ENGLISH_SITE_URL },
    ],
  },
  realEstate: {
    path: "/en/real-estate-websites",
    url: `${ENGLISH_SITE_URL}/en/real-estate-websites`,
    title: "Real Estate Website Development | Next-Hub",
    description:
      "Custom real estate websites for property developers, construction companies, and agencies with apartment selection, availability, filters, and lead capture.",
    keywords:
      "real estate website development, property development website, interactive apartment selection website, real estate lead generation",
    eyebrow: "Real estate website development",
    h1: "Help buyers explore properties before they contact your sales team",
    intro:
      "We build property websites that turn complex inventory into a clear browsing experience. Buyers can move from a building or project overview to available units, floor plans, and a focused consultation request without losing context.",
    primaryCta: { label: "Discuss a property platform", href: "mailto:info@next-hub.pro" },
    secondaryCta: { label: "View the solution", href: "#solution" },
    serviceType: "Real Estate Website Development",
    sections: [
      {
        eyebrow: "The business problem",
        title: "Property information is difficult to sell when it is scattered",
        intro:
          "Developers and agencies often manage plans, prices, availability, and enquiries across PDFs, messages, spreadsheets, and separate listing portals. Buyers struggle to compare options, while sales teams answer the same basic questions repeatedly.",
        cards: [
          {
            title: "Unclear availability",
            text: "Outdated or fragmented status information creates unnecessary conversations and weakens buyer confidence.",
          },
          {
            title: "Slow property discovery",
            text: "When users cannot filter by practical criteria, promising enquiries are lost before a consultation begins.",
          },
          {
            title: "Disconnected leads",
            text: "A general contact form rarely captures which building, floor, or apartment generated the enquiry.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "The proposed solution",
        title: "A guided path from project overview to a qualified enquiry",
        intro:
          "The exact workflow depends on the development, but the platform can connect visual property discovery with accurate unit information and structured lead collection.",
        cards: [
          { title: "Interactive building selection", text: "Present multiple blocks or buildings through a clear project-level navigation flow." },
          { title: "Floor and apartment selection", text: "Let buyers move from a selected building to floors, units, plans, and relevant details." },
          { title: "Availability and status", text: "Show statuses such as available, reserved, or sold when reliable inventory data is provided." },
          { title: "Useful filters", text: "Support comparison by size, floor, rooms, price, or status according to the available dataset." },
          { title: "Consultation booking", text: "Attach the selected property context to a consultation or callback request." },
          { title: "Admin or CRM workflow", text: "Plan an administration layer or CRM connection when the sales team needs controlled inventory and lead handling." },
        ],
      },
      {
        eyebrow: "Business benefits",
        title: "Make every property conversation more relevant",
        cards: [
          { title: "Better-qualified leads", text: "Sales teams receive clearer context about the buyer’s property interest before responding." },
          { title: "Mobile property browsing", text: "Prospective buyers can explore units and plans comfortably from the device they use most." },
          { title: "Stronger project presentation", text: "Architecture, location, amenities, progress, and availability can form one coherent story." },
          { title: "Search-ready content", text: "Dedicated project and property pages provide a stronger foundation for organic discovery than image-only brochures." },
        ],
      },
    ],
    showcase: {
      eyebrow: "Relevant portfolio",
      title: "Construction-sector experience",
      intro:
        "GeoArt Construction is listed as a current project in the existing Next-Hub portfolio. It is shown here as relevant sector experience, not as a claim that every feature described on this page is live in that project.",
      items: [
        {
          title: "GeoArt Construction",
          text: "Current construction-sector website project.",
          image: "/GeoArtConstruction.png",
          href: "https://geoartconstruction.ge",
          label: "Current project",
        },
      ],
    },
    process: sharedProcess,
    faqs: [
      { question: "Can the website show live apartment availability?", answer: "Yes, when a reliable inventory source or administration workflow is available. The technical approach depends on where unit data is maintained and who is responsible for status updates." },
      { question: "Can buyers filter apartments by floor, size, rooms, or price?", answer: "Yes. Filters can be planned around the fields in your property dataset and the criteria buyers use most often." },
      { question: "Can the platform connect to a CRM?", answer: "A CRM connection can be scoped when the existing system provides a suitable integration method. We first define what property and lead information needs to move between systems." },
      { question: "Is the property experience mobile-friendly?", answer: "Responsive property browsing is part of the design process, including filters, plans, unit details, and consultation actions." },
    ],
    relatedPages: relatedSolutions.filter((item) => item.href !== "/en/real-estate-websites"),
    finalCta: {
      title: "Planning a property website or apartment-selection platform?",
      text: "Share your project structure, inventory format, sales process, and required integrations. We will help you define the right first release.",
    },
    languageAlternates: [
      { hrefLang: "ka-GE", href: `${ENGLISH_SITE_URL}/real-estate-websites` },
      { hrefLang: "en", href: `${ENGLISH_SITE_URL}/en/real-estate-websites` },
      { hrefLang: "x-default", href: `${ENGLISH_SITE_URL}/real-estate-websites` },
    ],
  },
  clinic: {
    path: "/en/clinic-booking-systems",
    url: `${ENGLISH_SITE_URL}/en/clinic-booking-systems`,
    title: "Clinic Booking System Development | Next-Hub",
    description:
      "Custom clinic booking systems for private clinics, dental practices, and medical centers with doctor schedules, availability, and booking management.",
    keywords:
      "clinic booking system, medical appointment booking website, doctor schedule platform, custom booking platform",
    eyebrow: "Clinic booking system development",
    h1: "Make appointment booking clearer for patients and clinic teams",
    intro:
      "We plan patient-friendly booking experiences for private clinics, dental clinics, medical centers, and individual practices. The goal is a practical journey from specialty and doctor selection to an available date and a manageable booking record.",
    primaryCta: { label: "Discuss a booking system", href: "mailto:info@next-hub.pro" },
    secondaryCta: { label: "Explore the workflow", href: "#solution" },
    serviceType: "Clinic Booking System Development",
    sections: [
      {
        eyebrow: "The business problem",
        title: "Phone-only booking creates friction for patients and staff",
        intro:
          "Patients may not know which specialist to choose or when a doctor is available. Staff repeatedly check schedules, explain options, and correct booking conflicts while handling other clinic responsibilities.",
        cards: [
          { title: "Limited booking access", text: "Patients cannot always call during working hours or wait for a response before choosing another provider." },
          { title: "Schedule conflicts", text: "Disconnected calendars and manual updates can expose unavailable or already-booked time slots." },
          { title: "Administrative load", text: "Routine appointment questions consume time that clinic teams could use for more important patient support." },
        ],
      },
      {
        id: "solution",
        eyebrow: "The proposed solution",
        title: "A booking flow based on real clinic availability",
        intro:
          "The system is planned around the clinic’s specialties, doctors, locations, appointment rules, and administrative responsibilities. Features are scoped only after the scheduling process is understood.",
        cards: [
          { title: "Specialty and doctor selection", text: "Help patients begin with the service or professional relevant to their need." },
          { title: "Available dates and times", text: "Display selectable slots based on configured schedules and booking rules." },
          { title: "Unavailable-slot prevention", text: "Prevent selection of closed, blocked, or fully booked slots when availability is maintained correctly." },
          { title: "Doctor schedules", text: "Support working hours, exceptions, locations, and service-specific appointment durations where required." },
          { title: "Booking management", text: "Give authorized staff a practical view of appointments and the actions included in the agreed workflow." },
          { title: "Administration dashboard", text: "Manage relevant services, professionals, schedules, and booking records through a role-appropriate interface." },
        ],
      },
      {
        eyebrow: "Business benefits",
        title: "Reduce routine friction without making unsupported promises",
        cards: [
          { title: "Patient-friendly mobile journey", text: "A clear responsive flow helps patients complete a request without navigating a complex general website." },
          { title: "Clearer schedule visibility", text: "Staff and patients work from the same configured availability rules when the system is kept current." },
          { title: "More structured booking data", text: "The clinic receives consistent appointment details instead of incomplete messages from multiple channels." },
          { title: "Room to evolve", text: "Future integrations or notifications can be evaluated separately when supported by the selected providers and project scope." },
        ],
      },
    ],
    showcase: {
      eyebrow: "Concept workflow",
      title: "A solution model, not a client claim",
      intro:
        "No public clinic demo is currently listed in the Next-Hub portfolio. This page describes the workflow we can scope and develop; it does not present a concept as a completed medical client project.",
      items: [],
    },
    process: sharedProcess,
    faqs: [
      { question: "Can the system prevent fully booked slots from being selected?", answer: "Yes, when availability and booking rules are managed in one reliable workflow. The implementation depends on how schedules are created and updated." },
      { question: "Can patients choose a specialty and doctor?", answer: "Yes. The booking journey can begin with a specialty, service, doctor, or location depending on how the clinic operates." },
      { question: "Are reminders or notifications included?", answer: "They are not assumed. Notifications can be evaluated only when the required email or messaging provider, consent flow, and project scope support them." },
      { question: "Do you guarantee medical compliance or data-security certification?", answer: "No unsupported compliance claim is made. Applicable legal, privacy, hosting, access-control, and retention requirements must be defined with the clinic and qualified advisers before implementation." },
    ],
    relatedPages: relatedSolutions.filter((item) => item.href !== "/en/clinic-booking-systems"),
    finalCta: {
      title: "Need a booking flow shaped around your clinic?",
      text: "Tell us how specialties, doctors, schedules, locations, and booking changes are managed today. We will help turn that workflow into a realistic product scope.",
    },
    languageAlternates: [
      { hrefLang: "ka-GE", href: `${ENGLISH_SITE_URL}/clinic-booking-systems` },
      { hrefLang: "en", href: `${ENGLISH_SITE_URL}/en/clinic-booking-systems` },
      { hrefLang: "x-default", href: `${ENGLISH_SITE_URL}/clinic-booking-systems` },
    ],
  },
  tourism: {
    path: "/en/tourism-websites",
    url: `${ENGLISH_SITE_URL}/en/tourism-websites`,
    title: "Tourism and Tour Booking Websites | Next-Hub",
    description:
      "Tourism website development for tour operators and travel companies with tour catalogues, destinations, availability, booking requests, and administration.",
    keywords:
      "tourism website development, tour booking website, travel agency website, custom tour booking platform",
    eyebrow: "Tourism website development",
    h1: "Turn travel inspiration into a clear booking request",
    intro:
      "We build tourism websites for tour operators, travel agencies, local experience providers, and destination management companies. The experience connects inspiring destination content with practical tour details, availability, and enquiry management.",
    primaryCta: { label: "Discuss a tourism website", href: "mailto:info@next-hub.pro" },
    secondaryCta: { label: "Explore the journey", href: "#solution" },
    serviceType: "Tourism Website Development",
    sections: [
      {
        eyebrow: "The business problem",
        title: "Inspiration alone does not complete the booking journey",
        intro:
          "Travel customers need to understand destinations, itineraries, dates, inclusions, availability, and the next step. When this information is scattered across social posts and messages, enquiries arrive incomplete and are difficult to manage.",
        cards: [
          { title: "Scattered tour information", text: "Customers compare offers manually when destinations, dates, itineraries, and inclusions are not presented consistently." },
          { title: "Unclear availability", text: "A beautiful page still creates friction if visitors cannot identify suitable dates or request confirmation." },
          { title: "Incomplete enquiries", text: "Generic messages often omit group size, preferred dates, destination, and customization requirements." },
        ],
      },
      {
        id: "solution",
        eyebrow: "The proposed solution",
        title: "Connect destination discovery with structured enquiries",
        intro:
          "The platform can support fixed tours, custom itineraries, or both. We define the content model and booking flow around how the company confirms availability and manages requests.",
        cards: [
          { title: "Tour catalogue", text: "Organize experiences by destination, theme, duration, season, or audience." },
          { title: "Destination and tour pages", text: "Present itineraries, inclusions, practical details, imagery, and clear next actions." },
          { title: "Date and availability selection", text: "Let visitors select suitable dates when reliable availability information is maintained." },
          { title: "Booking requests", text: "Collect tour, date, group, contact, and preference information in a consistent format." },
          { title: "Custom tour planning", text: "Support tailored enquiries for travelers who need a personalized itinerary rather than a fixed package." },
          { title: "Admin dashboard", text: "Manage catalogue content and booking requests according to the responsibilities defined in scope." },
        ],
      },
      {
        eyebrow: "Business benefits",
        title: "Support international travelers and internal teams",
        cards: [
          { title: "Multilingual-ready structure", text: "Plan content fields and navigation so genuine translated content can be managed consistently as the business expands." },
          { title: "Mobile travel experience", text: "Travelers can explore and enquire from phones while planning before or during a trip." },
          { title: "More useful requests", text: "Structured fields give the team better context before availability is confirmed." },
          { title: "Search visibility foundation", text: "Dedicated destination and tour pages create useful entry points for relevant organic searches." },
        ],
      },
    ],
    showcase: {
      eyebrow: "Concept workflow",
      title: "Tourism platform scope, not a fabricated portfolio item",
      intro:
        "No public tourism booking demo is currently listed in the Next-Hub portfolio. The functionality described here is a development proposal and does not imply that a specific booking or payment integration is already live.",
      items: [],
    },
    process: sharedProcess,
    faqs: [
      { question: "Can the website support several languages?", answer: "Yes. The content structure can be designed for genuine translated versions with consistent navigation, metadata, and language annotations." },
      { question: "Can travelers choose a date and submit a booking request?", answer: "Yes. A request flow can collect the selected tour, preferred date, group information, and contact details before your team confirms availability." },
      { question: "Does the solution include online payment?", answer: "Online payment is not assumed or advertised as already implemented. It can be evaluated separately when the required provider, market, booking rules, and operational process are confirmed." },
      { question: "Can customers request a custom itinerary?", answer: "Yes. A structured custom-tour form can collect destinations, dates, group size, interests, budget context, and other information needed for a tailored response." },
    ],
    relatedPages: relatedSolutions.filter((item) => item.href !== "/en/tourism-websites"),
    finalCta: {
      title: "Planning a clearer digital journey for your travel customers?",
      text: "Share your tours, destinations, booking-confirmation process, languages, and administration needs. We will help you define a practical first release.",
    },
    languageAlternates: [
      { hrefLang: "ka-GE", href: `${ENGLISH_SITE_URL}/tourism-websites` },
      { hrefLang: "en", href: `${ENGLISH_SITE_URL}/en/tourism-websites` },
      { hrefLang: "x-default", href: `${ENGLISH_SITE_URL}/tourism-websites` },
    ],
  },
};

export function buildEnglishSchemas(page) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "English home",
      item: `${ENGLISH_SITE_URL}/en`,
    },
  ];

  if (page.path !== "/en") {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: page.h1,
      item: page.url,
    });
  }

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${page.url}/#webpage`,
      url: page.url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": `${ENGLISH_SITE_URL}/#website` },
      about: page.serviceType || "Custom website and booking platform development",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${page.url}/#breadcrumbs`,
      itemListElement: breadcrumbs,
    },
  ];

  if (page.serviceType) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${page.url}/#service`,
      name: page.serviceType,
      serviceType: page.serviceType,
      url: page.url,
      description: page.description,
      provider: { "@id": `${ENGLISH_SITE_URL}/#organization` },
      areaServed: "International",
      availableLanguage: "en",
    });
  }

  if (page.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${page.url}/#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return schemas;
}
