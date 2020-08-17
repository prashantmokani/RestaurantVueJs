<template>
  <div>
    <!--================Header Menu Area =================-->
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <a class="navbar-brand" href="index.html"><img style="height: 94px; width: 100px;" src="../Logo/logo_transparent.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav justify-content-end">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/menu">Menu</a></li>
                <li class="nav-item submenu dropdown">
                  <a class="nav-link" href="/booking/table">Bookings</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item"><a class="nav-link" href="/booking/hall">Hall Bookings</a></li>
                    <li class="nav-item"><a class="nav-link" href="/booking/table">Book Tables</a></li>
                  </ul>
                </li>
                <li class="nav-item active"><a class="nav-link" href="/about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!--================ Start Portfolio Area =================-->
    <!-- <section class="banner-area owl-carousel" id="home">
      <div class="single_slide_banner slide_bg6">
        <div class="container2">
          <div class="row2 fullscreen d-flex align-items-center">
            <div class="banner-content col-lg-12 justify-content-center">
              <h1>Masala Cheat</h1>
              <h3><b>Know Us</b></h3>
              </div>
          </div>
        </div>
      </div>
    </section> -->

<!---- start new carousel area -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
			<div class="container2">
          <div class="row2 fullscreen d-flex align-items-center">
            <div class="banner-content col-lg-12 justify-content-center">
              <h1>Masala Cheat</h1>
              <h3><b>Know Us</b></h3>
              </div>
          </div>
        </div>
      <img src="../images/6.jpg" alt="Los Angeles">
    </div>

    <div class="item">
			<div class="container2">
          <div class="row2 fullscreen d-flex align-items-center">
            <div class="banner-content col-lg-12 justify-content-center">
              <h1>Masala Cheat</h1>
              <h3><b>Know Us</b></h3>
              </div>
          </div>
        </div>
      <img src="../images/6.jpg" alt="Chicago">
    </div>

    
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!--- end new carousel area ------->
    <!--================ Start About Area =================-->
    <section class="about-area section_gap gray-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 about-left">
            <img class="img-fluid" src="../images/2.jpg" alt="">
          </div>
          <div class="col-lg-6 col-md-12 about-right">
            <div class="main-title text-left">
              <h1>About us</h1>
                          <h2><strong>Masala Cheat</strong> – The Best Indian Restaurant in Thunder Bay</h2>
            </div>
            <div class="mb-50 wow fadeIn" data-wow-duration=".8s">
              <p>
                Welcome to <b>Masala Cheat</b>, a place for the best Indian food in <b>Thunder Bay</b>. We first opened on January 2, 1995, and we haven’t looked back since. We introduced <b>authentic and traditional Indian food</b> to the <b>Thunder Bay</b> area and have grown into what many say is the best Indian Restaurant for Dine-in, Buffet, Delivery, Pickup and Catering in the area. Our customers appreciate the fact that we are family-owned and operated, bringing some of our favorite family recipes and ingredients to our menu. When you walk through our doors, you are greeted as one of the family. If you have special dietary concerns, such as vegetarian, gluten-free or vegan, we are happy to accommodate you. We change our buffet menu daily so you will never be bored and will always be pleasantly surprised by the choices that are available.
  If you have a special event coming up such as a birthday celebration or business luncheon, we have plenty of room for you in our establishment. Because we have been serving customers in the great <b>city of Thunder Bay</b> and the surrounding area for over two decades, we have catered to thousands of people. In addition to serving the best Indian food to the community, we serve in other ways as well.
              </p>
              <p><b>Masala Cheat</b> is involved in a variety of not for profit organizations and charities in the Thunder Bay area. We know how important it is to give back to the community that has supported us for so many years.
              </p>
            </div>
            <a href="/contact" class="primary-btn">Contact us here</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer_area section_gap">
		<div class="container">
			<div class="row footer_inner justify-content-center">
				<div class="col-lg-6 text-center">
					<aside class="f_widget social_widget">
						<div class="f_logo">
							<img style="height: 94px; width: 100px;" src="../Logo/logo_transparent.png" alt="">
						</div>
						<div class="f_title">
							<h4>Follow Us</h4>
						</div>
						<ul class="list">
							<li><a href="#"><img src="../images/facebook.png" style="height: 40px; width: 40px;"></a></li>
							<li><a href="#"><img src="../images/instagram.png" style="height: 40px; width: 40px;"></a></li>
							<li><a href="https://github.com/anjubala28/Web-Designing-II"><img src="../images/gt1.png" style="height: 40px; width: 40px;"></a></li>
							<li><a href="#"><img src="../images/lnk.png" style="height: 40px; width: 40px;"></a></li>
						</ul>
					</aside>
					<div class="copyright">
						<p>
Copyright All rights reserved | This template is made with <img src="../images/hrt.png" style="height: 20px; width: 20px;"> and <img src="images/hwp.png" style="height: 20px; width: 20px;"> by <a href="https://about.html" target="_blank">Anju, Lovleen & Nisarg</a></p>
					</div>
				</div>
			</div>
		</div>
	</footer>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
@import '../css/bootstrap.css';
@import '../css/bootstrap2.css';
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
@import '../css/style.css';
.item-active .container2{
	position: absolute;
    bottom: 97px;
    width: 62%;
    text-align: right;
}
.item .container2{
	position: absolute;
    bottom: 97px;
    width: 62%;
    text-align: right;
}
</style>
