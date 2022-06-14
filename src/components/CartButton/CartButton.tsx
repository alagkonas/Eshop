import { useAppSelector } from '../../app/hooks';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartButton: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart);

  const numberOfProducts = products.length;

  return (
    <div>
      {numberOfProducts === 0 ? (
        <IconButton color='inherit'>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton aria-label='cart' color='inherit'>
          <StyledBadge badgeContent={numberOfProducts} color='primary'>
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      )}
    </div>
  );
};

export default CartButton;
