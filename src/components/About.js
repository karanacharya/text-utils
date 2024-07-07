import React, { useState } from 'react'

export default function About() {
    const [mystyle, setstyle]= useState({
                color:'black',
                backgroundColor:'white'
    })
   const [btntext,setbtntext]=useState('Enable dark mode')
    
    const ToggleColor=()=>{
        if(mystyle.color=='black'){
            setstyle({
             color:'white',
             backgroundColor:'black'
            })
            setbtntext('Disable dark mode')
        }

       else{
        setstyle({
            color:'black',
            backgroundColor:'white'
           })
           setbtntext('Enable dark mode')
       }
    }
    
    
   

    

    
   
       
  return (
        <div>
        <div className="container" style={mystyle}>
            <h1 className="my-3" >About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header" id="headingOne" style={mystyle}>
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" style={mystyle} aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" style={mystyle} id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h2>
            </div>
            <div id="collapseTwo" className="collapse"  style={mystyle} aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the second accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header"  style={mystyle} id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse" style={mystyle} aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
            </div>
         </div>
        </div>
       </div>
       <div className="container">
       <button type="button"onClick={ToggleColor} className="btn btn-primary mt-3">{btntext}</button>
       </div>
    </div>
  )
}
