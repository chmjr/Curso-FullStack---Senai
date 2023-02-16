function exibirDiv() {
  document.getElementById("div2passo").style.display = "block";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";
}
function exibirDivPasso3() {
  document.getElementById("div3passo").style.display = "block";
  document.getElementById("div2passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";
}
function fecharDiv() {
  document.getElementById("div2passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "1";
}
function fecharDiv23() {
  document.getElementById("div2passo").style.display = "none";
  document.getElementById("div3passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "1";
}
function mask(o, f) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
