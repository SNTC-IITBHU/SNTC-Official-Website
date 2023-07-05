import EventHero from './EventsHero'
import Technexevents from './Technexevents'
import Flagship from './Flagship'
import ClubShowcase from './ClubShowcase'
const EventsPage=()=>{
    return(
        <div >
        <EventHero></EventHero>
        <ClubShowcase></ClubShowcase>
        <Technexevents></Technexevents>
        <Flagship></Flagship>
        </div>
    )
}
export default EventsPage