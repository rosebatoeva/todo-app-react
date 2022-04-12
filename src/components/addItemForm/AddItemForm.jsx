import uuid from 'react-uuid';
import { useState } from 'react';
import { useCreatePostMutation } from '../../api/apiSlice';

import './addItemForm.css';

const AddItemForm = () => {

  const [ postTitle, setPostTitle ] = useState('');

  const [ createPost ] = useCreatePostMutation();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuid(),
      title: postTitle,
      completed: false
    }

    if(postTitle.length > 0) {
      createPost(newPost).unwrap();
    }

    setPostTitle('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input         
        onChange={e => setPostTitle(e.target.value)}
        type="text" 
        value={postTitle}
        placeholder='Create a new todo' />
    </form>
    
  )
}

export default AddItemForm;