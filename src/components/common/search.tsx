import { Button, Option, Select } from "@material-tailwind/react"

export const  Search = () => {
return (
    <div className="w-full h-1/2 bg-primary p-24">
        <h1 className="text-secondary text-2xl text-center p-8">Tagline</h1>

        <div className="grid place-items-center ">
        <div className="border-[1px] border-accent flex flex-wrap rounded-xl ">
            <div className="p-2 flex ">
            <Select label="City" className="border-none">
                <Option>Bhopal</Option>
            </Select>
            <div className="border-l-2 border-accent w-full">

            <Select label="Property type" className="border-none">
                <Option>Bhopal</Option>
            </Select>
            </div>

            </div>
    
            <Button className="capitalize text-lg font-medium bg-secondary rounded-l-none">Search</Button>
        </div>

        </div>
    </div>

)
}