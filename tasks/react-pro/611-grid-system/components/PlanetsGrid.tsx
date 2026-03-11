import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Planet, SWAPIResponse } from '../types';

interface PlanetsGridProps<As extends React.ElementType = 'section'> {
  as?: As;
  columns?: number;
  children: (planet: Planet) => React.ReactNode;
}

export function PlanetsGrid<As extends React.ElementType = 'section'>({
  as,
  columns = 3,
  children,
  ...rest
}: PlanetsGridProps<As>) {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const { data } = await axios.get<SWAPIResponse>('https://swapi.dev/api/planets/');
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const Component = as || 'section';

  return (
    <Component
      className={`grid gap-6 grid-cols-1 md:grid-cols-${columns} auto-rows-fr`}
      data-testid="planets-grid"
      {...rest}
    >
      {planets.map((planet) => (
        <div key={planet.url} className="h-full">
          {children(planet)}
        </div>
      ))}
    </Component>
  );
}
