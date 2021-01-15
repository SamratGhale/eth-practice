import React, { useState } from 'react'
import MasoomContract from '../contracts/MasoomContract.json'
import getWeb3 from '../getWeb3'

const Home = () => {
  const [owner, setOwner] = useState('')
  const [contract, setConract] = useState(undefined)
  const [web3, setWeb3] = useState(undefined)
  const [account, setAccount] = useState('')
  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)
  const [isOwner, setIsOwner] = useState(false)

  useState(() => {
    const init = async () => {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = MasoomContract.networks[networkId]
      const instance = new web3.eth.Contract(
        MasoomContract.abi,
        deployedNetwork.address,
      )
      setWeb3(web3)


      setAccount(accounts[0])
      setConract(instance)

      const res = await instance.methods.getOwner().call();
      setOwner(res)
      console.log(res)
      //setEnd(e)
      if (accounts[0] === res) {
        setIsOwner(true)
      }
    }
    init()
  }, [])

  useState(() => {
    const getOwner = async () => {}
    getOwner()
  }, [contract])
  if (!web3) {
    return <div>loading web3, accounts and contracts</div>
  } else {
    return (
      <div>
        Hello samrat ghale
        <div>
          Your user address is {account} your owner is {owner}
        </div>
        {isOwner ? (
          <div>You are the owner</div>
        ) : (
          <div> you are not the owner</div>
        )}
      </div>
    )
  }
}

export default Home
