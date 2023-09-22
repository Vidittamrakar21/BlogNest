import Latest from "../latest/latest";

function User () {
    return (
        <div id="nand">
            <div id="about">
                    <div id="namu">
                        <div id="oop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='ff'>
                           <h2>@Vidit Tamrakar</h2>
                            <button id="follow">Follow</button>
                        </div>
                    </div>

                    <div id="num">
                        <h3>104 Followers</h3>
                        <h3>4 Blogs Posted</h3>
                    </div>

                    <div id="me">
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium deleniti fuga atque necessitatibus, ratione modi adipisci iusto distinctio rem, odit quo! Atque possimus fugit expedita. Iure quo amet enim molestias dignissimos dolor quia tenetur, odit illo ipsam accusantium provident esse blanditiis voluptatem neque tempora perspiciatis asperiores vero facilis. Itaque.</p>
                    </div>
                </div>
                <div id="posts">
                    <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest>
                </div>
        </div>
    )
}

export default User;