import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";
    import Footer from "~/components/Footer";
    import Header from "~/components/Header";
    import type { BlogPost } from "~/types";

    // Blog post data with internet images
    const blogPosts: BlogPost[] = [
      {
        id: "1",
        title: "Summer Fashion Trends 2024",
        excerpt: "Discover the hottest fashion trends for this summer.",
        imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-05-15",
        content:
          "## Summer Fashion Trends 2024\n\nThis summer, expect to see a lot of vibrant colors, bold patterns, and comfortable silhouettes.  Think flowy dresses, wide-leg pants, and statement accessories.  Don't be afraid to experiment with different styles and find what works best for you!",
      },
      {
        id: "2",
        title: "Top 5 Skincare Tips",
        excerpt: "Get expert tips for achieving healthy and glowing skin.",
        imageUrl: "https://images.unsplash.com/photo-1556228722-6e64957fcd82?q=80&amp;w=2074&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-05-10",
        content:
          "## Top 5 Skincare Tips\n\n1. **Cleanse Regularly:** Wash your face twice a day, morning and night.\n2. **Moisturize:** Keep your skin hydrated by using a moisturizer suitable for your skin type.\n3. **Use Sunscreen:** Protect your skin from harmful UV rays by applying sunscreen daily.\n4. **Exfoliate:** Exfoliate once or twice a week to remove dead skin cells.\n5. **Stay Hydrated:** Drink plenty of water to keep your skin healthy from the inside out.",
      },
    ];

    export const loader = async ({ params }: LoaderFunctionArgs) => {
      const postId = params.postId;
      const post = blogPosts.find((p) => p.id === postId);

      if (!post) {
        throw new Response("Post not found", { status: 404 });
      }

      return json({ post });
    };

    export const meta: MetaFunction<typeof loader> = ({ data }) => {
      return [
        { title: `${data?.post.title} | Chic Trends Boutique` },
        { name: "description", content: data?.post.excerpt },
      ];
    };

    export default function BlogPost() {
      const { post } = useLoaderData<typeof loader>();

      return (
        <div className="bg-pink-50 min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <article className="bg-white rounded-lg shadow-md p-6">
              <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
              <h1 className="text-2xl font-bold text-pink-700 mt-4">{post.title}</h1>
              <p className="text-gray-500 mt-2 text-sm">{post.date}</p>
              <div
                className="prose prose-pink mt-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </main>
          <Footer />
        </div>
      );
    }
