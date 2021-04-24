import React from "react";
import Image from "next/image";
import classes from "./storyline.module.css";
import Story from "./story";

const STORY_DATA = [
  {
    date: "2014-2017",
    image: "asotis.jpg",
    title: "mūsų kelionės pradžia",
    storyText:
      "Gimus pirmajam mūsų vaikui, po truputį kūrėsi ir mūsų sulčių fabrikėlis. Iš pradžių jis taip ir vadinosi. Veiklos pradžioje tobulinome receptus, dar kūrėme savo identitetą. Gryninomės vertybes. Idėja gaminti sultis, visų pirma gimė iš meilės gamtai  ir laiko mūsų sodyboje greta šimtamečių obelų, kurias paveldėjome iš savo prosenelio. Tik vėliau sužinojome, kad jis buvo agronomas, kūręs įvairias obelų rūšis. Iš čia gimė ir ypatingas mūsų sulčių skonis. Paragavę tikrai įsitikinsite.",
    storySide: ""
  },
  {
    date: "2018-2019",
    image: "aboutLogo.jpg",
    title: "mūsų veiklos identiteto paieškos",
    storyText:
      'Po truputį išsigryninome savo sulčių pirkėją ir komunikaciją. Susikūrėme identitetą - po ilgų ieškojimų pasivadinome "Natūralios sultys". Mūsų sulčių jau yra ragavę klientai nuo Vilniaus iki Klaipėdos ir jų teigimu, tai yra skaniausios natūralios sultys, kokias yra tekę ragauti.',
    storySide: "timeline-inverted"
  },
  {
    date: "2020-2021",
    image: "dangus.jpg",
    title: "mūsų veiklos identiteto paieškos",
    storyText:
      'Bene pirmieji iš sulčių gamintojų savo istoriją ėmėme pasakoti instagrame. Jeigu įdomu sužinoti daugiau apie mus ir mūsų kasdienybę užsukite. Ši svetainė taip pat yra mūsų šeimos bendras darbas. Taip atsitinka, kai šeimoje gyvena web dizainerė ir programuotojas.',
    storySide: ""
  },
];

const Storyline = () => (
  <section className="page-section bg-light" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">APIE MUS</h2>
        <h3 className="section-subheading text-muted">
          Leiskis į natūralių sulčių kelionę drauge su mumis
        </h3>
      </div>
      <ul className="timeline">
        {STORY_DATA.map(story=> <Story key={story.date} story={story}/>)}
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

export default Storyline;
