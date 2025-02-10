
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-fixed"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-fixed"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            Registration Now Open
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="block">Innovation Competition</span>
            <span className="block text-gray-500 mt-2">2024</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Join the most prestigious competition of the year. Showcase your talent, connect with industry leaders, and win amazing prizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
