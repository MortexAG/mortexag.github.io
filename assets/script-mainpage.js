/* Function To Switch Dark Mode To Light Mode */
function light_mode() {
  var body_element = document.body;
  body_element.classList.toggle("body_light_mode");
  var top_div = document.getElementById("top_div");
  top_div.classList.toggle("top_div_light_mode");
  var mid_div = document.getElementById("mid_div");
  mid_div.classList.toggle("top_div_light_mode");
  var change_icon = document.getElementById("dark_mode_moon");
  let url = document.getElementById("dark_mode_moon").src;
  if (url == 'https://i.ibb.co/RvzBsgn/180700.png') {
    document.getElementById("dark_mode_moon").src = 'https://i.ibb.co/WVX5f3b/brightness.png'
    document.getElementById("dark_mode_moon").title = "Switch To Dark Mode"
  }
  else {
    document.getElementById('dark_mode_moon').src = 'https://i.ibb.co/RvzBsgn/180700.png'
    document.getElementById("dark_mode_moon").title = "Switch To Light Mode"
  }
  let list_id = document.getElementById("ul_1");
  list_id.classList.toggle("ul_1_light_mode");
  let github = document.getElementById("github");
  github.classList.toggle("github-dark")
}

function button_active(){
  var targ = event.target;
  var but_active = document.getElementById("but_active");
  if (targ.id == "but_inactive") {
    but_active.classList.remove("active")
    but_active.classList.add("inactive")
    targ.id = "but_active"
    targ.classList.remove("inactive")
    targ.classList.add("active")
    but_active.id = "but_inactive"
  }
  var replit = targ.textContent
  console.log(targ.textContent)
  var holder = document.getElementById("bottom_div");
  holder.innerHTML = " ";
  
}

function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }