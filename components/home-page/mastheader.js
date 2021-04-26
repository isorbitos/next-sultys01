import React from 'react'
import Image from 'next/image'
import classes from './masterheader.module.css'

const MasterHeader = () =>(
    <header className="masthead">
        
    
    <div className="container">
   
        <div className="masthead-subheading text-uppercase">Čia gyvena skaniausios sultys</div>
        <div className="masthead-heading text-uppercase"></div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#portfolio">Sužinok daugiau</a>
    </div>
</header>
);

export default MasterHeader;