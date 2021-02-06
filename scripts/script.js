import Login from "./login";
import Main from "./main";
import { listCategories } from "./services/categories_service";
import STORE from "./store";

function init() {
  const login = Login(".js-content");
  const main = Main(".js-content");

  if (sessionStorage.getItem("token")) {
    const categories = await listCategories();
    STORE.expenses = categories.filter( 
      (category) => category.transantion_type === "expense"
    );
    STORE.incomes =categories.filter( 
      (category) => category.transantion_type === "income"
    );
    main.render();
  } else {
    login.render();
    login.addFormSubmitListener("js-content");
  }
}
init();