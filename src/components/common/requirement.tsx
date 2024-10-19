import { Button } from "@material-tailwind/react"

export const Requirement=({formOpen})=>{
    return(
        <>
        
        <div className="grid relative  lg:grid-cols-2 bg-primary py-12 px-24 place-items-stretch gap-14">
            <div className="absolute w-full ">
            <svg className="absolute left-0 bottom-18" width="196" height="108" viewBox="0 0 196 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" clip-path="url(#clip0_130_199)">
<path d="M138.24 86.0698L166.61 106.08L195 86.0898" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.74 86.0298L53.11 106.04L81.49 86.0498L109.86 106.06" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M109.87 88.0598L138.25 68.0698L166.62 88.0798L195.01 68.0898" stroke="#FFC003" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-31.99 68.0098L-3.62999 88.0198L24.75 68.0298L53.12 88.0398L81.5 68.0498" stroke="#FFC003" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.8299 41.5799C52.3292 41.5799 60.0299 33.8792 60.0299 24.3799C60.0299 14.8806 52.3292 7.17993 42.8299 7.17993C33.3306 7.17993 25.6299 14.8806 25.6299 24.3799C25.6299 33.8792 33.3306 41.5799 42.8299 41.5799Z" fill="#FFC003"/>
<path d="M36.6399 35.4C46.1392 35.4 53.8399 27.6993 53.8399 18.2C53.8399 8.7007 46.1392 1 36.6399 1C27.1406 1 19.4399 8.7007 19.4399 18.2C19.4399 27.6993 27.1406 35.4 36.6399 35.4Z" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_130_199">
<rect width="229.01" height="107.08" fill="white" transform="translate(-33)"/>
</clipPath>
</defs>
</svg>
            <svg  className="absolute right-0 " width="196" height="108" viewBox="0 0 196 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" clip-path="url(#clip0_130_199)">
<path d="M138.24 86.0698L166.61 106.08L195 86.0898" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.74 86.0298L53.11 106.04L81.49 86.0498L109.86 106.06" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M109.87 88.0598L138.25 68.0698L166.62 88.0798L195.01 68.0898" stroke="#FFC003" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-31.99 68.0098L-3.62999 88.0198L24.75 68.0298L53.12 88.0398L81.5 68.0498" stroke="#FFC003" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.8299 41.5799C52.3292 41.5799 60.0299 33.8792 60.0299 24.3799C60.0299 14.8806 52.3292 7.17993 42.8299 7.17993C33.3306 7.17993 25.6299 14.8806 25.6299 24.3799C25.6299 33.8792 33.3306 41.5799 42.8299 41.5799Z" fill="#FFC003"/>
<path d="M36.6399 35.4C46.1392 35.4 53.8399 27.6993 53.8399 18.2C53.8399 8.7007 46.1392 1 36.6399 1C27.1406 1 19.4399 8.7007 19.4399 18.2C19.4399 27.6993 27.1406 35.4 36.6399 35.4Z" stroke="#0055F1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_130_199">
<rect width="229.01" height="107.08" fill="white" transform="translate(-33)"/>
</clipPath>
</defs>
</svg>

            </div>
            
            <div className="bg-white flex flex-col items-start gap-2  rounded-lg shadow-lg p-4 z-[1] ">
                <h1 className="text-xl">Didn't find what you are looking for?</h1>
                <p className=" text-sm">Post your requirements below so that we can help you find your dream property.</p>
                <Button  className="bg-secondary p-2 capitalize">Post Your Requirements</Button>
            </div>
            <div className="bg-white flex flex-col items-start gap-2 rounded-lg shadow-lg p-4 z-[1] ">
                <h1 className="text-xl ">Are you a <span className="text-secondary">Developer</span> or a <span className="text-secondary">Builder</span> ?</h1>
                <p  className=" text-sm">Reach out to sell your project faster</p>
                <Button onClick={()=>formOpen(true)} className="bg-secondary p-2 capitalize">Contact Now</Button>
            </div>
         </div>
         </>
    )
}