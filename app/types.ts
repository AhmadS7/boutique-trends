export interface Product {
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      affiliateLink: string;
      category: string;
    }

    export interface BlogPost {
      id: string;
      title: string;
      excerpt: string;
      imageUrl: string;
      date: string;
      content?: string; // Optional, as it's only used in the individual post view
    }
