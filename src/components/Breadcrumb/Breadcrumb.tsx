import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BreadcrumbPropTypes } from '../../@types';
import './Breadcrumb.css';

const Breadcrumb: React.FC<BreadcrumbPropTypes> = ({ categoryName }) => {
  const breadcrumbElement = (
    <Link to={`/products/${categoryName}`}>{categoryName}</Link>
  );
  const breadcrumbs = [<Link to='/'>Home</Link>];

  if (categoryName) {
    breadcrumbs.push(breadcrumbElement);
  }

  return (
    <div id='breadcrumb-div'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
