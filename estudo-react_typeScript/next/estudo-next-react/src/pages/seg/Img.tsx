import ButtonRouter from "@/components/button/button";
import ImgAlt from "@/components/imagensAlt";
import { useState } from "react";

export default function Img() {
  return(
    <div className={`w-screen h-screen flex items-center justify-center flex-col gap-10`}>
      <div className={`w-screen h-[90%] flex items-center justify-center gap-10`}>
          <ImgAlt />
          <ImgAlt />
      </div>
      <div className={`flex gap-11 h-[10%]`}>
          <ButtonRouter text={`seg/cont`} para={`cont`}/>
          <ButtonRouter text={`ter/Faq`} para={`Faq`}/>
          <ButtonRouter text={`ter/Liste`} para={`List`} />
          <ButtonRouter text={`ter/Protudos`} para={`protutos`} />
          <ButtonRouter text={`quar/Grid`} para={`Grid`} />
      </div>

    </div>
  )
}
