import { Button } from "../ui/button"


const CallToAction = () => {
  return (
    <div className="w-[15rem] md:w-[20rem]">
        <div className="flex flex-col justify-center items-center p-8">
            <div className="font-extrabold md:text-2xl mb-4 ">
                Featured Products
            </div>
            <Button className="w-full">Buy Now</Button>
        </div>
    </div>
  )
}

export default CallToAction