import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues, inputSchema } from 'src/utils/inputSchema';
import { useMutateUserRegister } from 'src/hooks/useMutateUserRegister';
import { isAxiosUnprocessableEntityError } from 'src/utils/axiosError';
import { ErrorResponseApi } from 'src/types/util.type';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'src/context/authContext';
import { path } from '../../constants/path';

import Button from 'src/components/button/Button';
import Input from 'src/components/Input/Input';

const registerSchema = inputSchema.pick(['email', 'password', 'confirm_password']);

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    setError
  } = useForm<FormValues>({
    resolver: yupResolver(registerSchema)
  });

  const { mutate: mutateUser, error: mutateUserRegisterError, data, isLoading } = useMutateUserRegister();

  const { setIsAuthenticated, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    mutateUser({ email: data.email, password: data.password });
    //reset();
  };

  useEffect(() => {
    if (
      isAxiosUnprocessableEntityError<ErrorResponseApi<Omit<FormValues, 'confirm_password'>>>(mutateUserRegisterError)
    ) {
      const formError = mutateUserRegisterError.response?.data.data;

      if (formError) {
        Object.keys(formError).forEach((property) => {
          setError(property as keyof Omit<FormValues, 'confirm_password'>, {
            type: 'Server error',
            message: formError[property as keyof Omit<FormValues, 'confirm_password'>]
          });
        });
      }
    }

    if (data?.data.user) {
      setIsAuthenticated(true);
      setProfile(data?.data.user);
      navigate(path.home);
    }
  }, [data?.data.user, mutateUserRegisterError, navigate, setError, setIsAuthenticated, setProfile]);

  return (
    <div className='relative min-h-screen flex items-center justify-center px-4'>
      <title>Register | Online Shop</title>
      <meta name='description' content='Register to Online Shop' />

      <div className='w-full max-w-md z-10'>
        <form onSubmit={handleSubmit(onSubmitHandler)} className='rounded bg-white p-6 md:p-10 shadow-sm'>
          <div className='text-2xl text-center mb-8'>Register</div>
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

          <Input
            register={register}
            name='confirm_password'
            type='password'
            className='mt-2'
            placeholder='Confirm Password'
            autoComplete='on'
            errorMessage={errors.confirm_password?.message}
          />
          <div className='mt-2'>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              type='submit'
              className='flex w-full items-center justify-center bg-green-500 py-4 px-2 text-sm uppercase text-white hover:bg-green-600'
            >
              Register
            </Button>
          </div>
          <div className='mt-8 flex items-center justify-center'>
            <span className='text-gray-400'>Already had an account?</span>
            <Link className='ml-1 text-green-400' to={path.register}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
