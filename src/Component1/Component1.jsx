import React from "react";
import Text from "../Component2/Text";
import Textarea from "../Component3/Textarea"; 
import {useState}  from "react";

 const Component1 =()=>{
    const[textData,setTextdata]=useState();


    const childToParent=(ChildData)=>{
        setTextdata(ChildData);
     }

    // const sendData = (textData) => {
    //     setTextdata(textData);
    //     console.log(textData);
   // }
    return(
        <>
        <div className="flex justify-evenly items-center flex-row bg-slate-200 h-screen w-full bg-orange-300">
        

        {/* <Text  childToParent={setTextdata}/>   -// another way */}
        <Text  childToParent={childToParent}/>
        <Textarea textareadata={textData} />
        </div>

        </>
    )

 }
 export default Component1;