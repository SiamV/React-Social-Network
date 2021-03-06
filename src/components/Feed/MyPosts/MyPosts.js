import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = React.memo((props) => {
    let postsElements = [...props.myPostsData].reverse().map(p => (
        <Post description={p.post} like={p.like} key={p.id} />
    ))

    return (
        <div className={classes.MyPosts}>
            {postsElements}
        </div>
    )
})

export default MyPosts;