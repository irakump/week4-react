import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');

  //Element.querySelector.addEventHandler('click', teejotain);
  //<button onClick={() => setCount(count + 1)}>Click me</button>

  // jos näin tekee, ei päivity html:ään -> react ei tunnista muutosta samoin kuin DOM (eli ilman setCountia)
  //let count = 0;
  //const handleClickWrong = () => {
  //  count++;
  //  console.log('Count:', count);
  //}

  // tämä käyttää setCount (console logista ehtii tulla edellinen arvo, eli alussa count = 0, vaikka on kerran klikattu)
  const handleClickRight = () => {
    setCount(count + 1);
    console.log('Count:', count);
  };

  // Aina kuin teksti muuttuu (joka kirjaimella), console logataan reaaliaikainen teksti
  const handleTyping = (e) => {
    console.log(name);
    setName(e.target.value)
  }

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClickRight}>Click me</button>
      </div>

      <input type="text"
      placeholder="Nimesi"
      value={name}
      onChange={handleTyping}
      />
    </>
  );
};

export default Counter;
