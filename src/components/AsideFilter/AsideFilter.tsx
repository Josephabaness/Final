import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import { path } from '../../constants/path';
import Button from '../button/Button';
import { Category } from 'src/types/category.type';
import { QueryConfig } from 'src/hooks/useQueryConfig';
import { omit } from 'lodash';

type Props = {
  queryConfig: QueryConfig;
  categories: Category[];
};

const AsideFilter = ({ queryConfig }: Props) => {
  const navigate = useNavigate();

  const handleRemoveAll = () => {
    navigate({
      pathname: path.home,
      search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
    });
  };

  return (
    <div className='py-4'>
      <Button
        onClick={handleRemoveAll}
        className='flex w-full items-center justify-center bg-green-500 p-2 text-sm uppercase text-white hover:bg-green-500/80'
      >
        Clear all
      </Button>
    </div>
  );
};

export default AsideFilter;
