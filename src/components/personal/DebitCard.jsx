import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import debitImg from "../../assets/svg/debit.svg"


const DebitCard = () => {
    return(
        <DebitContainer>

           <DebitWrapper>
           <DebitSub>
                <h1>
                Your phone +
                our app +
                a debit card =
                a simpler life.
                </h1>
                <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>

                <Link to="">
                <Acco>
                <span>Open An Account in Minutes</span>
                <IoIosArrowForward/>
                </Acco>
                </Link>
            </DebitSub>

            <DebitImg>
                <img src={debitImg} alt="" />
            </DebitImg>
           </DebitWrapper>

        </DebitContainer>
    )
}

export default DebitCard

const DebitContainer = styled.div`
   max-width: 1280px;
   margin: 0 auto;
`
const DebitWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const DebitSub = styled.div`
   width: 350px;
   h1{
    font-size: 35px;
    font-weight: 800;
    color: #5e025e;
   } 
   p{
    font-weight: 600;
   }
`

const Acco = styled.div`
    span{
        font-weight: 700;
    }
`

const DebitImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`