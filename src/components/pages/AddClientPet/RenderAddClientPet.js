import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RenderAddClientPet = ({ clientProfile, addClientPet }) => {
  const history = useHistory();

  const [newPet, setNewPet] = useState({
    owner_id: clientProfile.id,
    name: '',
    animal_type: '',
    breed: '',
    weight: '',
    comment: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addClientPet(newPet);
    history.goBack();
  };

  const handleChange = e => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Pet name</label>
        <br />
        <input
          type="text"
          name="name"
          value={newPet.name}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="Type">Animal Type</label>
        <br />
        <select name="animal_type" onChange={handleChange}>
          <option value="">None selected</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
        <br />
        <label htmlFor="Breed">Breed</label>
        <br />
        <input
          type="text"
          name="breed"
          value={newPet.breed}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="Type">Weight</label>
        <br />
        <select name="weight" onChange={handleChange}>
          <option value="">None selected</option>
          <option value="Small: 0-15 lbs">Small: 0-15 lbs</option>
          <option value="Medium: 16-40 lbs">Medium: 16-40 lbs</option>
          <option value="Large: 41-99 lbs">Large: 41-99 lbs</option>
          <option value="Giant: >100 lbs">Giant: 100+ lbs</option>
        </select>
        <br />
        <label htmlFor="Comment">What should we know about your pet?</label>
        <br />
        <textarea
          type="text"
          name="comment"
          value={newPet.comment}
          onChange={handleChange}
          rows="8"
          cols="30"
        ></textarea>
        <br />
        <button>Submit</button>
        <button onClick={() => history.push('/user-dash')}>Go back</button>
      </form>
    </div>
  );
};

export default RenderAddClientPet;
