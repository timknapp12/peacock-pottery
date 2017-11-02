import axios from 'axios';

const initialState = {
    products: [],
    cart: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const READ_CART = 'READ_CART';
const SHOW_CART = 'SHOW_CART';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS +'_FULFILLED':
            return Object.assign({}, state, {products: action.payload});
        case ADD_TO_CART:
            return Object.assign({}, state, {cart: action.payload});

        case REMOVE_FROM_CART:
            return Object.assign({}, state, {cart: action.payload});

        case SHOW_CART:
            return state.cart;
    
        default:
        return state;
    }   
}

export function getAllProducts() {
    console.log('hey')
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get('/api/products').then(res => res.data)
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function showItems(products) {
    return {
        type: SHOW_CART,
        payload: products
    }
}