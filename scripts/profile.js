import STORE from "./store.js"

export default function Profile(){
  return`
      <form class="js-login-form">
        <div>
          <label>Email</label>
          <input type="text" value=${STORE.user.email} name="email">
        </div>
        <div>
          <label>First Name</label>
          <input type="text" value=${STORE.user.first_name} name="first_name">
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value=${STORE.user.last_name} name="last_name">
        </div>
        <div>
          <label>Phone</label>
          <input type="text" value=${STORE.user.phone} name="phone">
        </div>
        <div>
          utton type="submit">Submit</button>
        </div>
     </form>`;
}