const initialState = {
    accounts: null,
    contract: null,
    web3: null,
    userData: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'accounts':
            return { ...state, ...payload }
        case 'contract':
            return { ...state, ...payload }
        case 'web3':
            return { ...state, ...payload }
        case 'userData':
            return { ...state, ...payload }

        default:
            return state
    }
}