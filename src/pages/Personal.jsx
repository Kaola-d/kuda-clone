import Anime from "../components/personal/Anime"
import Cardlist from "../components/personal/Cardlist"
import DebitCard from "../components/personal/DebitCard"
import Hero from "../components/personal/Hero"
import Manage from "../components/personal/Manage"


const Personal = () => {
    return(
        <div>
            <Hero/>
            <Cardlist/>
            <DebitCard/>
            <Manage/>
            <Anime/>
        </div>
    )
}

export default Personal