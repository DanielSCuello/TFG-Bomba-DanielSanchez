let ESCAPP_LOCALES = {
};

// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["es", "en", "it"],
  locale:undefined,
  defaultLocale:"es",
  message:"¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
  url:"https://vishub.org/pictures/20203.png",
  escapp:{
    endpoint:"https://escape.dit.upm.es/api/escapeRooms/369",
    localStorageKey:"ESCAPP_SAFE_20223a",
    restoreState:"AUTO",
    imagesPath:"/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"en",
      locales:ESCAPP_LOCALES,
    },
  },
};


export const TEMPORIZADOR_CONFIG = {
  digito1: { valor : 1 },
  digito2: { valor : 1 },
  digito3: { valor : 1 },
};

export const LABERINTO_CONFIG ={
  coordenada: {x:0,y:0},
  coordenada: {x:1,y:0},
  coordenada: {x:1,y:1},
  coordenada: {x:2,y:1},
  coordenada: {x:2,y:2},
  coordenada: {x:3,y:2},

}

export const CABLES_CONFIG = {
  cableroj: { color: "roj", orden: 1 },
  cableazu: { color: "azu", orden: 2 },
  cableama: { color: "ama", orden: 3 },
  cablever: { color: "ver", orden: 4 },
};