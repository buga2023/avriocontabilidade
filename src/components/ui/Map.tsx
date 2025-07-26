import React from 'react';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6598!2d-38.4791!3d-12.9794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d0a9ca42a5%3A0xce9e4c85b5cfc706!2sCaminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
        width="100%"
        height="256"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title="Localização Avrio Contabilidade - Caminho das Árvores, Salvador/BA"
      />
    </div>
  );
};

export default Map;