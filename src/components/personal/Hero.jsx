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
                        <img src={googl} alt="" />
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
    margin-left: 80px;

    h1{
        font-weight: 700;
        font-size: 45px;
        line-height: 50px;
        color: #5e025e;
    }

    p{
        /* margin-top: -15px; */
        font-size: 20px;
        font-weight: 600;
    }

`
const Store = styled.div`
    display: flex;
    height: 50px;
    margin: 20px 0;
    border: none;
    outline: none;
    gap: 20px;
`

const Cbn = styled.div`
    img{
        width: 400px;
    }
`

const HeroFather = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
    align-items: center;
    width: 85%;
    /* border: 1px solid blue; */
    margin-top: -30px;

`
const Rotat = styled.div`
    img{
        width: 400px;
        margin-right: 80px;
        /* border: 1px solid black; */
    }
`
