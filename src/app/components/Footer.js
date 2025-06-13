"use client";

export default function Footer() {
  return (
    <footer className="bg-[#301934] text-white py-12 px-6 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">CoinCoach</h3>
          <p className="text-gray-300 text-sm">
            Empowering financial literacy through interactive and personalized learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#modules" className="hover:text-yellow-400">Modules</a></li>
            <li><a href="#why" className="hover:text-yellow-400">Why CoinCoach</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/faq" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Stay Updated</h4>
          <p className="text-sm text-gray-300 mb-4">Get tips, updates & new content alerts!</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#301934] font-semibold px-4 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CoinCoach. All rights reserved.
      </div>
    </footer>
  );
}
