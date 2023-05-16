import React, { PureComponent } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='postText'
                    placeholder='Add new post'
                    component={Textarea} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPosts = React.memo(props => {

    let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} key={p.id} />)
    let addNewPost = (values) => {
        let body = values.postText
        props.addPostFunc(body)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)

})

const AddNewPostRedux = reduxForm({ form: 'newPostText' })(AddNewPostForm)

export default MyPosts