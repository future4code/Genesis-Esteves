import React, { useState } from 'react'
import { Container } from './style'
import { getMatches } from '../../components/Endpoints/Endpoints'
import { useEffect } from 'react'

const Matches = (props) => {
    const [matches, setMatches] = useState([])

    const getList = async () => {
        try {
            const response = await getMatches()
            setMatches(response)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    const matchList = matches ? matches.map((item)=>{
        return <p>{item.name}</p> 
    }) : <p>não tem nada</p>

    console.log(matches)

    return (
        <Container>
            <h1>Matches</h1>
            <button
                onClick={() => props.switchPage()}
            >Choose</button>
            {matchList}
        </Container>
    )
}

export default Matches