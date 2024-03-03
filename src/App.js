import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getToken } from "firebase/messaging";
import { messaging } from './firebase';
function App() {

  async function requestPermission(){
    const permission =await Notification.requestPermission();
       
    if(permission=="granted"){
     
     const token=await getToken(messaging,{
      vapidKey:"BN6gZDZjRQFEwD7V1zD3KIu95ZSGbZDLj6ccIZISKtucTcDNXSnlzWYcIXbiG1FzvDjfr0v6dcNaoylOSbgl0vw"
     });
    // console.log("token",token);
    }else if(permission==="denied"){
      alert("denied permission")
    }
  }
useEffect(()=>{
    requestPermission()
},[])


  return (
    <div className="App">
  <h1>Get the Latest offers as Notifications</h1>

    </div>
  );
}

export default App;
