import Product from '../../components/Product/Product';
import SortProductList from '../../components/SortProductList/SortProductList';
import { useProducts } from '../../hooks/useProducts';
import Pagination from '../../components/Pagination/Pagination';
import useQueryConfig from 'src/hooks/useQueryConfig';
import { ProductListConfig } from 'src/types/product.type';

const ProductList = () => {
  const queryParams = useQueryConfig();
  const { data: productsData } = useProducts(queryParams as ProductListConfig);

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {/* ProductList */}
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12'>
              <SortProductList queryConfig={queryParams} pageSize={productsData.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productsData.data.products.map((item) => (
                  <div key={item._id} className='col-span-1'>
                    <Product product={item} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryParams} pageSize={productsData.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
