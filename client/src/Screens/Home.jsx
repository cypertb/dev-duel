import styled from 'styled-components'

import Button from '../components/Button'

const StyledHome = styled.div`
   width: 100vw;
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   h1 {
      font-weight: lighter;
      font-size: 42px;
   }
`

const ButtonOptions = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding-top: 30px;
`

const ButtonInfo = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   p {
      width: 60%;
      text-align: center;
      padding-top: 15px;
      font-weight: lighter;
   }
`
const ButtonBox = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   border-right: 2px solid #000;
`

const Home = () => {
   return (
      <StyledHome>
         <h1>Welcome to Dev Duel</h1>
         <ButtonOptions>
            <ButtonInfo>
               <ButtonBox>
                  <Button link="/inspect" name="Inspect" />
               </ButtonBox>
               <p>Look up a fellow dev's Github info.</p>
            </ButtonInfo>
            <ButtonInfo>
               <Button link="/duel" name="Duel" />
               <p>Pick two devs to go head to head.</p>
            </ButtonInfo>
         </ButtonOptions>
      </StyledHome>
   )
}

export default Home
