import { useState } from "react"
import { AssistedBy } from "../components/common/assisted"
import { ProjectForm } from "../components/common/project-form"
import { Requirement } from "../components/common/requirement"
import { Search } from "../components/common/search"

export const Project= ()=>{
    const [open, setOpen] = useState(false)

    const text  = {one: ["Verified projects in through legalities, location, amenities, pricing.","Guaranteed deal in terms of price, ROI, rental yield etc." , "Facilitation of end to end services like Site visits, Consultation." ,"Home loans facilitation and documentation, stamp duty & registration process."],
    two:["Advice from top real estate consultants.","Verified properties with end to end services.",
        
       "Find the Best deals, we offer rates like never before.",
        
        "No fake commitments.",
        
      "Zero brokerage",
        "After buying support- we'll help out in resale of the property."]}
    return (
        <>
        <Search/>
        <AssistedBy text={text}/>
        <Requirement formOpen={setOpen}/>
        <ProjectForm formProps={{open, setOpen}}/>
        </>
    )
}