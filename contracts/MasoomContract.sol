// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;

contract MasoomContract {
  address public owner;
  uint candidateCount;
  uint voterCount;
  bool start;
  bool end;

  constructor() public {
    owner = msg.sender;
    candidateCount =0 ;
    voterCount = 0;
    start = false;
    end = false;
  }
  function getOwner() public view returns(address){
    return owner;
  }

  modifier onlyAdmin(){
    require(msg.sender == owner);
    _;
  }

  struct Candidate{
    string name;
    string party;
    string manifesto;
    uint voterCount;
    uint constituency;
    uint candidateId;
  }
  mapping( uint => Candidate ) public candidateDetails;

  function addCandidate(string memory _name, string memory _party, string memory _manifesto, uint _constituency) public{
    Candidate memory newCandidate = Candidate({
      name : _name,
      party : _party,
      manifesto: _manifesto,
      voterCount: 0,
      constituency : _constituency,
      candidateId: candidateCount
    });
    candidateDetails[candidateCount] = newCandidate;
    candidateCount += 1;
  }

  function getCandidateNumber() public view returns(uint){
    return candidateCount;
  }

  struct Voter{
    address voterAddress;
    string name;
    string aadhar;
    uint constituency;
    bool hasVoted;
    bool isVerified;
  }
  address[] public voters;

  mapping(address=> Voter) public voterDetails;
  //request to be added as voter

  function requestVoter(string memory _name, string memory _aadhar, uint _constituency) public {
    Voter memory newVoter = Voter({
      voterAddress : msg.sender,
      name: _name,
      aadhar : _aadhar,
      constituency: _constituency,
      hasVoted : false,
      isVerified : false
    });
    voterDetails[msg.sender] = newVoter;
    voters.push(msg.sender);
    voterCount +=1;
  }
  function getVoterCount() public view returns(uint){
    return voterCount;
  }

  function verifyVoter(address _address) public onlyAdmin{
    voterDetails[_address].isVerified = true;
  }

  function vote(uint candidateId) public {
    require(voterDetails[msg.sender].hasVoted = false);
    require(voterDetails[msg.sender].isVerified = true);
    require(start == true);
    require(end == false);
    candidateDetails[candidateId].voterCount += 1;
    voterDetails[msg.sender].hasVoted = true;
  }

  function startEleciton() public onlyAdmin{
    start = true;
    end = false;
  }
  function endEleciton() public onlyAdmin{
    start = false;
    end = true;
  }
  function getStart() public view returns(bool){
    return start;
  }

  function getEnd() public view returns(bool){
    return end;
  }

}

