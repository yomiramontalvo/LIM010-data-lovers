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
let screenResult=document.getElementById('ScreenResult');

const hideallscreens = () => {
  screenLogin.classList.remove('show');
  screenSelectCountry.classList.remove('show');
  screencountry.classList.remove('show');
  screenchart.classList.remove('show');
  screenempleo.classList.remove('show');
  screenpresentationperu.classList.remove('show');
  screenbanner.classList.remove('show');
  screeninfo.classList.remove('show');
  screenResult.classList.remove('show');
  screenLogin.classList.add('hide');
  screenSelectCountry.classList.add('hide');
  screencountry.classList.add('hide');
  screenchart.classList.add('hide');
  screenempleo.classList.add('hide');
  screenpresentationperu.classList.add('hide');
  screenbanner.classList.add('hide');
  screeninfo.classList.add('hide');
  screenResult.classList.add('hide');
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
  screenempleo.classList.add('show');
  screenpresentationperu.classList.remove('show');
  screenpresentationperu.classList.add('hide');
}
const showscreenpresentationperu = () => {   
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenpresentationperu.classList.add('show');
}

const showscreenResult = () => {   
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenResult.classList.add('show');
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

let searching=(indicatorname,indicatorcode,type,country)=>{
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
});

let indicatordataperu = WORLDBANK.PER.indicators;
let dataSE= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('SE')===true));
let dataSL= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('SL')===true));
let dataHD= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('HD')===true));
let dataSP= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('SP')===true));
let dataIC= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('IC')===true));
let dataSH= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('SH')===true));
let dataSG= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('SG')===true));
let dataper= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('per')===true));
let dataMS= indicatordataperu.filter(dataind => (dataind.indicatorCode.startsWith('MS')===true));




let addLiSL = () => {
  dataSL.forEach(function (ele, ind) {
    let indicatorname = dataSL[ind].indicatorName;
    let indicatorcode = dataSL[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listSL',SearchIndexCodePeru); 
  });
};

let addLiSE = () => {
  dataSE.forEach(function (ele, ind) {
    let indicatorname = dataSE[ind].indicatorName;
    let indicatorcode = dataSE[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listSE',SearchIndexCodePeru); 
  });
};

let addLiHD = () => {
  dataHD.forEach(function (ele, ind) {
    let indicatorname = dataHD[ind].indicatorName;
    let indicatorcode = dataHD[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listHD',SearchIndexCodePeru); 
  });
};

let addLiSG = () => {
  dataSG.forEach(function (ele, ind) {
    let indicatorname = dataSG[ind].indicatorName;
    let indicatorcode = dataSG[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listSG',SearchIndexCodePeru); 
  });
};

let addLiSP = () => {
  dataSP.forEach(function (ele, ind) {
    let indicatorname = dataSP[ind].indicatorName;
    let indicatorcode = dataSP[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listSP',SearchIndexCodePeru); 
  });
};

let addLiIC = () => {
  dataIC.forEach(function (ele, ind) {
    let indicatorname = dataIC[ind].indicatorName;
    let indicatorcode = dataIC[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listIC',SearchIndexCodePeru); 
  });
};

let addLiper = () => {
  dataper.forEach(function (ele, ind) {
    let indicatorname = dataper[ind].indicatorName;
    let indicatorcode = dataper[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listper',SearchIndexCodePeru); 
  });
};

let addLiMS = () => {
  dataMS.forEach(function (ele, ind) {
    let indicatorname = dataMS[ind].indicatorName;
    let indicatorcode = dataMS[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listMS',SearchIndexCodePeru); 
  });
};

let addLiSH = () => {
  dataSH.forEach(function (ele, ind) {
    let indicatorname = dataSH[ind].indicatorName;
    let indicatorcode = dataSH[ind].indicatorCode;
    searching(indicatorname,indicatorcode,'listSH',SearchIndexCodePeru); 
  });
};

let clickPeru = document.getElementById('peru');
const indicatorsPeru = WORLDBANK.PER.indicators;
let contPeru=0;



clickPeru.addEventListener('click', () => {
  showscreencountry();
  screenpresentationperu.classList.add('show');
  screenSelectCountry.classList.add('show');
  if(contPeru===0)
  { addLiSL(); addLiHD(); addLiIC(); addLiMS(); addLiSE(); addLiSG(); addLiSP(); addLiper();addLiSH();
    contPeru++;}
});




/*Office hours*/


document.getElementById('listSL').addEventListener('click', (e) => {
 console.log(e.target.id);
 codeindicatortable=e.target.id;
 SearchIndexCodePeru.forEach((elem, indi) => {
  if (SearchIndexCodePeru[indi].indicatorCode === codeindicatortable) {
   let indextable=indi;
   let nameindicator=SearchIndexCodePeru[indi].indicatorName;
   let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[indextable].data));
   let inmatriz = matrizIndicator[0];
   inmatriz.forEach(function (ele, ind) {
     inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
     inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);  
   });
   
let datanew= inmatriz.filter(dataind => isNaN(dataind[1])===false);
console.log(datanew);

   document.getElementById('indicatorName').innerHTML=nameindicator;
   let multirange= document.getElementById('multirange');

   multirange.innerHTML = `<div class='multi-range' data-lbound='${datanew[0][0]}' data-ubound='${datanew[datanew.length-1][0]}' id="rango">
   <hr/>
   <input type='range' id="lbound"  min='${datanew[0][0]}' max='${datanew[datanew.length-2][0]}' step='1' value='${datanew[0][0]}'   
          oninput='this.parentNode.dataset.lbound=this.value'
          />
   <input type='range'  id="ubound"  min='${datanew[1][0]}' max='${datanew[datanew.length-1][0]}' step='1' value='${datanew[datanew.length-1][0]}' 
          oninput='this.parentNode.dataset.ubound=this.value'
          />
   </div>`;

   const rangoInput = document.getElementById('rango');
   
   rangoInput.addEventListener('change', (e)=>{
   let min;
   let max;
   let lboun=0;
   let uboun=0;
    
   if(e.target.id === 'lbound'){
     lboun++;
      min = e.target.value;
     }  else {
      uboun++;
      max = e.target.value;
     } 
   
   if(lboun===0){
     min=document.getElementById('lbound').value;
   }  
   if(uboun===0){
    max=document.getElementById('ubound').value;
  } 
  
    drawBasic2(datanew,min,max);drawTable(datanew,min,max);drawTableorder(datanew,min,max);
   });   

  }
});

document.getElementById('cont').classList.remove('cont');
document.getElementById('cont').classList.add('newcont');
showscreenResult();
screenchart.classList.add('show');
screencountry.classList.add('show');
});



