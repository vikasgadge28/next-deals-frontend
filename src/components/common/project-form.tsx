import { Button, Dialog, DialogHeader, Input } from "@material-tailwind/react"
import imageForm from '../../assets/image-form.png'

export const ProjectForm =({formProps})=>{
    const {open, setOpen} = formProps;
    return (
        <Dialog className="p-4 " size="xl" open={open} handler={()=>setOpen(!open)}>
            <DialogHeader className="text-center justify-center text-lg  w-full">Fill in the the form so that we can contact you</DialogHeader>
            <div className="grid  grid-cols-2 place-items-center ">
            <div className="grid lg:grid-cols-2 gap-8 items-end text-xs ">
                        <div>
                            <h4 className='py-2'>City</h4>
                            <div >
                           <Input label='Enter your city'></Input>

                            </div>

                           
                        </div>
                        <div>
                            <h4 className='py-2'>Firm name</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Rera ID</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Phone no.</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Email id</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <Button className='capitalize bg-secondary p-4'>Request call back</Button>
                        </div>
                       
                    </div>
                    <img src={imageForm} className="w-[300px] lg:block hidden"></img>
            </div>
        </Dialog>
    )
}