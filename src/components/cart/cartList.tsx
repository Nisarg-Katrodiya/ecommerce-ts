/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Dispatch, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteCart } from '../../redux/action/cart'

const CartList: FC<any> = ({ cart, index }: any) => {
    console.log('index: ', index);

    const dispatch: Dispatch<any> = useDispatch();
    const { cartList } = useSelector((state: any) => state.cart);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        setCount(cart?.quantity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const incrementCount = () => {
        setCount(count + 1)
    };
    const decrementCount = () => {
        setCount(count - 1)
    };
    const handleDelete = (cartData: any) => {
        dispatch(DeleteCart(cartData, cartList))
    };
    return (
        <>
            <li key={cart.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={cart.images[1]}
                        alt={cart.title}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a>{cart.title}</a>
                            </h3>
                            <p className="ml-4">${cart.price}</p>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        {/* <p className="text-gray-500">Qty {cart.quantity}</p> */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', }} className='quantity'>

                            <div className="counter_quantity" >
                                <button className="increment Mui-disabled" onClick={decrementCount} type="button">-</button>
                                {count ? (count) : 1}
                                <button className="increment" onClick={incrementCount} type="button" >+</button>
                            </div>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => handleDelete(cart)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartList;