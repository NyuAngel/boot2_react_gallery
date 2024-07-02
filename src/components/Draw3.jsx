import draw3 from '../assets/img/draw3.jpg'
import PropTypes from 'prop-types';
export const Draw3 = ({className}) => {
  return (
    <div  className={'image-container ${ className}'}>
      <img src={draw3} alt="Morning in a pine forest, Shishkin" className='image' />
      
    </div>
  )
}
Draw3.propTypes = {
  className: PropTypes.string
};