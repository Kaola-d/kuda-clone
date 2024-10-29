import manageImg from "../../assets/svg/manage.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import seriousImg from "../../assets/svg/serious.svg"
import blockImg from "../../assets/svg/block.svg"
import happyImg from "../../assets/svg/happy.svg"
import glassImg from "../../assets/svg/glass.svg"

const Manage = () => {
    return(
        <ManageContainer>

           <ManageWrapper>

           <ManageImg>
                <img src={manageImg} alt="" />
            </ManageImg>

           <ManageSub>
                <h1>
                It’s your money, we just help you manage it.
                </h1>
                <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>

            </ManageSub>
           </ManageWrapper>

           <SeriouslyWrapper>
           <SeriouslySub>
                <h1>
                Save money as you spend it, seriously.
                </h1>
                <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>

                <Link to="">
                <Serious>
                <span>See all our Savings</span>
                <IoIosArrowForward/>
                </Serious>
                </Link>
            </SeriouslySub>

            <SeriouslyImg>
                <img src={seriousImg} alt="" />
            </SeriouslyImg>
           </SeriouslyWrapper>


           <BlockWrapper>

                <BlockImg>
                    <img src={blockImg} alt="" />
                </BlockImg>

            <BlockSub>
                <h1>
                Turn off access, turn on safety.
                </h1>
                <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>

                <Link to="">
                <Bllock>
                <span>Learn more about Cards</span>
                <IoIosArrowForward/>
                </Bllock>
                </Link>

            </BlockSub>
            </BlockWrapper>


            <HappyWrapper>
           <HappySub>
                <h1>
                We’re always happy to help you.
                </h1>
                <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>

                <Link to="">
                <Happy>
                <span>Get Help</span>
                <IoIosArrowForward/>
                </Happy>
                </Link>
            </HappySub>

            <HappyImg>
                <img src={happyImg} alt="" />
            </HappyImg>
           </HappyWrapper>


           <GlassWrapper>

            <GlassImg>
                <img src={glassImg} alt="" />
            </GlassImg>

            <GlassSub>
                <h1>
                Fees as clear as glass.
                </h1>
                <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>

            <Link to="">
            <Glass>
                <span>See all our fees</span>
                    <IoIosArrowForward/>
                </Glass>
            </Link>

            </GlassSub>
            </GlassWrapper>


            <Take>
            <h1>Don’t just take our word for it</h1>
            </Take>

        </ManageContainer>
    )
}

export default Manage

const ManageContainer = styled.div`
   max-width: 1280px;
   margin: 0 auto;
`
const Take = styled.div`
    text-align: center;
`

const ManageWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const ManageSub = styled.div`
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


const ManageImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`


        // <SeriouslyContainer>

           
        // </SeriouslyContainer>



// const SeriouslyContainer = styled.div`
//    max-width: 1280px;

const SeriouslyWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const SeriouslySub = styled.div`
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

const Serious = styled.div`
    span{
        font-weight: 700;
    }
`

const SeriouslyImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`

const BlockWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const BlockSub = styled.div`
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

const Bllock = styled.div`
    span{
        font-weight: 700;
    }
`


const BlockImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`


const HappyWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const HappySub = styled.div`
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

const Happy = styled.div`
    span{
        font-weight: 700;
    }
`

const HappyImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`


const GlassWrapper = styled.div`
     width: 85%;
     display : flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0px auto;
`

const GlassSub = styled.div`
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

const Glass = styled.div`
    span{
        font-weight: 700;
    }
`


const GlassImg = styled.div`
    width: 400px;
    img{
        width: 500px;
    }
`