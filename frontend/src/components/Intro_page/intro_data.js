import temp_pfp from '../images/temp_pfp.jpeg';

export const personal_info = {
    name: "ksjd",
    pfp: temp_pfp,
    streak: 5,
    email:"jj@kk.com",
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

export const nutrition_info = {
    calories: 900,
    protein: 100,
    carbs: 100,
    fat: 100,
}