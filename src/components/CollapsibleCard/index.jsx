import './index.css';
import {useState} from 'react';
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";


function CollapsibleCard({title, description}) {
    const [open, setOPen] = useState(true);
  const toggle = () => {
    setOPen(!open);
  };
  const iconButton = open ? <AiOutlineUp onClick={toggle}/> : <AiOutlineDown onClick={toggle}/>;
    return (
        
      <div>
        <div className="aboutTitle">
          {title}
          {iconButton}
        </div>
        {open && (<div className="aboutParagraph">{description}</div>)}
      </div>
    )
  }
  
  export default CollapsibleCard