import React from 'react';
import './VideoModal.css';

function VideoModal({ isOpen, onClose, videoId }) {
  if (!isOpen) return null;

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="video-header">
          <p className="video-url">Playing: {videoUrl}</p>
        </div>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoModal;