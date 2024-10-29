import styled from "styled-components"
import woman from "../../assets/png/woman.jpg"
import { useState } from "react"

const Card = () => {
    const [noOfLikes, setNoOfLikes] = useState(0)
    const [checkClick, setCheckClick] = useState(false)
    // const increaseLikes = () => {
    //     totalLikes = totalLikes + 1;
    // }

    const updateLikes = () =>{
        const add = noOfLikes + 1
        setNoOfLikes(add)
        setCheckClick(true)
        
    }
    return(
        <CarddWrapp>
            <CardWrap>
                <img src={woman} alt="" />
                <CardImg >
                    <CardWrapImg onClick={updateLikes}>Like</CardWrapImg>
                    <p>{noOfLikes}</p>
                </CardImg>
            </CardWrap>
        </CarddWrapp>
    )
}

export default Card

const CardWrap = styled.div`
    img{
        display: block;
        justify-content: center;
        width: 500px;
        height: 400px;
    /* border: 1px solid black; */
        margin: 0px auto;
    }

`

const CarddWrapp = styled.div`
    
`

const CardImg = styled.div`
    padding: 15px 25px;
    /* border: 1px solid red; */
    width: 50px;
    margin: 0px auto;
    text-align: center;
`

const CardWrapImg = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
`