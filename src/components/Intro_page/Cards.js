import React from 'react';
import { nutrition_info } from './intro_data';
import { personal_info } from './intro_data';

function Cards() {

    const max_cal = 2200;
    const max_prot = 50;
    const max_carbs = 300;
    const max_fat = 70;

    var calories = (Math.floor((nutrition_info.calories/max_cal)*100));
    var protein = Math.floor((nutrition_info.protein/max_prot)*100);
    var carbs = Math.floor((nutrition_info.carbs/max_carbs)*100);
    var fat = (Math.floor((nutrition_info.fat/max_fat)*100));

    var bmi = Math.floor(personal_info.weight/(personal_info.height/100)**2);
    var color;
    var bmi_percent = Math.floor((bmi/40)*100);

    if (bmi < 23){
        color = "#D9C6F4";
    }
    else if (bmi < 30){
        color = "#74C25C";
    }
    else{
        color = "#E7D948";
    }

    return (
        <div className="cards">

            <div className = "query">
            <div className='card-title'>Quote of the day!</div><br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.
            </div>

            <div className = "nutrition">
                <div className='card-title'>Nutrition</div>
                <input type="text" placeholder="Search for food" />
                <div>
                <input type="number" placeholder="Quantity" style={{width:"60%"}}/>
                <input type="submit" value="Add" />
                </div>
                
                Cal: 
                <div className = "container">
                    <div class = "progress calories" style = {{width:Math.min(calories , 100) + "%"}}>{calories}%</div>
                </div>
                Protein:
                <div className = "container">
                    <div className = "progress protein" style = {{width:Math.min(protein, 100) + "%"}}>{protein}%</div>
                </div>
                Carbs:
                <div className = "container">
                    <div className = "progress carbs" style = {{width:Math.min(carbs, 100) + "%"}}>{carbs}%</div>
                </div>
                Fat:
                <div className = "container">
                    <div className = "progress fat" style = {{width:Math.min(fat, 100) + "%"}}>{fat}%</div>
                </div>
            </div>

            <div className = "profile">
            <div className='card-title'>Profile</div>
                <img src = {personal_info.pfp} alt = "Profile Picture" className='user-img'/>
            </div>

            <div className = "bmi">
               <div className='card-title'>BMI Index</div><br />
                <div className = "container">
                    <div className = "bmi-index" style = {{backgroundColor:color, width: Math.min(bmi_percent, 100) + "%"}}>
                       {bmi}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cards;