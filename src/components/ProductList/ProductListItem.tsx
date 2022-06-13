import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ProductTypes } from '../../@types';
import './ProductList.css';

const ProductListItem: React.FC<ProductTypes> = ({ image, title }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, height: 450, alignContent: 'center' }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            sx={{ objectFit: 'contain' }}
            src={image}
            alt='green iguana'
          />
          <CardContent sx={{ alignContent: 'center' }}>
            <Typography
              sx={{ alignContent: 'center' }}
              gutterBottom
              variant='h5'
              component='div'
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductListItem;
