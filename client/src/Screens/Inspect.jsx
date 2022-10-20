import React, { useState } from 'react'
import styled from 'styled-components'
import { inspectUser } from '../services/userService'

import Button from '../components/Button'
import Card from '../components/Card'
import UserInput from '../components/UserInput'

const StyledInspect = styled.div`
   width: 100vw;
   height: 80vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`

const SelectBox = styled.div`
   display: flex;
   height: 25%;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`

const StyledButton = styled.button`
   width: 180px;
   height: 55px;
   border: 1px solid black;
   background: rgb(249, 249, 249);
   border-radius: 10px;
   color: #000;
   font-size: 20px;
   box-shadow: 0px 3px #d4d3d3;
   &:hover {
      cursor: pointer;
      background: beige;
   }
`

const Inspect = () => {
   const [showResults, setShowResults] = useState(false)
   const [card, setCard] = useState({
      'avatar-url': null,
      bio: null,
      username: null,
      name: null,
      location: null,
      titles: null,
      'favorite-language': null,
      'public-repos': null,
      'total-stars': null,
      'highest-starred': null,
      'perfect-repos': null,
      followers: null,
      following: null
   })

   const changeCard = (event, user) => {
      event.stopPropagation()
      inspectUser(user).then(data => setCard(data))
      //   setShowResults(true)
   }

   const getInputValue = event => {
      console.log(event.target.value)
   }

   return (
      <StyledInspect>
         <SelectBox>
            {/* Retrieve user input and load results from username and inspectUser */}
            <UserInput placeholder="username" onChange={getInputValue} />
            <StyledButton onClick={e => changeCard(e, 'andrew')}>
               Inspect
            </StyledButton>
         </SelectBox>
         {/* If properties from button function is empty, don't show card, else 
         populate card info and render 
         possibly:
         <Card>{card.data}</Card>
         possibly an if statement, or switch statement
         how to hide card, or component until populated
         */}
         {/* {showResults ? ( */}
         <Card
            avatar-url={card['avatar-url']}
            bio={card.bio}
            username={card.username}
            name={card.name}
            location={card.location}
            titles={card.titles}
            favorite-language={card['favorite-language']}
            total-stars={card['total-stars']}
            highest-starred={card['highest-starred']}
            public-repos={card['public-repos']}
            perfect-repos={card['perfect-repos']}
            followers={card.followers}
            following={card.following}
            disabled={!showResults}
         />
         {/* ) : (
            <Card />
         )} */}
      </StyledInspect>
   )
}

export default Inspect
