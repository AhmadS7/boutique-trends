export default function Footer() {
      return (
        <footer className="bg-pink-100 py-4 mt-8">
          <div className="container mx-auto text-center text-pink-700">
            <p>&copy; {new Date().getFullYear()} Affiliate Site. All rights reserved.</p>
            {/* Social Media Links (Placeholders) */}
            <div className="mt-2">
              <a href="#" className="mx-2 text-pink-700 hover:text-pink-900">Facebook</a>
              <a href="#" className="mx-2 text-pink-700 hover:text-pink-900">Instagram</a>
              <a href="#" className="mx-2 text-pink-700 hover:text-pink-900">Pinterest</a>
            </div>
          </div>
        </footer>
      );
    }
