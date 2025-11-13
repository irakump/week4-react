// rafce
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
  return (
    <>
    <div>
      <h2>PizzaMenu</h2>
    </div>
    <div>Tässä pizzavaihtoehdot</div>
    <div className="pizzaContainer">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza}/>
      ))}


    </div>


    </>
  )
}

export default PizzaMenu
