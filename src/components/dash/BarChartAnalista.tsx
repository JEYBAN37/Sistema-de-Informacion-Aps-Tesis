import React, { useEffect } from 'react'
import { BarChart, Card, EventProps, Title } from '@tremor/react';
import { Graficprops } from './DonutGraphSport';
import { useNavigate } from 'react-router-dom';

export const BarChartAnalista: React.FC<Graficprops> = ({ dataref, title, variable }) => {
  const [value, setValue] = React.useState<EventProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (value !== null) {
        navigate(`/Family/${variable}/${value.id}`);
      }
    };

    getData();
  }, [value, navigate, variable]);

  return (
    <Card className="m-2 border border-blue-200">
      <Title className='text-black text-center'>{title}</Title>
      <BarChart 
        className='border-2 border-blue-500 mt-2'
        data={dataref}
        index="name"
        categories={['total']}
        colors={['green', 'red']}
        yAxisWidth={48}
        onValueChange={(v) => setValue(v as EventProps)}
      />
      <p className='text-sm text-blue-900 font-medium mt-4 text-center'>
        En esta gráfica se presenta la cantidad total de familias encuestadas con o sin vulnerabilidad social.
      </p>
    </Card>
  )
}
