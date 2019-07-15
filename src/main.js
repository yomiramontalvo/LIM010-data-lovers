/* Manejo del DOM */
/* Acá va tu código */
let screenLogin = document.getElementById('botonLogin');
let screenSelectCountry = document.getElementById('screenSelectCountry');
let screenpresentationperu = document.getElementById('presentationperu');
let screencountry = document.getElementById('screencountry');
let screenchart = document.getElementById('chart');
let screenempleo=document.getElementById('listSL');
let screenbanner = document.getElementById('banner');
let screeninfo=document.getElementById('info');
let screenwhos=document.getElementById('whos');

const hideallscreens = () => {
  screenLogin.classList.remove('show');
  screenSelectCountry.classList.remove('show');
  screencountry.classList.remove('show');
  screenchart.classList.remove('show');
  screenempleo.classList.remove('show');
  screenpresentationperu.classList.remove('show');
  screenbanner.classList.remove('show');
  screeninfo.classList.remove('show');
  screenwhos.classList.remove('show');
  screenLogin.classList.add('hide');
  screenSelectCountry.classList.add('hide');
  screencountry.classList.add('hide');
  screenchart.classList.add('hide');
  screenempleo.classList.add('hide');
  screenpresentationperu.classList.add('hide');
  screenbanner.classList.add('hide');
  screeninfo.classList.add('hide');
  screenwhos.classList.add('hide');
}
const showscreenLogin = () => {
  hideallscreens();
  screenLogin.classList.add('show');
}

const showscreenSelectCountry = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
}

const showscreencountry = () => {
  hideallscreens();
  screencountry.classList.add('show');
}

const showscreenchart = () => {   
    hideallscreens();
   screenchart.classList.add('show');
}

const showscreenempleo = () => {   
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screencountry.classList.add('show');
  screenempleo.classList.add('show');
}
const showscreenpresentationperu = () => {   
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenpresentationperu.classList.add('show');
}

/*Login*/
let EnterLogin = document.getElementById('EnterLogin');
let user = document.getElementById('user');
let password = document.getElementById('password');
let enter = document.getElementById('password');

enter.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("EnterLogin").click();
  }
});
/*LOGIN*/
EnterLogin.addEventListener('click', () => {
  let userresult = user.value;
  let passwordresult = password.value;
  if (userresult === "1" && passwordresult === "1") {
    document.getElementById('body').classList.add('bodySelectCountry');
    document.getElementById('body').classList.remove('bodyLogin');
    document.getElementById('Head').classList.remove('hide');
    showscreenSelectCountry();
    screenbanner.classList.add('show');
    screeninfo.classList.add('show');
  }
  else {
    user.value = "";
    password.value = "";
    document.getElementById('mistakeLogin').innerHTML = "Usuario o contraseña incorrectos";
  }
});
/*LOGIN*/

let SearchIndexCodePeru = WORLDBANK.PER.indicators;

const searching=(indicatorname,indicatorcode,type,country)=>{
  country.forEach((elem, indi) => {
    if (country[indi].indicatorCode === indicatorcode) {
      let newindex = indi;
     console.log(newindex.toString());
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerHTML = indicatorname;
      li.id = indicatorname;
      a.id = indicatorcode;
      a.href = '#';
      a.name = newindex.toString();
      /*li.innerHTML=indicatorname;*/
      document.getElementById(type).appendChild(li);
      document.getElementById(indicatorname).appendChild(a);
    }
  });
}

document.getElementById('Empleo').addEventListener('click',()=>{
  showscreenempleo();
  screenpresentationperu.classList.add('show');
});

let addliSL=()=>{
  arrSLcodeindic.forEach(function (ele, ind) {
  let indicatorname = arrSLnameindic[ind];
  let indicatorcode = arrSLcodeindic[ind];
searching(indicatorname,indicatorcode,'listSL',SearchIndexCodePeru);
  });
}

let addLiSE = () => {
  arrSEcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrSEnameindic[ind];
    let indicatorcode = arrSEcodeindic[ind];
    searching(indicatorname,indicatorcode,'listSE',SearchIndexCodePeru); 
  });
};

let addLiHD = () => {
  arrHDcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrHDnameindic[ind];
    let indicatorcode = arrHDcodeindic[ind];
    searching(indicatorname,indicatorcode,'listHD',SearchIndexCodePeru);
  });
};


let addLiSG = () => {
  arrSGcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrSGnameindic[ind];
    let indicatorcode = arrSGcodeindic[ind];
    searching(indicatorname,indicatorcode,'listSG',SearchIndexCodePeru);
  });
};

let addLiSP = () => {
  arrSPcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrSPnameindic[ind];
    let indicatorcode = arrSPcodeindic[ind];
    searching(indicatorname,indicatorcode,'listSP',SearchIndexCodePeru);
  });
};

let addLiIC = () => {
  arrICcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrICnameindic[ind];
    let indicatorcode = arrICcodeindic[ind];
    searching(indicatorname,indicatorcode,'listIC',SearchIndexCodePeru);
  });
};

let addLiper = () => {
  arrpercodeindic.forEach(function (ele, ind) {
    let indicatorname = arrpernameindic[ind];
    let indicatorcode = arrpercodeindic[ind];
    searching(indicatorname,indicatorcode,'listper',SearchIndexCodePeru);
  });
};
let addLiMS = () => {
  arrMScodeindic.forEach(function (ele, ind) {
    let indicatorname = arrMSnameindic[ind];
    let indicatorcode = arrMScodeindic[ind];
    searching(indicatorname,indicatorcode,'listMS',SearchIndexCodePeru);
  });
};

let addLiSH = () => {
  arrSHcodeindic.forEach(function (ele, ind) {
    let indicatorname = arrSHnameindic[ind];
    let indicatorcode = arrSHcodeindic[ind];
    searching(indicatorname,indicatorcode,'listSH',SearchIndexCodePeru);
  });
};

let arrSEcodeindic = new Array();
let indicatordataperu = WORLDBANK.PER.indicators;
let arrSEnameindic = new Array();
let arrSLcodeindic = new Array();
let arrSLnameindic = new Array();
let arrnameindic = new Array();
let indexSE = 0;
let indexSL = 0;
let arrHDnameindic = new Array();
let arrHDcodeindic = new Array();
let arrSPcodeindic = new Array();
let arrSPnameindic = new Array();
let arrICnameindic = new Array();
let arrICcodeindic = new Array();
let arrSHcodeindic = new Array();
let arrSHnameindic = new Array();
let arrSGnameindic = new Array();
let arrSGcodeindic = new Array();
let indexHD = 0;
let indexSP = 0;
let indexIC = 0;
let indexSH = 0;
let indexSG = 0;
let arrpernameindic = new Array();
let arrpercodeindic = new Array();
let indexper = 0;
let arrMSnameindic = new Array();
let arrMScodeindic = new Array();
let indexMS = 0;


indicatordataperu.forEach((element, ind) => {
  if (element.indicatorCode.startsWith('SE')) {
    arrSEcodeindic[indexSE] = element.indicatorCode;
    arrSEnameindic[indexSE] = element.indicatorName; 
    indexSE++;
  }
  if (element.indicatorCode.startsWith('SL')) {
    arrSLcodeindic[indexSL] = element.indicatorCode;
    arrSLnameindic[indexSL] = element.indicatorName;
    indexSL++;
  }
  if (element.indicatorCode.startsWith('HD')) {
    arrHDcodeindic[indexHD] = element.indicatorCode;
    arrHDnameindic[indexHD] = element.indicatorName;
    indexHD++;
  }
  if (element.indicatorCode.startsWith('SP')) {
    arrSPcodeindic[indexSP] = element.indicatorCode;
    arrSPnameindic[indexSP] = element.indicatorName;
    indexSP++;
  }
  if (element.indicatorCode.startsWith('IC')) {
    arrICcodeindic[indexIC] = element.indicatorCode;
    arrICnameindic[indexIC] = element.indicatorName;
    indexIC++;
  }
  if (element.indicatorCode.startsWith('SH')) {
    arrSHcodeindic[indexSH] = element.indicatorCode;
    arrSHnameindic[indexSH] = element.indicatorName;
    indexSH++;
  }
  if (element.indicatorCode.startsWith('SG')) {
    arrSGcodeindic[indexSG] = element.indicatorCode;
    arrSGnameindic[indexSG] = element.indicatorName;
   indexSG++;
  }
  if (element.indicatorCode.startsWith('per')) {
    arrpercodeindic[indexper] = element.indicatorCode;
    arrpernameindic[indexper] = element.indicatorName;
    indexper++;
  }
  if (element.indicatorCode.startsWith('MS')) {
    arrMScodeindic[indexMS] = element.indicatorCode;
    arrMSnameindic[indexMS] = element.indicatorName;
    indexMS++;
  }
});

/*Office hours*/
document.getElementById('listSL').addEventListener('click', (e) => {
 console.log(e.target.id);
 codeindicatortable=e.target.id;
 SearchIndexCodePeru.forEach((elem, indi) => {
  if (SearchIndexCodePeru[indi].indicatorCode === codeindicatortable) {
   let indextable=indi;
   let nameindicator=SearchIndexCodePeru[indi].indicatorName;
   document.getElementById('indicatorName').innerHTML=nameindicator;
   drawBasic2(indextable); drawBasic1(indextable); prom(indextable); 
   document.getElementById('prom').innerHTML='El promedio es '+ prom(indextable);
  }
});
 /*document.getElementById('main').innerHTML = '';*/
 screenpresentationperu.classList.add('show');
 screenchart.classList.add('show');
});

let clickPerú = document.getElementById('peru');
const indicatorsPeru = WORLDBANK.PER.indicators;
let contPeru=0;

clickPerú.addEventListener('click', () => {
  showscreencountry();
  screenpresentationperu.classList.add('show');
  screenSelectCountry.classList.add('show');
  if(contPeru===0)
  {addliSL();
    contPeru++;}
});