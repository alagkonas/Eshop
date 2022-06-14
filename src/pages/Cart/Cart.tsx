import { useAppSelector } from '../../app/hooks';
import CartItem from '../../components/CartItem';
import './Cart.css';

const Cart: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div id='cart-div'>
      {products.length === 0 ? (
        <p>Your shopping cart is empty! Please add a product to your cart.</p>
      ) : (
        <>
          {products.map((product) => {
            return (
              <CartItem
                key={product.id}
                //@ts-ignore
                image={product.image}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
