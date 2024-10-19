import banner from '../../assets/banner.png'
import underline from '../../assets/underline.png'

export const Mentor=()=>{
    return (
        <div className='bg-primary grid lg:grid-cols-2 gap-4 p-8 place-items-center'>
            <div className='bg-gray-200'>

                <img src={banner}/>



            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-secondary'>Our Mentor</h1>
                <img className='w-64' src={underline}/>

            </div>

        </div>
    )
}