import React, { useState } from 'react'

export default function About(props) {
   
    let mystyle={
        color: props.mode==='light'?'#322f45':'white',
         backgroundColor: props.mode==='light'?'white':'#322f45',
         border:'2px solid ',
         borderColor:props.mode==='light'?'#322f45':'white'
    }
    
   
    
       
  return (
        <div>
        <div className="container" style={{color: props.mode==='light'?'#322f45':'white'}}>
            <h1 className="my-3" >About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="card"  style={mystyle}>
            <div className="card-header" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Info about us in detail
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
            </div>
            </div>
        </div>
        <div className="card" style={mystyle}>
            <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the second accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        <div className="card" style={mystyle}>
            <div className="card-header"   id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                hi my name is karansssssssssss
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse"  aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
            </div>
         </div>
        </div>
       </div>
      
    </div>
  )
}
