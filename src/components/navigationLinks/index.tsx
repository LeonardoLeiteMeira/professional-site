import LargeNavigationLink from "./large";
import SimpleNavigationLink from "./simple";
import { PageLink } from "@/assets/constants";

const links:Array<PageLink> = [
  {
    name:"Work Experience",
    link:"/works"
  },
  {
    name:"Work Methodoly",
    link:"/workMethodology"
  },
  {
    name:"About",
    link:"/about"
  },
]

interface Props{
  type: "Large"|"Simple"
}

export default function NavigationLinks({type}:Props){
  
    return (
    <>
      {
        type==="Large"?
          <LargeNavigationLink links={links} />:
          <SimpleNavigationLink links={links}/>
      }
    </> 
    )
}