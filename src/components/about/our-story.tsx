import imgLeft from '../../assets/story-left.png'
import imgRight from '../../assets/story-right.png'
export const OurStory = ()=>{
    return(
        <div className='grid lg:grid-cols-2 gap-16 place-items-center p-16 bg-primary'>
            <img src={imgLeft} className='w-1/2'/>
            <div >
                <h2 className='text-secondary text-xl pb-4'>Our story</h2>
                <p>We started as a proptech company in 2023 ,and after working more that 50+ developers in lead generation, follow ups and site visits. We found thar developers are not getting enough conversions because of their team structure ( like not having expert team in terms of customer handling, follow ups and final closing ), tech support , strategic marketing. </p>

            </div>
            <p>And when our curious and innovator minds took a deep dig into this whole spectrum we came up with a solution of expert sales team, CRM software (coming soon), new trends of marketing etc. This led us to be in a complete partnership with developers as their sales partner. Not only for developers we also came up with solutions for our customers by providing end to end services which includes consultation, site visits , negotiations, financing, documentation, closing, possession etc.</p>
            <img src={imgRight} className='w-[400px]'  />
        </div>

    )
}