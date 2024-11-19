"use client";

import useFetch from "@/hooks/useFetch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ItemCards = () => {
  const { data, error, loading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product) => (
        <Card key={product.id} className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>${product.price.toFixed(2)}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain"
            />
            <p className="text-sm text-gray-600 mt-4">{product.description.slice(0, 50)}</p>
          </CardContent>
          <CardFooter>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemCards;
