
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Competition 2024</h3>
            <p className="text-sm">
              Join us in celebrating innovation and creativity. Together, we can shape the future.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#timeline" className="text-sm hover:text-white transition-colors">Timeline</a>
              </li>
              <li>
                <a href="#register" className="text-sm hover:text-white transition-colors">Register</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: contact@competition2024.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Innovation Street<br />
              Tech City, TC 12345
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2024 Competition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
