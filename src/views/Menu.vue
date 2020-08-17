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
                                <li class="nav-item active"><a class="nav-link" href="/menu">Menu</a></li>
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

        <!--================ Start Portfolio Area =================-->
     <!--    <section class="banner-area owl-carousel" id="home">
            <div class="single_slide_banner slide_bg3">
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


        <!--- new carousel area--->
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
                    <div class="row2 fullscreen d-flex align-items-center" style=" margin-left: 217px;">
                        <div class="banner-content col-lg-12 justify-content-center" style="bottom:83px">
                            <h1>Masala Cheat</h1>
                            <h3><b>Know Us</b></h3>
                            </div>
                    </div>
                </div>
      <img src="../images/17.jpg" alt="Los Angeles">
    </div>

    <div class="item">
		 <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center" style="margin-left: 217px;">
                        <div class="banner-content col-lg-12 justify-content-center" style="bottom:83px">
                            <h1>Masala Cheat</h1>
                            <h3><b>Know Us</b></h3>
                            </div>
                    </div>
                </div>
      <img src="../images/17.jpg" alt="Chicago">
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
        <!--- end new carousel area-->

        <!--================ Start About Area =================-->
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
                    <div class="col-lg-6 col-sm-6 col-sm-12 ind grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Indian/medu-vada-500x375.jpg" alt="">
                            <div class="projects_text">
                                <a href="index.html">
                                    <h4>Indian Food</h4>
                                </a>
                                <p>Medu Wada</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-sm-12 ind grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Indian/india-2731812_640.jpg" alt="">
                            <div class="projects_text">
                                <a href="index.html">
                                    <h4>Indian Food</h4>
                                </a>
                                <p>Daal Sabji Roti</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-sm-12 chn grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Chinese/1498148188-delish-easy-pad-thai-vertical-1024.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Chinese Food</h4>
                                </a>
                                <p>Pad Thai</p>
                            </div>
                        </div>
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
                            <img class="img-fluid w-100" src="../img/works/Chinese/carbonara-in-gray-bowl-1030947.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Chinese Food</h4>
                                </a>
                                <p>Carbonara</p>
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
                            <img class="img-fluid w-100" src="img/works/Chinese/asian-food-bowl-chopsticks-cooking-628776.jpg" alt="">
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
                    <div class="col-lg-3 col-sm-6 itl grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Italian/appetizing-baked-sliced-seafood-pizza-with-mushrooms-4553127.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Italian food</h4>
                                </a>
                                <p>Seafood Mushroom Pizza</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-sm-12 itl grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Italian/39a8e41888d4a2db86cf56be5d40dd74.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Italian food</h4>
                                </a>
                                <p>Lasagna</p>
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
                    <div class="col-lg-6 col-sm-6 mex grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Mexican/quesadillas.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Mexican Food</h4>
                                </a>
                                <p>Avocado Quesadilla</p>
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
                        <div class="col-lg-3 col-sm-6 col-sm-12 mex grid-item">
                        <div class="projects_item">
                            <img class="img-fluid w-100" src="../img/works/Mexican/singleimagebug-keto-taco-cups-pin-1559840682.jpg" alt="">
                            <div class="projects_text">
                                <a href="portfolio-details.html">
                                    <h4>Mexican Food</h4>
                                </a>
                                <p>Taco Cups</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
    name:'Menu',
    props: {

    }
}
</script>

<style scoped>
@import '../css/bootstrap.css';
@import '../css/bootstrap2.css';
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
@import '../css/style.css';
.item-active .container2{
    position: absolute;
    margin:284px;
}
.item .container2{
    position: absolute;
    margin:284px;
}
</style>