// rafce
import {useState} from "react"
import PizzaCard from "./PizzaCard"

// Mock data
const pizzas = [
  { id: 1,
    name: 'Margarita',
    info: 'Tosi hyvä pizza',
    price: 11.99
  },
  {
    id: 2,
    name: 'Pepperoni',
    info: 'Pepperoni moi jee',
    price: 13.99
  },
  {
    id: 3,
    name: 'Reindeer',
    info: 'Tässä on poroa',
    price: 21.99
  }
]


const PizzaMenu = () => {

  const [cart, setCart] = useState(0);

  // kun lapsikomponenttti pyytää lisäämään yhden pizzan, ajetaan tämä parent elementin funktio

  const addToCart = (cart) => {
    // lisätään edelliseen arvoon yksi
    setCart((prev) => prev + 1);
    console.log('Cart:', cart);
  }

  return (
    <>
    <div>
      <h2>PizzaMenu</h2>
    </div>
    <div>Tässä pizzavaihtoehdot</div>
    <div>Ostoskorissa on {cart} tuotetta</div>
    <div className="pizzaContainer">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart}/>
      ))}


    </div>


    </>
  )
}

export default PizzaMenu
