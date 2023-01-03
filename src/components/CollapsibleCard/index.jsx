import styled from 'styled-components';
import {useState} from 'react';
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const AboutTitle = styled.div`
  background-color:#FF6060;
  color:white;
  display : flex;
  flex-direction:row;
  justify-content: space-between;
  border-radius:5px;
  padding-left: 5px;
`
const AboutParagraph = styled.div`
  background-color:#F6F6F6;
  color:#FF6060;
  padding: 10px 5px 10px 5px;
`

function CollapsibleCard({title, description}) {
    const [open, setOPen] = useState(true);
  const toggle = () => {
    setOPen(!open);
  };
  const iconButton = open ? <AiOutlineUp onClick={toggle}/> : <AiOutlineDown onClick={toggle}/>;
    return (
        
      <div>
        <AboutTitle className="aboutTitle">
          {title}
          {iconButton}
        </AboutTitle>
        {open && (<AboutParagraph>{description}</AboutParagraph>)}
      </div>
    )
  }
  
  export default CollapsibleCard