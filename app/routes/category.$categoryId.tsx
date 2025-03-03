import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";
    import Footer from "~/components/Footer";
    import Header from "~/components/Header";
    import ProductCard from "~/components/ProductCard";
    import type { Product } from "~/types";

    // Placeholder data with internet images
    const placeholderProducts: Product[] = [
      {
        id: "1",
        name: "Stylish Summer Dress",
        description: "A beautiful and comfortable dress for the summer season.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1589460324778-af7c5855b955?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        affiliateLink: "#",
        category: "fashion",
      },
      {
        id: "2",
        name: "Luxury Skincare Set",
        description: "A premium skincare set for a radiant and youthful glow.",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1575410229390-836aa8455543?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        affiliateLink: "#",
        category: "beauty",
      },
      {
        id: "3",
        name: "Yoga Mat &amp; Accessories",
        description: "High-quality yoga mat and accessories for your wellness journey.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2069&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        affiliateLink: "#",
        category: "wellness",
      },
      {
        id: "4",
        name: "Elegant Handbag",
        description: "A stylish and versatile handbag for any occasion.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1605752655871-729805a28565?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        affiliateLink: "#",
        category: "fashion",
      },
      {
        id: "5",
        name: "Professional Makeup Brushes",
        description: "A set of professional makeup brushes for flawless application.",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1621609764180-755b68745576?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        affiliateLink: "#",
        category: "beauty",
      },
    ];

    export const loader = async ({ params }: LoaderFunctionArgs) => {
      const categoryId = params.categoryId;

      // Simulate filtering based on category
      const filteredProducts = placeholderProducts.filter(
        (product) => product.category === categoryId
      );

      return json({ products: filteredProducts, categoryId });
    };

    export const meta: MetaFunction<typeof loader> = ({ data }) => {
      const categoryId = data?.categoryId ?? "unknown";
      const capitalizedCategory = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

      return [
        { title: `${capitalizedCategory} Products | Chic Trends Boutique` },
        { name: "description", content: `Explore our curated selection of ${categoryId} products.` },
      ];
    };

    export default function CategoryPage() {
      const { products, categoryId } = useLoaderData<typeof loader>();

      return (
        <div className="bg-pink-50 min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-pink-700 mb-4">
              {categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : "Category"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {products.length === 0 && (
              <p className="text-gray-600">No products found in this category.</p>
            )}
          </main>
          <Footer />
        </div>
      );
    }
