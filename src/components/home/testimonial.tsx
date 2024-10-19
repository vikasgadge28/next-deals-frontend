import { CardTestimonial } from "./card-testimonial"

export const Testimonial=()=>{
    return (
        <>
        <h2 className=" w-full text-center text-2xl my-4">Testimonials</h2>
        <div className="lg:flex  flex-col lg:flex-row justify-evenly space-x-4 p-8">
            <CardTestimonial/>
            <CardTestimonial/>
            <CardTestimonial/>
        </div>
        </>
    )
}