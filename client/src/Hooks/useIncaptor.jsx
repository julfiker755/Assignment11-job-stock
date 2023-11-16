import axios from 'axios'
import useAuthState from './useAuthState';
import { useEffect } from 'react';

const instance = axios.create({
    baseURL:'https://assignment11-hazel.vercel.app',
    withCredentials:true,
  });

const useIncaptor = () => {
  const { logOut } = useAuthState() || {}
  // request incaptor
  useEffect(() => {
    instance.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    //   response incaptor
    instance.interceptors.response.use(function (response) {
      return response;
    }, async function (error) {
      if(error.response.status === 401 || error.response.status === 403){
        await logOut()
        console.log('log out')
      }
      return Promise.reject(error);
    });
  }, [logOut])
    return instance
};

export default useIncaptor;