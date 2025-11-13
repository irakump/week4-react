import pizzaImg from '../assets/images/pizza.jpg'

const PizzaCard = (props) => {
  const {pizza, addToCart} = props;
  console.log(props);


  return (
    <>
      <div className="pizzaCard">
        <h2>{pizza.name}</h2>
        <p>{pizza.info}</p>
        <p>Hinta {pizza.price} €</p>
        <img src={pizzaImg} alt="pizza" srcSet="" />
        <button onClick={addToCart}>Lisää yksi</button>
      </div>
    </>

  )
}

export default PizzaCard
