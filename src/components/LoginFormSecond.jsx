import {useState} from 'react';

// LoginForm 2. versio
const LoginFormSecond = () => {
  const [inputs, setInputs] = useState({
    // Aloitusarvot
    name: '',
    mytxt: '',
    koulu: '',
    tietotekniikka: false,
    kapistely: false,
    muu: false,
    age: '',
  });

  // Jokaisella input-kentällä pitää olla uniikki arvo (value) / nimi

  const handleChange = (e) => {
    const target = e.target;

    // Checkboxissa tallenna target.checked, muuten value
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('Arvot INPUT-kentistä: ', name, value);

    setInputs((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Kirjautunut nimi:', name);
    alert(JSON.stringify(inputs, null, 2)); // näytä syötetty käyttäjänimi napin painamisen jälkeen
  };

  return (
    <>
      <div>
        <h2>Testattu formeja</h2>
      </div>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="name">Käyttäjänimi:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            id="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="passw">Salasana:</label>
          <input name="passw" type="password" id="passw" />
        </div>

        <hr />
        <div>
          <label htmlFor="tekstikentta">
            Lisätiedot:
            <textarea
              name="mytxt"
              id="tekstikentta"
              value={inputs.mytxt}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <hr />

        <div>
          <p>Valitse koulusi:</p>
          <select
            name="koulu"
            value={inputs.koulu}
            onChange={handleChange}
            id=""
          >
            <option value="metropolia">Metropolia</option>
            <option value="aalto">Aalto Yliopisto</option>
            <option value="helsinki">Helsingin Yliopisto</option>
          </select>
        </div>

        <hr />

        <div>
          <p>Valitse koulutusala(t):</p>
          <label>
            Tietotekniikka
            <input
              type="checkbox"
              checked={inputs.tietotekniikka}
              name="tietokekniikka"
              onChange={handleChange}
            />
          </label>
          <label>
            Tietojenkäsittelytiede
            <input
              type="checkbox"
              name="kapistely"
              checked={inputs.kapistely}
              onChange={handleChange}
            />
          </label>
          <label>
            Joku muu
            <input
              type="checkbox"
              name="muu"
              checked={inputs.muu}
              onChange={handleChange}
            />
          </label>
        </div>

        <hr />
        <div>
          <p>Valitse ikä:</p>
          <label>
            0-30
            <input
              type="radio"
              name="age"
              value="0-30"
              checked={inputs.age === '30 tai alle'}
              onChange={handleChange}
            />
          </label>
          <label>
            31-60
            <input
              type="radio"
              name="age"
              value="31-60"
              checked={inputs.age === '31-60'}
              onChange={handleChange}
            />
          </label>
          <label>
            61-99
            <input
              type="radio"
              name="age"
              value="61-99"
              checked={inputs.age === 'Yli 60'}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <button type="submit">Kirjaudu</button>
        </div>
      </form>
    </>
  );
};

// TODO: ks. lisää option, checkbox, radiobutton

export {LoginFormSecond};
