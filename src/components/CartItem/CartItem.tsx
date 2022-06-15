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

const CartItem: React.FC<ProductTypes> = ({ image, title, price, rating }) => {
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
            <Button variant='contained'>remove</Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CartItem;
