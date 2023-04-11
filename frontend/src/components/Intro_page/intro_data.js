import temp_pfp from '../images/temp_pfp.jpeg';
// import { user } from '../../App';
import React, { useState, createContext } from 'react';

export const personal_info = {
    name: '',//userData.fname+' '+userData.lname,
    lname: '',
    pfp: temp_pfp,
    streak: 5,
    email:'xyz@gmail.com',
    phone: 1234567890,
    medications:[
        {
            name: "Medication 1",
            taken: 1,
            frequency: 2,
            time: ["12:00", "18:00"]
        },
        {
            name: "Medication 2",
            taken: 3,
            frequency: 4,
            time: ["8:00", "10:00"]
        },{
            name: "Medication 2",
            taken: 3,
            frequency: 4,
            time: ["8:00", "10:00"]
        }
    ],
    conditions:[
        "Condition 1",
        "Condition 2",
        "Condition 3"
    ],
    weight: 50,
    height: 170,
    age: 55
}

// export const nutrition_info = {
//     calories: 900,
//     protein: 100,
//     carbs: 100,
//     fat: 100,
// }

export const personal_info_default = {
    name: '',//userData.fname+' '+userData.lname,
    lname: '',
    pfp: temp_pfp,
    streak: 0,
    email:'',
    phone: 0,
    medications:[
    ],
    conditions:[
    ],
    weight: 0,
    height: 0,
    age: 0
}



export const AppState = createContext({userData: personal_info_default})

const Context = ({ children }) => {
    const [userData, setUserData] = useState(personal_info_default);
    return (
            <AppState.Provider value={{userData, setUserData}}>
                {children}
            </AppState.Provider>
    )
}

export default Context