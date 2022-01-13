import logo from './logo.svg';
import './App.css';
import students from './api/students';
import{useEffect} from "react"
function App() {
async function pullData(){
const response= await students.get("/posts");
console.log(response)
 
return response;
}
useEffect(() => {
  const t=pullData();
  
  console.log(t);
})

  return (
    <>
    </>
  );
}

export default App;
