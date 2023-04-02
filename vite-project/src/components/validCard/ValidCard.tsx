import { IValidInputCard } from '../pages/FormPage';

interface ItemProps {
  item: IValidInputCard;
}

const ValidCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <li className="card__item">
      <h2 className="card__name">Full name: {item.name}</h2>
      <div className="card__string">Birthday: {item.birthday}</div>
      <div className="card__string">Gender: {item.gender}</div>
      <div className="card__string">Country: {item.country}</div>
      <div className="card__string">Accept: {`${item.accept}`}</div>
      <img src={item.img} alt="file img" />
    </li>
  );
};

export default ValidCard;
