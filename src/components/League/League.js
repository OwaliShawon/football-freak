import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const League = (props) => {
    const { strLeague, strLeagueAlternate, strSport, idLeague } = props.league;

    const [league, setLeague] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(response => response.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    const { strBadge } = league;
    console.log(league);

    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        <p>Also call As: {strLeagueAlternate}</p>
                        <p>Game Type: {strSport}</p>
                    </Card.Text>
                    <Button variant="primary">More Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;