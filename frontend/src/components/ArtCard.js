const ArtCard = ({ art, onClick, isSelectedArt }) => {
  return (
    <div onClick={onClick ? () => onClick(art) : undefined}>
      <img
        className={`card__image ${
          isSelectedArt ? 'card__image-full' : 'card__image-part'
        }`}
        src={art.picture}
        alt={art.title}
      />
    </div>
  );
};

export default ArtCard;
