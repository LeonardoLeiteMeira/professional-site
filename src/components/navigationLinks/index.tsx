import LargeNavigationLink from "./large";
import SimpleNavigationLink from "./simple";
import { links } from "@/assets/constants";

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