
import { Button } from '@material-tailwind/react'
import temp from '../../assets/avatar.png'

export const CardTestimonial = ()=>{

    return (
        <div className="flex p-4  shadow-lg rounded-xl  ">
            <div><div className="p-2 rounded-full "><img src={temp} className='w-[300px]' /></div></div>
            <div className='ml-4'>
                <div><h5 className='text-xs'>Given by: Saloni</h5> 
                <h2 className=' pt-2'>GHF Builder
                </h2>
                <p className='text-xs text-overflow: ellipsis '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, id soluta. Quia suscipit exercitationem ipsum ducimus deleniti ab magnam, quidem perferendis! Assumenda, pariatur veritatis eveniet provident repellendus sapiente cupiditate odit?
                </p>
                </div>
                <div className='mt-2'>
                    <Button className=' capitalize bg-secondary px-4 py-2'> Read more</Button>
                </div>
                
            </div>
        </div>
    )
}