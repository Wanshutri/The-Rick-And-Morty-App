import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../../assets/components/BackgroundComponent/background';
import NavBarComponent from '../../assets/components/NavBarComponent.tsx/NavBarComponent';
import './character.css'
import lupa from './lupa.png'

const CharacterPage = () => {
    const { id } = useParams();
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCharacterData(data);
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
            });
    }, [apiUrl]);

    function CharacterStatus() {
        if (characterData) {
            let status = characterData.status || 'Unknown'; // Si status es null o undefined, establece 'Unknown'
            status = status.charAt(0).toUpperCase() + status.slice(1); // Aplica la transformación initCap

            let statusColor = 'black'; // Color predeterminado para el estado desconocido

            // Determina el color del estado según characterData.status
            if (status === 'Alive') {
                statusColor = 'green';
            } else if (status === 'Dead') {
                statusColor = 'red';
            }

            return (
                <h4 style={{ fontSize: '3vw' }}>
                    <span style={{ color: 'black', textTransform: 'capitalize' }}>Status: </span>
                    <span style={{ color: statusColor }}>{status}</span>
                    {status === 'Dead' && ' 💀'}
                </h4>
            );
        }
        return null;
    }





    if (!characterData) {
        return <div></div>;
    }

    return (
        <div>
            <Background></Background>
            <NavBarComponent></NavBarComponent>
            <div className='d-flex'>
                <div className='character-info-container d-flex'>
                    <div>
                        <img className='character-pic' src={characterData.image} />
                    </div>
                    <div>
                        <h1 className='character-name'>{characterData.name}</h1>
                        <div className='character-info-spec'>
                            <CharacterStatus />
                            <h1 className='character-specie'>Specie: {characterData.species}</h1>
                            <h1 className='character-gender'>Gender: {characterData.gender}</h1>
                            <div className='d-flex character-info-spec'>
                                <h1 className='character-origin-text'>Origin: {characterData.origin.name}</h1>
                                <button className='character-origin-btn'>🔍</button>
                            </div>
                            <div className='d-flex character-info-spec'>
                                <h1 className='character-location-text'>Gender: {characterData.location.name}</h1>
                                <button className='character-location-btn'>🔍</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CharacterPage;
