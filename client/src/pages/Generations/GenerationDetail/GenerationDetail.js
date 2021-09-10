import React from 'react';
import { useParams } from 'react-router';
export const GenerationDetail = () => {
  const { generationId } = useParams();
  console.log('generationId');
  return <p>Generation Detail {generationId}</p>;
};
