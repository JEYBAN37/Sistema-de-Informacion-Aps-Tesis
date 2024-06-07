import { DonutGraphFamily } from '../../components/dash/DonutGraphFamily';
import { BarListSex } from '../../components/dash/BarListSex';
import { BarChartStratum } from '../../components/dash/BarChartStratum';
import { DonutGraphAffiliation } from '../../components/dash/DonutGraphAffiliation';
import { useEffect, useState } from 'react';
import { Cordenadas, Map } from '../../components/dash/Map';


interface DashboardGeneralProps {
  data: any[];
}

export const DashboardGeneral:React.FC<DashboardGeneralProps> = ({data}) => {
  const [coordinates, setCoordinates] = useState<Cordenadas[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    try{
    setCoordinates(data[12]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    
  }, []); 
  


  return (
    <>
        <div className='flex flex-col items-center p-4  md:flex-row '>
            <Map packCordnadas={coordinates}/>
            <BarListSex dataref={data[2]} title='Total Generos Sexuales'/>
        </div>
        <div className='flex flex-col items-center p-4  md:flex-row'>
            <BarChartStratum dataref={data[1]} title='Total Familias vinculadas a Estratos sociales' variable='estratum'/>
            <DonutGraphAffiliation dataref={data[3]} title='Total de personas vinvuladas a Regimen de afiliación' variable='affiliation_regime'/>
        </div>
    </>
  )
}
