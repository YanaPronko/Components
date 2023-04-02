import { Component } from 'react';
import { IValidCard } from '../pages/FormPage';

type Props = {
  item: IValidCard;
};

class ValidCard extends Component<Props> {
  render() {
    const { fullname, date, gender, country, accept, pathToFile } = this.props.item;
    if (pathToFile)
      return (
        <li className="card__item">
          <h2 className="card__name">Full name: {fullname}</h2>
          <div className="card__string">Birthday: {date}</div>
          <div className="card__string">Gender: {gender}</div>
          <div className="card__string">Country: {country}</div>
          <div className="card__string">Acccept: {accept}</div>
          <img src={URL.createObjectURL(pathToFile)} alt="file img" />
        </li>
      );
  }
}
export default ValidCard;
