'use client'

import React, { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getWeb3Data from '@/components/getWeb3Data';
import BuyTokenModal from '@/components/buyTokenModal';
import { setAccounts, setContract, setWeb3 } from '../redux/actions/AppActions';

// eslint-disable-next-line react/display-name
const BuyToken = forwardRef((props
  , ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [randomKey, setRandomKey] = useState('randomKey');
  const selector = useSelector((reduxState) => reduxState.AppReducer);
  const dispatch = useDispatch();

  const getWeb3AndContract = useCallback(async () => {
    try {
      const { accounts, instance, web3 } = await getWeb3Data();
      dispatch(setAccounts(accounts));
      dispatch(setContract(instance));
      dispatch(setWeb3(web3));
      setRandomKey(Math.random().toString());
    }
    catch (err) {
      console.error(err);
    }
  }, [dispatch])

  useEffect(() => {
    async function listenMMAccount() {
      if (!window.ethereum) return;
      window.ethereum.on("networkChanged", async function (acc) {
        getWeb3AndContract();
      });
    }
    listenMMAccount();
  },);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setIsOpen(true),
  }));



  return (
    <div>
      {isOpen && (
        <BuyTokenModal
          visible={isOpen}
          onClose={() => setIsOpen(false)}
          selector={selector}
          key={randomKey}
          getWeb3Data={getWeb3AndContract}
        />
      )}
    </div>
  );
});

export default BuyToken;
