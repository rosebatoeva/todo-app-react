
import './item.css';

const Item = ({ id, title, completed, onChecked, onDelete}) => {

   

    let classes = !completed ? 'active' : '';

    return (
        <li className='item' key={id} style={{display: 'flex'}}>
            <div 
                className={`item__checkbox ${classes}`}
                onClick={onChecked}
            > ✔
            </div>
            <div className={`item__title ${classes}`}>{title}</div>
            <div 
                className="item__delete-btn"
                onClick={onDelete}
            >✘
            </div>
        </li>
    )
}

export default Item; 