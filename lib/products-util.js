const DUMMY_DATA = [
    {
      id: "asultys",
      name: "ANTANINIŲ OBUOLIŲ SULTYS",
      picture: "antaniniai.jpg",
      composition:"100 %  antaninių obuolių sultys",
      taste:"saldžiarūgščių ir saldžių obuolių",
      mainWindow:true
    },
    {
      id: "osultys",
      name: "OBUOLIŲ SULTYS",
      picture: "pexels-polina-tankilevitch-4110507.jpg",
      composition:"100 % obuolių sultys",
      taste:"saldžiarūgščių ir saldžių obuolių",
      mainWindow:true
    },
    {
      id: "ksultys",
      name: "OBUOLIŲ-KRIAUŠIŲ SULTYS",
      picture: "pexels-ylanite-koppens-5564404.jpg",
      composition:"80 % obuolių ir 20 % kriaušių sultys",
      taste:"pačios saldžiausios ir populiariausios mūsų sultys",
      mainWindow:true
    },
  ];

export function getFeaturedProducts(){
    const featuredProducts = DUMMY_DATA.filter(product=> product.mainWindow)
    return featuredProducts
}