import STORE from "./store.js"

export default function Categories(selectedOption){
  const categories = STORE[selectedOption];
  const categoriesList = categories.map(category => `
    <li data-id="${category.id}>
      <p>${category.name} </p>
      <div>
        <p>${category.transactions.reduce(
          (total, item) => total + item.amount, 0
        )}</p>
        <i>Trash</i>
      </div>
    </li>` 
    );
  return `
  <ul>
  ${categoriesList.join("")}
  </ul>`
}