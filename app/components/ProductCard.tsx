import type { Product } from "~/types";

    export default function ProductCard({ product }: { product: Product }) {
      return (
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600 mt-1">{product.description}</p>
          <p className="text-pink-600 font-bold mt-2">${product.price.toFixed(2)}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Shop Now
          </a>
        </div>
      );
    }
