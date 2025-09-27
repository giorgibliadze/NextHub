// pages/en/services/web-development.jsx  (or app/en/services/web-development/page.jsx)
'use client';

import React, { useState, useEffect } from 'react';
import PriceCardEN from '../../components/PriceCardEN';
import ImageGallery from '../../components/ImageGallery';
import ModalEN from '../../components/ModalEN';
import TechnologyIcons from '../../components/TechnologyIcons';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { NextSeo } from 'next-seo';

const WebDevelopmentEN = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [isModalOpen]);

  // Use your existing images, just update alts
  const images = [
    { src: '/well-structured-3.webp', alt: 'Well-structured web development process' },
    { src: '/technology.webp', alt: 'Technologies: WordPress, React, Next.js' },
  ];

  // EN pricing plans (mirrors your Georgian tiers)
  const priceCardsData = [
    {
      title: 'Standard',
      price: 500,
      product_id: 1,
      features: [
        '1 page',
        'Responsive (mobile-friendly)',
        'Analytics access',
        'Social media integration',
        'Image slideshow',
        'About page',
        'News / Blog section',
        'Services section',
        'Partner logos',
        'Photo gallery',
        'Live chat',
        'Contact page',
        '1 month support',
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: 'Standard',
          price: 500,
          product_id: 1,
          features: [
            '1 page',
            'Responsive (mobile-friendly)',
            'Analytics access',
            'Social media integration',
            'Image slideshow',
            'About page',
            'News / Blog section',
            'Services section',
            'Partner logos',
            'Photo gallery',
            'Live chat',
            'Contact page',
            '1 month support',
          ],
        }),
    },
    {
      title: 'Premium',
      price: 1300,
      product_id: 2,
      features: [
        'Everything in Standard',
        'Up to 5 pages',
        'Simple admin panel (CMS)',
        'Home page',
        'Locations/Branches page',
        'Ongoing & completed projects',
        'Video gallery',
        'Visitor analytics',
        'Popular posts',
        'Online payments (Visa/Mastercard/Amex)',
        'Product search',
        'Clients module',
        '3 months support',
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: 'Premium',
          price: 1300,
          product_id: 2,
          features: [
            'Everything in Standard',
            'Up to 5 pages',
            'Simple admin panel (CMS)',
            'Home page',
            'Locations/Branches page',
            'Ongoing & completed projects',
            'Video gallery',
            'Visitor analytics',
            'Popular posts',
            'Online payments (Visa/Mastercard/Amex)',
            'Product search',
            'Clients module',
            '3 months support',
          ],
        }),
    },
    {
      title: 'Business',
      price: 3000,
      product_id: 3,
      features: [
        'Everything in Premium',
        'Top products',
        'Product sorting & filtering',
        'Wishlist',
        'Add to cart',
        'Checkout',
        'Registration (individual & company)',
        'Login with Facebook',
        'Login with Google',
        'Installment payments',
        'Sales analytics',
        'Delivery/shipping module',
        'B2B & B2C modules',
        '6 months support',
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: 'Business',
          price: 3000,
          product_id: 3,
          features: [
            'Everything in Premium',
            'Top products',
            'Product sorting & filtering',
            'Wishlist',
            'Add to cart',
            'Checkout',
            'Registration (individual & company)',
            'Login with Facebook',
            'Login with Google',
            'Installment payments',
            'Sales analytics',
            'Delivery/shipping module',
            'B2B & B2C modules',
            '6 months support',
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/en/services/web-development"
        title="Web Development | WordPress, React & Next.js | Next-Hub Solutions"
        description="We build fast, modern websites and apps with WordPress, React, and Next.js. From landing pages to full e-commerce, analytics, SEO, and ongoing support."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://next-hub.pro/en/services/web-development',
          site_name: 'Next-Hub Solutions',
          title: 'Web Development | WordPress, React & Next.js | Next-Hub Solutions',
          description:
            'We build fast, modern websites and apps with WordPress, React, and Next.js. From landing pages to full e-commerce, analytics, SEO, and ongoing support.',
          images: [
            {
              url: 'https://www.next-hub.pro/web.jpg',
              width: 1200,
              height: 630,
              alt: 'Web development by Next-Hub Solutions',
            },
          ],
        }}
        twitter={{
          handle: '@NextHub',
          site: '@NextHub',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'web development, WordPress development, React apps, Next.js apps, ecommerce websites, SEO, analytics, Tbilisi web agency, Georgia',
          },
          { name: 'author', content: 'Next-Hub Solutions' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'robots', content: 'index, follow' },
        ]}
      />

      {isModalOpen ? (
        <ModalEN
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardData={selectedCardData}
        />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-24 smx:text-center overflow-x-hidden">
          <motion.h1
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            Web Development (WordPress, React, Next.js)
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-base md:text-lg text-white/80"
          >
            Launch faster with modern, SEO-friendly websites and apps. We handle
            UX/UI, performance, payments, and integrations — then support you after launch.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-12"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-h-[200px] flex flex-col items-center justify-center"
          >
            <TechnologyIcons />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-4 md:px-10 w-full max-w-6xl"
          >
            {priceCardsData.map((cardData, index) => (
              <PriceCardEN key={index} {...cardData} />
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WebDevelopmentEN;

