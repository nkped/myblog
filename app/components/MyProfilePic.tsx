import Image from "next/image";

import React from 'react'

export default function MyProfilePic() {
  return (
    <section>
        <Image
         src="/images/IMG_20210522_184758_resized_20230324_110358654.jpg"
         width={200}
         height={200}
         alt="nkp"
         priority={true}/>
    </section>
  )
}