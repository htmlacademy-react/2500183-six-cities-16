type insideItemProps = {
  itemInside: string;
}

type insideListProps = {
  insideList: string[];
}

function OfferInside ({itemInside} : insideItemProps) : JSX.Element {
  return (
    <li className="offer__inside-item">
      {itemInside}
    </li>
  );
}

function OfferInsideList ({insideList} : insideListProps) : JSX.Element {
  return (
    <ul className="offer__inside-list">
      {insideList.map((item) => (<OfferInside itemInside={item} key={crypto.randomUUID()} />))}
    </ul>
  );
}

export default OfferInsideList;
