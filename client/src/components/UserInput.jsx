import styled from 'styled-components'

const StyledUserInput = styled.input`
   width: 210px;
   height: 40px;
   border: 1px solid black;
   background: #e1f1ff;
   border-radius: 10px;
   color: #000;
   font-size: 20px;
   text-align: center;
`

const UserInput = () => {
   return <StyledUserInput  />
}

export default UserInput
