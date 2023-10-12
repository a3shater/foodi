function likeIt(x) {
  let t = x.style.color;
  x.style.color = t == "red" ? "white" : "red";
}

let slide = document.getElementById("inner");
let s_width = document.getElementsByClassName("dish-box")[0].clientWidth;
let val = 0;
let eleC = Array.from(document.getElementsByClassName("dish-box")).length;
function slides(x) {
  val += (s_width + 40) * x;
  if (val > 0 || -val > eleC * s_width) {
    val = 0;
  }
  slide.style.transform = `translateX(${val}px)`;
}
