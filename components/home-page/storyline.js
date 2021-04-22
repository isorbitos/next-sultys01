import React from "react";
import Image from 'next/image'
import classes from "./storyline.module.css"

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
        <li>
          <div className="timeline-image">
            <div className={classes.image}>
            <Image src={`/img/about/asotis.jpg`} alt="asotis"  height="200" width="200"/>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2014-2017</h4>
              <h4 className="subheading">mūsų kelionės pradžia</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Gimus pirmajam mūsų vaikui, po truputį kūrėsi ir mūsų sulčių
                fabrikėlis. Iš pradžių jis taip ir vadinosi. Veiklos pradžioje
                tobulinome receptus, dar kūrėme savo identitetą. Gryninomės
                vertybes. Idėja gaminti sultis, visų pirma gimė iš meilės gamtai
                ir laiko mūsų sodyboje greta šimtamečių obelų, kurias
                paveldėjome iš savo prosenelio. Tik vėliau sužinojome, kad jis
                buvo agronomas, kūręs įvairias obelų rūšis. Iš čia gimė ir
                ypatingas mūsų sulčių skonis. Paragavę tikrai įsitikinsite.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/aboutLogo.jpg"
              alt=""
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2018-2019</h4>
              <h4 className="subheading">mūsų veiklos identiteto paieškos</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Po truputį išsigryninome savo sulčių pirkėją ir komunikaciją.
                Susikūrėme identitetą - po ilgų ieškojimų pasivadinome
                "Natūralios sultys". Mūsų sulčių jau yra ragavę klientai nuo
                Vilniaus iki Klaipėdos ir jų teigimu, tai yra skaniausios
                natūralios sultys, kokias yra tekę ragauti.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/dangus.jpg"
              alt=""
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2020-2021</h4>
              <h4 className="subheading">mūsų vietos po saule paieškos</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Bene pirmieji iš sulčių gamintojų savo istoriją ėmėme pasakoti
                instagrame:
                <a href="https://www.instagram.com/zavinta_naturaliossultys/">
                  zavinta_naturaliossultys
                </a>
                Jeigu įdomu sužinoti daugiau apie mus ir mūsų kasdienybę
                užsukite. Ši svetainė taip pat yra mūsų šeimos bendras darbas.
                Taip atsitinka, kai šeimoje gyvena web dizainerė ir
                programuotojas.
              </p>
            </div>
          </div>
        </li>

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
