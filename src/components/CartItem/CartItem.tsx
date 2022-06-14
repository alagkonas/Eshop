import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  cardStyles,
  boxStyles,
  imageStyles,
  cardContentStyles,
  infoStyles,
  typographyStyles,
} from './styles';

const CartItem: React.FC = () => {
  return (
    <div>
      <Card sx={cardStyles}>
        <CardMedia
          component='img'
          sx={imageStyles}
          image='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
          alt='Live from space album cover'
        />
        <Box sx={boxStyles}>
          <CardContent sx={cardContentStyles}>
            <Typography component='div' variant='h5'>
              productData.title
            </Typography>
            <Box sx={infoStyles}>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Rating: productData.rating?.rate / 5
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Ratings (productData.rating?.count)
              </Typography>
            </Box>
            <Typography
              sx={typographyStyles}
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Price: productData.price$
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CartItem;
