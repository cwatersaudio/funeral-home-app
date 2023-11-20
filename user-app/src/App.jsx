import React from 'react'
import './App.css'
import Card from './components/Card'
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'

//datatbase 
const appSettings = {
  databaseURL: "https://funeral-home-list-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const funeralHomes =  ref(database, "homes")

console.log(funeralHomes)
function App() {

let homesArray; 

onValue(funeralHomes, function(snapshot) {  //keeps track of the most recent item added to the database for the purspose of updating
  homesArray = Object.values(snapshot.val())
  console.log(homesArray)
})

const locationCards = homesArray.map(item => {
 if (item.address) {
 
  return (
  <Card 
  address={item.address}
 />
 )}
})
  return (
    <>
      {locationCards}
    </>
  )
}

export default App
