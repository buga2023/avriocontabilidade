import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const address = "Caminho das Árvores, Salvador, BA, 41820-021";
  const googleMapsUrl = "https://maps.app.goo.gl/pFiEbJjWtDZcNHQt5";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.659!2d-38.4791!3d-12.9794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d0a9ca42a5%3A0xce9e4c85b5cfc706!2sCaminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr";

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mapa Incorporado */}
      <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Localização Avrio Contabilidade - Caminho das Árvores, Salvador/BA"
          onError={() => {
            console.log('Erro ao carregar mapa embed');
          }}
        />
        
        {/* Fallback se o mapa não carregar */}
        <div className="absolute inset-0 flex items-center justify-center bg-muted pointer-events-none">
          <div className="text-center opacity-50">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">Carregando mapa...</p>
          </div>
        </div>
      </div>

      {/* Informações e Botões */}
      <div className="space-y-3">
        <div className="text-center">
          <p className="font-medium text-foreground">{address}</p>
          <p className="text-sm text-muted-foreground">Salvador, Bahia</p>
        </div>
        
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => window.open(googleMapsUrl, '_blank')}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Abrir no Google Maps
          </Button>
          
          <Button
            onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`, '_blank')}
            variant="outline"
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver Rotas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;