import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const League = (props) => {
    const { strLeague, strSport, idLeague } = props.league;

    const [league, setLeague] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(response => response.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const { strBadge } = league;

    const cardStyle = {
        width: '25rem',
        height: '35rem',
        marginBottom: '40px',
        padding: '5px',
        // alignItems: 'center',
        // justifyContent: 'center',
    }

    return (
        <Col>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        <p>Game Type: {strSport}</p>
                    </Card.Text>
                    <Link to={`/league/${idLeague}`}><Button variant="primary">More Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default League;