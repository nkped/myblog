import Image from "next/image";

import React from 'react'

export default function MyProfilePic() {
  return (
      <section className="w-full mx-auto">
          <Image
              className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
              src="/images/20230514_171044 (1) (1).jpg"
              width={200}
              height={200}
              alt="Nils-Kristian Pedersen"
              priority={true}
          />
      </section>
  )
}