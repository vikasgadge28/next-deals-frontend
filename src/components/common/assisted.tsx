import bookmark from '../../assets/icons/bookmark.png'
import assist1 from '../../assets/assist-1.png'
import assist2 from '../../assets/assist-2.png'
export const AssistedBy = ({text})=>{
    console.log(text.one)
    return (
        <div className="p-12  bg-primary">
            <div className='flex gap-2 items-center'>

            <h1 className="text-2xl "><span className="text-secondary">Assisted</span> by Nextopson </h1>
            <img className='aspect-auto w-4 h-6' src={bookmark}></img>
            </div>

            <div className='w-full grid lg:grid-cols-2 mb-8 place-items-center'>
                <div>
                <h2 className='py-4'>What is assisted?</h2> 
                <div className='grid lg:grid-cols-2  gap-6'>
                   {text.one && text.one.map((points:string)=>
                    (<div className='border-[1px] border-accent p-4 rounded-lg text-sm'>
                        <p>{points}</p>

                    </div>)
                   ) }
                   
                   
                   
                </div>

                </div>
                <img src={assist1} className='w-[400px]'></img>
            </div>
            <div className='w-full grid lg:grid-cols-2 place-items-center pt-8 my-8'>
            <img src={assist2} className='w-[450px]'></img>
                <div>
                <h2 className='py-4'>What are the benefits with Assisted?</h2> 
                <div className='grid grid-cols-2  gap-6'>
                   {text.two && text.two.map((points)=>(<div className='border-[1px] border-accent p-4 rounded-lg text-sm'>
                        <p>{points}</p>

                    </div>)) }
                   
                    
                   
                </div>

                </div>
                
            </div>

        </div>
    )
}