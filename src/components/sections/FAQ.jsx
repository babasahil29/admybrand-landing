import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '../ui/Accordion';
import { AnimatedSection } from '../ui/AnimatedSection';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is ADmyBRAND AI Suite and how does it work?",
      answer: "ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that automates and optimizes your entire marketing workflow. It uses advanced machine learning algorithms to create content, optimize campaigns, analyze customer behavior, and provide actionable insights. The platform integrates with your existing tools and learns from your brand voice and customer data to deliver personalized marketing solutions."
    },
    {
      question: "How quickly can I see results with ADmyBRAND?",
      answer: "Most customers see immediate improvements in content creation speed (within the first week) and significant campaign performance improvements within 30 days. Our AI learns from your data and continuously optimizes, so results compound over time. Many clients report 150-300% improvements in key metrics within the first quarter of usage."
    },
    {
      question: "Is my data secure with ADmyBRAND AI Suite?",
      answer: "Absolutely. We take data security very seriously and employ enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is never shared with third parties and is used solely to improve your marketing performance. We also offer on-premise deployment options for enterprise customers."
    },
    {
      question: "Can ADmyBRAND integrate with my existing marketing tools?",
      answer: "Yes! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our API allows for custom integrations, and our team can help set up any specific integrations you need during onboarding."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and webinar training sessions. Professional and Enterprise plans include priority support and dedicated account managers. We also provide onboarding assistance to ensure you get the most out of the platform from day one."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to your plan features until the end of your current billing period. We also offer a 30-day money-back guarantee if you're not completely satisfied with the platform."
    },
    {
      question: "How does the AI content creation work?",
      answer: "Our AI content creation engine is trained on millions of high-performing marketing materials and learns your specific brand voice, tone, and style preferences. You simply provide a brief or topic, and the AI generates compelling copy for emails, social media, ads, blog posts, and more. The AI can also optimize content for different platforms and audiences automatically."
    },
    {
      question: "What makes ADmyBRAND different from other marketing AI tools?",
      answer: "ADmyBRAND is the only platform that combines content creation, campaign optimization, customer insights, and marketing automation in one unified AI-powered suite. Unlike point solutions, we provide end-to-end marketing intelligence that learns and adapts to your specific business needs. Our AI is specifically trained for marketing use cases and delivers measurably better results than generic AI tools."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-6"
          >
            Frequently Asked Questions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Questions?
            </span>
            <br />
            We've Got Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.3}>
            <Accordion items={faqItems} />
          </AnimatedSection>
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team of marketing AI experts is here to help you succeed. Get personalized answers and see how ADmyBRAND can transform your marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;

