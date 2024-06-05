import React from "react";
//import Test from "./test";
//import Parent from "./Parent";
//import Child from "./Child";
//const fruits =["apple","orange","mango"];
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

//   let demo=false;
//   return(
//     <div>
//       <div>{<Test/>}</div>
//       {demo?<Parent/>:<Child/>}
//     </div>
//   )
// let x=5;
// return(
//   <div>{x<=10?"true":"false"}</div>
// )
const handleChange=(e)=>{
  console.log(e.target.value);
}
const handleSubmit=(e)=>{
  console.preventDefault();
  // localStorage.setItem("name",name)
  // localStorage.getItem("name")
}
return(<div>
  {/* <ol type="A">
    {fruits.map((fruits)=>(
      <li>{fruits}</li>
    ))}
  </ol> */}
  <form>
    <label for="name" >Enter the name:</label>
    <input type="text" name="name" onChange={handleChange}/>
    <button type="submit" onClick={handleSubmit}>Submit</button>
  </form>
  
</div>
)
 }
export default App;
