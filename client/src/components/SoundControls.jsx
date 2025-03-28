import React from 'react';

const SoundControls = ({ tempo, setTempo, isPlaying, onPlayToggle }) => {
  return (
    <div className="sound-controls">
      <h2>🎛️ Sound Controls</h2>

      <div className = "volume-control">
        <label htmlFor="volume">Volume</label>
        type="range"
        
      </div>

      <div className="tempo-control">
        <label htmlFor="tempo">Tempo: {tempo} BPM</label>
        <input
          type="range"
          id="tempo"
          min="60"
          max="200"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
        />
      </div>

      <button onClick={onPlayToggle}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
};

export default SoundControls;
