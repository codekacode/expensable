import Categories from "./categories.js";
import Profile from "./profile.js";
import STORE from "./store.js"

export default function Transactions(parentElement){
 return {
   parent: document.querySelector(parentElement),
   selectedOption: "expenses",
   render: function(){
     let html = `
     <section class="transactions-content">
      <h3>{name}</h3>
     </section>`     
    ;
    } 
  }
}