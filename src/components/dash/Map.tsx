import React, { useEffect, useState } from 'react';
import {HeatMap} from './HeatMap'; // Asegúrate de que la ruta sea correcta
import { Title } from '@tremor/react';



export interface Cordenadas {
  cordenadas:[number,number]
}

export interface dataCordenadas {
    packCordnadas : Cordenadas[]
}


export const Map: React.FC <dataCordenadas> = ({packCordnadas}) => {
  const zoom = 19; // Nivel de zoom
  console.log(packCordnadas)
  

  return (
    <div className='flex flex-col justify-center items-center md:h-1/2 md:w-1/2 m-2 border-2 border-blue-200 bg-white p-4 rounded-2xl'>
      <Title className='text-black text-center mb-4'>Ubicacion Geografica de las Familias</Title>
      <HeatMap coordinates={packCordnadas} zoom={zoom} />
    </div>
  );
};


