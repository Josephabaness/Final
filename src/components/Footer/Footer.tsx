import { Link } from 'react-router-dom';
import { path } from 'src/constants/path';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import tiktok from '../../assets/images/tiktok.png';
import youtube from '../../assets/images/youtube.png';

const Footer = () => {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2024 Online Shop. All rights reserved.</div>
          </div>
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div>
                <div className='text-sm font-bold'>POLICIES</div>
                <ul className='mt-2 space-y-2 text-sm'>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Return Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-sm font-bold'>ABOUT US</div>
                <ul className='mt-2 space-y-2 text-sm'>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-sm font-bold'>CUSTOMER SERVICE</div>
                <ul className='mt-2 space-y-2 text-sm'>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Shopping Guide
                    </Link>
                  </li>
                  <li>
                    <Link to={path.home} className='text-gray-400 hover:text-gray-600'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <p className='text-sm font-semibold text-gray-600'>FOLLOW US</p>
            <div className='mt-4 text-sm text-gray-600 flex'>
              <div className='mr-1'>
                <img src={facebook} alt='facebook' width={18} height={18} />
              </div>
              <span> Facebook</span>
            </div>
            <div className='mt-2 text-sm text-gray-600 flex'>
              <div className='mr-1'>
                <img src={instagram} alt='instagram' width={18} height={18} />
              </div>
              <span> Instagram</span>
            </div>
            <div className='mt-2 text-sm text-gray-600 flex'>
              <div className='mr-1'>
                <img src={tiktok} alt='tiktok' width={18} height={18} />
              </div>
              <span>Tiktok</span>
            </div>
            <div className='mt-2 text-sm text-gray-600 flex'>
              <div className='mr-1'>
                <img src={youtube} alt='youtube' width={18} height={18} />
              </div>
              <span>Youtube</span>
            </div>
          </div>
          <div className='col-span-3'>
            <p className='text-sm font-semibold text-gray-600'>PAYMENT</p>
            <div className='flex gap-2'>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100 '>
                <img src='https://down-sg.img.susercontent.com/file/27f8706bf1e76f48fd403ae94fe8f89d' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/244d04e08cb94810bbbd1bdba3963b1e' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/75208a3560e600016e8c2afe482f2089' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/bb11637fc6801c7be1bc0eec44b4483d' alt='logo' />
              </div>
            </div>
            <p className='text-sm font-semibold text-gray-600 mt-4'>LOGISTIC</p>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100 '>
                <img
                  src='https://down-sg.img.susercontent.com/file/sg-50009109-5c039f3a5e4393ddd69f67fd9de8d748'
                  alt='logo'
                />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/d3e8c3431cbe8451acf869aad4064f02' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/8fd7478a86cbb33568d39a313a38dcda' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/542ab038cc1a9d0f7acdd95cae2124aa' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/542ab038cc1a9d0f7acdd95cae2124aa' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/d27ba145f934d56a2056c340a35faf91' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/2f0e116fd55a95b3dfe6f8ea52771829' alt='logo' />
              </div>
              <div className='bg-white w-14 h-7 p-1 rounded mt-4 shadow shadow-blue-100'>
                <img src='https://down-sg.img.susercontent.com/file/c0a6f9dcf3bec653e678cb245859442f' alt='logo' />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 text-sm text-gray-600 mt-10'>
          <div className='lg:col-span-1'>
            <div>© 2023 Shopee. All Rights Reserved.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Country & Region: Singapore | Indonesia | Taiwan | Thailand| Malaysia | Vietnam | Philippines | Germany |
              Chile | Japan | China
            </div>
          </div>
        </div>
        <div className='text-center text-sm text-gray-600 mt-10'>
          <p>Online Shop Philippines Inc.</p>
          <p className='mt-6'>
            Address: 15th Floor, SM Aura Tower, 26th Street, Bonifacio Global City, Taguig, Metro Manila, Philippines
            <br />
            Phone: +63 2 8888 8888 - Email: support@onlineshop.ph
          </p>
          <p className='mt-2'>Person in charge of information management: John Santos</p>
          <p className='mt-2'>Business Registration Certificate No: 2024-123456</p>
          <p className='mt-2'>© 2024 - Copyright belongs to Online Shop Philippines Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
