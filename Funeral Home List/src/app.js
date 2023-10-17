import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://funeral-home-list-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const funeralHomes =  ref(database, "homes")

const nameFieldEl = document.getElementById("name-field")
const addButtonEl = document.getElementById("add-button")
const cityStateEl = document.getElementById("city-state-field")
const addressEl = document.getElementById("address-field")
const zipEl = document.getElementById("zip-field")
const websiteEl = document.getElementById("website-field")
const phoneEl = document.getElementById("phone-field")
const emailEl =document.getElementById("email-field")

addButtonEl.addEventListener("click", function() {
       
    let newHome = newEntry()
    push(funeralHomes, newHome)
    console.log(newHome)
    resetFields ();
})

// onValue(funeralHomes, function(snapshot) {
//     let itemsArray = Object.values(snapshot.val())
    
//     //maybe add future function to clear list on screen if I want that
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         appendItemToShoppingListEl(itemsArray[i])
//     }
// })

function newEntry () {
    let location = { //this works --but can I use destructuring to make the variables nicer?
        // name: "",
        // cityState: "",
        // address: "",
        // phone: "",
        // email: "",
        // website: "",
        // zip: ""
    }

    // let {name, city, address, phone, email, website} = location;
    
    // name = nameFieldEl.value;
    // city= cityEl.value;
    // address= addressEl.value;
    // phone = phoneEl.value;
    // email = emailEl.value;
    // website = websiteEl.value;

    location.name = nameFieldEl.value;
    location.cityState= cityStateEl.value;
    location.address= addressEl.value
    location.phone = phoneEl.value;
    location.email = emailEl.value;
    location.website = websiteEl.value;
    location.zip = zipEl.value;
    location.fullAddress = `${addressEl.value}, ${cityStateEl.value} ${zipEl.value }`
    console.log(location.address)
    return location;
}

function resetFields () {
    nameFieldEl.value= ""
    cityStateEl.value= ""
    addressEl.value= ""
    phoneEl.value= ""
    emailEl.value= ""
    websiteEl.value= ""
    zipEl.value = ""
}