import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'
import { FaLaptop } from "react-icons/fa"
import Link from 'next/link'

export const revalidate = 86400




export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-amber-700 text-amber-500">
        Velkommen til min blog
        <span className="whitespace-nowrap">
        </span>
      </p>
      <p className="mt-12 mb-12 text-1xl text-center dark:text-white">Jeg er webudvikler, der har fundet sit hjem i ReactJs og NextJs(Typescript). Jeg søger en virksomhed, hvor jeg kan opbygge erfaring og forhåbentlig bidrage med at løse opgaver.</p>
      <p className="mt-12 mb-12 text-1xl text-center dark:text-amber-600 text-amber-500"> Praktikken er gratis.</p>
      <p className="mt-12 mb-12 text-1xl text-center dark:text-white">Følg labtop-ikonet for et hurtigt kig på vilkårene, eller kontakt mig og hør nærmere.</p>
      <Link className="text-white/90 hover:text-white" href="https://nkped.github.io/">
      <div className="text-white/90 hover:text-white text-5xl lg:text-6xl flex justify-center dark:text-amber-700 text-amber-500">
          <FaLaptop />
      </div>
        
      </Link>
      <Posts />
    </div>
  )
}