import React, { useEffect, useState } from "react";
import './changeGrades.css'
export function ChangeGrades() {
    const [btnFar, setBtnFar] = useState('');
    const [btnCel, setBtnCel] = useState('');
    useEffect(()=>{
        if(localStorage.getItem('gradesFar') === 'true'){
            setBtnFar('btn-selected')
        }else{
            setBtnCel('btn-selected')
        }
    });
    const ChangeGrader = (e)=>{
        const {value} = e.target
        if(value === "°F"){
            localStorage.setItem("gradesFar", true)            
            location.reload()
        }else{
            localStorage.setItem("gradesFar", false);
            location.reload()
        }
    }
    return(
        <div className="change-grades-section">
            <input className={`btn-grades ${btnFar}`} type="button" value="°C" onClick={ChangeGrader}/>
            <input className={`btn-grades ${btnCel}`} type="button" value="°F" onClick={ChangeGrader}/>
        </div>
    )
}