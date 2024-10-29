import styled from "styled-components"
import valaar from "../../assets/svg/Valaar.svg"
import entree from "../../assets/svg/entree.svg"
import sbi from "../../assets/svg/sbi.svg"
import target from "../../assets/svg/target.svg"
import visa from "../../assets/svg/visa.svg"

const Partner = () =>{
    return (
        <Wrapper>
            <Container>
                <h2>Our Partners</h2>

                <Imagecont>
                    <img src= {valaar} alt="valaar" />
                    <img src= {entree} alt="entree" />
                    <img src= {sbi} alt="sbi" />
                    <img src= {target} alt="target" />
                    <img src= {visa} alt="visa" />
                </Imagecont>
            </Container>

        </Wrapper>
    )
}

export default Partner
 
const Wrapper = styled.div`
    /* max-width: 1280px; */
    margin: 0 auto;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    background-color: #fbfbfb;
    height: auto;
    text-align: center;

    h2 {
        margin: 60px 0;
        font-size: 40px;
        color: #40196d;
    }

@media (max-width: 800px) {
    h2{
        font-size: 28px;
    }
}
`
const Imagecont = styled.div`
    width: 70%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 80px auto;
    cursor: pointer;

    img{
        /* padding: 30px; */
        max-width: 200px;
    }
`