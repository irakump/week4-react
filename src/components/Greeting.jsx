import PropTypes from 'prop-types';

const Greeting = (props) => {
  //return <div>Greeting jeejee 1234567</div>;  // yksi rivi

  console.log(props);
  const {name, age, isTeacher} = props;

  // Check isTeacher value
  let teacherText = '';

  if (isTeacher) {
    teacherText = 'olet opettaja';
  } else {
    teacherText = 'et ole opettaja';
  }

  // useampi rivi - pitää olla yksi parent element
  return (
  <>
  <div>Moikka {name}! Ikäsi on {age} ja {teacherText}.

  </div>
  </>
  );
};

// Kevyet tyyppitarkastukset (prop-types)
Greeting.PropTypes = {
  name: PropTypes.string.isRequired,  // pakollinen arvo
  age: PropTypes.number.isRequired,
  isTeacher: PropTypes.bool,  // ei ole pakollinen
}

export default Greeting;
