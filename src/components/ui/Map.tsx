import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [error, setError] = useState<string>('');

  // Coordenadas para Salvador/BA - Caminho das Árvores
  const coordinates: [number, number] = [-38.4769, -12.9794]; // lng, lat para Salvador
  
  const loadMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      setError('');
      
      // Initialize map
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: coordinates,
        zoom: 15,
        pitch: 45,
        bearing: -17.6,
      });

      // Add marker
      new mapboxgl.Marker({
        color: '#3B82F6'
      })
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><strong>Avrio Contabilidade</strong><br>Caminho das Árvores<br>Salvador, BA</div>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Store token in localStorage for future use
      localStorage.setItem('mapbox_token', mapboxToken);
      setIsMapLoaded(true);

      map.current.on('error', (e) => {
        setError('Erro ao carregar o mapa. Verifique se o token do Mapbox está correto.');
      });

    } catch (err) {
      setError('Erro ao inicializar o mapa. Verifique se o token do Mapbox está correto.');
    }
  };

  useEffect(() => {
    // Try to load token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (mapboxToken && !isMapLoaded) {
      loadMap();
    }
  }, [mapboxToken, isMapLoaded]);

  if (!isMapLoaded) {
    return (
      <div className={`space-y-4 ${className}`}>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Para exibir o mapa, você precisa de um token público do Mapbox. 
            Obtenha o seu em <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2">
          <label htmlFor="mapbox-token" className="block text-sm font-medium">
            Token Público do Mapbox:
          </label>
          <div className="flex gap-2">
            <Input
              id="mapbox-token"
              type="password"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ..."
              className="flex-1"
            />
            <Button 
              onClick={loadMap}
              disabled={!mapboxToken.trim()}
              className="px-6"
            >
              Carregar
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Fallback placeholder */}
        <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">Mapa será exibido aqui</p>
            <p className="text-sm text-muted-foreground">Caminho das Árvores - Salvador/BA</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-64 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;