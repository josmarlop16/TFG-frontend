import React from 'react';
import { Cast, MovieText } from './styles';

interface CrewMember {
  _id: string;
  primaryName: string;
}

interface CastComponentProps {
  crew: CrewMember[];
}

const CastComponent: React.FC<CastComponentProps> = ({ crew }) => {
  
  const firstTenMembers = crew.slice(0, 10);

  return (
    <Cast>
      {firstTenMembers.map((person) => (
        <MovieText key={person._id}>{person.primaryName}</MovieText>
      ))}
    </Cast>
  );
};

export default CastComponent;
