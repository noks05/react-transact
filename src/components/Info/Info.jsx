import "./info.css";
import BoxInfo from '../BoxInfo/BoxInfo.jsx';
import saturn from '../../assets/img/saturn.svg';
import planet from '../../assets/img/planet.svg';
import asteroid from '../../assets/img/asteroid.svg';
import stars from '../../assets/img/stars.svg';

function Info() {
    return (
        <div className="info">
            <div className="info__title">At a Glance</div>

            <ul className="info__list list-reset">
                <li className="info__item">
                    <BoxInfo number="200+"
                        title={
                            { top: "Business ", bottom: "customers" }}
                        imgData={
                            { img: saturn, alt: 'saturn' }} />
                </li>
                <li className="info__item">
                    <BoxInfo number="160+"
                        title={
                            { top: "Countries and ", bottom: "regions supported" }}
                        imgData={
                            { img: planet, alt: 'planet' }} />
                </li>
                <li className="info__item">
                    <BoxInfo number="24/7"
                        title={
                            { top: "Customer ", bottom: "Support" }}
                        imgData={
                            { img: asteroid, alt: 'asteroid' }} />
                </li>
                <li className="info__item">
                    <BoxInfo number="20+"
                        title={
                            { top: "In-app ", bottom: "currencies" }}
                        imgData={
                            { img: stars, alt: 'stars' }} />
                </li>
            </ul>
        </div>
    )
}

export default Info

