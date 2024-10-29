import styled from "styled-components"

const Anime = () => {
    const Slid = [
            {
                description: 'I  like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!',
                picture: 'Adebambo Oyekan'
            },

            {
                description: 'I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.',
                
                picture: 'Ifeanyichukwu Obaji'
            },

            {
                description: 'Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah',
                
                picture: 'Muazu Muhammad Kudu'
            },

            {
                description: 'Just joined the best Digital Bank in Nigeria.I have no complaints whatsoever since i started using Kuda',
                
                picture: 'Tomisinv'
            },


            {
                description: 'Never thought an app would stylish become my everyday way to bank and have access to physical cash.@kudabank is sleek',
                
                picture: 'Babajide Duroshola'
            },

            {
                description: 'This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!',
                
                picture: '@RealSOK_'
            }
    ]
    
    

    return(
        <AnimeWrapper>
            <InsAnime>
            {Slid.map((lide, index) =>(
                <Animeitem key = {index}>
                   {lide.description}
                   {lide.picture}
                </Animeitem>
            ))} 
            </InsAnime>
        </AnimeWrapper>
    )
}

export default Anime

const AnimeWrapper = styled.div`
    max-width: 1280px; 
    margin: 0px auto;
`
const InsAnime = styled.div`
    width: 85%; 
   margin: 0px auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   gap: 20px;
`
const Animeitem = styled.div`
   width: 100%;
     /* display: flex; */
     /* flex-direction: column; */
     padding: 20px;
     max-width: 300px;
     height: 100px;
     background-color: white;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
     border-radius: 10px;
     color: black;
     font-weight: 600; 
`