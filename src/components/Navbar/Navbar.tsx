import { Link } from 'react-router-dom';
import Popover from '../Popover/Popover';
import { useContext } from 'react';
import { AuthContext } from 'src/context/authContext';
import { http } from 'src/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { path } from '../../constants/path';
import avatar from '../../assets/avatar.png';
import { PURCHASES_QUERY_KEY } from 'src/constants/queryKey';

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { mutate: mutateUserLogout } = useMutation({
    mutationFn: async () => {
      await http.post(path.logout);
    },
    onSuccess: () => {
      setIsAuthenticated(false);
      setProfile(null);
    },
    onSettled: () => {
      // remove queries from the cache based on query key
      queryClient.removeQueries({ queryKey: [PURCHASES_QUERY_KEY] });
    }
  });

  const handleLogout = () => {
    mutateUserLogout();
  };

  return (
    <div className='flex justify-end'>
      {isAuthenticated && (
        <Popover
          className='ml-6 flex cursor-pointer items-center py-1 hover:text-white/70'
          renderPopover={
            <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
              <Link
                to={path.profile}
                className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
              >
                My account
              </Link>
              <Link
                to={path.home}
                className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
              >
                My purchase
              </Link>
              <button
                onClick={handleLogout}
                className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
              >
                Logout
              </button>
            </div>
          }
        >
          <div className='mr-2 h-6 w-6 flex-shrink-0'>
            <img src={profile?.avatar || avatar} alt='avatar' className='h-full w-full rounded-full object-cover' />
          </div>
          <div> {profile?.email} </div>
        </Popover>
      )}
      {!isAuthenticated && (
        <div className='flex items-center'>
          <Link to={path.register} className='mx-3 capitalize text-white hover:text-white/70'>
            Sign up
          </Link>
          <div className='h-4 border-r-[1px] border-r-white/40' />
          <Link to={path.login} className='mx-3 capitalize  text-white hover:text-white/70'>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
