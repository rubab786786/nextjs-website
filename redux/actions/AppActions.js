export const setAccounts = (accounts) => (dispatch) => {
    dispatch({
        type: "accounts",
        payload: {
            accounts,
        }
    })
}

export const setContract = (contract) => (dispatch) => {
    dispatch({
        type: "contract",
        payload: {
            contract,
        }
    })
}

export const setWeb3 = (web3) => (dispatch) => {
    dispatch({
        type: "web3",
        payload: {
            web3,
        }
    })
}

export const setUserData = (userData) => (dispatch) => {
    dispatch({
        type: "userData",
        payload: {
            userData,
        }
    })
}