var formA = document.forms[0];
var formB = document.forms[1];
var ui = formA.elements;
var base = formB.elements;

formA.addEventListener('change', selectTag);
formA.addEventListener('click', addFieldset);

function selectTag(e) {
  var rad = `s${document.querySelector('.rad:checked').value}`;
  var fst = base[rad];
  var qty;
  var ask;
  var idx = -1;
  if (e.target.id === "sel") {
    idx = parseInt(e.target.value, 10);
  }
  switch (idx) {
    case 0:
      var ID0 = Math.round(new Date().valueOf() / 3000000 + performance.now());
      var input = `<input id="t${ID0}" name="t${ID0} type="text">`;
      fst.insertAdjacentHTML('beforeend', input);
      break;
    case 1:
      var ID1 = Math.round(new Date().valueOf() / 3000000 + performance.now());
      var textArea = `<textarea id="ta${ID1}" name="ta${ID1}"></textarea>`;
      fst.insertAdjacentHTML('beforeend', textArea);
      break;
    case 2:
      var ID2 = Math.round(new Date().valueOf() / 3000000 + performance.now());
      var check = `<input id="ch${ID2}" name="ch${ID2}" type='checkbox' value=''>`;
      fst.insertAdjacentHTML('beforeend', check);
      break;
    case 3:
      var ID3 = Math.round(new Date().valueOf() / 3000000 + performance.now());
      ask = prompt('Enter the number of radio buttons needed');
      var rads = [];
      qty = parseInt(ask, 10);
      var name = ID3 + Math.floor(Math.random() * 11) + 10;
      for (let i = 0; i < qty; i++) {
        var radio = `<input id="r${ID3+i}" name="r${name}" type='checkbox' value=''>`;
        rads.push(radio);
        fst.insertAdjacentHTML('beforeend', radio);
      }
      break;
    case 4:
      var ID4 = Math.round(new Date().valueOf() / 3000000 + performance.now());
      var select = `<select id="s${ID4}" name="s${ID4}"></select>`;
      ask = prompt('Enter the number of options needed');
      qty = parseInt(ask, 10);
      fst.insertAdjacentHTML('beforeend', select);
      var sel = document.getElementById('s' + ID4);
      for (let i = 0; i < qty; i++) {
        var opt = document.createElement('option');
        sel.add(opt);
      }
      break;
    default:
      break;
  }
}


function addFieldset(e) {
  if (e.target.id === 'addSet') {
    var sets = formB.querySelectorAll('fieldset').length;
    var fs = `
    <fieldset id='s${sets}'>
      <legend>${sets}</legend>
    </fieldset>`;
    formB.insertAdjacentHTML('beforeend', fs);
    var rad = `
    <input id='r${sets}' name='rad' class='rad' type='radio' value='${sets}'>
    <label for='r${sets}'>${sets}</label>`;
    ui.addSet.insertAdjacentHTML('beforebegin', rad);
  }
}