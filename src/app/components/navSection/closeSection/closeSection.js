import React, { useContext } from "react";
import './closeSection.css';
import { navContext } from "../../../context/navContext";

export function CloseSection() {
    const {setStatusNav} = useContext(navContext)
    const UndeployNav = (e)=>{
        e.preventDefault();
        setStatusNav(false);
    }
    return(
        <div className="nav-close-section">
            <a className='close-btn' href="#" onClick={UndeployNav}>
                <i className="fas fa-times"></i>
            </a>
        </div>
    )
}