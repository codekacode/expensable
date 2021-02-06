import Main from "./main";
import { listCategories } from "./services/categories_service";
import { login } from "./services/sessions_service";
import STORE from "./store";

export default function Login(parentElement){
 return {
   parent: document.querySelector(parentElement),
   render: function(){
     const html = `
     <section>
      <h2>Login</h2>
      <form class="js-login-form">
        <div>
          <label>Email</label>
          <input type="text" name="email">
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password">
        </div>
        <div>
          utton type="submit">Submit</button>
        </div>
        <a href="#signup">Sign Up</a>
     </form>
     </section>`     
    ;
    this.parent.innerHTML = html;
  },

  addFormSubmitListener: function () {
    this.parent.addFormSubmitListener("submit", async (e) => {
      const form = thist.parent.querySelector(".js-login-form");
      if (form === e.target) {
        e.preventDefault();
        const { email, password} = form;
        try {
          const data = await login(email.value, password.value);
          const { id, email: dataEmail, first_name, las_name, phone} = data; // al sacar le cambio de nombre
          STORE.user = { id, email: dataEmail, first_name, las_name, phone }; // al meterlo de cambio de nombre al valor
          sessionStorage.setItem("token", data.token);
          if (data.token) {
            let main = Main(".js-content");
            main.render();
            try{
              const categories = await listCategories();
              STORE.expenses = categories.filter( 
                (category) => category.transantion_type === "expense"
              );
              STORE.incomes =categories.filter( 
                (category) => category.transantion_type === "income"
              );
              main.render();
            }
          }
        } catch (e) {
          alert(e.message);
        }        
      }
    });
  },
  }
}