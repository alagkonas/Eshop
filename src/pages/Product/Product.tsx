import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { useQuery } from 'react-query';
import { addProduct } from '../../features/cart';
import axios from 'axios';
import { SPECIFIC_PRODUCT } from '../../config';
import Breadcrumb from '../../components/Breadcrumb';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  infoStyles,
  cardStyles,
  imageStyles,
  boxStyles,
  cardContentStyles,
  typographyStyles,
  buttonStyles,
} from './styles';
import { ProductTypes } from '../../@types';
import './Product.css';

const Product: React.FC = () => {
  const { categoryName } = useParams<string>();
  const { productId } = useParams<string>();
  const { data, isLoading }: any = useQuery(
    //@ts-ignore
    productId,
    async () => await axios.get(SPECIFIC_PRODUCT + `/${productId}`)
  );

  const dispatch = useAppDispatch();

  const onProductAdd = (): void => {
    dispatch(addProduct(productData));
  };

  if (isLoading) return <p>Loading...</p>;

  const productData: ProductTypes = data.data;

  return (
    <>
      <Breadcrumb categoryName={categoryName} />
      <div id='product-div'>
        <Card sx={cardStyles}>
          <CardMedia
            component='img'
            sx={imageStyles}
            image={productData.image}
            alt='Live from space album cover'
          />
          <Box sx={boxStyles}>
            <CardContent sx={cardContentStyles}>
              <Typography component='div' variant='h5'>
                {productData.title}
              </Typography>
              <Box sx={infoStyles}>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                >
                  Rating: {productData.rating?.rate} / 5
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                >
                  Ratings ({productData.rating?.count})
                </Typography>
              </Box>
              <Typography
                sx={typographyStyles}
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                {productData.description}
              </Typography>
              <Typography
                sx={typographyStyles}
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Price: {productData.price}$
              </Typography>
              <Button
                onClick={onProductAdd}
                sx={buttonStyles}
                variant='contained'
              >
                Add to cart
              </Button>
            </CardContent>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Product;
