import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
    useGetPostsQuery, 
    useDeletePostMutation, 
    useUpdatePostTrueMutation,
    useUpdatePostFalseMutation
} from "../../api/apiSlice";

import Item from "../item/Item";

import './itemList.css';

const ItemsList = () => {
    const {activeFilter} = useSelector(state => state.filters);

    const [updatePostTrue] = useUpdatePostTrueMutation();    
    const [updatePostFalse] = useUpdatePostFalseMutation();
    const [deletePost] = useDeletePostMutation();

    const {
        data: posts = [],
        isLoading,
        isError,
    } = useGetPostsQuery();

    if (isLoading) {
        return 'Загрузка...'
    } else if (isError) {
        return 'Ошибка загрузки'
    };

    const onChecked = (item) => {

        if(item.completed === true) {
            updatePostTrue(item.id, item.completed).unwrap();
        } else if (item.completed === false) {
            updatePostFalse(item.id, item.completed).unwrap();
        }
        
    }

    const onDelete = (id) => {
        deletePost(id)
    };

    const filteredPosts = function() {
        let filteredPosts = posts;

        if(activeFilter === true) {
            filteredPosts = posts?.filter(post => post.completed === true)
        } else if (activeFilter === false){
            filteredPosts = posts?.filter(post => post.completed === false)
        } else if (activeFilter === 'All') {
            filteredPosts = posts;
        }

        return filteredPosts;
    };

    const renderItemsList = (posts) => {
        return posts?.map(post => {
            const { id, completed, title } = post;
            return <Item 
                key={id} 
                completed={completed} 
                title={title} 
                onChecked={() => onChecked(post)}
                onDelete={() => onDelete(id)}/>
        }
    )};

    const itemsList = renderItemsList(filteredPosts()); 
    
    return (
        <ul className="itemsList">            
            {itemsList}
        </ul>
    )
}

export default ItemsList;