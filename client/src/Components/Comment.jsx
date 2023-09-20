import React, { useEffect, useState} from 'react'
// import NewComment from './NewComment'
// import NewStory from './NewStory'

// ************************** ADD JSON.db TO ADD STORIES ************************

function Comment() {
    const [newComment,setNewComment] = useState([])
    const [newStory, setNewStory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/story")
        .then (response => response.json())
        .then (data => setItemList(data))
    },[])

    function addNewStory(createdStory){
        setNewStory([...newStory,createdStory])
        }
        
  return (
    <div className='Comment-Container'>
            <h2>Add Comments Here</h2>
            <NewComment addNewComment={addNewComment}/>
            <p></p>
            <p></p>
        <div className='Communicate-Container'>
            <h2>Share your story. How have you used your peformance dashboards? </h2>
            <NewStory addNewStory={addNewStory}/>
        </div>
    </div>
  )
}

export default Comment