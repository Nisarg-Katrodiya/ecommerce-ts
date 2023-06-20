/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import ProductCard from "./productCard";

interface Products {
  id: number;
  title: string;
  href: string;
  images: string;
  imageAlt: string;
  price: string;
  color: string;
}

interface propTypes {
  products: Products[];
}

const ProductList: FC<propTypes> = ({ products }: propTypes) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-3 sm:px-6 sm:pt-3 lg:max-w-7xl lg:px-3">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product: Products) =>
            <ProductCard product={product} key={product.id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
