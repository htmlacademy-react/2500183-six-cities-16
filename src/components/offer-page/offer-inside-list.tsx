const mockInsideItem = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'] as const;

type insideItemProps = {
  itemInside: string;
}

function OfferInside ({itemInside} : insideItemProps) : JSX.Element {
  return (
    <li className="offer__inside-item">
      {itemInside}
    </li>
  );
}

function OfferInsideList () : JSX.Element {
  return (
    <ul className="offer__inside-list">
      {mockInsideItem.map((item) => (<OfferInside itemInside={item} key={crypto.randomUUID()} />))}
    </ul>
  );
}

export default OfferInsideList;
