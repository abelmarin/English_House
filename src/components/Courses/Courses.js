import React from 'react';
import Popup from 'reactjs-popup';

import bannerCourses from '../../assets/Banner-Courses-01.jpg';
import teacher from '../../assets/teacher.jpg';
import girlHandRaised from '../../assets/girl-hand-raised.jpg';
import twoStudents from '../../assets/two-students.jpg';

import './Courses.css';


export const Courses = () => {
    return (
        <div className="coursesPage">
            <img src={bannerCourses} alt="Banner Courses" className="bannerCourses" />

            {/* Card for beginners */}
            <div className="card">
                <div className="card-image">
                    <img src={teacher} alt="Teacher" className="schoolPic" />
                    
                </div>
                <div className="card-text">
                    <h2>Beginners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna.</p>
                    
                    <Popup trigger=
                        {<button className="beginner-btn">Read More</button>}
                        modal>
                       {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <h1>Beginners</h1>
                                <p className="modalText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet.<br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque elit sed lorem malesuada, in tincidunt nunc interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis purus gravida, scelerisque lectus vel, rutrum massa. Morbi ullamcorper ipsum eget ullamcorper posuere. Aliquam erat volutpat. Suspendisse maximus sollicitudin mi, vitae scelerisque ipsum. Nullam sed ornare metus. Proin a leo velit. Praesent eget neque aliquet, semper risus sed, varius nulla. Donec eget sem pretium, aliquet massa quis, imperdiet justo. Praesent rutrum eu mauris non rhoncus. Mauris feugiat metus lectus, bibendum rhoncus purus rhoncus vitae.<br/><br/>
                                Integer orci risus, commodo ut aliquet sit amet, feugiat ut orci. Curabitur at nunc ac lorem finibus vestibulum non eu sapien. In a scelerisque erat. Curabitur id ante id leo finibus auctor. Praesent et pharetra sem. Sed fringilla consequat diam vitae dignissim. Curabitur vitae molestie elit. Aliquam quis luctus libero, sit amet tristique neque. Sed ut cursus turpis. In mollis ex maximus tincidunt eleifend. Pellentesque ante diam, bibendum eget magna at, accumsan auctor.</p>
                            </div>
                       )}
                    </Popup>
                    
                </div>
            </div>

            {/* Card for intermediate */}
            <div className="card">
                <div className="card-image">
                    <img src={girlHandRaised} alt="Girl with hand raised" className="schoolPic" />
                </div>
                <div className="card-text">
                    <h2>Intermediate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna.</p>
                    <Popup trigger=
                        {<button className="intermediate-btn">Read More</button>}
                        modal>
                        {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <h1>Intermediate</h1>
                                <p className="modalText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet.<br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque elit sed lorem malesuada, in tincidunt nunc interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis purus gravida, scelerisque lectus vel, rutrum massa. Morbi ullamcorper ipsum eget ullamcorper posuere. Aliquam erat volutpat. Suspendisse maximus sollicitudin mi, vitae scelerisque ipsum. Nullam sed ornare metus. Proin a leo velit. Praesent eget neque aliquet, semper risus sed, varius nulla. Donec eget sem pretium, aliquet massa quis, imperdiet justo. Praesent rutrum eu mauris non rhoncus. Mauris feugiat metus lectus, bibendum rhoncus purus rhoncus vitae.<br/><br/>
                                Integer orci risus, commodo ut aliquet sit amet, feugiat ut orci. Curabitur at nunc ac lorem finibus vestibulum non eu sapien. In a scelerisque erat. Curabitur id ante id leo finibus auctor. Praesent et pharetra sem. Sed fringilla consequat diam vitae dignissim. Curabitur vitae molestie elit. Aliquam quis luctus libero, sit amet tristique neque. Sed ut cursus turpis. In mollis ex maximus tincidunt eleifend. Pellentesque ante diam, bibendum eget magna at, accumsan auctor.</p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>

            {/* Card for advanced */}
            <div className="card">
                <div className="card-image">
                    <img src={twoStudents} alt="Two Students" className="schoolPic" />
                </div>
                <div className="card-text">
                    <h2>Advanced</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna.</p>
                    <Popup trigger=
                        {<button className="advanced-btn">Read More</button>}
                        modal>
                        {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <h1>Advanced</h1>
                                <p className="modalText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet.<br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque elit sed lorem malesuada, in tincidunt nunc interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis purus gravida, scelerisque lectus vel, rutrum massa. Morbi ullamcorper ipsum eget ullamcorper posuere. Aliquam erat volutpat. Suspendisse maximus sollicitudin mi, vitae scelerisque ipsum. Nullam sed ornare metus. Proin a leo velit. Praesent eget neque aliquet, semper risus sed, varius nulla. Donec eget sem pretium, aliquet massa quis, imperdiet justo. Praesent rutrum eu mauris non rhoncus. Mauris feugiat metus lectus, bibendum rhoncus purus rhoncus vitae.<br/><br/>
                                Integer orci risus, commodo ut aliquet sit amet, feugiat ut orci. Curabitur at nunc ac lorem finibus vestibulum non eu sapien. In a scelerisque erat. Curabitur id ante id leo finibus auctor. Praesent et pharetra sem. Sed fringilla consequat diam vitae dignissim. Curabitur vitae molestie elit. Aliquam quis luctus libero, sit amet tristique neque. Sed ut cursus turpis. In mollis ex maximus tincidunt eleifend. Pellentesque ante diam, bibendum eget magna at, accumsan auctor.</p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )

}
