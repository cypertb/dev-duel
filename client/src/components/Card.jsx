import styled from 'styled-components'
import CardInfo from './CardInfo'

const StyledCard = styled.div`
   height: 350px;
   width: 400px;
   background: rgb(249, 249, 249);
   border: 1px solid #333;
   border-radius: 10px;
   box-shadow: 0px 3px #d4d3d3;
   padding: 20px 0px 20px 0px;
   &:disabled {
      background-color: blue;
      color: rgb(249, 249, 249);
      border: rgb(249, 249, 249);
   }
`

const Table = styled.div`
   height: 100%;
   display: flex;
   flex-direction: row;
`
const ColumnOne = styled.div`
   width: 35%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const ColumnTwo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`
const Image = styled.img`
   height: 100px;
   width: 100px;
   border-radius: 50%;
   background-color: black;
`

const Bio = styled.p`
   text-align: center;
   font-size: 10px;
`

const Card = props => {
   return (
      <StyledCard>
         <Table>
            <ColumnOne>
               <Image src={props['avatar-url']} />
               <Bio>{props.bio}</Bio>
            </ColumnOne>
            <ColumnTwo>
               <CardInfo title="username" info={props.username} />
               <CardInfo title="name" info={props.name} />
               <CardInfo title="location" info={props.location} />
               {/* // LOOK INTO HOW TO ADD COMMA AND SPACE TO EACH TITLE */}
               <CardInfo title="titles" info={props.titles} />
               <CardInfo
                  title="fav language"
                  info={props['favorite-language']}
               />
               <CardInfo title="total stars" info={props['total-stars']} />
               <CardInfo
                  title="highest star count"
                  info={props['highest-starred']}
               />
               <CardInfo title="public repos" info={props['public-repos']} />
               <CardInfo title="perfect repos" info={props['perfect-repos']} />
               <CardInfo title="followers" info={props.followers} />
               <CardInfo title="following" info={props.following} />
            </ColumnTwo>
         </Table>
      </StyledCard>
   )
}

export default Card
