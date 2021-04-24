import classes from "./story.module.css"
import Image from 'next/image'

function Story(props){
    const {date, image, title, storyText, storySide} = props.story
    return(
        <li className={storySide}>
            <div className="timeline-image">
            <div className={classes.image}>
            <Image src={`/img/about/${image}`} alt="asotis"  height="200" width="200"/>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>{date}</h4>
              <h4 className="subheading">{title}</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">{storyText}</p>
            </div>
          </div>
        </li>
    )
};

export default Story;