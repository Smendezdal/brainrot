import React, { useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="audio-player-container">
            <audio ref={audioRef} src={audioUrl} controls>
                Your browser does not support the audio element.
            </audio>
            <button onClick={handlePlay} className="play-button">Play</button>
        </div>
    );
};

export default AudioPlayer;