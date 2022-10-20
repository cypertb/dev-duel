import { useState } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Card from '../components/Card'
import UserInput from '../components/UserInput'

const StyledDuel = styled.div`
   width: 100vw;
   height: 80vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`

const SelectBox = styled.form`
   display: flex;
   height: 25%;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`
const UserBox = styled.div`
   width: 600px;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

const CardBox = styled.div`
   display: flex;
   flex-direction: row;
   jusitfy-content: center;
`
const Space = styled.div`
   width: 15px;
`

const Duel = () => {
   const [cards, updateCards] = useState([
      {
         'avatar-url': 'beep.com',
         bio: 'I drink and I fly things',
         username: 'Johnny-Dough',
         name: 'John Doe',
         location: 'Memphis, TN',
         titles: ['Stalker', 'One Trick Pony'],
         'favorite-language': 'Java',
         'public-repos': 53,
         'total-stars': 248,
         'highest-starred': 49,
         'perfect-repos': 4,
         followers: 124,
         following: 1525
      },
      {
         'avatar-url': 'beep.com',
         bio: 'Just a souhtern girl living her life in the name of Jesus',
         username: 'Betty Sue',
         name: 'Betsy',
         location: 'Nashville, TN',
         titles: ['Famous', 'One Trick Pony'],
         'favorite-language': 'C++',
         'public-repos': 23,
         'total-stars': 123,
         'highest-starred': 90,
         'perfect-repos': 76,
         followers: 12355,
         following: 13
      }
   ])

   return (
      <StyledDuel>
         <SelectBox>
            <UserBox>
               <UserInput />
               <UserInput />
            </UserBox>
            <Button name="Duel" />
         </SelectBox>
         <CardBox>
            {/* Look into how to add WINNER TAG to a winner comparing two keys */}
            <Card
               avatar-url={cards[0]['avatar-url']}
               bio={cards[0].bio}
               username={cards[0].username}
               name={cards[0].name}
               location={cards[0].location}
               titles={cards[0].titles}
               favorite-language={cards[0]['favorite-language']}
               total-stars={cards[0]['total-stars']}
               highest-starred={cards[0]['highest-starred']}
               public-repos={cards[0]['public-repos']}
               perfect-repos={cards[0]['perfect-repos']}
               followers={cards[0].followers}
               following={cards[0].following}
            />
            <Space />
            <Card
               avatar-url={cards[1]['avatar-url']}
               bio={cards[1].bio}
               username={cards[1].username}
               name={cards[1].name}
               location={cards[1].location}
               titles={cards[1].titles}
               favorite-language={cards[1]['favorite-language']}
               total-stars={cards[1]['total-stars']}
               highest-starred={cards[1]['highest-starred']}
               public-repos={cards[1]['public-repos']}
               perfect-repos={cards[1]['perfect-repos']}
               followers={cards[1].followers}
               following={cards[1].following}
            />
         </CardBox>
      </StyledDuel>
   )
}

export default Duel
