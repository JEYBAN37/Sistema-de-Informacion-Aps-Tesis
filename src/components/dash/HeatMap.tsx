import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa la imagen del icono
import customIconUrl from '../../assets/img/iconFamily.png'; // Ajusta la ruta según sea necesario
import { Cordenadas } from './Map';

interface HeatMapProps {
  coordinates: Cordenadas[];
  zoom: number;
}

export const HeatMap: React.FC<HeatMapProps> = ({ coordinates, zoom }) => {
  useEffect(() => {

    if (coordinates.length === 0) {
        return; // Salir si no hay coordenadas válidas
      }
    // Eliminar el mapa existente si existe
    const container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }

    // Calcular el promedio de coordenadas para establecer el centro del mapa
    let promedioLatitud = 0;
    let promedioLongitud = 0;

    coordinates.forEach(([lat, lng]) => {
      promedioLatitud += lat;
      promedioLongitud += lng;
    });

    promedioLatitud /= coordinates.length;
    promedioLongitud /= coordinates.length;

    // Crear el mapa con el centro en el promedio de coordenadas y el zoom especificado
    const map = L.map('map').setView([promedioLatitud, promedioLongitud], zoom);

    // Configurar la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Crear el icono personalizado
    const customIcon = L.icon({
      iconUrl: customIconUrl,
      iconSize: [30, 30], // Ajusta el tamaño según tus necesidades
      iconAnchor: [19, 45], // Ajusta el ancla del icono según tus necesidades
      popupAnchor: [0, -38], // Ajusta la posición del popup
    });

    // Añadir marcadores con el icono personalizado para cada coordenada
    coordinates.forEach(([lat, lng]) => {
      L.marker([lat, lng], { icon: customIcon }).addTo(map);
    });

    // Limpiar el mapa cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, [coordinates, zoom]);

  return <div id="map" className=' w-[310px] h-52   md:w-96 md:h-64 ' ></div>;
};
