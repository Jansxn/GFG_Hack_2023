import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Intro_page/Navbar';
import temp_pfp from '../images/temp_pfp.jpeg';
import { AppState } from '../Intro_page/intro_data';

function Profile() {
    const {userData, setUserData} = React.useContext(AppState)
    return(
        <div className='profile'>
            <Navbar />
            <div className = "head"><b>About You</b></div>

            <form className='form'>
                <div className = "image">
                    <img src = {temp_pfp} alt = "Avatar"/>
                </div>

                <div className = "input">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." defaultValue={userData.name}/>

                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" placeholder="Your age.." defaultValue={userData.age}/>

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." defaultValue={userData.email}/>

                    <label for="phone">Phone</label>
                    <input type="number" id="phone" name="phone" placeholder="Your phone.." defaultValue={userData.phone}/>

                    <label for="Weight">Weight (kg)</label>
                    <input type="number" id="weight" name="weight" placeholder="Your weight.." defaultValue={userData.weight}/>

                    <label for="Height">Height (m)</label>
                    <input type="text" id="height" name="height" placeholder="Your height.." defaultValue={userData.height}/>

                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Profile;
