const cart = []; 
// A reducer is a central place where state modification takes place. Reducer is a function which takes state and action as arguments, and returns a newly updated state.
const handleCart = (state = cart, action) => {
    const product = action.payload;
    console.log(product);
    switch(action.type){
        case "ADDITEM":
            const check_exist = state.find((x) => x.id === product.id);
            if(check_exist){
                console.log('its exist');
                return state.map((x)=> x.id === product.id ? {...x, qty: x.qty+1}:x)
            }
            else{
                console.log('not exist');
                return [...state, {...product, qty:1}]
            }
        break;
        case "DELITEM":
            const exist2 = state.find((x)=> x.id === product.id);
            console.log(exist2);
            if(exist2.qty === 1){
                return state.filter((x) => x.id !== exist2.id);
                
            }
            else{
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty-1}:x);
            }
            break;
        case "CARTZERO":   
            return [];
        default:
            return state
            break;
    }
}

export default handleCart