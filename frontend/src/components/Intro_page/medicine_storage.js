import React from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';
import {app,database,auth,storedb} from '../../index';

// Function to create a collection for a user if it doesn't exist
function createUserCollection(userId) {
  const userRef = storedb.collection('users').doc(userId);
  userRef.get().then((doc) => {
    if (!doc.exists) {
      storedb.collection('users').doc(userId).set({});
    }
  });
}

// Function to add data to a user's collection
function addData(userId, data) {
    const userRef = storedb.collection('users').doc(userId);
    userRef.update({ data: storedb.FieldValue.arrayUnion(data) });
  }
  
  // Function to retrieve data from a user's collection
  function getData(userId) {
    const userRef = storedb.collection('users').doc(userId);
    return userRef.get().then((doc) => {
      if (doc.exists) {
        return doc.data().data;
      } else {
        return null;
      }
    });
  }

/*
example use
createUserCollection('user-01');
addData('user-01',{'medicine':'something',timing:3,});
*/
export {createUserCollection,addData,getData};