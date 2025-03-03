import { json, type MetaFunction } from "@remix-run/node";
    import { Link, useLoaderData } from "@remix-run/react";
    import Footer from "~/components/Footer";
    import Header from "~/components/Header";
    import type { BlogPost } from "~/types";

    export const meta: MetaFunction = () => {
      return [
        { title: "Blog | Chic Trends Boutique" },
        {
          name: "description",
          content: "Read articles, reviews, and style guides on fashion, beauty, and wellness.",
        },
      ];
    };

    const blogPosts: BlogPost[] = [
      {
        id: "1",
        title: "Summer Fashion Trends 2024",
        excerpt: "Discover the hottest fashion trends for this summer.",
        imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-05-15",
      },
      {
        id: "2",
        title: "Top 5 Skincare Tips",
        excerpt: "Get expert tips for achieving healthy and glowing skin.",
        imageUrl: "https://images.unsplash.com/photo-1556228722-6e64957fcd82?q=80&amp;w=2074&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-05-10",
      },
    ];

    export const loader = async () => {
      return json({ posts: blogPosts });
    };

    export default function BlogIndex() {
      const { posts } = useLoaderData<typeof loader>();

      return (
        <div className="bg-pink-50 min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-pink-700 mb-4">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md">
                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-semibold text-pink-700 hover:underline">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mt-1">{post.excerpt}</p>
                    <p className="text-gray-500 mt-2 text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      );
    }
