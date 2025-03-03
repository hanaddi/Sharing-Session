var edvars = {
  rx:0, ry:0,
  // is_speaking
}
function setLineBodyR(val) {
  val = 10 + parseFloat(val);
  let state = val / 20;
  let rad = 50 + ((state * 30) | 0);
  window.linebodyr.style.borderRadius = rad + "%";
  let width = 90 + ((state * 40) | 0);
  window.linebodyr.style.width = width + "%";
}
function setLineBodyL(val) {
  val = 10 - parseFloat(val);
  let state = val / 20;
  let rad = 50 + ((state * 30) | 0);
  window.linebodyl.style.borderRadius = rad + "%";
  let width = 90 + ((state * 40) | 0);
  window.linebodyl.style.width = width + "%";
}

function rotateFace(val) {
  val = parseFloat(val);
  let state = val / 10;
  let rotY = 0 + ((state * 20) | 0);
  window.panelface.style.transform =
    "perspective(600px) rotateY(" + rotY + "deg)";
  let left = 10 + ((state * 10) | 0);
  window.panelface.style.left = left + "%";
  window.facex.style.perspectiveOrigin = ((50 - state * 90) | 0) + "% 50%";
  window.faceeyes.style.left = (state * 3).toFixed(2) + "%";


  // acc_glasses
  if (1) {
    let left = (state * 6).toFixed(2);
    window.acc_glasses.style.marginLeft = left + "%";
    try {window.acc_glasses_shadow.style.marginLeft = left + "%";} catch(e){}
  }

}

function moveHat(val) {
  val = parseFloat(val);
  let state = val / 10;
  let left = 0 + ((state * 8) | 0);
  window.panelhat.style.left = left + "%";

  //   rotate top
  let deg = 20;
  let rottop = -45 - ((state * deg) | 0);
  window.hattop.style.transform = "rotate(" + rottop + "deg)";
  let rotr = -45 - ((state * deg) | 0);
  window.hattopr.style.transform = "skewX(" + rotr + "deg)";
  let rotl = -45 + ((state * deg) | 0);
  window.hattopl.style.transform = "skewY(" + rotl + "deg)";

  let extraw = (state + 1) / 2;
  window.hattopr.style.height = 65 - 35 * extraw + "%";
  window.hattopr.style.borderWidth =
    15 -
    5 * extraw +
    "px " +
    (5 + 5 * extraw) +
    "px " +
    (15 - 5 * extraw) +
    "px 0px";

  window.hattopl.style.width = 30 + 35 * extraw + "%";
  window.hattopl.style.borderWidth =
    10 - 5 * extraw + "px " + (10 + 5 * extraw) + "px 0px";
}

function moveEarR(val) {
  val = parseFloat(val);
  let state = val / 10;

  if (state <= 0) {
    let s1 = -Math.sin((-state * Math.PI) / 2);
    let borrad = (50 + 50 * state) | 0;
    window.earrmask.style.borderRadius = borrad + "%";
    let left = (-184 + 10 * state) | 0;
    window.earrmask.style.left = left + "px";
    let mheight = (250 + 150 * s1) | 0;
    let marbot = 50 - mheight / 2;
    window.earrmask.style.height = mheight + "%";
    window.earrmask.style.bottom = marbot + "%";

    let height = (100 - 10 * state) | 0;
    window.earr.style.height = height + "%";
    let top = ((10 * state) / 2) | 0;
    window.earr.style.top = top + "%";

    window.earrtop.style.width = ((-30 * state) | 0) + "%";
    window.earrtop.style.height = ((70 - 10 * state) | 0) + "%";
    window.earrtop.style.left = ((52 + 10 * state) | 0) + "%";
    window.earrtop.style.top = ((15 + 5 * state) | 0) + "%";
    window.earrtop.style.borderWidth = ((2 - 2 * state) | 0) + "px";
    window.earrtop.style.visibility = "visible";

    // keep other vars
    window.earr.style.left = "0px";
  } else {
    let earleft = (-30 * state) | 0;
    window.earr.style.left = earleft + "px";
    window.earrmask.style.left = -184 - earleft + "px";
    window.earrtop.style.visibility = "hidden";

    // keep other vars
    window.earrmask.style.borderRadius = "50%";
    window.earrmask.style.height = "250%";
    window.earrmask.style.bottom = "-75%";
    window.earr.style.height = "100%";
    window.earr.style.top = "0%";
    window.earrtop.style.width = "0%";
    window.earrtop.style.height = "70%";
    window.earrtop.style.left = "52%";
    window.earrtop.style.top = "15%";
    window.earrtop.style.borderWidth = "2px";
  }

  // console.log(state);
}

function moveEarL(val) {
  val = parseFloat(val);
  let state = -val / 10;

  if (state <= 0) {
    let s1 = -Math.sin((-state * Math.PI) / 2);
    let borrad = (50 + 50 * state) | 0;
    window.earlmask.style.borderRadius = borrad + "%";
    let right = (-184 + 10 * state) | 0;
    window.earlmask.style.right = right + "px";
    let mheight = (250 + 150 * s1) | 0;
    let marbot = 50 - mheight / 2;
    window.earlmask.style.height = mheight + "%";
    window.earlmask.style.bottom = marbot + "%";

    let height = (100 - 10 * state) | 0;
    window.earl.style.height = height + "%";
    let top = ((10 * state) / 2) | 0;
    window.earl.style.top = top + "%";

    window.earltop.style.width = ((-30 * state) | 0) + "%";
    window.earltop.style.height = ((70 - 10 * state) | 0) + "%";
    window.earltop.style.right = ((52 + 10 * state) | 0) + "%";
    window.earltop.style.top = ((15 + 5 * state) | 0) + "%";
    window.earltop.style.borderWidth = ((2 - 2 * state) | 0) + "px";
    window.earltop.style.visibility = "visible";

    // keep other vars
    window.earl.style.right = "0px";
  } else {
    let ealright = (-30 * state) | 0;
    window.earl.style.right = ealright + "px";
    window.earlmask.style.right = -184 - ealright + "px";
    window.earltop.style.visibility = "hidden";

    // keep other vars
    window.earlmask.style.borderRadius = "50%";
    window.earlmask.style.height = "250%";
    window.earlmask.style.bottom = "-75%";
    window.earl.style.height = "100%";
    window.earl.style.top = "0%";
    window.earltop.style.width = "0%";
    window.earltop.style.height = "70%";
    window.earltop.style.right = "52%";
    window.earltop.style.top = "15%";
    window.earltop.style.borderWidth = "2px";
  }

  // console.log(state);
}

function moveXLine(val) {
  val = parseFloat(val);
  let state = val / 10;
  // console.log(state);
  if (state <= 0) {
    let width = (40 + 30 * state) | 0;
    window.xline.style.width = width + "%";
    let skew = (6 - 8 * state) | 0;
    window.xline.style.transform = "skewY(" + skew + "deg)";
    let height = (110 - 20 * state) | 0;
    window.xline.style.height = height + "%";

    // pompom
    let marleft = (30 * state).toFixed(2);
    window.pompom.style.marginLeft = marleft + "%";
    let martop = (-4 * state).toFixed(2);
    window.pompom.style.marginTop = martop + "%";
  } else {
    let width = (40 + 10 * state) | 0;
    window.xline.style.width = width + "%";
    let skew = (6 - 4 * state) | 0;
    window.xline.style.transform = "skewY(" + skew + "deg)";
    let height = (110 - 5 * state) | 0;
    window.xline.style.height = height + "%";

    // pompom
    let marleft = (10 * state).toFixed(2);
    window.pompom.style.marginLeft = marleft + "%";
    let martop = (-3 * state).toFixed(2);
    window.pompom.style.marginTop = martop + "%";
  }
}

function setStateX(val) {
  setLineBodyR(val);
  setLineBodyL(val);
  rotateFace(val);
  moveHat(val);
  moveEarR(val);
  moveEarL(val);
  moveXLine(val);
}

function hatNod(val) {
  val = parseFloat(val);
  let state = val / 10;
  // console.log(state);

  let rotX = 0 + ((state * 10) | 0);
  window.facex.style.transform = "perspective(600px) rotateX(" + rotX + "deg)";
  let top = (-state * 4).toFixed(2);
  window.facex.style.top = top + "%";

  // acc_glasses
  if (1) {
    window.acc_glasses.style.perspectiveOrigin = "50% 50%";
    window.acc_glasses.style.transform = "perspective(400px) rotateX(" + rotX + "deg)";
    let top = (-state * 4).toFixed(2);
    window.acc_glasses.style.marginTop = top + "%";

    try {
      window.acc_glasses_shadow.style.perspectiveOrigin = "50% 50%";
      window.acc_glasses_shadow.style.transform = "perspective(400px) rotateX(" + rotX + "deg)";
      window.acc_glasses_shadow.style.marginTop = top + "%";
    } catch(e){}
  }

  let rotX2 = 0 + ((state * 12) | 0);
  window.panellinebodyr.style.transform =
    "perspective(700px) rotateX(" + rotX2 + "deg)";
  window.panellinebodyl.style.transform =
    "perspective(700px) rotateX(" + rotX2 + "deg)";
  let top2 = (-state * 2).toFixed(2);
  window.panellinebodyr.style.top = top2 + "%";
  window.panellinebodyl.style.top = top2 + "%";

  let rotX3 = (state * 1.5).toFixed(2);
  window.panelearr.style.transform = "rotate(" + rotX3 + "deg)";
  window.panelearl.style.transform = "rotate(" + -rotX3 + "deg)";

  if (state <= 0) {
    let rot = (82 + 0.5 * state).toFixed(2);
    window.panelhattop.style.transform = "rotateX(" + rot + "deg)";
    let bottom = (84 + 3 * state).toFixed(2);
    window.panelhat.style.bottom = bottom + "%";
  } else {
    let rot = (82 + 0.5 * state).toFixed(2);
    window.panelhattop.style.transform = "rotateX(" + rot + "deg)";
    let bottom = (84 + 3 * state).toFixed(2);
    window.panelhat.style.bottom = bottom + "%";
  }
}

function setStateY(val) {
  hatNod(val);
}

try{mouthspeak.style.visibility = "hidden";mouthdefault.style.visibility = "visible";}catch(e){}



function edDisplayShow() {
  eddisplay.style.visibility = "visible";
}

function edDisplayHide() {
  eddisplay.style.visibility = "hidden";
}

function edSpeakOn() {
    try{mouthspeak.style.visibility = "visible";mouthdefault.style.visibility = "hidden";}catch(e){}
}

function edSpeakOff() {
    try{mouthspeak.style.visibility = "hidden";mouthdefault.style.visibility = "visible";}catch(e){}
}


let framesFlag = (Math.random()*99999999|0) + "q";
let framesTime = 0;
function edSetRot(x, y, treshold=0.5, flag='', time=0) {
  if (flag == framesFlag) {
    // 
    if (!framesTime) {
      framesTime = time;
      return requestAnimationFrame(t=>edSetRot(x, y, treshold, flag, t));
    }
    if (time - framesTime >= 1) {
      framesTime = time;

      if (Math.abs(x - edvars.rx) > treshold ) edvars.rx += x > edvars.rx? treshold : -treshold; else edvars.rx = x;
      if (Math.abs(y - edvars.ry) > treshold ) edvars.ry += y > edvars.ry? treshold : -treshold; else edvars.ry = y;

      setStateX(edvars.rx);
      setStateY(-edvars.ry);

      if (x != edvars.rx || y!= edvars.ry) {
          return requestAnimationFrame(t=>edSetRot(x, y, treshold, flag, t));
      }

    }
    return;
  }
  if (flag) return;


  framesFlag = (Math.random()*99999999|0) + "q";
  if (Math.abs(x - edvars.rx) > treshold ) edvars.rx += x > edvars.rx? treshold : -treshold; else edvars.rx = x;
  if (Math.abs(y - edvars.ry) > treshold ) edvars.ry += y > edvars.ry? treshold : -treshold; else edvars.ry = y;

  setStateX(edvars.rx);
  setStateY(-edvars.ry);

  if (x != edvars.rx || y!= edvars.ry) {
      return requestAnimationFrame(t=>edSetRot(x, y, treshold, framesFlag, t));
  }
}
