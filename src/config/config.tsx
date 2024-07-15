import { PrivateApiCall, PublicApiCall } from "./interceptors";
type ErrorResponse = {
	response?: {
	  data?: any;
	};
  };
const errorCatch = (error : ErrorResponse) => {
	console.log("ERROR API CALL", error, error?.response);
	if (error.response) {
		if (error.response?.data) {
			return error.response?.data;
		}
		return error.response;
	} else {
		return error;
	}
};

//translation 
export async function getTranslation() {
    return await PublicApiCall.get('/language/?platform=sm-app')
    .then((response) => response )
    .catch((error:any) => errorCatch(error))
}