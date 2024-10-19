import { Achievements } from "../components/about/achievement"
import { InfoGrid } from "../components/about/info-grid"
import { Mentor } from "../components/about/mentor"
import { OurStory } from "../components/about/our-story"

export const About=()=>{
    return (
        <>
        {/* video section */}
        <div className="w-full h-screen grid place-items-center p-8 bg-primary" >
            <h1 className="text-secondary text-3xl"> Video placeholder</h1>
        </div>


        {/* grid information section */}

        <InfoGrid/>

        {/* our story section  */}

        <OurStory/>

        <Mentor/>
        <Achievements/>

        </>
    )
}