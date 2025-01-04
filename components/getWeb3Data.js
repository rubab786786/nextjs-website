// import React, { useEffect, useState } from "react";
import RolazTokenSale from "../public/assets/RolazTokenSale";
// const RolazTokenSale = import('../assets/RolazTokenSale')
import getWeb3 from "./getWeb3";
// import { useDispatch, useSelector } from 'react-redux';
// import { setAccounts, setContract, setWeb3 } from "../redux/actions/AppActions";
// import RouterWrapper from "./RouterWrapper";
// import { useDispatch } from 'react-redux';
// import { setAccounts, setContract, setWeb3 } from "../../redux/actions/AppActions";

// function getWeb3Data() {

//   const dispatch = useDispatch();

//   useEffect(() => {
//     method();
//   }, [])

//   const method = async () => {
//     try {
//       const web3 = await getWeb3();
//       console.log(web3, 'web3web3web3')
//       const accounts = await web3.eth.getAccounts();
//       const networkId = await web3.eth.net.getId();
//     //   const instance = {networkId}
//       const deployedNetwork = RolazTokenSale.networks[networkId];
//       const instance = new web3.eth.Contract(
//         RolazTokenSale.abi,
//         deployedNetwork && deployedNetwork.address,
//       );
//       dispatch(setAccounts(accounts))
//       dispatch(setContract(instance))
//       dispatch(setWeb3(web3))
//     } catch (error) {
//         console.log(error, 'errorerrorerror')
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }
//   }

//   // // if (!web3) { return <div>Loading Contract...</div> }
//   // return (
//   //   <></>
//   // );
// }

// export default getWeb3Data;


const getWeb3Data = async () => {
  try {
    const web3 = await getWeb3();
    // console.log(web3, 'web3web3web3');
    // console.log(RolazTokenSale);
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    const networkId = await web3.eth.net.getId();
    // console.log(networkId);
    if (networkId !== 137) {
      alert('Select Polygon Network From Metamask Or Any Other Wallet')
    }
    // const instance = {networkId}
    // const deployedNetwork = RolazTokenSale.networks[networkId];
    // console.log(deployedNetwork);
    const instance = new web3.eth.Contract(
      RolazTokenSale.abi
      ,
      137 && "0x96AeAEBF07C735DbD5ca5A6fFF6349F734Cfcc83"
    );
    return {
      accounts,
      instance,
      web3
    }
    // dispatch(setAccounts(accounts))
    // dispatch(setContract(instance))
    // dispatch(setWeb3(web3))
  } catch (error) {
    console.log(error, 'errorerrorerror')
    if (window.confirm('Please connect your wallet or use a dapp browser (e.g. Metamask, Trust wallet etc.) Click OK to learn more.')) {
      window.location.href = '/how-to';
    };
    // alert(
    //   `Please connect your wallet or use a dapp browser (e.g. Metamask, Trust, etc.) learn more:https://lynxshort.com/tutorial`,
    // );
    // console.error(error);
  }
}




// const GetWeb3Data = forwardRef(({
// }, ref) => {
//   const dispatch = useDispatch();

//   useImperativeHandle(ref, () => ({
//     getWeb3Data,
//   }));

//   const getWeb3Data = async () => {
//     try {
//       const web3 = await getWeb3();
//       console.log(web3, 'web3web3web3')
//       const accounts = await web3.eth.getAccounts();
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = RolazTokenSale.networks[networkId];
//       const instance = new web3.eth.Contract(
//         RolazTokenSale.abi,
//         deployedNetwork && deployedNetwork.address,
//       );
//       dispatch(setAccounts(accounts))
//       dispatch(setContract(instance))
//       dispatch(setWeb3(web3))
//       // handleWeb3(web3)
//     } catch (error) {
//         console.log(error, 'errorerrorerror')
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }
//   }


//   return (
//     <> </>
//   );
// })

export default getWeb3Data
