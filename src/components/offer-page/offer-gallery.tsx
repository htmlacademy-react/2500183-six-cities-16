const mockImages = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'] as const;

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

function OfferGallery () : JSX.Element {
  return (
    <div className="offer__gallery">
      {mockImages.map((imageSrc) => (
        <OfferImage imageSrc={imageSrc} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default OfferGallery;
