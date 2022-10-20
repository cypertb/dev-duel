import styled from 'styled-components'
import Inspect from './Inspect'
import Card from '../components/Card'

const StyledInspectResults = styled.div`
   width: 100vw;
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const InspectResults = () => {
   return (
      <StyledInspectResults>
         <Inspect />
         <Card />
      </StyledInspectResults>
   )
}

export default InspectResults
