import React, { useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
    const audioRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        console.log('Video URL:', videoRef.current?.src);
    }, []);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="audio-player-container">
            <audio ref={audioRef} src={audioUrl} controls>
                Your browser does not support the audio element.
            </audio>
            <button onClick={handlePlay} className="play-button">Play</button>
            <video ref={videoRef} src="/sample2.mp4" controls className="video-player">
                Your browser does not support the video element.
            </video>
        </div>
    );
};

export default AudioPlayer;