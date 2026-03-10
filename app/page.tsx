import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'
import { FaLaptop } from "react-icons/fa"
import Link from 'next/link'
import { MdOutlineWavingHand } from "react-icons/md";

export const revalidate = 86400


{/* <span className="whitespace-nowrap"></span>*/}


export default function Home() {
  return (
    <div className="flex flex-col dark:text-white/90">
      <div className="mt-5 flex justify-center">
      <MyProfilePic />
          </div>

      <div className="mx-7 mt-4 pb-5 flex justify-center items-center text-2xl font-semibold
      border-b-2 border-solid border-white/20"> <span className="me-1">Hej</span> <span className="text-yellow-500 text-4xl"><MdOutlineWavingHand /></span></div>

      <p className="mt-8 text-xl text-left dark:text-white/90">Mangler din virksomhed en webudvikler der arbejder i Next.js og .net?</p>
        
        <p className="mt-12 mb-12 text-xl text-left dark:text-white/90"> Jeg søger en virksomhed, hvor jeg kan bidrage med at løse opgaver, opbygge min erfaring og øge min læring.</p>

      <p className="text-1xl text-center dark:text-amber-600 text-amber-500"> Praktikken er gratis.</p>
      <p className="mt-12 mb-12 text-1xl text-center dark:text-white/90">Følg labtop-ikonet for et hurtigt kig på vilkårene, eller kontakt mig og hør nærmere.</p>
      <Link className="text-white/90 hover:text-white" href="https://nkped.github.io/">
      <div className="text-white/90 hover:text-white text-5xl lg:text-6xl flex justify-center dark:text-amber-700 text-amber-500">
          <FaLaptop />
      </div>
        
      </Link>
      <Posts />
    </div>
  )
}