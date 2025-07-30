import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, FileText, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

const PricingCalculator = ({ isOpen, onClose }) => {
  const [teamSize, setTeamSize] = React.useState(5);
  const [contentPieces, setContentPieces] = React.useState(1000);
  const [campaigns, setCampaigns] = React.useState(10);
  const [isAnnual, setIsAnnual] = React.useState(true);

  // Pricing tiers
  const tiers = [
    { name: 'Starter', maxTeam: 5, maxContent: 1000, maxCampaigns: 5, monthlyPrice: 29, annualPrice: 24 },
    { name: 'Professional', maxTeam: 25, maxContent: 10000, maxCampaigns: 50, monthlyPrice: 79, annualPrice: 65 },
    { name: 'Enterprise', maxTeam: Infinity, maxContent: Infinity, maxCampaigns: Infinity, monthlyPrice: 199, annualPrice: 165 }
  ];

  // Calculate recommended tier
  const getRecommendedTier = () => {
    for (let tier of tiers) {
      if (teamSize <= tier.maxTeam && contentPieces <= tier.maxContent && campaigns <= tier.maxCampaigns) {
        return tier;
      }
    }
    return tiers[2]; // Enterprise if exceeds all limits
  };

  const recommendedTier = getRecommendedTier();
  const monthlyPrice = isAnnual ? recommendedTier.annualPrice : recommendedTier.monthlyPrice;
  const annualSavings = (recommendedTier.monthlyPrice - recommendedTier.annualPrice) * 12;

  // Calculate ROI estimates
  const calculateROI = () => {
    const timesSaved = teamSize * 10; // hours per month
    const costPerHour = 50; // average marketing professional hourly rate
    const monthlySavings = timesSaved * costPerHour;
    const roi = ((monthlySavings - monthlyPrice) / monthlyPrice) * 100;
    
    return {
      timesSaved,
      monthlySavings,
      roi: Math.max(roi, 0)
    };
  };

  const roiData = calculateROI();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pricing Calculator" size="xl">
      <div className="space-y-8">
        {/* Calculator Inputs */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Users className="w-5 h-5" />
              <label className="font-medium">Team Size</label>
            </div>
            <div className="space-y-2">
              <input
                type="range"
                min="1"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span className="font-medium text-blue-600">{teamSize} people</span>
                <span>100+</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-purple-600">
              <FileText className="w-5 h-5" />
              <label className="font-medium">Content Pieces/Month</label>
            </div>
            <div className="space-y-2">
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={contentPieces}
                onChange={(e) => setContentPieces(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>100</span>
                <span className="font-medium text-purple-600">{contentPieces.toLocaleString()}</span>
                <span>50K+</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-green-600">
              <Zap className="w-5 h-5" />
              <label className="font-medium">Active Campaigns</label>
            </div>
            <div className="space-y-2">
              <input
                type="range"
                min="1"
                max="200"
                value={campaigns}
                onChange={(e) => setCampaigns(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span className="font-medium text-green-600">{campaigns}</span>
                <span>200+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4">
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
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
              Save ${annualSavings}/year
            </span>
          )}
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recommended Plan */}
          <Card className="border-2 border-blue-500">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-blue-600">Recommended Plan</CardTitle>
              <div className="text-3xl font-bold text-gray-900">
                {recommendedTier.name}
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">
                  ${monthlyPrice}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">
                    Billed annually (${monthlyPrice * 12}/year)
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="gradient" size="lg" className="w-full mb-4">
                Start Free Trial
              </Button>
              <div className="text-center text-sm text-gray-500">
                14-day free trial • No credit card required
              </div>
            </CardContent>
          </Card>

          {/* ROI Calculation */}
          <Card className="bg-gradient-to-br from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span>Estimated ROI</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {roiData.timesSaved}h
                  </div>
                  <div className="text-sm text-gray-600">Time Saved/Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    ${roiData.monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  {roiData.roi.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-600">Return on Investment</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plan Comparison */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">How your needs compare to our plans:</h3>
          <div className="grid grid-cols-3 gap-4">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`p-4 rounded-lg border-2 transition-all ${
                  tier.name === recommendedTier.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tier.name}</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Team: {tier.maxTeam === Infinity ? 'Unlimited' : `Up to ${tier.maxTeam}`}
                  </div>
                  <div className="text-sm text-gray-600">
                    Content: {tier.maxContent === Infinity ? 'Unlimited' : `${tier.maxContent.toLocaleString()}/mo`}
                  </div>
                  <div className="text-sm text-gray-600">
                    Campaigns: {tier.maxCampaigns === Infinity ? 'Unlimited' : tier.maxCampaigns}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PricingCalculator;

