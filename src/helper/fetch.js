
export default (data)=> {
	try{
		return fetch('https://irfiacre-backend.herokuapp.com/api/v1/message',{
			   method: 'POST', 
			   headers: {
			   Accepted:'appication/json',
			   'Content-Type': 'application/json'
			   },
			   body:JSON.stringify(data)
		}
		)}catch(e){ }
};
