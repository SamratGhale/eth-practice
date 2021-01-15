import React from 'react'
import { Link } from 'react-router-dom'

const NavigationAdmin = () => {
  return (
    <div className="navbar">
      <div className="Admin">Admin </div>
      <Link to="/" className="heading">
        Home
      </Link>
      <Link to="/CandidateDetails">Candidates</Link>
      <Link to="/RequestVoter">Apply for voter</Link>
      <Link to="/vote"> Vote</Link>
      <Link to="/VerifyVoter"> Verify Voter</Link>
      <Link to="/AddCandidate"> Add candidate</Link>
      <Link to="/Result"> Results</Link>
      <Link to="/Admin"> Start/End</Link>
    </div>
  )
}

export default NavigationAdmin
