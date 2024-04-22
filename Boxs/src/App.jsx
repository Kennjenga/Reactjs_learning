import React from "react"
import {useState}  from 'react'
import boxes from "./constants/boxes"
import Box from "./components/Box"

export default function App() {
    const [squares, setSquares] = useState(boxes)

    /*const toggle = (id) => {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        } )
        }*/
        function toggle(id) {
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === id ? {...square, on: !square.on} : square
                })
            })
        }
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} handleClick ={() =>toggle(square.id)}/>
    ))
   
    return (
        <main>
            {squareElements}
        </main>
    )
}
