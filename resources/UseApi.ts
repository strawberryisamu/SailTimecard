import axios from 'axios';
import {NATIVE_API_BASE_URL} from '../constant';

const client = axios.create({
  baseURL: NATIVE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const onRegisterApiRequest = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  birthYear: number,
  birthMonth: number,
  birthDay: number,
  gender: 'M' | 'W' | 'O' | 'N',
  postalCode1: number,
  postalCode2: number,
  prefecture: string,
  city: string,
  address: string,
) => {
  return client.post('auth/register', {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    birthYear: birthYear,
    birthMonth: birthMonth,
    birthDay: birthDay,
    gender: gender,
    postalCode1: postalCode1,
    postalCode2: postalCode2,
    prefecture: prefecture,
    city: city,
    address: address,
  });
};

export const onLoginApiRequest = async (
  email: string,
  password: string,
  phoneNumber: string,
) => {
  const debug = await client.post('/auth/login', {
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  });
  console.log(debug);
  return debug;
};