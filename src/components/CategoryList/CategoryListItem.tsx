import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CategoryTypes } from '../../@types';
import './CategoryList.css';

type CategoryListItemProps = CategoryTypes;

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  name,
  id,
  img,
  category,
}) => {
  return (
    <div id='card-div'>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component='img'
            height='250'
            src={img}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            {/* <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CategoryListItem;
