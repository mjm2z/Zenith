import config from './config';

const { IP_ADDRESS } = config;
const baseUrl = `https://${IP_ADDRESS}`;
const api = '/api';

export const routes = {
	baseApi: `${baseUrl}${api}`,
};
