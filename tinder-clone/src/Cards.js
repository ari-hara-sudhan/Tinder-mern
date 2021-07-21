import React, { useState,useEffect } from 'react'
import "./Cards.css"
import TinderCard from 'react-tinder-card'
import axios from "./axios"

function Cards() {
const [persons,setPersons]=useState([])
const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {

    async function fetchData(){
        const req =await axios.get('/tinder/cards')
        setPersons(req.data)

       
    }
    fetchData()
     
 
  }, [])
    return (
        <div>
            
           <div className="cards__container">
           {
                    persons.map(person =>(
                    
                        <TinderCard className="swipe" key={person._id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                            <div
                            style={{backgroundImage:`url(${person.imageUrl})`}}
                             className="card">
                            <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                      
                    ))
                }
           </div>
              
            
        </div>
    )
}

export default Cards
