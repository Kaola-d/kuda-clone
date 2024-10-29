import styled from "styled-components"
import googl from "../../assets/svg/googlepl.svg"
import appst from "../../assets/png/appst.png"

const Hero = () => {
    return(
        <Parent>
            <HeroFather>
                <HeroContainer>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <div>
                    <Store>
                        <img src={appst}alt="" />
                    </Store>
                </div>
                <Cbn>
                    <img src="./cbn.png" alt="" />
                </Cbn>
            </HeroContainer>
            <Rotat>
                <img src="./rot.png" alt="" />
            </Rotat>
                </HeroFather>
        </Parent>

       
    )
}

export default Hero

const Parent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    margin: 0px auto;


`
const HeroContainer = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    /* margin-left: 80px; */
    align-items: center;

    h1{
        font-weight: 700;
        font-size: 45px;
        line-height: 50px;
        color: #5e025e;
        /* text-align: center; */
    }

    p{
        /* margin-top: -15px; */
        font-size: 20px;
        font-weight: 600;
    }

    @media (max-width: 800px) {
        text-align: center;
        width: 100%;
        h1{
            font-size: 35px;
        }
        p{
            font-size: 18px;
        }
    }

`
const Store = styled.div`
    display: flex;
    height: 40px;
    /* margin: 0 auto; */
    /* align-items: ; */
    img{
        width: 250px;
    }
`

const Cbn = styled.div`
    img{
        width: 300px;
    }
`

const HeroFather = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
    align-items: center;
    width: 85%;
    /* border: 1px solid blue; */
    margin-top: -10px;

`
const Rotat = styled.div`
    img{
        width: 400px;
    }

    @media (max-width: 800px) {
       img{
        width: 280px;
       }
    }

`
