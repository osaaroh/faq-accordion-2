import React, { useState } from 'react';
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
const AccordionItem = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return <>
    <div className={`accordion-item ${showInfo && "accordion-item--active"}`} onClick={()=>setShowInfo(!showInfo)}>
      <div className="accordion-item--header">
          <h2>{title}</h2>
          <button className="accordion-item--header__btn" aria-label="accordion dropdown toggle" >
            <img src={`${showInfo?iconMinus:iconPlus}`} alt="" />
          </button>
      </div>
      {showInfo && <div className="accordion-item--text">
          <p>{info}</p>
      </div>}
      
    </div>
    
  </>
};

export default AccordionItem;
