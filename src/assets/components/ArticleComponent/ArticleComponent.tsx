import { useEffect, useState } from 'react';
import './Article.css';

interface Character {
    id: number;
    name: string;
    image: string;
}

interface ArticleProps {
    characterId: number;
}

function ArticleComponent({ characterId }: ArticleProps) {
    const [characterInfo, setCharacterInfo] = useState<Character | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/' + characterId);
                const data = await response.json();
                setCharacterInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <a href={`/characters/${characterId}`} className='Article-container'>
            <img className='Article-container-img' src={characterInfo?.image} alt={characterInfo?.name} />
            <h3 className='Article-container-h3'>{characterInfo?.name}</h3>
        </a>
    );
}

export default ArticleComponent;
