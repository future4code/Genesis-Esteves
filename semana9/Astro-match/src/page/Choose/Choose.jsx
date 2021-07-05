import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { getProfileToChoose, postChoosePerson, putClear } from '../../components/Endpoints/Endpoints'

const Choose = (props) => {
    const [profile, setProfile] = useState({})

    const getProfile = async () => {
        try {
            const response = await getProfileToChoose()
            setProfile(response)

        } catch (error) {
            alert(error)
        }
    }

    const chooseProfile = async (id) => {
        try {
            await postChoosePerson(id = { id })
            getProfile()
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    const onClickRefresh = () => {
        putClear().then(getProfile())
        
        
    }

    return (
        <Container>
            <h1>Choose</h1>
            <button
                onClick={() => onClickRefresh()}>
                Refresh
            </button>
            <button
                onClick={props.switchPage}>
                matches
            </button>
            <br />
            {profile && <button
                onClick={()=>getProfile()}>
                Passa
            </button>}
            <br />
            {profile && <button
                onClick={() => chooseProfile(profile.id)}>
                Curtir
            </button>}
            <br />
            {profile ?
                <>
                    {profile.id}<br />
                    {profile.name}<br />
                    {profile.age}<br />
                    {profile.bio}<br />
                    <img alt={"imagen perfil"} src={profile.photo}></img>
                </>
                :
                <>
                    <h1>A lista acabou =/<br />aperte refresh para uma recomeçar</h1>

                </>
            }

        </Container>
    )
}

export default Choose