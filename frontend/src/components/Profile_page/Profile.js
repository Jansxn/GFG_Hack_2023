import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Intro_page/Navbar';
import temp_pfp from '../images/temp_pfp.jpeg';
import { AppState } from '../Intro_page/intro_data';
import { auth, database } from '../../index';
import { query, orderByChild, equalTo, update ,ref, get} from 'firebase/database';

async function updateData(userId, updatedData) {
    const user = auth.currentUser;
    if (user) {
        const usersRef = ref(database, `users/${user.uid}`);
        const snapshot = await get(usersRef);
      
        if (!snapshot.exists()) {
          console.log('User data not found');
          return;
        }
      
        try {
          await update(usersRef, updatedData);
          console.log('Record updated successfully');
        } catch (error) {
          console.log('Error updating record:', error);
        }
    }
  }

function Profile() {
  const {userData, setUserData} = React.useContext(AppState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      weight: event.target.weight.value,
      height: event.target.height.value
    };

    if (auth.currentUser) {
        await updateData(auth.currentUser.uid, updatedData);
        setUserData({ ...userData, ...updatedData }); // update state
    } else {
        console.log('No signed-in user');
     }
  };
  
  return(
    <div className='profile'>
      <Navbar />
      <div className="head"><b>About You</b></div>

      <form className='form' onSubmit={handleSubmit}>
        <div className="image">
          <img src={temp_pfp} alt="Avatar" />
        </div>

        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." defaultValue={userData.name} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Your age.." defaultValue={userData.age} />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." defaultValue={userData.email} />

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" placeholder="Your phone.." defaultValue={userData.phone} />

          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" id="weight" name="weight" placeholder="Your weight.." defaultValue={userData.weight} />

          <label htmlFor="height">Height (m)</label>
          <input type="text" id="height" name="height" placeholder="Your height.." defaultValue={userData.height} />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;