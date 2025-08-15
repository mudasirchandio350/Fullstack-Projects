const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Genres */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Genres</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Action
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Drama
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Comedy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Thriller
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MovieWorld. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
