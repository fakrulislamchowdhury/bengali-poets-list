import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Poet.css';

const Poet = (props) => {
    const{img, name, job, dob, country, salary}=props.poet; // destructuring in poet
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    console.log(props.poet);

    return (
        <>
        <div className='poet'>
             <img src={img} alt="" />
             <div className='field'>
             <h4>Name: {name}</h4>
             <p>Job: {job}</p>
             <p>DOB: {dob}</p>
             <p>Country: {country}</p>
             <p>Salary: ${salary}</p>
             </div>
             <br />
             <button onClick={()=>props.handleAddToCart(props.poet)} className="btn-regular">{cartIcon} Add To Cart</button>
        </div>
        </>
    );
};
export default Poet;