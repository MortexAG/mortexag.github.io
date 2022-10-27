<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="assets/stylesheet-mainpage.css">
  <link rel="icon" href="https://i.ibb.co/28717vP/anime-profile-pic-small.png">
  <script type="text/javascript" src="assets/script-mainpage.js"></script>
  <title>MortexAG</title>
</head>
<body>
  <div class="margin"></div>
  <section class="parallax" id="top_div">
  <div class="parallax-inner">
    <img src="https://i.ibb.co/RvzBsgn/180700.png" alt="Switch To Dark Mode" class="dark_mode_moon" onclick="light_mode()" title="Switch To Light Mode" id="dark_mode_moon">
    <div class="clearfix">
    
    <img src="https://i.ibb.co/28717vP/anime-profile-pic-small.png" class="profile_pic">
      <p class="welcome">Welcome To My Site</p>
     <p>Hello My Name Is MortexAG</p>
        <p>In This Site I Will Be Adding My Latest Works In Different Fields</p>
        <p>Choose A Field Below To See My Projects</p>
  </div>
  </div>
  </section>
  <div class="margin" style="margin-top:20px;"></div>
  <section class="parallax" id="mid_div">
    <ul style="position: sticky;border-radius:14px;" class="inactive" id="ul_1">
  <li><a class="active" id="but_active" onclick="button_active(); show_github();" value="github">Github</a></li>
  <li><a onclick="button_active(); show_replit();"  id="but_inactive" class="inactive" value="replit">Replit</a></li>
  <li><a onclick="button_active(); show_telegram_bots();" class="inactive" id="but_inactive" value="telegram-bots">Telegram Bots</a></li>
  <li><a onclick="button_active(); show_blender();" class="inactive" id="but_inactive" value="blender">Blender</a></li>
  <li><a onclick="button_active(); show_my_api();" class="inactive" id="but_inactive" value="my_api">My API</a></li>
</ul>
  <section class="conatiner-parallax" id="bottom_div">
    <!-- Github DIV !-->
    <div class="visible github" id='github'>
    <p>This My Github Account</p>
    <p><a href="https://github.com/MortexAG" target="_blank">https://github.com/MortexAG</a></p>
    <p>Also This Site Is Hosted On Github Pages Of One Of My Repositories After Being Written And Debugged On Replit</p>
    </div>
    <!-- Replit DIV !-->
        <div class="invisible" id='replit'>
    <p>This My Replit Account</p>
    <p><a href="https://replit.com/@MortexAG" target="_blank">https://replit.com/@MortexAG</a></p>
    <p>I Run Mostly Bots in Here, Telegram And Discord Bots</p>
        </div>
    <!-- Telegram Bots DIV !-->
    <div class="invisible" id='telegram-bots'>
    <p>These Are The Telegram Bots I Made</p>
    <p><a href="https://replit.com/@MortexAG" target="_blank">https://replit.com/@MortexAG</a></p>
    <p>I Run Mostly Bots in Here, Telegram And Discord Bots</p>
        </div>
    <!-- Blender DIV !-->
        <div class="invisible" id='blender'>
    <p>These Are The Blender Projects I Made</p>
    <p><a href="https://replit.com/@MortexAG" target="_blank">https://replit.com/@MortexAG</a></p>
    <p>I Run Mostly Bots in Here, Telegram And Discord Bots</p>
        </div>
    <!-- MY API DIV !-->
    <div class="invisible" id='my_api'>
    <p>My API Is Hosted On This Site on </p>
    <p>api.mortexagsite.cyou</p>
    <p>I Will Add Its Documentation Soon</p>
    <p>For Now It Will Only Contain My Projects Links</p>
        </div>
  </section>
  </section>
</div>
</body>

</html>