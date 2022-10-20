import styled from 'styled-components'
import Card from '../components/Card'
import Duel from './Duel'

const CardBox = styled.div`
   display: flex;
   flex-direction: row;
   jusitfy-content: center;
`
const Space = styled.div`
   width: 15px;
`

const DuelResults = () => {
   return (
      <Duel>
         <CardBox>
            <Card />
            <Space />
            <Card />
         </CardBox>
      </Duel>
   )
}

export default DuelResults
