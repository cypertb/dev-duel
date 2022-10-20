import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

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

const Button = props => {
   const history = useHistory()
   return (
      <StyledButton onClick={() => history.push(props.link)}>
         {props.name}
      </StyledButton>
   )
}

export default Button
