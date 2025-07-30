import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import ContactForm from '../features/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-6"
          >
            Get in Touch
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Transform
            </span>
            <br />
            Your Marketing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of marketing professionals who have revolutionized their results with ADmyBRAND AI Suite. 
            Let's discuss how we can help your business grow.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

