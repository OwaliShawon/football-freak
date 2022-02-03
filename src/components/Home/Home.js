import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php';
        fetch(url)
            .then(response => response.json())
            .then(data => setLeagues(data.leagues))
    }, [])

    return (

        <div>
            <Header></Header>
            <Container fluid style={{ backgroundColor: 'blue', paddingTop: '50px' }}>
                <Row>
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;