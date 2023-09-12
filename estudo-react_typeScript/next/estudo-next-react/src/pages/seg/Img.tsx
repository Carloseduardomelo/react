import ImgAlt from "@/components/imagensAlt";
import { useState } from "react";

export default function Img() {
  return(
    <div className={`w-screen h-screen flex items-center justify-center gap-10`}>
        <ImgAlt />
        <ImgAlt />
    </div>
  )
}
