<template>
  <div>

	<!--================Header Menu Area =================-->
	<header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand" href="index.html"><img style="height: 94px; width: 100px;" src="Logo/logo_transparent.png" alt=""></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
							<li class="nav-item"><a class="nav-link" href="/menu">Menu</a></li>
							<li class="nav-item submenu dropdown">
								<a class="nav-link" href="/booking/table">Bookings</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><a class="nav-link" href="/booking/hall">Hall Bookings</a></li>
									<li class="nav-item"><a class="nav-link" href="/booking/table">Book Tables</a></li>
								</ul>
							</li>
							<li class="nav-item"><a class="nav-link" href="/about">About</a></li>
							<li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<!--================Header Menu Area =================-->
	<!--================Home Banner Area =================-->
	<!-- <section class="banner-area owl-carousel" id="home">
		<div class="single_slide_banner slide_bg1">
			<div class="container">
				<div class="row fullscreen d-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center">
						<h1>Masala Cheat</h1>
						<h3>Welcomes You</h3>
						<a href="menu.html" class="primary-btn">Let's Explore Together</a>
					</div>
				</div>
			</div>
		</div>
		<div class="single_slide_banner slide_bg2">
			<div class="container">
				<div class="row fullscreen d-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center">
						<h1>We Take Care of You</h1>
						<h3>To Make Your Day Great</h3>
						<a href="about.html" class="primary-btn">More info</a>
					</div>
				</div>
			</div>
		</div>
		<div class="single_slide_banner slide_bg3">
			<div class="container">
				<div class="row fullscreen justify-content-endd-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center">
						<h1>We Serve You HOT!!</h1>
						<h3>We Serve You Delicious</h3>
						<a href="signup.html" class="primary-btn">Sign up today</a>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!--================End Home Banner Area =================-->

<!-- start new carousel area----->
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
			<div class="container">
				<div class="row fullscreen d-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center" style="margin-left: 604px;">
						<h1>Masala Cheat</h1>
						<h3>Welcomes You</h3>
						<a href="menu.html" class="primary-btn">Let's Explore Together</a>
					</div>
				</div>
			</div>
      <img src="../images/15.jpg" alt="Los Angeles">
    </div>

    <div class="item">
			<div class="container">
				<div class="row fullscreen d-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center" style="margin-left:481px;bottom:123px;" >
						<h1>We Take Care of You</h1>
						<h3>To Make Your Day Great</h3>
						<a href="about.html" class="primary-btn">More info</a>
					</div>
				</div>
			</div>
      <img src="../images/18.jpg" alt="Chicago">
    </div>

    <div class="item">
			<div class="container">
				<div class="row fullscreen justify-content-endd-flex align-items-center" style="margin-left: 213px;bottom: 64px;">
					<div class="banner-content col-lg-12 justify-content-center">
						<h1>We Serve You HOT!!</h1>
						<h3>We Serve You Delicious</h3>
						<a href="signup.html" class="primary-btn">Sign up today</a>
					</div>
				</div>
			</div>
      <img src="../images/17.jpg" alt="New York">
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
<!--- end new carousel area---->

	<!--================ Start Portfolio Area =================-->
	<section class="section_gap portfolio_area" id="work">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 text-center">
					<div class="main-title">
						<h1>Let's Have a Look at Menu</h1>
						<p>Satisfy all of your food cravings!</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-10">
					<div class="projects_fillter">
						<ul class="filter list">
							<li class="active" data-filter="*">All</li>
              <li data-filter=".ind">Indian</li>
							<li data-filter=".itl">Itallian</li>
							<li data-filter=".mex">Mexican Work </li>
							<li data-filter=".chn">Chinese</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="projects_inner row grid">
				<div class="grid-sizer col-sm-6 col-md-3 col-lg-3"></div>
				<div class="col-lg-6 col-sm-6 col-sm-12 ind grid-item">
					<div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Indian/2.jpg" alt="">
						<div class="projects_text">
							<a href="index.html">
								<h4>Indian Food</h4>
							</a>
							<p>Dosa</p>
						</div>
					</div>
				</div>
          <div class="col-lg-6 col-sm-6 col-sm-12 ind grid-item">
					<div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Indian/The-Best-Indian-Punjabi-Samosa-3.jpg" alt="">
						<div class="projects_text">
							<a href="index.html">
								<h4>Indian Food</h4>
							</a>
							<p>Punjabi Samosa</p>
						</div>
					</div>
				</div>
                <div class="col-lg-6 col-sm-6 col-sm-12 ind grid-item">
					<div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Indian/bhaji-food-shutterstock_1131535256-1680x1050.jpg" alt="">
						<div class="projects_text">
							<a href="index.html">
								<h4>Indian Food</h4>
							</a>
							<p>Bhaji Food</p>
						</div>
					</div>
				</div>
                <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                </div>
                <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Chinese/5c0192d1de34c43da26049d4.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Chinese Food</h4>
							</a>
							<p>Spring Roll</p>
						</div>
					</div>
                </div>
                <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Chinese/53d003256bb3f7325bf02663.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Chinese Food</h4>
							</a>
							<p>Momos</p>
						</div>
					</div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Chinese/asian-food-bowl-chopsticks-cooking-628776.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Chinese Food</h4>
							</a>
							<p>Asian Food-Bowl Chopsticks</p>
						</div>
					</div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Chinese/appetizer-bowl-chili-close-up-286283.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Chinese Food</h4>
							</a>
							<p>Appetizer Bowl Chili</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-sm-12 itl grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Italian/bowl-of-cooked-food-3590401.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Italian food</h4>
							</a>
							<p>Bowl of Cooked Food</p>
						</div>
					</div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-sm-12 itl grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Italian/shutterstock_283068254.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Italian food</h4>
							</a>
							<p>Pasta</p>
						</div>
					</div>
                                </div>
                    <div class="col-lg-3 col-sm-6 col-sm-12 itl grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Italian/person-holding-pepperoni-pizza-on-tray-1049626.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Italian food</h4>
							</a>
							<p>Pepperoni Pizza</p>
						</div>
					</div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-sm-12 itl grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Italian/1426576690-7820792-1030x521.jpeg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Italian food</h4>
							</a>
							<p>Spaghetti Carbonara</p>
						</div>
					</div>
				</div>
                    <div class="col-lg-3 col-sm-6 col-sm-12 mex grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Mexican/Chicken-Tamales_EXPS_HC17_50905_C12_16_2b-2-696x696.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Mexican Food</h4>
							</a>
							<p>Chicken Tamales</p>
						</div>
					</div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-sm-12 mex grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Mexican/delish-190801-air-fryer-taquitos-0088-portrait-pf-1565972419.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Mexican Food</h4>
							</a>
							<p>Air Fryer Taquitos</p>
						</div>
					</div>
                            </div>
                        <div class="col-lg-3 col-sm-6 col-sm-12 mex grid-item">
                    <div class="projects_item">
						<img class="img-fluid w-100" src="../img/works/Mexican/delish-190904-frito-pie-0145-portrait-pf-1568846544.jpg" alt="">
						<div class="projects_text">
							<a href="portfolio-details.html">
								<h4>Mexican Food</h4>
							</a>
							<p>Frito Pie</p>
						</div>
					</div>
                            </div>
			</div>
		</div>
	</section>
	<!--================ End Portfolio Area =================-->
<!-- Start Food Staf Area -->
        <section class="dwn">
            <div class="divdwn">
                <div class="divdwn2">
                  <div class="divdwn3">
                      <div>
                          <h2 class="divdwnh2">Foodstuff now in your hand</h2>
                          <h3 class="divdwnh3">Download Now !<br> to get this app Faster way to order food</h3>
                          <ul class="divdwnul">
                              <li class="divdwnulli"><a href="#"><img src="../images/app/2.png" alt="app images"></a></li>
                              <li class="divdwnulli"><a href="#"><img src="../images/app/3.png" alt="app images"></a></li>
                          </ul>
                      </div>
                  </div>
                </div>
            </div>
            <div class="divdwnimg">
                <img class="phnimg" src="../images/app/phn.png" alt="pnone image" >
            </div>
           
        </section>
        <!-- End Food Staf Area -->
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
					</div>
					<div class="mb-50 wow fadeIn" data-wow-duration=".8s">
						<p>
							Welcome to <b>Masala Cheat</b>, a place for the best Indian food in <b>Thunder Bay</b>. We first opened on January 2, 1995, and we haven’t looked back since. We introduced <b>authentic and traditional Indian food</b> to the <b>Thunder Bay</b> area and have grown into what many say is the best Indian Restaurant for Dine-in, Buffet, Delivery, Pickup and Catering in the area. Our customers appreciate the fact that we are family-owned and operated, bringing some of our favorite family recipes and ingredients to our menu.
						</p>
						<p><b>Masala Cheat</b> is involved in a variety of not for profit organizations and charities in the Thunder Bay area. We know how important it is to give back to the community that has supported us for so many years.
						</p>
					</div>
					<a href="/about" class="primary-btn">More Info</a>
				</div>
			</div>
		</div>
	</section>
	<!--================ End About Area =================-->

	<!--================ Start Testimonial Area =================-->
	<div class="section_gap testimonial_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 text-left">
					<div class="active_testimonial owl-carousel" data-slider-id="1">
						<!-- single testimonial -->
						<div class="single_testimonial">
							<div class="testimonial_head">
								<!-- <img src="img/quote.png" alt=""> -->
								<h4>Masala Cheat</h4>
								<div class="review">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
							</div>
							<div class="testimonial_content">
								<p>If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars—Anju Sharma, Nisarg Pandya, Lovleen Kaur—to thank for some of the greatest dishes of all time.</p>
							</div>
						</div>

						<div class="single_testimonial">
							<div class="testimonial_head">
								<!-- <img src="../img/quote.png" alt=""> -->
								<h4>Anju Sharma</h4>
								<div class="review">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
							</div>
							<div class="testimonial_content">
								<p> “There is no love sincerer than the love of food.” </p>
							</div>
						</div>

						<div class="single_testimonial">
							<div class="testimonial_head">
								<!-- <img src="../img/quote.png" alt=""> -->
								<h4>Lovleen Kaur</h4>
								<div class="review">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
							</div>
							<div class="testimonial_content">
								<p>“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”</p>
							</div>
						</div>

						<div class="single_testimonial">
							<div class="testimonial_head">
								<!-- <img src="../img/quote.png" alt=""> -->
								<h4>Nisarg Pandya</h4>
								<div class="review">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
							</div>
							<div class="testimonial_content">
								<p>“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 offset-lg-1">
					<div class="testimonial_logos">
						<div class="top_logos">
							<img src="../img/brands/as2.gif" alt="">							
						</div>
						<div class="mid_logo">
							
						</div>
						<div class="bottom_logos jus">
							<img src="../img/brands/lov.gif" alt=""><img src="../img/brands/np2.gif" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--================ End Testimonial Area =================-->

	<!--================ Start Newsletter Area =================-->
	<section class="section_gap newsletter-area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 text-center">
					<div class="main-title">
						<h1>Join Our Newsletter</h1>
						<p>If you are looking for great deals or offer from us. Click here and subscribe to get some.</p>
					</div>
				</div>
			</div>
			<div class="row newsletter_form justify-content-center">
				<div class="col-lg-6 col-md-6 col-sm-6">
					<div class="d-flex flex-row" id="mc_embed_signup">
						<form class="w-100" novalidate="true" action="#"
						 method="get">
							<div class="navbar-form">
								<div class="input-group add-on">
									<input class="form-control" name="EMAIL" placeholder="Your email address" onfocus="this.placeholder = ''"
									 onblur="this.placeholder = 'Your email address'" required="" type="email">
									<div style="position: absolute; left: -5000px;">
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
									</div>
									<div class="input-group-btn">
										<button class="genric-btn text-uppercase">
											<a>Subscribe</a>
										</button>
									</div>
								</div>
							</div>
							<div class="info mt-20"></div>
						</form>

					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End Newsletter Area =================-->

	<!--================ Start Footer Area =================-->
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
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/bootstrap.css';
@import '../css/bootstrap2.css';
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
/* @import '../css/font-awesome.min.css'; */
@import '../css/style.css';
/* @import '../vendors/owl-carousel/owl.carousel.min.css'; */
/* @import '../vendors/nice-select/css/nice-select.css'; */
.divdwnimg{
	float: left;
  margin-left: 30px;
}
.divdwnh2{
	text-align: left;
}
.divdwnh3{
	text-align: left;
}
.item-active .container{
	position: absolute;
    bottom: 97px;
    width: 62%;
    text-align: right;
}
.item .container{
	position: absolute;
    bottom: 97px;
    width: 62%;
    text-align: right;
}
</style>
