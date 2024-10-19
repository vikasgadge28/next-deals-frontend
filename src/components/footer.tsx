import logo from '../assets/logo.png'
import arrowRight from '../assets/icons/arrow-right.png'
import youtube from '../assets/icons/socials/youtube.png'
import x from '../assets/icons/socials/x.png'
import insta from '../assets/icons/socials/insta.png'
import fb from '../assets/icons/socials/fb.png'
import linkedin from '../assets/icons/socials/linkedin.png'
import { Input } from '@material-tailwind/react'

export const Footer = ()=>{

    return (
        <>
        <div className='w-full p-8 rounded-t-3xl bg-blue-100'>
            <img  src={logo} className='w-[200px] py-4' ></img>
            <div className='flex flex-col lg:flex-row justify-between p-4 gap-8 '>
                <div className='col-span-1 grid grid-cols-2 lg:grid-cols-1  gap-4'>
                    <div>
                        <h1>Our socials</h1>
                        <div className='flex gap-2 '>
                            <img src={fb} className='w-8 h-8'></img>
                            <img src={insta} className='w-8 h-8'></img>
                            <img src={linkedin} className='w-8 h-8'></img>
                            <img src={youtube} className='w-8 h-8'></img>
                            <img src={x} className='w-8 h-8'></img>
                        </div>
                        
                    </div>
                    <div>
                        <h1>Stay updated with the latests</h1>
                        <div className='bg-primary rounded-lg'>

                       <Input   label='Enter you Email' icon={<img src={arrowRight} className='w-2 flex items-center'></img>}></Input>
                        </div>
                    </div>

                </div>
                <div className=' grid grid-cols-4 gap-4 p-4 text-sm '>
                    <div   className='flex flex-col gap-2'>
                        <h1 className='text-secondary text-lg'>Home</h1>
                        <h2> About us</h2>
                        <h2> Careers</h2>
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <h1 className='text-secondary text-lg'>About us</h1>
                        <h2> Know us</h2>
                        <h2> Our Team</h2>
                        <h2> Testimonials</h2>
                        <p>Our awards<br/> and achievements</p>
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <h1 className='text-secondary text-lg'>Solutions</h1>
                        <h2> Developers</h2>
                        <h2> Consumers</h2>
                        <h2> Channel partners</h2>
                      
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <h1 className='text-secondary text-lg'>Next Deals</h1>
                        <h2>Projects</h2>
                        <h2>Lands</h2>
                        <h2>Hotels</h2>
                        
                    </div>


                </div>
            </div>
        </div>

        </>
    )
}