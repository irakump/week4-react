import './App.css';
import Greeting from './components/Greeting'; // ei tarvitse olla .jsx-päätettä
import Footer from './components/Footer';

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
      <div style={{color: 'red'}}>Moikka moi</div>
      <Greeting name="Ulla" age={39} isTeacher={true}/>
      <Greeting name="Matti" age={42} isTeacher={false}/>
      <ul>
        <li>Moi</li>
        <li>Haloo</li>
        <li>Piisamirotta</li>
      </ul>

      <Footer />
      <Footer />
      <Footer />
    </>
  );
};

export default App;
