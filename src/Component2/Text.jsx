 import React from "react";
 import {useState} from 'react';

  const Text =({childToParent})=>{
    const [data,setData]=useState("");
    let inputdata="";

    const handleChange=(e)=>{
        setData(e.target.value);
    }

    const handleClick=(e)=>{
       childToParent(data);
    }
    // const getData=()=>{
       
    //     setData(inputdata);
    //     props.sendData(inputdata)
    //      console.log(inputdata);


    // }


    return(
        <>
      
        {/* <div className="bg-orange-300 w-4/5 flex justify-center items-center  flex-row"> */}

            <div className=" flex justify-center items-center  pl-8 h-16 w-96 ">
            <input onChange={handleChange} id="inputdata" type="text" placeholder= "Enter your text here" className=" pl-3 h-[35px] w-96 rounded "></input>

                <button onClick={handleClick} className="bg-green-800 rounded-md text-white w-[150px] h-[35px] ml-[10px] hover:bg-green-400 hover:
                
                
                 border-green-800">Show Me</button>
            </div>
        


             {/* <div  className="flex justify-center item-center mt-[20px] h-[200px] w-3/4">
             <textarea id="data" name="textareadata" rows="8" cols="63" className="rounded pl-3">
            </textarea> 
            </div>   */}


        
        </>
    )

  }
  export default Text;
  