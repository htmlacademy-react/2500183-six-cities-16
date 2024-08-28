type imageSrcProps = {
  imageSrc: string;
}

function OfferImage ({imageSrc} : imageSrcProps) : JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={imageSrc}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferImage;
