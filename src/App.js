//Name: Ulises Ortega
//Project: Advice Generator
//Description: using all the givin assets create a react app that provide advice when click on center button
//Peer Review Manuel Leyva: After checking the app, It meets the requirements component folder, app css caliing the component, and the main component calling the css, I will advise for a cleaner code to delet the line that you are not using like line 10 importig container

import './App.css';
import GetAdvice from './Services/DataServices'
import Main from './Components/Main.js'

function App() {
  return (
    <div className="">
      <Main />
    </div>
  );
}

export default App;
