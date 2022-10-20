import styled from 'styled-components'

const StyledCardInfo = styled.div`
   display: flex;
`
const Title = styled.div`
   width: 85px;
   height: 85%;
   border: 1px solid black;
   background: #e1f1ff;
   border-radius: 5px;
   color: #000;
   font-size: 10px;
   text-align: center;
   margin-right: 10px;
   margin-top: 3px;
`

const Info = styled.div`
   height: 100%;
   font-size: 15px;
`

const CardInfo = props => {
   return (
      <StyledCardInfo>
         <Title>{props.title}</Title>
         <Info>{props.info}</Info>
      </StyledCardInfo>
   )
}

export default CardInfo
