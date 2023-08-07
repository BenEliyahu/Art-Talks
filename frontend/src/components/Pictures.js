import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/artPage/ImagePage.css';
import { useFetchArts } from '../hooks/useFetchArts';
import ArtCard from './ArtCard';

const Pictures = ({ setSelectedArt }) => {
  const [search, setSearch] = useState('');
  const { data: arts, loading, error } = useFetchArts(search);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading artworks.</div>;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  return (
    <div>
      <form className='search__container' onSubmit={handleSearchSubmit}>
        <div className='search__wrapper'>
          <input
            className='search__field'
            type='text'
            value={search}
            onChange={handleSearchChange}
            placeholder='What are you looking for?'
          />
        </div>
      </form>
      <div className='card__list'>
        {arts.map((art) => (
          <div className='card__container' key={art.title}>
            <Link className='link' to={`/image/${art.title}`}>
              <ArtCard
                art={art}
                onClick={handleArtClick}
                isSelectedArt={false}
              />
              <div className='card__content'>
                <h3>{art.title}</h3>
                <p className='card__artist'>Artist: {art.artist}</p>
                <p>Description: {art.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
