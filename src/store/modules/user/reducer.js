const initialState = null;

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case 'user/LOGIN':
      return payload;
    case 'user/LOGOUT':
      return initialState;
    default:
      return state;
  }
}