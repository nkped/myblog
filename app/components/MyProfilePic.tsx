import Image from "next/image";

import React from 'react'

      
export default function MyProfilePic() {
  return (
          <Image
              className="border-4 border-solid dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
              src="/images/20230514_171044 (1) (1).jpg"
              width={100}
              height={100}
              alt="Nils-Kristian Pedersen"
              priority={true}
          />
  )
}