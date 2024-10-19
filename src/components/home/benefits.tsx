export const Benefits = ()=>{
    return (
        <div className="w-full  py-8 ">
            <h1 className="w-full text-center text-xl p-4">Benefits for Our Developers</h1>
            <div className="flex flex-col space-y-8  items-center text-primary">
                <div className="grid grid-cols-3 place-items-center space-x-8">
                    <Card><h2>Team cost will come to zero</h2></Card>
                    <Card><h2>Dedicated team working for brand building and selling</h2></Card>
                    <Card><h2>Extra sales and excellent team</h2></Card>
                </div>
                <div className="grid grid-cols-2 space-x-8 place-items-center" >
                    <Card><h2>Inventory management and ease</h2></Card>
                    <Card><h2>Promotion and multiple strategies</h2></Card>

                </div>
            </div>
        </div>
    )


}

function Card({children}){
    return (
        <div className="w-[250px] h-[100px] bg-accent p-6 rounded-xl ">{children}</div>
)
}
