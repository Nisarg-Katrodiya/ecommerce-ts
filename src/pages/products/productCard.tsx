/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import type { FC, Dispatch } from "react"
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct } from '../../redux/action/cart'


type productType = {
    id: number;
    title: string;
    href: string;
    images: string;
    imageAlt: string;
    price: string;
    color: string;
}
type propStype = {
    product: productType
}

const ProductCard: FC<propStype> = ({ product }: propStype) => {
    const [count] = useState<number>(1);
    const dispatch: Dispatch<any> = useDispatch();

    const navigate = useNavigate();
    const addTOCart = () => {
        dispatch(addProduct({ ...product, quantity: count }));
        console.log('product: ', product);
    }
    return (
        <>
            <div key={product.id} className="group relative">
                <a onClick={() => navigate("/product-detail", { state: product })}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                        <img
                            src={product.images[1]}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                </a>
                <div className="mt-4 flex justify-between">
                    <div className="text-lg text-gray-700 text-left">
                        <h3 className="font-semibold">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absoluste inset-0 " />
                                {product.title}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="pt-5">
                    <Button
                        variant="contained"
                        sx={{ background: '' }}
                        className="d-flex w-full pt-5"
                        onClick={addTOCart}
                        endIcon={<AddShoppingCartIcon />}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </>
    );
}
export default ProductCard;