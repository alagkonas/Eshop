import { useAppSelector } from '../../app/hooks';
import CartItem from '../../components/CartItem';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '@mui/material/Button';
import './Cart.css';

const Cart: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <>
      <Breadcrumb />
      <div id='cart-div'>
        {products.length === 0 ? (
          <p>Your shopping cart is empty! Please add a product to your cart.</p>
        ) : (
          <>
            {products.map((product) => {
              return (
                <CartItem
                  key={product.id?.toString()}
                  id={product.id}
                  //@ts-ignore
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  title={product.title}
                />
              );
            })}
            <Button variant='contained'>Click to pay</Button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
