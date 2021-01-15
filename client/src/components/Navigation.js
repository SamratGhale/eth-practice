import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/" className="heading">
        Home
      </Link>
      <Link to="/CandidateDetails">Candidates</Link>
      <Link to="/RequestVoter">Apply for voter</Link>
      <Link to="/vote"> Vote</Link>
    </div>
  )
}
export default Navigation
