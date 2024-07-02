import draw5 from '../assets/img/draw5.jpg'
import PropTypes from 'prop-types';
export const Draw5 = ({className}) => {
  return (
    <div className={'image-container ${ className}'}>
      <img src={draw5} alt="the wave, Hokusai" className='image'/>
      
    </div>
  )
}
Draw5.propTypes = {
  className: PropTypes.string
};
