import React, { Component } from 'react';
import axios from 'axios';
import {turnApiObjIntoArray} from '../utils/turnApiObjIntoArray'



    function  getEnemies(){
        // get axios GET
        return axios.get('http://localhost:3005/all')

        .then( response => {
            return turnApiObjIntoArray(response.data)
        })
    
    }

    export default getEnemies;