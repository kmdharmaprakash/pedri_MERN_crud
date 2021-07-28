const express = require('express');
const mongoose = require('mongoose');
const Food = require('../models/food');


const add = async (req, res, next) => {
    try{ 
        const food = new Food(req.body)
        await food.save()
        .then(response => {
            res.json({response})
        })
    } catch(err) {
        console.log('err', err);
    }
}

const list = async (req, res, next) => {
        try{
            await Food.find()
            .then(response => {
                res.json(response)
            })
        }
        catch(err) {
            console.log('err', err);
        } 
}

const update = async (req, res) => {
    const newFoodName = req.body.newFoodName
    const id = req.body.id
    try{
        // const foodId = req.body.foodId;
        // const updatedData = {
        //     foodName: req.body.foodName
        // }
        // await Food.findByIdAndUpdate(foodId, {$set: updatedData})
        // .then(() => {
        //     res.json({message: 'updated Successfully'})
    // })

        await Food.findById(id, (err, updatedFood) => {
            updatedFood.foodName = newFoodName
            updatedFood.save()
            res.send("update")
        })

        // const id = req.body.id
        // await Food.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        // .then(data => {
        //     if(!data){
        //         res.status(404).send({message: 'error'})
        //     } else {
        //         res.send(data)
        //     }
        // })
  
    } catch(err) {
        console.log('err', err);
    }
}

const destroy = async (req, res) => {
    try{
        const id = req.params.id;

        await Food.findByIdAndRemove(id).exec();
        res.send('deleted')
    } catch(err) {
        console.log('err:', err);
    }
}

module.exports = {
    add, list, update, destroy
}


