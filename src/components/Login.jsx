import React from 'react';
import styled from 'styled-components';


export default function Login() {
    const handleClick=()=>{
        const clientid="f1bd3493531e47e290e444c33ac72e90";
        const redirectURL="http://localhost:3000/";
        const apiURL="https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ];
        window.location.href = `${apiURL}?client_id=${clientid}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;

    };

    return (
        <Container>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='' />
            <button onClick={handleClick}>Connect Spotify</button>
            
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color:#1db954;
gap: 5rem;
img {
    height: 20vh;
}
    button {
        padding: 1rem 5rem;
        background-color: black;
        border: none;
        color: #49f585;
        border-radius: 5rem;
        font-size: 1.4rem;
        cursor: pointer;

    }
}
`;