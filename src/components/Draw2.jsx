import draw2 from '../assets/img/draw2.jpg'
import PropTypes from 'prop-types';
export const Draw2 = ({className}) => {
  return (
    <div className= {'image-container ${ className}'}>
      <img src={draw2} alt="Antibes seen from the Salis Gardens, Monet" className='image' />
    </div>
  )
}
Draw2.propTypes = {
  className: PropTypes.string
};
