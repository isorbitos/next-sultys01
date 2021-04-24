import React from "react";
import Story from "./story";


function Storyline (props){
  const allStorys = props.storys
  return (
    <section className="page-section bg-light" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">APIE MUS</h2>
          <h3 className="section-subheading text-muted">
            Leiskis į natūralių sulčių kelionę drauge su mumis
          </h3>
        </div>
        <ul className="timeline">
          {allStorys.map(story=> <Story key={story.date} story={story}/>)}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Tapk mūsų
                <br />
                istorijos
                <br />
                dalimi
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
} 

export default Storyline;
