import './filterPanel.css';
import { useDispatch } from 'react-redux';

import { filtersChanged } from './filterPanelSlice';
import { 
    useGetPostsQuery,
    useDeletePostMutation
} from "../../api/apiSlice";


const FilterPanel = () => {

    const {
        data: posts = []
    } = useGetPostsQuery();

    const [deletePost] = useDeletePostMutation();

    const activePosts = posts.filter(post => post.completed === false);
    const completedPosts = posts.filter(post => post.completed === true);
    const idArrCompletedPosts = completedPosts.map(post => post.id);

    const onClearCompleted = () => {
        idArrCompletedPosts.forEach(id => deletePost(id))
    }

    const dispatch = useDispatch();
    
    return (
        <div className="filter-panel">
            <div className="filter-panel__count">
                {activePosts.length} items left
            </div>
            <div className="filter-panel__filters">
                <span onClick={() => dispatch(filtersChanged('All'))}>All</span>
                <span onClick={() => dispatch(filtersChanged(false))}>Active</span>
                <span onClick={() => dispatch(filtersChanged(true))}>Completed</span>
            </div>
            <div 
                className="filter-panel__btn-clear"
                onClick={onClearCompleted}
            >
                Clear completed
            </div>

        </div>
    )
}

export default FilterPanel;