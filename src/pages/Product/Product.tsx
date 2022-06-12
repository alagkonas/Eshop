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
import './Product.css';

const Product: React.FC = () => {
  return (
    <div id='product-div'>
      <Card sx={cardStyles}>
        <CardMedia
          component='img'
          sx={imageStyles}
          image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt='Live from space album cover'
        />
        <Box sx={boxStyles}>
          <CardContent sx={cardContentStyles}>
            <Typography component='div' variant='h5'>
              Nameeeeeeeeeeee
            </Typography>
            <Box sx={infoStyles}>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Rating to 5
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                (Ratings)
              </Typography>
            </Box>
            <Typography
              sx={typographyStyles}
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Description
            </Typography>
            <Typography
              sx={typographyStyles}
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Price
            </Typography>
            <Button sx={buttonStyles} variant='contained'>
              Add to cart
            </Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default Product;
