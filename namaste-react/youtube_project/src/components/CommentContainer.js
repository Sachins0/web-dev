import React from 'react'

const commentsData=[
    {
        name:"Sachin Singh",
        text:"Welcome to youtube made by me",
        replies:[],
    },
    {
        name:"Sachin Singh",
        text:"Welcome to youtube made by me",
        replies:[
            {
                name:"Sachin Singh",
                text:"Welcome to youtube made by me",
                replies:[
                    {
                        name:"Sachin Singh",
                        text:"Welcome to youtube made by me",
                        replies:[
                            {
                                name:"Sachin Singh",
                                text:"Welcome to youtube made by me",
                                replies:[],
                            },
                        ],
                    },
                ],
            },
            {
                name:"Sachin Singh",
                text:"Welcome to youtube made by me",
                replies:[],
            },
        ],
    },
    {
        name:"Sachin Singh",
        text:"Welcome to youtube made by me",
        replies:[],
    },
    {
        name:"Sachin Singh",
        text:"Welcome to youtube made by me",
        replies:[],
    },
]

const Comment=({data})=>{
    const {name,text,replies}=data
    return (
        <div className='flex shadoe-lg bg-gray-100 rounded-lg my-2'>
        <img className='h-8' alt="user" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"/>
            <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            </div>
        </div>
        
    )
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>
    <div key={index}>
        <Comment data={comment}/>
        <div className='pl-7 ml-7'>
        <CommentsList comments={comment.replies}/>
        </div>
    </div>
    )
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>Comments: </h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer