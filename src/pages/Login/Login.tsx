import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues, inputSchema } from 'src/utils/inputSchema';
import { useMutateUserLogin } from 'src/hooks/useMutateUserLogin';
import { isAxiosUnprocessableEntityError } from 'src/utils/axiosError';
import { ErrorResponseApi } from 'src/types/util.type';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'src/context/authContext';
import { path } from '../../constants/path';
import Button from 'src/components/button/Button';
import Input from 'src/components/Input/Input';


const loginSchema = inputSchema.pick(['email', 'password']);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    setError
  } = useForm<Pick<FormValues, 'email' | 'password'>>({
    resolver: yupResolver(loginSchema)
  });

  const { mutate: mutateUser, error: mutateUserLoginError, data, isLoading } = useMutateUserLogin();

  const { setIsAuthenticated, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<Pick<FormValues, 'email' | 'password'>> = (data) => {
    mutateUser(data);
    //reset();
  };

  useEffect(() => {
    if (isAxiosUnprocessableEntityError<ErrorResponseApi<Pick<FormValues, 'email' | 'password'>>>(mutateUserLoginError)) {
      const formError = mutateUserLoginError.response?.data.data;

      if (formError) {
        Object.keys(formError).forEach((property) => {
          if (property === 'email' || property === 'password') {
            setError(property, {
              type: 'Server error',
              message: formError[property]
            });
          }
        });
      }
    }

    if (data?.data.user) {
      setIsAuthenticated(true);
      setProfile(data?.data.user);
      navigate(path.home);
    }
  }, [data?.data.user, mutateUserLoginError, navigate, setError, setIsAuthenticated, setProfile]);

  return (
    <div className='relative min-h-screen flex items-center justify-center px-4'>
      <title>Login | Online Shop</title>
      <meta name='description' content='Login to Online Shop' />

      <div className='w-full max-w-md z-10'>
        <form onSubmit={handleSubmit(onSubmitHandler)} className='rounded bg-white p-6 md:p-10 shadow-sm'>
          <div className='text-2xl text-center mb-8'>Login</div>
          <Input
            register={register}
            name='email'
            type='email'
            className='mt-8'
            placeholder='Enter Email Address'
            autoComplete='on'
            errorMessage={errors.email?.message}
          />
          <Input
            register={register}
            name='password'
            type='password'
            className='mt-2'
            placeholder='Enter Password'
            autoComplete='on'
            errorMessage={errors.password?.message}
          />

          <div className='mt-3'>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              type='submit'
              className='flex w-full items-center justify-center bg-green-500 py-4 px-2 text-sm uppercase text-white hover:bg-green-600'
            >
              Login
            </Button>
          </div>
          <div className='mt-8 flex items-center justify-center'>
            <span className='text-gray-400'>New to Online Shop?</span>
            <Link className='ml-1 text-green-400' to={path.register}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
