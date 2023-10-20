import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL,SIGNIN_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfo2, setUserInfo2] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (username, email,phone_number,password,password_confirmation) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        email,
        password,
        username,
        phone_number,
        password_confirmation
      })
      .then(res => {
        let userInfo2 = res.data.data;
        setUserInfo2(userInfo2);
        AsyncStorage.setItem('userInfo2', JSON.stringify(userInfo2));
        setIsLoading(false);
        console.log(userInfo2);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    
    axios
      .post(`${BASE_URL}/sign-in`, {
        email,
        password,
      })
      .then(res => {

        if(res.data.success){

          let userInfo = res.data.data;
        
          console.log(userInfo);
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

          setIsLoading(false);
        }
        else{
          console.log(JSON.stringify(`Loin failed: `+res.data.message));
          setIsLoading(false);
        }
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
  };


  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        userInfo2,
        splashLoading,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};