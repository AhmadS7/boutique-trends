import { Link } from "@remix-run/react";

    const Header = () => {
      return (
        <header className="bg-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-pink-700">
              Chic Trends Boutique
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-pink-600 hover:text-pink-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category/fashion" className="text-pink-600 hover:text-pink-800">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/category/beauty" className="text-pink-600 hover:text-pink-800">
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link to="/category/wellness" className="text-pink-600 hover:text-pink-800">
                    Wellness
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-pink-600 hover:text-pink-800">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
