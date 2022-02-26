import React,{useEffect, useState} from "react"
import ReactDOM from "react-dom"
class App extends React.Component{
  render(){
     return (
   <div className="App">
  <header className="continer-fluid ">
          <div id="menu-jk" className="header-bottom">
              <div className="container">
                  <div className="row nav-row">
                      <div className="col-md-3 logo">
                         <img src="assets/images/logo.jpg" alt=""/>
                      </div>
                      <div className="col-md-9 nav-col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                <li className="nav-item active">
                                  <a className="nav-link" href="index.html">Home </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="about_us.html">About Us</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="category.html">Category</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="videos.html">Videos</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Blog</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="contact_us.html">Contact US</a>
                                  </li>
                              </ul>
                            </div>
                          </nav>   
                    </div>
                  </div>
              </div>
          </div>
      </header>
  
     


     
      <div className="container-fluid video-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row no-margin video-cover">
                            <iframe  height="415" src="https://www.youtube.com/embed/bveuj63Su4E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           

                            <div className="row no-margin video-title" bis_skin_checked="1">
                                <h6><i className="fas fa-book"></i> 3 Comments</h6>
                            </div>

                            <div className="comment-container">
                                <div className="comment-box row">
                                    <div className="col-2 mghji">
                                        <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-10 detaila">
                                        <h6>Mr. Mical James</h6>
                                        <small>Published on 19-06-2019</small>
                                        <p>In this video, you will learn how to create a stylish appointment
                                             form from scratch using HTML, CSS, and Bootstrap Download the Project</p>
                                    </div>
                                </div>
                                <div className="comment-box row">
                                        <div className="col-2 mghji">
                                            <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                                        </div>
                                        <div className="col-10 detaila">
                                            <h6>Mr. Mical James</h6>
                                            <small>Published on 19-06-2019</small>
                                            <p>In this video, you will learn how to create a stylish appointment
                                                 form from scratch using HTML, CSS, and Bootstrap Download the Project</p>
                                        </div>
                                    </div>
                                    <div className="comment-box row">
                                            <div className="col-2 mghji">
                                                <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                                            </div>
                                            <div className="col-10 detaila">
                                                <h6>Mr. Mical James</h6>
                                                <small>Published on 19-06-2019</small>
                                                <p>In this video, you will learn how to create a stylish appointment
                                                     form from scratch using HTML, CSS, and Bootstrap Download the Project</p>
                                            </div>
                                        </div>
                            </div>

                            
                            <div className="row no-margin video-title" bis_skin_checked="1">
                                    <h6><i className="fas fa-book"></i> Post Your Comment</h6>
                                </div>

                            <div className="comment-text ">
                                <div className="form-row  row">
                                    <input type="text" placeholder=" Enter Name" className="form-control form-control-sm"/>
                                </div>
                                <div class="form-row row">
                                        <input type="text" placeholder="Enter Mobile number" className="form-control form-control-sm"/>
                                </div>
                                <div className="form-row row">
                                        <input type="text" placeholder="Enter Email Address" className="form-control form-control-sm"/>
                                </div>
                                <div className="form-row row">
                                        <textarea placeholder="Enter Comment"   rows="5" className="form-control form-control-sm"></textarea>
                                 </div>
                                 <div className="form-row row">
                                       <button className="btn btn-danger">Post Comment</button>
                                 </div>
                            </div>
                        </div>
                        
                        
                        
                            
                                  
                    </div>
                   
                </div>
            </div>
        </div>   
     
</div>)
  }

}
export default App;