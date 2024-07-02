import draw4 from '../assets/img/draw4.jpg'
import PropTypes from 'prop-types';
export const Draw4 = ({className}) => {
  return (
    <div className={'image-container ${ className}'}>
      <img src={draw4} alt="The artist's garden at Giverny , Monet" className='image'/>
      
    </div>
  )
}
Draw4.propTypes = {
  className: PropTypes.string
};
