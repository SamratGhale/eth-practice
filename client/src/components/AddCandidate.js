import React, { useEffect, useState } from 'react'
import MasoomContract from '../contracts/MasoomContract.json'
import getWeb3 from '../getWeb3'

import { FromGroup, FromControl, Button } from 'react-bootstrap'
import NavigationAdmin from './NavigationAdmin'
import Navigation from './Navigation'
import { useForm } from './useForm'

const AddCandidate = () => {
  const [values, handleChange] = useForm({
    name: '',
    adhar: '',
    constituency: 0,
  })
  const [address, setAddress] = useState('')
  const [contract, setContract] = useState(undefined)
  const createVoter = () => {
    contract.methods
      .requestVoter(values.name, values.adhar, values.constituency)
      .send({
        from: address,
        gas: 1000000,
      })
  }
  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      setAddress(accounts[3])
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = MasoomContract.networks[networkId]
      const instance = new web3.eth.Contract(
        MasoomContract.abi,
        deployedNetwork.address,
      )
      setContract(instance)
    }
    init()
  })
  if (contract != undefined) {
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="adhar"
          name="adhar"
          value={values.adhar}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="constituency"
          name="constituency"
          value={values.constituency}
          onChange={handleChange}
        />
        <button type="submit" onClick={createVoter}>
          submit
        </button>
      </div>
    )
  } else {
    return <div>loading contract</div>
  }
  /*
  const [MasoomInstance, setMasoomInstance] = useState(undefined)
  const [account, setAccount] = useState('')
  const [web3, setWeb3] = useState(undefined)
  const [name,setName] = useState('')
  const [party, useParty] = useState('')
  const [manifesto, setManifesto] = useState('')
  */
}

export default AddCandidate
