import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { removeProduct } from '../../features/cart';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  cardStyles,
  boxStyles,
  imageStyles,
  cardContentStyles,
  infoStyles,
  typographyStyles,
} from './styles';
import { ProductTypes } from '../../@types';

const CartItem: React.FC<ProductTypes> = ({
  id,
  image,
  title,
  price,
  rating,
}) => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  let modifiedShoppingCart: ProductTypes[] = [];

  const onRemoveProduct = (productId: number | undefined): void => {
    modifiedShoppingCart = products.filter((product) => {
      return product.id !== productId;
    });
    dispatch(removeProduct(modifiedShoppingCart));
    toast.success('Removed from cart!', { delay: 500 });
  };

  return (
    <div>
      <Card sx={cardStyles}>
        <CardMedia
          component='img'
          sx={imageStyles}
          image={image}
          alt='Live from space album cover'
        />
        <Box sx={boxStyles}>
          <CardContent sx={cardContentStyles}>
            <Typography component='div' variant='h5'>
              {title}
            </Typography>
            <Box sx={infoStyles}>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Rating: {rating?.rate} / 5
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Ratings ({rating?.count})
              </Typography>
            </Box>
            <Typography
              sx={typographyStyles}
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Price: {price}$
            </Typography>
            <Button onClick={() => onRemoveProduct(id)} variant='contained'>
              remove
            </Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CartItem;
