import { Benefits } from "../components/home/benefits"
import { Hero } from "../components/home/hero"
import { Testimonial } from "../components/home/testimonial"
import { WhyJoin } from "../components/home/why-join"

export const Home = ()=>{
    return (
        <>
        <Hero/>
        <Testimonial/>
        <WhyJoin/>
        <Benefits/>
        </>
    )
}