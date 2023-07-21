import React from "react";

  const Textarea =( props)=>{
    return(
        <>
 <div  className="flex justify-center items-center mt-[20px] h-[200px]">
             <textarea id="data" name="textareadata" rows="8" cols="63" className="rounded pl-3 " value={props.textareadata}>
            </textarea> 
            </div>
        
           
    
        </>
    )

  }
  export default Textarea;