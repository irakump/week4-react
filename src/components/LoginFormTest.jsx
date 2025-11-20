import {useState} from 'react';

// LoginForm 1. versio (perus form)
const LoginFormTest = () => {
  const [name, setName] = useState('');

  // Jokaisella input-kentällä pitää olla uniikki arvo (value) / nimi

  const handleChange = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: kutsu (myöhemmin) useHookia
    console.log('Kirjautunut nimi:', name);
  }

  return (
    <>
    <div>
      <h2>Eka login</h2>
    </div>

      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="username">Käyttäjänimi:</label>
          <input
            type="text"
            value={name}
            id="username"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Salasana:</label>
          <input name="password" type="password" id="password" />
        </div>

        <div>
          <button type="submit">Kirjaudu</button>
        </div>
      </form>
    </>
  );

};

export {LoginFormTest};
