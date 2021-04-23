export function add(payload) {
    return {
        type: 'cart/ADD',
        payload
    };
}

export function remove(payload) {
    return {
        type: 'cart/REMOVE',
        payload
    };
}