import apiRequest from '../apis/apiRequest'
export const signInn = () =>{
    
    return {
        type: 'SIGN_IN'
    };
};

export const signOutn = () =>{
    return{
        type: 'SIGN_OUT'
    };
};

export const fetchAPI = () =>{
    return async dispatch =>{
        const responce = await apiRequest.get();
        dispatch ({
            type: 'FETCH_API',
            payload: responce.data.data
        });
    }
   
};