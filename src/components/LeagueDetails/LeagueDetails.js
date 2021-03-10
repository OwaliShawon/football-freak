import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const { idLeague } = useParams();
    // console.log(idLeague);
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(response => response.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])

    // console.log(league);
    const { strLeague, strBadge, strBanner, strCountry, intFormedYear, strGender, strSport, strFacebook, strTwitter, strYoutube } = league;

    return (
        <div>
            <div id="banner">
                <img src={strBadge} alt="" />
            </div>

            <div>
                <div id="league-info">
                    <div id="str-info">
                        <h3>{strLeague}</h3>
                        <p>Founded: {intFormedYear}</p>
                        <p>COuntry: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>

                    <div id="gender-base-image">

                    </div>
                </div>
                <div id="details-info">

                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;