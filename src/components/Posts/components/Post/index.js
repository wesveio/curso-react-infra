import React, {Component} from 'react';
import './style.css';

export default class Post extends Component {

    state = {
        post: null,
        liked: false
    }

    handleLikeClick() {
        
    }

    handleDoubleClick() {
        
    }

    updatePostState() {
        
    }
    
    componentDidMount() {
        
    }

    render() {
        const { post, liked } = this.state;

        return(
            <div>
                {post ? (
                    <div className="post__item">
                        <div className="post__header">
                            <div className="post__user-info">
                                <div className="post__user-profile-pic">
                                    <img src="" alt="" />
                                </div>
                                <div className="post__user-text">
                                    <p>{/* USER NAME */}</p>
                                    {post.location ? (
                                        <small>{/* POST LOCATION */}</small>
                                    ): ""}
                                </div>
                            </div>
                        </div>
                        <div
                            className="post__file"
                            onDoubleClick=""
                        >
                            <span className="like__big">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                            </span>
                            <img src="" alt="" />
                        </div>
                        <div className="post__footer">
                            <div className="post__actions">
                                <button className="post__btn btn__like" onClick="">
                                    <span className="sprite like"></span>
                                </button>
                                <button className="post__btn btn__comment">
                                    <span className="sprite comment"></span>
                                </button>
                                <button className="post__btn btn__direct">
                                    <span className="sprite direct"></span>
                                </button>
                                <button className="post__btn btn__save">
                                    <span className="sprite save"></span>
                                </button>
                            </div>
                            <div className="post__description">
                                <strong>{/* USER NAME */}</strong> {/* POST DESCRIPTION */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Carregando...</h1>
                )}
            </div>
        )
    }
}


