
import { motion } from 'framer-motion';

export const Content = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Competition</h2>
            <p className="text-gray-600 mb-4">
              Our annual innovation competition brings together the brightest minds to solve real-world challenges. With a focus on technology and sustainability, participants will have the opportunity to showcase their ideas to industry leaders.
            </p>
            <p className="text-gray-600">
              Whether you're a student, professional, or enthusiast, this competition offers a platform to turn your innovative ideas into reality. Join us and be part of shaping the future.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Innovation at work"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Participate?</h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Cash prizes worth up to $10,000</li>
              <li>• Mentorship from industry experts</li>
              <li>• Networking opportunities</li>
              <li>• Media exposure for winning projects</li>
              <li>• Potential investment opportunities</li>
            </ul>
          </div>
          <div className="relative md:order-1">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Competition benefits"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
