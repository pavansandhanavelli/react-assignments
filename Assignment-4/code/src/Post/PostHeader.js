const PostHeader = ({ config }) => {
    return (
    <div className="PostHeader">
        <div className="PostWrapper">
        <div className="Posttitle">{config.author || ""}</div>
        <div className="PostLocation">{config.location || "" }</div>
    </div>
    <div className="PostAction">...</div>
    </div>
    );
};


export default PostHeader;