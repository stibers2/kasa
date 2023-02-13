import '../../assets/css/collapsible.css';
import {useState} from 'react';
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";


function CollapsibleCard({title, description}) {
    const [open, setOPen] = useState(true);
  const toggle = () => {
    setOPen(!open);
  };
  const iconButton = open ? <AiOutlineUp onClick={toggle}/> 
  : <AiOutlineDown  onClick={toggle}/>;
    return (
        
      <div>
        <div className="aboutTitleCollapsible">
          {title}
          {iconButton}
        </div>
        {open && (<div className="aboutParagraphCollapsible">{description}</div>)}
      </div>
    )
  }
  
  export default CollapsibleCard