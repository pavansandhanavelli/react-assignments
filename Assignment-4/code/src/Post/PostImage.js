const PostImage = ({ config }) => {
    const ImageURL=`../assests/${config.PostImage}`;
    return <div className="PostImageWrapper">
    <img src={ImageURL} alt={config.description}/>
    </div>;
};
export default PostImage;