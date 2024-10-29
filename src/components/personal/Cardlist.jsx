
import { IoFolder } from "react-icons/io5";
import { MdBalance } from "react-icons/md";
import { SlCursor } from "react-icons/sl";
import styled from "styled-components";



const Cardlist = () => {
    const Card = [
        {
            image: <IconDiv as = {IoFolder}/>,
            description: 'Order a Kuda card on the app with pickup and delivery options.'
        },

        {
            image: <IconDiv as = {IoFolder}/>,
            description: 'Enjoy cashless payment options online and offline.'
        },

        {
            image: <IconDiv as = {MdBalance}/>,
            description: 'Pay your essential bills and buy gift cards easily.'
        },

        {
            image: <IconDiv as = {SlCursor}/>,
            description: 'Get 25 free transfers to Nigerian banks every month.'
        },

        {
            image: <IconDiv as = {IoFolder}/>,
            description: 'Save money automatically any time you spend.'
        }
    ]

    return(
        <Wrapper>
            <InsWrapper>
            {Card.map((Caard, index) =>(
                <Cardditem key = {index}>
                   {Caard.image}
                   {Caard.description}
                    
                </Cardditem>
            ))}
            </InsWrapper>
        </Wrapper>
    )
}

export default Cardlist

const IconDiv = styled.div`
   background-color: #d7c2d7;
   border-radius:50%;
   width:30px; 
   height:30px;
`

const Wrapper = styled.div`
   max-width: 1280px; 
   margin: 0px auto;
   /* border: 1px solid black; */
    padding: 150px 0px;
`
const InsWrapper = styled.div`
   width: 85%; 
   margin: 0px auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   gap: 20px;
`
const Cardditem = styled.div`
     width: 100%;
     display: grid;
     flex-direction: column;
     padding: 20px;
     max-width: 300px;
     height: 100px;
     background-color: white;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
     border-radius: 10px;
     color: #5e025e;
     font-weight: 800;

`