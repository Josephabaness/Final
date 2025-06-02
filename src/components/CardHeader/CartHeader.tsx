import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { path } from 'src/constants/path';
import useSearchProduct from 'src/hooks/useSearchProduct';

export default function CartHeader() {
  const { onSubmitSearch, register } = useSearchProduct();

  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-green-500 text-white'>
        <div className='container'>
          <Navbar />
        </div>
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <nav className='md:flex md:items-center md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <div className='capitalize text-green-500 md:text-xl'>Shop Cart</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border-2 border-green-500'>
                <input
                  type='text'
                  className='w-full flex-grow border-none bg-transparent px-3 py-1 text-black outline-none'
                  placeholder='Search for products, brands and shops...'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-sm bg-green-500 py-2 px-8 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}
