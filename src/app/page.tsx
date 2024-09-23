import React from 'react'
import HERO from "../app/components/landing-page/heroComponent/main"
import EDU from "../app/components/landing-page/EducationOfferings/main"
import SECURE from "../app/components/landing-page/Secure/main"
import TOOLS from "../app/components/landing-page/LearningTools/main"
import WHYUS from "../app/components/landing-page/whyUS/main"
import SUPPORT from "../app/components/landing-page/Support/main"
const page = () => {
  return (
    <div>
      <HERO/>   
      <EDU/>
      <SECURE />
      <TOOLS/>
      <WHYUS/>
      <SUPPORT/>

    </div>
  )
}
  
export default page 