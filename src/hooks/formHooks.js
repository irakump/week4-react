import {useState} from 'react';

const useForm = (callback, initState) => {
     const [inputs, setInputs] = useState(initState);

     const handleSubmit = (event) => {
         if (event) {
             event.preventDefault();
         }
         //callback();
         callback(inputs);
     };

     const handleInputChange = (event) => {
         event.persist();
         //console.log(event.target.name, event.target.value);  // Tämä loggaa merkki kerrallaan käyttäjänimen ja salasanan
         setInputs((inputs) => ({
             ...inputs,
             [event.target.name]: event.target.value,
         }));
     };

     const resetForm = () => {
      setInputs(initState);
     };

     return {
         handleSubmit,
         handleInputChange,
         inputs,
         resetForm
     };
};

export default useForm;
