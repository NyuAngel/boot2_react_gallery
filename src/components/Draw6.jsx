import draw6 from '../assets/img/draw6.jpg'
import PropTypes from 'prop-types';
export const Draw6 = ({className}) => {
  return (
    <div className={'image-container ${ className}'}>
      <img src={draw6} alt="Cotopaxi , Frederick Edwin" className='image'/>
      
    </div>
  )
}
Draw6.propTypes = {
  className: PropTypes.string
};