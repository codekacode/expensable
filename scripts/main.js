import Categories from "./categories.js";
import Profile from "./profile.js";
import STORE from "./store.js"

export default function Main(parentElement){
 return {
   parent: document.querySelector(parentElement),
   selectedOption: "expenses",
   render: function(){
     let html = `
     <section>
      <h2>Expensable</h2>
      <nav class="js-expensable-options">
        <a class="js-expesable-option" href="#expenses" data-option="expenses">Expenses</a>
        <a class="js-expesable-option" href="#expenses" data-option="incomes">Expenses</a>
        <a class="js-expesable-option" href="#expenses" data-option="profile">Expenses</a>
      </nav>
      ${this.selectedOption === "profile"
      ? Profile()
      : Categories(this.selectedOption)
      }
      <form>
        <input type="text" name="category_name">
        <buton>Create Category</buton>
      </form>
     </section>`     
    ;
    
    this.parent.innerHTML = html;
    this.navClickListener();
    },
    
    navClickListener: function() {
      const nav = this.parent.querySelectorAll('.js-expensable-option');
      options.forEach((option) => {
        this.parent.addEventListener("click", (e) => {
          e.preventDefault();
          if(option === e.target) {
            this.selectedOption = option.dataset.value;
            this.render();
          }
        })
      })
      
    }
  }
}