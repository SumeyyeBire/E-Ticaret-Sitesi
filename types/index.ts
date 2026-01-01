// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Slide {
  id: string;
  imageUrl: string;
  title: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface UserMessage {
  id?: string;
  fullName: string;
  email: string;
  content: string;
  createdAt: number;
}