
extention = ["net", ".com", ".co", ".biz", ".site", ".cc"];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let site = "";
let num;
function spin() {
  num = Math.floor(Math.random() *(25 - (0) +1) +0);
  for (i in range(num)) {
    site += (letter[Math.floor(Math.random() *(25 - (0) +1) +0)]);
  }
  site = site + (extention[Math.floor(Math.random() *(5 - (0) +1) +0)]);
  alert(site);
  document.GetElementById("bn").innerText = "go";
  document.GetElementById("bn").onclick = site;
  return site;
  
}

