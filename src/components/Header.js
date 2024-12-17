import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './header.css';


const HeaderComponent=()=>{
return(
    <>
    
        <div class="top-header" id="top-header">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-12">
                        <img src={logo} alt="Anamul Hasan" />
                    </div>

                 
<div class="col-md-12">
    <h1>I'm Shruti Malode</h1>
</div>

                    <div class="col-md-12">
                        <p class="typewriter">Wb Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</p>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    </>
)
};

export default HeaderComponent;