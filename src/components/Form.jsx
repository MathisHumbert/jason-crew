import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const Form = () => {
  const [nameValue, setNameValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nameValue) return;

    const colRef = collection(db, 'crew');
    addDoc(colRef, {
      name: nameValue,
    });
    setNameValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Nom du futur membre:</label>
      <div className='form-group'>
        <input
          type='text'
          id='name'
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder='jack sparrow'
        />
        <button>Ajouter Moi!</button>
      </div>
    </form>
  );
};

export default Form;
