import * as React from 'react';

function Images() {

  function handleForm(event) {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData (event.currentTarget);
    const un = data.get("un");
    const n = data.get("n");
    const y = data.get("y");
    const br = data.get("br");
    console.log(un+" --- "+n+"---"+y+"---"+br);
  }

  return (
  

    <div className="App">
       
        
        
          
       
             <img src={"https://cdn.wallpapersafari.com/95/91/PD0Zqg.jpg"} className="" style={{ width:"1200px", height:"550px" }} />

           
      
    </div> 
  
  );
}

export default Images;