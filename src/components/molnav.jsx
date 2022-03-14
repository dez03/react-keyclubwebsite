import "../styles/molNavStyles.css";
import { VscHome } from "react-icons/vsc";

export default function MolNav(){
  return (
    <div>
      <div className="navContainer">
        <VscHome size={50} className="homeIcon" />
      </div>
    </div>
  )
}
