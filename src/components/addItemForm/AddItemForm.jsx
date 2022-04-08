import { useState } from 'react';
import { useCreatePostMutation } from '../../api/apiSlice';

import './addItemForm.css';

const AddItemForm = () => {

  const [ postTitle, setPostTitle ] = useState('');

  const [ createPost ] = useCreatePostMutation();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: postTitle,
      title: postTitle,
      completed: false
    }

    console.log('newPost');

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
        placeholder='Create a new todo' />
    </form>
    
  )
}

export default AddItemForm;