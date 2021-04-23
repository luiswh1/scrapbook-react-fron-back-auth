export function login(payload) {
    return {
        type: 'user/LOGIN',
        payload,
    };
}

export function logout() {
    return {
        type: 'user/LOGOUT',
    };
}