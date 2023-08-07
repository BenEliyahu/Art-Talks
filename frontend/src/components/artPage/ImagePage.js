import React from 'react';
import Chat from '../chat/Chat';
import './ImagePage.css';
import { useFetchArts } from '../../hooks/useFetchArts';
import ArtCard from '../ArtCard';

const ImagePage = ({ selectedArt }) => {
  const { title, artist } = selectedArt || {}; 

  const { data: art, loading, error } = useFetchArts(title);

  if (!selectedArt) {
    return <div>No art selected.</div>;
  }

  return (
    <section className='image-page__section'>
      <div>
        <div className='selected__wrapper'>
          <h4 className='selected__title'>{title}</h4>
          <p className='card__artist'>By: {artist}</p>
        </div>
        <div className='artwork__wrapper'>
          <ArtCard art={selectedArt} isSelectedArt={true} />
          {art && <Chat artId={title} />}
        </div>
      </div>
    </section>
  );
};

export default ImagePage;
