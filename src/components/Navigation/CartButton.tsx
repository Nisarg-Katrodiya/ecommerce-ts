/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, Fragment } from 'react'
import { makeStyles } from "@mui/styles";
import { useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react'
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../cart';


const useStyles = makeStyles(() => ({
    navButtons: {
        color: '#F14D54',
        marginLeft: '10px',
        borderColor: "#F14D54"
    }
}));

const CartButton: FC = () => {
    const { cartList } = useSelector((state: any) => state.cart);

    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const handleModel = () => setOpen(!open);

    return (
        <>
            <IconButton className={classes.navButtons} onClick={handleModel}>
                <Badge color="secondary" badgeContent={cartList.length} max={9} showZero>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <Transition.Root as={Fragment} show={open}>
                <Dialog as="div" className="relative z-10" onClose={handleModel}>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Cart
                                    handleClose={() => handleModel()}
                                />
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >
        </>
    );
}

export default CartButton;



