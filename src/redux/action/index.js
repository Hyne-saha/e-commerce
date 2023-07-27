export const addCart = (product) => {
    console.log(product);
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const delItem = (product) => {
    console.log(product);
    return {
        type: "DELITEM",
        payload : product
    }
}

export const cartZero = () => {
    return {
        type: "CARTZERO",
        payload: ''
    }
}

// It carries a payload of information from your application to store.