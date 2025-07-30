import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

// Import testimonial images
import testimonial1 from '../../assets/testimonial-1.webp';
import testimonial2 from '../../assets/testimonial-2.webp';
import testimonial3 from '../../assets/testimonial-3.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: testimonial1,
      rating: 5,
      quote: "ADmyBRAND AI Suite has completely transformed our marketing operations. We've seen a 300% increase in content output and a 150% improvement in campaign performance. The AI-powered insights are game-changing.",
      results: "300% increase in content output"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Inc.",
      image: testimonial2,
      rating: 5,
      quote: "The automation capabilities are incredible. What used to take our team weeks now happens in hours. The ROI has been phenomenal - we've reduced marketing costs by 40% while doubling our lead generation.",
      results: "40% reduction in marketing costs"
    },
    {
      name: "Emily Johnson",
      role: "Head of Digital Marketing",
      company: "InnovateCorp",
      image: testimonial3,
      rating: 5,
      quote: "The AI content creation is so sophisticated that our audience engagement has skyrocketed. The platform understands our brand voice perfectly and creates content that truly resonates with our customers.",
      results: "250% increase in engagement"
    },
    {
      name: "David Park",
      role: "Marketing Manager",
      company: "ScaleUp Ventures",
      image: testimonial1,
      rating: 5,
      quote: "ADmyBRAND's predictive analytics helped us identify market trends before our competitors. We launched three successful campaigns that generated $2M in revenue, all based on AI insights.",
      results: "$2M in additional revenue"
    },
    {
      name: "Lisa Thompson",
      role: "CMO",
      company: "FutureForward",
      image: testimonial2,
      rating: 5,
      quote: "The customer segmentation and personalization features are outstanding. We've achieved a 180% improvement in conversion rates by delivering the right message to the right audience at the right time.",
      results: "180% improvement in conversions"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-6"
          >
            Customer Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Marketing Teams
            </span>
            <br />
            Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of marketing professionals who have transformed their results with ADmyBRAND AI Suite.
          </p>
        </AnimatedSection>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Results Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
                  {testimonials[currentIndex].results}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Company Logos */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <p className="text-gray-500 mb-8">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              {['TechFlow', 'GrowthLab', 'InnovateCorp', 'ScaleUp', 'FutureForward'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-400">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;

