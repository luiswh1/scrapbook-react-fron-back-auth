const initialState = {
    produtos: [],
    total: 0,
};

export default function cart(state = initialState, { type, payload }) {
    switch(type) {
        case 'cart/ADD':
            state.produtos.push(payload);
            const novoTotal = state.produtos.reduce((total, atual) => total += atual.preco, 0);
            
            return {
                total: novoTotal,
                produtos: state.produtos,
            };
        case 'cart/REMOVE':
            return initialState;
        default: 
            return state;
    }
};