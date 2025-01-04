import React, { Component } from 'react'
// import getWeb3Data from '../../../common/hooks/getWeb3Data';
// import './pages/style.css';

class BuyTokenModal extends Component {
  state = {
    dollar: 0,
    token: 3.5,
    toBuy: 1,
    loading: true,
    myAddress: '',
  }

  // const dispatch = useDispatch();

  componentDidMount() {
    const { selector: { contract, web3 } = {}, selector } = this.props;
    // console.log(selector, 'selectorselector')
    if (contract && web3) {
      this.getTokenPrice()
      this.getAddress()
    } else {
      this.getWeb3andContract()
    }
  }

  getWeb3andContract = async () => {
    // const data = await getWeb3Data();
    // console.log(data, 'datadatadata')
    const { getWeb3Data } = this.props;
    await getWeb3Data()
    // dispatch(setAccounts(accounts))
    // dispatch(setContract(instance))
    // dispatch(setWeb3(web3))
  }

  getAddress = async () => {
    const myAddress = await window.ethereum.enable()
    this.setState({ myAddress: myAddress[0] })
  }

  getTokenPrice = async () => {
    const { selector: { contract: { methods } = {}, web3: { utils } = {} } = {} } = this.props
    try {
      const price = await methods.tokenPrice().call();
      // console.log(price)
      const converted = utils.fromWei(`${price}`, "ether")
      this.setState({ loading: false, token: converted })
    } catch (err) {
      console.log(err, 'getTokenPrice-error')
    }
  }

  toBuyChange = e => {
    const { value } = e.target
    this.setState({
      toBuy: (value * 1).toFixed(0)
    })
  }

  onBuy = async () => {
    const { toBuy, token } = this.state
    const { selector: { contract, web3 } = {}, onClose } = this.props

    try {
      const { methods: { buyTokens } } = contract
      const { utils: { toWei } } = web3;
      const value = await toWei((token * toBuy).toFixed(6), "ether");
      const myAddress = await window.ethereum.enable()
      const send = { from: myAddress[0], value }
      // console.log((toBuy * 1).toFixed(3), toBuy);

      const ret = await buyTokens(toBuy * 1).send(send);

      // console.log(ret?.events?.Sell?.returnValues?._amount, 'retretret')
      onClose()
    } catch (err) {
      console.log(err, 'errerrerr')
    }
  }

  render() {
    const { visible, onClose, selector: { contract, web3 } = {} } = this.props
    const { loading, token, toBuy, myAddress } = this.state
    // console.log(visible, 'yaha tak')
    // console.log(contract);

    if (!(contract && web3)) {
      return (
        <div className="buy-token-modal">
          {visible && (
            <div className="modal">
              <div className="modal-bg" onClick={onClose} />
              <div className="modal-body">
                <div>
                  Loading...
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }
    return (
      <div className="buy-token-modal">
        {visible && (
          <div className="modal">
            <div className="modal-bg" onClick={onClose} />
            <div className="modal-body">
              <div>
                <span className="heading">Buy UFD Tokens</span>
                <span className="BuyTokenModal-connected">{myAddress}</span>
                {loading && (
                  <div className="loading">Fetching Token price...</div>
                )}
                {!loading && (
                  <div className="info">
                    <span>
                      <b>{(toBuy * 1) || 1}</b> Token =
                    </span>
                    <span>
                      {' '}
                      <b>{(toBuy * 1) ? (token * toBuy) : token}</b> MATIC
                    </span>
                  </div>
                )}
                <div className="row">
                  <div className="BuyTokenModal-fields-div">
                    <input
                      className="BuyTokenModal-fields"
                      value={toBuy || ''}
                      onChange={this.toBuyChange}
                      placeholder="No of Tokens"
                      type="number"
                      min="1"
                      disabled={loading}
                    />
                  </div>
                  <div className="BuyTokenModal-btn-div">
                    <button disabled={loading} onClick={this.onBuy}>
                      Buy Tokens
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BuyTokenModal
