import axios from 'axios';
import configManager from './configManager';
import { URLNames } from '../data/enum/configNames';
import { responseFormatter, errorFormatter } from './gatewayFormatter';

const gateway = axios.create({
  baseURL: configManager.getURL(URLNames.API),
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
});

gateway.interceptors.response.use(
  response => responseFormatter(response),
  error => {
    throw errorFormatter(error);
  },
);

export default gateway;
