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

}

function button_active(){
  var active_now = document.getElementById("but_active");
  active_now.classList.toggle("inactive");
}