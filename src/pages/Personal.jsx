import Cardlist from "../components/personal/Cardlist"
import Choose from "../components/personal/Choose"
import DebitCard from "../components/personal/DebitCard"
import Floating from "../components/personal/Floating"
import Hero from "../components/personal/Hero"
import Logos from "../components/personal/Logos"
import Manage from "../components/personal/Manage"
import Moneybox from "../components/personal/Moneybox"
import More from "../components/personal/More"
import Partner from "../components/personal/Partner"
import SocialMedia from "../components/personal/SocialMedia"
import ThreeApp from "../components/personal/ThreeApp"
import Transparenc from "../components/personal/Transparenc"


const Personal = () => {
    return(
        <div>
            <Hero/>
            <Cardlist/>
            <DebitCard/>
            <Manage/>
            <Floating/>
            <Logos/>
            <Partner/>
            <Choose/>
            <More/>
            <Moneybox/>
            <Transparenc/>
            <ThreeApp/>
            <SocialMedia/>
        </div>
    )
}

export default Personal