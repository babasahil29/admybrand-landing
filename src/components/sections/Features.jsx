import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { AnimatedSection, StaggerContainer } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';

// Import feature icons
import contentCreationIcon from '../../assets/icon-content-creation.png';
import campaignOptimizationIcon from '../../assets/icon-campaign-optimization.png';
import brandManagementIcon from '../../assets/icon-brand-management.png';
import dataAnalyticsIcon from '../../assets/icon-data-analytics.png';
import customerInsightsIcon from '../../assets/icon-customer-insights.png';
import automationIcon from '../../assets/icon-automation.png';

const Features = () => {
  const features = [
    {
      icon: contentCreationIcon,
      title: "AI Content Creation",
      description: "Generate compelling marketing copy, social media posts, and email campaigns with our advanced AI writing assistant. Create content that converts in seconds.",
      benefits: ["10x faster content creation", "SEO-optimized copy", "Multi-language support"]
    },
    {
      icon: campaignOptimizationIcon,
      title: "Campaign Optimization",
      description: "Automatically optimize your marketing campaigns across all channels. Our AI analyzes performance data and adjusts targeting, bidding, and creative elements in real-time.",
      benefits: ["30% higher ROI", "Real-time optimization", "Cross-platform management"]
    },
    {
      icon: brandManagementIcon,
      title: "Brand Management",
      description: "Maintain consistent brand voice and visual identity across all marketing materials. AI-powered brand guidelines ensure every piece of content aligns with your brand.",
      benefits: ["Consistent brand voice", "Automated compliance", "Brand asset library"]
    },
    {
      icon: dataAnalyticsIcon,
      title: "Advanced Analytics",
      description: "Get deep insights into your marketing performance with AI-powered analytics. Understand customer behavior, predict trends, and make data-driven decisions.",
      benefits: ["Predictive analytics", "Custom dashboards", "Automated reporting"]
    },
    {
      icon: customerInsightsIcon,
      title: "Customer Insights",
      description: "Understand your customers like never before with AI-driven behavioral analysis. Segment audiences, predict preferences, and personalize experiences at scale.",
      benefits: ["360° customer view", "Behavioral prediction", "Personalization engine"]
    },
    {
      icon: automationIcon,
      title: "Marketing Automation",
      description: "Automate your entire marketing workflow from lead generation to conversion. Set up intelligent campaigns that adapt and optimize themselves automatically.",
      benefits: ["End-to-end automation", "Smart workflows", "Lead scoring & nurturing"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-6"
          >
            Powerful Features
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Dominate Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools you need to create, optimize, and scale your marketing efforts with unprecedented efficiency and results.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </StaggerContainer>

        {/* Stats Section */}
        <AnimatedSection delay={0.8} className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Companies Trust Us" },
              { number: "10M+", label: "Content Pieces Created" },
              { number: "300%", label: "Average ROI Increase" },
              { number: "24/7", label: "AI-Powered Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
          >
            <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
          </motion.div>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-gray-600 mb-6 leading-relaxed">
            {feature.description}
          </CardDescription>
          <div className="space-y-2">
            {feature.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                {benefit}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Features;

