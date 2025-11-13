import './App.css';
import Greeting from './components/Greeting'; // ei tarvitse olla .jsx-päätettä
import Footer from './components/Footer';
import Home from './components/Home';
import PizzaMenu from './components/PizzaMenu';
import PizzaCard from './components/PizzaCard';

// JS-funktio, joka palauttaa JSX
const App = () => {
  const sitename = 'Week 4 React';

  // style pitää olla camelCasella
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
  }

  return (
    // tyhjä div - kaikki pitää olla yhden elementin (fragmentin) sisällä

    // <Greeting /> ja <Footer /> tuotu komponenteista, huom. notaatio. Voi käyttää useasti samaa komponenttia
    <>
      <h1 style={styles}>{sitename} Sivusto</h1>

      <Home/>

      <div style={{color: 'red'}}>Moikka moi</div>
      <Greeting name="Ulla" age={39} isTeacher={true}/>
      <Greeting name="Matti" age={42} isTeacher={false}/>

      <ul>
        <li>Muumipeikko</li>
        <li>Nipsu</li>
        <li>Piisamirotta</li>
      </ul>

      <PizzaMenu/>

      <Footer />
    </>
  );
};

export default App;
