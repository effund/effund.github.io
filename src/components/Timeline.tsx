
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: "April 1, 2024",
    title: "Registration Opens",
    description: "Early bird registration begins"
  },
  {
    date: "May 15, 2024",
    title: "Submission Deadline",
    description: "All projects must be submitted by 11:59 PM EST"
  },
  {
    date: "June 1, 2024",
    title: "Finalists Announced",
    description: "Top 10 projects will be selected"
  },
  {
    date: "June 15, 2024",
    title: "Final Event",
    description: "Live presentations and winner announcement"
  }
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Important Dates</h2>
          <p className="mt-4 text-gray-500">Mark your calendar for these key milestones</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-500">{item.date}</span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
