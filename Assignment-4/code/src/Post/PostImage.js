const PostImage = ({ config }) => {
    const relativeImageURL = `https://instaclonepavanb.herokuapp.com/${config.image}`;
    return <div className="PostImageWrapper">
 <img src={relativeImageURL} />
 
 </div>
};
export default PostImage;