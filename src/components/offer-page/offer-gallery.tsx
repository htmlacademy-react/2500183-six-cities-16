import { mockImages } from '../../const';

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
