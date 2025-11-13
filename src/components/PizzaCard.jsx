//import pizzaImg from

const PizzaCard = ({pizza}) => {
  return (
    <>
      <div className="pizzaCard">
        <h2>{pizza.name}</h2>
        <p>{pizza.info}</p>
        <p>{pizza.price} €</p>
      </div>
    </>

  )
}

export default PizzaCard
