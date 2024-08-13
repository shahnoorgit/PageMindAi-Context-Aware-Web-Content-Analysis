import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["5 page analyses per day", "Basic insights", "Email support"],
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "Unlimited page analyses",
      "Advanced insights",
      "Priority email support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
    ],
  },
];

export default function SubscriptionPlans({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                {plan.name}
              </h3>
              <p className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 sm:mt-8 px-4 py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base mx-auto block"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
