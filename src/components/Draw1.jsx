import draw1 from '../assets/img/draw1.jpg'
import PropTypes from 'prop-types';
export const Draw1 = ({className}) => {
  return (
    <div className={'image-container ${ className}'}>
      <img src={draw1} alt="Starry night, Vicent Van Gogh" className='image'/>  
    </div>
  )
}

Draw1.propTypes = {
  className: PropTypes.string
};
