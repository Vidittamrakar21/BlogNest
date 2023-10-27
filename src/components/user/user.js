import Latest from "../latest/latest";

function User (props) {
    const num = props.blogs
    return (
        <div id="nand">
            <div id="about">
                    <div id="namu">
                        <div id="oop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='ff'>
                           <h2>@{props.name}</h2>
                            {/* <button id="follow">Follow</button> */}
                        </div>
                    </div>

                    <div id="me">
                        <h3>About Me</h3>
                        <p>{props.about? `${props.about}`: "Write something about yourself !"}</p>
                    </div>

                    <div id="num">
                        {/* <h3>104 Followers</h3> */}
                        <h3>Blogs posted</h3>
                    </div>
                    
                </div>
                <div id="posts">
                    {/* <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest> */}
                </div>
        </div>
    )
}

export default User;