/* Manejo del DOM */
/* Acá va tu código */
let screenLogin = document.getElementById('botonLogin');
let screenSelectCountry = document.getElementById('screenSelectCountry');
let screenpresentationperu = document.getElementById('presentationperu');
let screencountry = document.getElementById('screencountry');
let screenchart = document.getElementById('chart');
let screenbanner = document.getElementById('banner');
let screeninfo = document.getElementById('info');
let screenResult = document.getElementById('ScreenResult');
/* Login */
let EnterLogin = document.getElementById('EnterLogin');
let user = document.getElementById('user');
let password = document.getElementById('password');
let enter = document.getElementById('password');
/* Seleccionar paises */
const elementUlCountry = document.getElementById('pais');

/* Data de indicadores por pais */
let SearchIndexCodePeru = WORLDBANK.PER.indicators;
let SearchIndexCodeMexico = WORLDBANK.MEX.indicators;
let SearchIndexCodeBrasil = WORLDBANK.BRA.indicators;
let SearchIndexCodeChile = WORLDBANK.CHL.indicators;

const hideallscreens = () => {
  screenLogin.classList.remove('show');
  screenSelectCountry.classList.remove('show');
  screencountry.classList.remove('show');
  screenchart.classList.remove('show');
  screenpresentationperu.classList.remove('show');
  screenbanner.classList.remove('show');
  screeninfo.classList.remove('show');
  screenResult.classList.remove('show');
  screenLogin.classList.add('hide');
  screenSelectCountry.classList.add('hide');
  screencountry.classList.add('hide');
  screenchart.classList.add('hide');
  screenpresentationperu.classList.add('hide');
  screenbanner.classList.add('hide');
  screeninfo.classList.add('hide');
  screenResult.classList.add('hide');
};

const showscreenLogin = () => {
  hideallscreens();
  screenLogin.classList.add('show');
};

const showscreenSelectCountry = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
};

const showscreencountry = () => {
  hideallscreens();
  screencountry.classList.add('show');
};

const showscreenchart = () => {
  hideallscreens();
  screenchart.classList.add('show');
};

const showscreenempleo = () => {
  screenempleo.classList.add('show');
  screenpresentationperu.classList.remove('show');
  screenpresentationperu.classList.add('hide');
};

const showscreenpresentationperu = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenpresentationperu.classList.add('show');
};

const showscreenResult = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenResult.classList.add('show');
};

enter.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('EnterLogin').click();
  }
});
/* LOGIN */
EnterLogin.addEventListener('click', () => {
  let userresult = user.value;
  let passwordresult = password.value;
  if (userresult === '1' && passwordresult === '1') {
    document.getElementById('body').classList.add('bodySelectCountry');
    document.getElementById('body').classList.remove('bodyLogin');
    document.getElementById('Head').classList.remove('hide');
    showscreenSelectCountry();
    screenbanner.classList.add('show');
    screeninfo.classList.add('show');
  } else {
    user.value = '';
    password.value = '';
    document.getElementById('mistakeLogin').innerHTML = 'Usuario o contraseña incorrectos';
  }
});

/* Funcion que pinta la lista de indicadores en HTML dinamicamente*/
let paintingList = (data, id) => {
  let string = '';
  data.forEach((elem, indi) => {
    string += `<li id=${elem.indicatorName}><a id=${elem.indicatorCode} href="#">${elem.indicatorName}</a></li>`;
  });
  document.getElementById(id).innerHTML = string;
};

/* Clickear un país y obtener ID, que puede ser 'PER', 'CHL', 'BRA', 'MEX' para obtener sus indicadores */
let pais = '';
let tipoIndicador = '';

document.body.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    if (tipoIndicador !== '') {
      document.getElementById('listSL').innerHTML = '';
      document.getElementById('listHD').innerHTML = '';
      document.getElementById('listSG').innerHTML = '';
      document.getElementById('listSE').innerHTML = '';
      document.getElementById('listSP').innerHTML = '';
      document.getElementById('listIC').innerHTML = '';
      document.getElementById('listSH').innerHTML = '';
      document.getElementById('listper').innerHTML = '';
      document.getElementById('listMS').innerHTML = '';
    }
    tipoIndicador = '';
    pais = event.target.id;
    console.log(pais);
    showscreencountry();
    screenpresentationperu.classList.add('show');
    screenSelectCountry.classList.add('show');
  } else if (event.target.tagName === 'A') {
    tipoIndicador = event.target.id;
    console.log(tipoIndicador);
  }
  if (pais !== '') {
    const indicadoresPorPaisyTipo = createdatanew(WORLDBANK, pais, tipoIndicador);
    console.log(indicadoresPorPaisyTipo);
    // const idElementoLi = `list${tipoIndicador}`;
    // console.log(idElementoLi);
    if (tipoIndicador.length === 2 || tipoIndicador.length === 3) {
      const idElementoLi = `list${tipoIndicador}`;
      console.log(idElementoLi);
      paintingList(indicadoresPorPaisyTipo, idElementoLi);
    }
    if (tipoIndicador.length > 2) {
      const idElementoLi = tipoIndicador;
      console.log(idElementoLi);
      const dataDeCodigoIndicador = createdatanew(WORLDBANK, pais, idElementoLi);
      const createDataForTablas = dataDeCodigoIndicador[0].data;
      const indicatorName = dataDeCodigoIndicador[0].indicatorName;
      console.log(indicatorName);
      const newdata = CreateArray(createDataForTablas);
      console.log(newdata);
      createGrafic(newdata, indicatorName);
    }
  }
});


let createGrafic = (newdata, indicatorName) => {
  document.getElementById('indicatorName').innerHTML = indicatorName;
  let multirange = document.getElementById('multirange');
  multirange.innerHTML = `<div class='multi-range' data-lbound='${newdata[0][0]}' data-ubound='${newdata[newdata.length - 1][0]}' id="rango">
   <hr/>
   <input type='range' id="lbound"  min='${newdata[0][0]}' max='${newdata[newdata.length - 2][0]}' step='1' value='${newdata[0][0]}'
          oninput='this.parentNode.dataset.lbound=this.value'
          />
   <input type='range'  id="ubound"  min='${newdata[1][0]}' max='${newdata[newdata.length - 1][0]}' step='1' value='${newdata[newdata.length - 1][0]}'
          oninput='this.parentNode.dataset.ubound=this.value'
          />
   </div>`;
  const rangoInput = document.getElementById('rango');

  rangoInput.addEventListener('change', (event) => {
    let min;
    let max;
    let lboun = 0;
    let uboun = 0;
    if (event.target.id === 'lbound') {
      lboun++;
      min = event.target.value;
    } else {
      uboun++;
      max = event.target.value;
    }

    if (lboun === 0) {
      min = document.getElementById('lbound').value;
    }
    if (uboun === 0) {
      max = document.getElementById('ubound').value;
    }
    drawBasic2(newdata, min, max); drawTable(newdata, min, max); drawTableorder(newdata, min, max);
  });
  document.getElementById('cont').classList.remove('cont');
  document.getElementById('cont').classList.add('newcont');
  showscreenResult();
  screenchart.classList.add('show');
  screencountry.classList.add('show');
};
