import React from "react";
import Test from "./test";
import Parent from "./Parent";
import Child from "./Child";
function App() {
  // x=5;
  // let text="Goodbye";
  // if(x<10){
  //   text="Hello";

  // const handleSubmit=(a)=>{
  //   //alert("This is Accelerlab Solutions")
  //   alert(a)

  //   if (demo){
  //   return <Parent/>
  // }else{
  //   return <Child/>
  //   }

  // return (
  //   <div>
  //     {/* <h1>AccelerlabSolutions {10+10} Moodabidire</h1>
  //     <div className="App">
  //     <Test/>
  //     <Parent/>
  //     </div>  */}
  //   {/*<button onClick={handleSubmit()}>Submit</button>*/}
  //   {/* <button onClick={handleSubmit("Click")}>Submit</button> */}
  //   </div>
  // );

  let demo=false;
  return(
    <div>
      <div>{<Test/>}</div>
      {demo?<Parent/>:<Child/>}
    </div>
  )
}
export default App;
