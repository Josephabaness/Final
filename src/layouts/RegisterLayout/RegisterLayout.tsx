import Footer from 'src/components/Footer/Footer';
import RegisterHeader from 'src/components/RegisterHeader/RegisterHeader';
import bgImage from '../../assets/images/warehouse-bg.jpg';

interface Props {
  children?: React.ReactNode;
}
const RegisterLayout = ({ children }: Props) => {
  return (
    <div className='relative min-h-screen' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay */}
      <RegisterHeader />
      <div className='flex items-center justify-center w-full flex-grow z-10' >{children}</div>
      <Footer />
    </div>
  );
};

export default RegisterLayout;
