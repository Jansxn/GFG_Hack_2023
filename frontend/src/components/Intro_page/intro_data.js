import temp_pfp from '../images/temp_pfp.jpeg';
// import { user } from '../../App';
import React, { useState, createContext } from 'react';

export const personal_info_demo = {
    name: 'ajefjsb',//userData.fname+' '+userData.lname,
    lname: 'sakdnaksd',
    pfp: temp_pfp,
    streak: 5,
    email:'xyz@gmail.com',
    phone: 1234567890,
    medications:[
        {
            name: "Medication 1",
            taken: 1,
            time: ["12:00", "18:00"]
        },
        {
            name: "Medication 2",
            taken: 3,
            time: ["8:00", "10:00"]
        },{
            name: "Medication 2",
            taken: 3,
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
    age: 55,
    
    calories: 900,
    protein: 100,
    carbs: 100,
    fat: 100
}

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
    age: 0,
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
}

export const medicine_data = []



export const AppState = createContext({userData: personal_info_default})

const Context = ({ children }) => {
    const [userData, setUserData] = useState(personal_info_default);
    const [med, setMed] = useState(medicine_data);
    return (
            <AppState.Provider value={{userData, setUserData, med, setMed}}>
                {children}
            </AppState.Provider>
    )
}

export default Context