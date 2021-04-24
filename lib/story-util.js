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

  export function getAllStorys(){
      const storys =  STORY_DATA
      return storys
  }