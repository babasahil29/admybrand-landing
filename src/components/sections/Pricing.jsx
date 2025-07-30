import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Calculator } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { AnimatedSection, StaggerContainer } from '../ui/AnimatedSection';
import PricingCalculator from '../features/PricingCalculator';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);
  const [showCalculator, setShowCalculator] = React.useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "AI Content Creation (1,000 pieces/month)",
        "Basic Campaign Optimization",
        "Email Support",
        "2 Brand Profiles",
        "Basic Analytics Dashboard",
        "Social Media Integration"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing marketing teams",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "AI Content Creation (10,000 pieces/month)",
        "Advanced Campaign Optimization",
        "Priority Support",
        "10 Brand Profiles",
        "Advanced Analytics & Reporting",
        "Multi-channel Integration",
        "A/B Testing Suite",
        "Customer Segmentation",
        "Marketing Automation"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "gradient",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 199,
      annualPrice: 165,
      features: [
        "Unlimited AI Content Creation",
        "Enterprise Campaign Optimization",
        "24/7 Dedicated Support",
        "Unlimited Brand Profiles",
        "Custom Analytics & Dashboards",
        "API Access & Integrations",
        "Advanced A/B Testing",
        "Predictive Analytics",
        "White-label Solutions",
        "Custom AI Model Training",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-6"
          >
            Simple Pricing
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Scale as you grow with our flexible pricing options.
          </p>

          {/* Pricing Calculator Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowCalculator(true)}
              className="group"
            >
              <Calculator className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Calculate Your Perfect Plan
            </Button>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ x: isAnnual ? 20 : 2 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              />
            </motion.button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              index={index} 
              isAnnual={isAnnual}
            />
          ))}
        </StaggerContainer>

        {/* Money Back Guarantee */}
        <AnimatedSection delay={0.8} className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">30-day money-back guarantee</span>
          </div>
        </AnimatedSection>

        {/* Pricing Calculator Modal */}
        <PricingCalculator 
          isOpen={showCalculator} 
          onClose={() => setShowCalculator(false)} 
        />
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const originalPrice = isAnnual ? plan.monthlyPrice : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      
      <Card className={`h-full relative overflow-hidden ${
        plan.popular 
          ? 'border-2 border-blue-500 shadow-xl scale-105' 
          : 'border border-gray-200 hover:shadow-lg'
      } transition-all duration-300`}>
        {plan.popular && (
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-4 right-[-32px] w-40 h-8 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-45 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>
        )}

        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            {plan.name}
          </CardTitle>
          <CardDescription className="text-gray-600 mb-6">
            {plan.description}
          </CardDescription>
          
          <div className="space-y-2">
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            {originalPrice && (
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
                <span className="text-sm text-green-600 font-medium">Save 20%</span>
              </div>
            )}
            {isAnnual && (
              <p className="text-sm text-gray-500">Billed annually</p>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button 
            variant={plan.buttonVariant} 
            size="lg" 
            className="w-full"
          >
            {plan.buttonText}
          </Button>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Everything included:</h4>
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Pricing;

