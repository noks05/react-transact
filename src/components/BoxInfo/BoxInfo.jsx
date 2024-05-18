/* eslint-disable react/prop-types */
import "./boxinfo.css";

function BoxInfo({ number, title, imgData }) {
    const {top, bottom} = title
    const {img, alt} = imgData

    return (
        <div className="box-info">
            <div className="box-info__number">{number}</div>
            <h3 className="box-info__title">
                {top}&nbsp;<br></br>{bottom}
            </h3>

            <div className="img-wrap box-info__img">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default BoxInfo

