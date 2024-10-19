import { useState } from "react"
import { AssistedBy } from "../components/common/assisted"
import { Requirement } from "../components/common/requirement"
import { Search } from "../components/common/search"
import { ProjectForm } from "../components/common/project-form"

export const Land = ()=>{
    const [open, setOpen] = useState(false)
    const text = {
        one:["Verified lands in terms of legalities and price quoted.", "Complete hand holding starting from site visit till the ownership of the land."],
        two:["Advice from top real estate consultants.","Verified properties with end to end services.",
        
            "Find the Best deals, we offer rates like never before.",
             
             "No fake commitments.",
             
           "Zero brokerage",
             "After buying support- we'll help out in resale of the property."]
    }
    return (
        <>
        <Search/>
        <AssistedBy text={text}/>
        <Requirement formOpen={setOpen}/>
        <ProjectForm formProps={{open, setOpen}}/>
        
        </>
    )
}