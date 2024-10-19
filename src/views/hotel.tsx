import { useState } from "react"
import { AssistedBy } from "../components/common/assisted"
import { Requirement } from "../components/common/requirement"
import { Search } from "../components/common/search"
import { ProjectForm } from "../components/common/project-form"

export const Hotel = () =>{
    const [open, setOpen] = useState(false)
    const text= {
        one:["Verified hotels in terms of location, construction, price quotes, legalities, rental yield ,ROI  etc.", "We then actively work with owner and potential buyer to facilitate the entire deal."],
        two:["Advice from top real estate consultants.","Verified properties with end to end services.",
        
            "Find the Best deals, we offer rates like never before.",
             
             "No fake commitments.",
             
           "Zero brokerage",
             "After buying support- we'll help out in resale of the property."]
    }
     return(
        <>
        <Search/>
        <AssistedBy text={text}/>
        <Requirement formOpen={setOpen}/>
        <ProjectForm formProps={{open, setOpen}}/>
        
        </>
    )
}