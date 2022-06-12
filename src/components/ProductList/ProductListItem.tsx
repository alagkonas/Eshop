import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductListItem: React.FC = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='250'
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Name
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductListItem;
