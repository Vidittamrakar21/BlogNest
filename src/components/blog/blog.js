import './blog.css'
import { useContext } from 'react';
import checkcontext from '../../context/checkcontext';
import {Link} from 'react-router-dom';

function Blog () {
    const a = useContext(checkcontext);
    const comments = [{name: "Vidit", com: "Nice blog! "},{name: "Varun", com: "excellent blog! "},{name: "Rithuik", com: "hey guys!! "},{name: "JUnaid", com: "Great work "}];

    const io = () => {
        a.opencom()
    }

    const remove = () => {
        a.closecom();
    } 
            
    return (
        <>
        <div id="blog">
        <Link className='lona'  to={'/user'}><h5 id='zs'>By @<span id='byy'>Vidit Tamrakar</span></h5></Link>
            <div id="card">
                <div id="fro">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/FR/KN/OX/55284628/python-programming-online-course-500x500.jpeg" alt="" />
                </div>

                <div id="content">
                    <h1>Python And It's Application</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit iusto excepturi exercitationem impedit ipsa alias delectus odio eos ducimus, corporis eaque reiciendis qui inventore! Culpa iste quis quasi. Eius, ut perspiciatis perferendis error enim ipsa facere porro alias consequuntur? Enim, rem aperiam voluptatibus nesciunt perferendis sint in veniam tempora, quia quas quaerat, illum repellendus dolorum. Corporis odio est accusamus, maxime debitis consequuntur quibusdam iusto sunt pariatur, beatae nisi voluptatem hic error omnis et voluptates explicabo earum odit illum ratione! Enim quibusdam eveniet voluptatibus eligendi voluptatum reiciendis officiis eum, suscipit nemo facere laborum minima in aspernatur nobis temporibus sapiente culpa fuga velit voluptate! Iure, corrupti nobis illum quis repudiandae eos quisquam accusantium nisi magni explicabo minus autem similique libero. Magnam, quidem commodi voluptate debitis hic quos fugiat, iste esse iusto repellendus cum. Dolor commodi nemo eius quod sit ad rerum velit ducimus ab nisi dicta asperiores atque libero eligendi enim quia repellat in ullam minus, totam eveniet. Aspernatur debitis autem vero itaque animi nulla placeat similique a. Odio ullam itaque error placeat velit autem quos qui cum laboriosam! Nemo, tempora doloremque! Asperiores aliquam quasi, ab fugit cum similique ex error. Est, natus? Ad dolore accusantium recusandae, temporibus id provident, saepe labore incidunt quaerat laudantium ut aspernatur, repellendus optio dolorum non harum voluptate quis cupiditate sint earum autem? Repellendus perspiciatis minus nulla itaque nemo explicabo, reiciendis deserunt, sapiente commodi cum obcaecati expedita nisi! In, veritatis? Repellendus vel possimus ea aliquid ratione. Pariatur numquam nam consequatur sit laboriosam. Temporibus illum molestias minus deserunt, inventore distinctio dolor ullam quis obcaecati culpa illo placeat voluptatem officiis! Quod facere cumque beatae mollitia, eveniet, at dolor, suscipit quae quaerat fugit illum neque? Quo eum voluptatum, adipisci voluptatem id odit nemo voluptates eveniet nulla delectus sit, excepturi cumque ullam cupiditate! Neque assumenda inventore ducimus et. Est at aliquid nesciunt dignissimos porro maiores! Facere nihil ipsum delectus distinctio deleniti corrupti. Ullam, minima soluta. Adipisci dolorum mollitia enim neque quo! Qui minus fugiat facere accusantium maiores. Vitae quod aperiam eos. Impedit blanditiis minima ex non debitis sapiente ab ipsum, labore modi voluptatibus enim, nesciunt asperiores mollitia excepturi minus repellat dolor fugit a et eligendi quod! Laborum excepturi accusamus molestias, itaque blanditiis veniam eos quaerat repudiandae iste qui laudantium nam atque asperiores mollitia maiores doloribus animi exercitationem totam recusandae architecto esse magnam culpa minus! Maiores deleniti et dolor ducimus repudiandae suscipit quidem, ratione reprehenderit mollitia explicabo deserunt necessitatibus, laborum autem? Modi, doloremque dolore error itaque nobis iusto dicta beatae in molestiae asperiores illo earum tenetur quasi, ea enim quos, nesciunt consequuntur eligendi incidunt quisquam repellat qui. Minima ducimus incidunt sint non repudiandae cupiditate cum, minus temporibus quas ex ut quam deleniti perspiciatis ad voluptatem rerum? Excepturi assumenda repellat quas dolorum saepe? Quam minus labore tempore voluptatem fugiat, rerum laborum corporis ut, ea adipisci aut est, necessitatibus cupiditate alias sequi beatae laudantium dolore nam reiciendis similique eum. Veritatis hic, eos accusantium quo odio cumque ipsum quisquam perspiciatis, ex ipsa sunt exercitationem eum voluptates nesciunt explicabo est architecto. Minus corrupti molestias saepe!</p>
                </div>

                <div id="operate">
                    <div id='like' className='vi'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-heart" viewBox="0 0 16 16">
                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>

                      <h5>15</h5>
                    </div>

                    <div id='chat' className='vi' onClick={io}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      </svg>
                      <h5>4</h5>
                    </div>

                    <div id="save" className='vi'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                    </div>
                </div>

         

            </div>







            {/* comment section starts here*/}
            <div id='outer'  className={`${!a.com ? "hide" : ""}`}>
                <div id="comment">
                    <h2>Responses(4)</h2>
                    <div id='area'>
                    <textarea name="comment box" id="text" cols="45" rows="10" placeholder='&nbsp; What are your thoughts?'></textarea>
                    </div>
                    <div id='rr'>
                        <button id="can"className='mut' onClick={remove}>Cancel</button>
                        <button id="resp"className='mut'>Respond</button>                    
                    </div>
                    <div id="response">

                        {comments.map((item)=>{
                        
                               return(
                                <div id="xx">

                                    <div id='fufa'>
                                         <div id="top">
                                           <img src="/images/vid.jpg" alt="" />
                                         </div>
                                         <h3>By @{item.name}</h3>
                                    </div>
                                <h4>{item.com}</h4>
                            </div>
                            
                               )
                        })}
                       
                      
                       
                    

                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Blog;
