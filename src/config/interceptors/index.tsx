import axios from 'axios';

import { CLOUD9_API } from "../constants";




export const PrivateApiCall = axios.create({
	baseURL: CLOUD9_API,
});

PrivateApiCall.interceptors.request.use(
	(req:any) => {
		const token = localStorage.getItem("access_token");
		req.headers["incoming-origin"] = `delivery`;
		req.headers.Authorization = `Bearer ${token}`;
		return req;
	},
	(err:any) => {
		throw err;
	}
);

PrivateApiCall.interceptors.response.use(
	(res:any) => {
		return res;
	},
	(err:any) => {
		throw err;
	}
);

export const PublicApiCall = axios.create({
	baseURL: CLOUD9_API,
});

PublicApiCall.interceptors.request.use(
	(req:any) => {
		req.headers["incoming-origin"] = `delivery`;
		return req;
	},
	(err:any) => {
		throw err;
	}
);

PublicApiCall.interceptors.response.use(
	(res:any) => {
		return res;
	},
	(err:any) => {
		throw err;
	}
);
