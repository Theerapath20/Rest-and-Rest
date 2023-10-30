import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from '../../Detail/Accordion'
function Value() {
  return (
    <section className="value-wrap">
      <div className="paddings innerWidth flexCenter value-container">
        {/* left side */}
        <div className="value-left">
          <div className="img-content">
            <img src="./sea-right.jpg" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className=" flexColStart value-right">
          <span className="orangeText">Our value</span>
          <span className="primaryText">Value we give to you</span>
          

          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}>
             {data.map((item,i) =>{
                const [className, setClassName] = useState(null)
               return (
                      <AccordionItem className= {`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className="flexCenter accordionButton">

                                <AccordionItemState >
                                    {
                                        ({expanded}) =>
                                        expanded
                                        ? setClassName("expanded")
                                        : setClassName("collapsed")
                                    }
                                </AccordionItemState>
                                <span className="icon flexCenter">{item.icon}</span>
                                <span className="primaryText">{item.heading}</span>
                                <span className="icon flexCenter">
                                    <MdOutlineArrowDropDown size={20} />
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
               );
             })}

          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
