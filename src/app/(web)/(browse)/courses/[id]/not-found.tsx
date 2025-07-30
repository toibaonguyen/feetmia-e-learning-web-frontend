
import { PATH_HOME } from "@/constants/paths.constant";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img src={"/assets/notfound/robot.PNG"} className="w-xl h-96"/>
      <h1 className="mt-4 font-bold text-3xl">Not Found</h1>
      <p className="text-md text-muted-foreground text-center w-xl">This course no longer exists or has been removed.</p>
      <a className="mt-2 text-primary font-bold text-lg w-xl text-center" href={PATH_HOME}>Return Home</a>    
    </div>
  )
}