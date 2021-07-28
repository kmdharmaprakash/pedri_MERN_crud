import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Food() {
    const [foodName, setFoodName] = useState(""); //to post
    const [days, setDays] = useState(0); //to post
    const [foodList, setFoodList] = useState([]); //to get
    const [newFoodName, setNewFoodName] = useState(""); //to put(update)

    useEffect(() => {
        axios.get('http://localhost:8000/food/list')
        .then((response) => {
            console.log('response---', response)
            setFoodList(response.data);
        })
    }, []);

    const addToList = (e) => {
        e.preventDefault()
        try{
            const addData = {
                foodName,
                days
            }
            axios.post('http://localhost:8000/food/add', addData);
        } catch(err) {
            console.log(err)
        }
    }

    const updateFood = (id) => {
        try{
            // console.log('id---', id)
            const updatedData = {
                id,
                newFoodName
            }
            // console.log('updatedData--', updatedData)
            axios.put('http://localhost:8000/food/update', updatedData)
            //     id: id,
            //     newFoodName: newFoodName
            // })
        } catch(err) {
            console.log(err)
        }
    }

    const deleteFood = (id) => {
        try{
            axios.delete(`http://localhost:8000/food/delete/${id}`)
        } catch(err) {
            console.log(err);
        }
    }
        
    
    return(
        <div className="Food">
            <label>Food Name</label>
            <input type="text" onChange={(event) => {
                setFoodName(event.target.value)
            }} 
            value={foodName}
            />
            <label>Days</label>
            <input type="number" onChange={(event) => {
                setDays(event.target.value)
            }} 
            value={days}
            />
            <button onClick={addToList}>Add to List</button>
            <h1>Food List</h1>
             {foodList.map((val, key) => {
                return(
                    <div key={key}> 
                        <h2>{val.foodName}</h2>
                        <h2>{val.days}</h2>
                        <input type="text" placeholder="enter for update" 
                        onChange={(event) => {setNewFoodName(event.target.value)
                        }}
                        />
                        <button onClick={() => updateFood(val._id)}>Update</button>
                        <button onClick={() => deleteFood(val._id)}>Delete</button>
                    </div>
                )
            })}
            
        </div> 
    )
}

export default Food;