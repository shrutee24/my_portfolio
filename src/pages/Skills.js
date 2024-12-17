import React from 'react';
import '../App.css';


const Skills=()=>{
    return(
        <div class="skills">
            <h1>Skills</h1>
            <div class="row">
                    <div class="col-md-6">
                        <div class="skills">
                            <h3>Front End Skills</h3>
                            <div class="skill-name">
                                <p>HTML</p><p>90%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div class="skill-name">
                                <p>CSS</p><p>85%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div class="skill-name">
                                <p>JavaScript</p><p>83%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="skills">
                            <h3>Back End Skills</h3>
                            <div class="skill-name">
                                <p>PHP</p><p>85%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div class="skill-name">
                                <p>Laravel</p><p>90%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div class="skill-name">
                                <p>MySQL</p><p>90%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}




export default Skills;