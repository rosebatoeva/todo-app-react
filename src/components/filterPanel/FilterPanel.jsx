import './filterPanel.css';
import { useDispatch } from 'react-redux';

import { filtersChanged } from './filterPanelSlice';


const FilterPanel = () => {

    const dispatch = useDispatch();
    
    return (
        <div className="filter-panel">
            <div className="filter-panel__count">
                0 items left
            </div>
            <div className="filter-panel__filters">
                <span onClick={() => dispatch(filtersChanged('All'))}>All</span>
                <span onClick={() => dispatch(filtersChanged(false))}>Active</span>
                <span onClick={() => dispatch(filtersChanged(true))}>Completed</span>
            </div>
            <div className="filter-panel__btn-clear">
                Clear completed
            </div>

        </div>
    )
}

export default FilterPanel;