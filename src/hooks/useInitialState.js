import { useState } from 'react';

const initialState = {
    //estado para almacenar informacion al carrito
    cart: [],
}

const useInitialState = () => {
    //Inicializamos el state
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state, //mantener la informacion que ya esta en el estado
            cart: [...state.cart, payload] // lo que ya tiene el estado le agergamos mas informacion
        });
    };

    //Crear funcion para remover productos de nuestro carrito
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id != payload.id) 
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;