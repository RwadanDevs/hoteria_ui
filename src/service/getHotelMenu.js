import fetcher from '../helper/fetch';

export const sendMessage = async data => {
	const response = await fetcher(data);
	
	return response.json();
};
