import image1 from '../../assets/image-1.png'
import image2 from '../../assets/image-2.png'
import image3 from '../../assets/image-3.png'
import image4 from '../../assets/image-4.png'
export const InfoGrid =()=>{
    return (
        <div className="p-8 bg-primary">
        <div className="w-full lg:w-1/3 p-8" >
            <h1 className="text-secondary text-3xl">
                We are the fastest growing real estate company

            </h1>
        </div>

        
<div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-3 place-items-stretch gap-4 p-8 ">
    <div className="lg:col-span-2 lg:row-span-2"><img className='w-full h-full'  src={image1}></img></div>
    <div className="lg:col-span-2 lg:col-start-3 row-start-1"><p>We are fastest growing real estate company with an utmost believer of fast expansion mode strategy with greater sustainability and profitability. Providing unavailable solution to each entity belongs to real estate is our only mission.</p></div>
    <div className="lg:col-start-5 lg:row-start-1"><img className='w-full h-full' src={image2}/></div>
    <div className="lg:col-span-3 lg:col-start-3 row-start-2"><img className='w-full h-full' src={image3} /></div>
    <div className="lg:col-span-5 lg:col-start-1 row-start-3"><img className='w-full h-full' src={image4}/></div>
</div>
    
        </div>
    )
}