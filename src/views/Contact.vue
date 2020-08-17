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
                                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                                <li class="nav-item active"><a class="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!--================ Start Portfolio Area =================-->
       <!--  <section class="banner-area owl-carousel" id="home">
            <div class="single_slide_banner slide_bg5">
                <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            <h3><b>Meet us Here</b></h3>
                            </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!--================ Start Portfolio Area =================-->
      <!--   <section class="banner-area owl-carousel" id="home">
            <div class="single_slide_banner slide_bg5">
                <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            <h3><b>Meet us Here</b></h3>
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
		 <div class="container3">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1 style="color:white;">Masala Cheat</h1>
                            <h3><b>Meet us Here</b></h3>
                            </div>
                    </div>
                </div>
      <img src="../images/23.jpg" alt="Los Angeles">
    </div>

    <div class="item">
		 <div class="container3">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1 style="color:white;">Masala Cheat</h1>
                            <h3><b>Meet us Here</b></h3>
                            </div>
                    </div>
                </div>
      <img src="../images/23.jpg" alt="Chicago">
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


        <!--================ Start Portfolio Area =================-->
        <section id="contact">
            <div class="container">
            <div class="ftco-section">
                
                <h2 class="text-center" style="color: black"><strong>Contact Information</strong></h2>
                <br>
            <div class="row3">
                <div class="column3"><h3 style="color: black;">Address</h3>
                        <h4 style="color: #8c8c8c; color: deepskyblue">1450 Nakina Dr, Thunder Bay, ON P7C 4W1</h4></div><hr><div class="column3">
                <h3 style="color: black">Phone</h3>
                        <h4><a href="tel:8073578151" style="color: deepskyblue">(807)-123-5678</a></h4></div><hr>
                    <div class="column3" >
                    <h3 style="color: black">E-mail</h3>
                        <h4><a href="mailto:abala@confederatiocollege.ca" style="color: deepskyblue">masalacheat@confederatiocollege.ca</a></h4></div>
                    </div>
                </div>
                </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col">
            <h2 style="text-align: left; margin-left: 60px; margin-bottom: 20px; color: black"><strong>Contact Information</strong></h2>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy" style="width:70%;margin-bottom:10px;">
                <v-text-field v-model="name" :rules="nameRules"  label="Your Name" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="subject" :rules="nameRules" label="Subject" required></v-text-field>
                <v-textarea v-model="message" :rules="nameRules" label="Message"></v-textarea>
                <v-btn :disabled="!valid" style="background-color:green;margin-bottom:7px;" class="mr-4" @click="onSubmit">Send Message</v-btn>
           </v-form>
           </div>
           <div class="col">
           <div class="gmap_canvas">
            <iframe width="450" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=confederation%20colloege%2C%20thunder%20bay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="margin-right: 100px">
            </iframe>
            </div>
            </div>
            </div>
            </div>
        <!-- <table><tr><td>
            <form>
            
                <div><p><input type="text" placeholder="Your Name" style="margin-left: 20px; margin-right: 150px; color: aliceblue; height: 35px; text-align: center; width: 500px; font-size: 20px; background-color: transparent" required></p></div>
                    <div> <p><input type="text" placeholder="E-mail" style="margin-left: 20px; text-align: center; color: aliceblue;  margin-right: 150px; height: 35px; width: 500px; font-size: 20px; background-color: transparent" required></p></div>
                    <div> <p><input type="text" placeholder="Subject" style="margin-left: 20px; text-align: center; color: aliceblue;  margin-right: 150px; height: 35px; width: 500px; font-size: 20px; background-color: transparent" required></p></div>
                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" style="margin-left: 20px; text-align: center; margin-right: 150px; height: 200px; color: aliceblue;  width: 500px; font-size: 20px; border: 2px solid #121212; background-color: transparent" required></textarea><br>
                <div class="text-center"><p><input type="submit" value="Send Message" onclick="Message Submitted" style="color:#fff; background-color: #1f1f1f; text-align: center; border:  1px solid #121212; margin-left: 20px; margin-right: 150px; height: 30px; width: 200px"></p></div>
                
            </form>
            </td>
            <td><div class="mapouter" style="text-align: right">
            <div class="gmap_canvas">
            <iframe width="450" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=confederation%20colloege%2C%20thunder%20bay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="margin-right: 100px">
            </iframe>
            </div>
            </div></td></tr>
        </table> -->

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
    Copyright  All rights reserved | This template is made with <img src="../images/hrt.png" style="height: 20px; width: 20px;"> and <img src="../images/hwp.png" style="height: 20px; width: 20px;"> by <a href="https://about.html" target="_blank">Anju, Lovleen & Nisarg</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'contact',
     data(){
        return{
            valid: true,
            name: '',
            subject: '',
            nameRules: [
            v => !!v || 'This is required field',
            ],
            email: '',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            message:'',
            lazy: false,
        }
    },
    methods: {
        onSubmit(){
            let self = this
        console.log("Submit Clicked", typeof this.time)
            var axios = require('axios');
            var data = JSON.stringify(
            {
                "fullName":this.name,
                "email":this.email,
                "subject":this.subject,
                "message":this.message
            });

            var config = {
              method: 'post',
              url: process.env.VUE_APP_domainkey + '/api/enquiry/saveEnquiry ',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              if(response.status === 200){
                  alert(response.data.message)
                  self.$refs.form.reset()
              }
            })
            .catch(function (error) {
              console.log(error);
              alert("Something went wrong!!!")
              self.$refs.form.reset()
            });

        }
    }
    
}
</script>
<style scoped>
@import '../css/bootstrap.css';
@import '../css/bootstrap2.css';
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
@import '../css/style.css';
.item-active .container3{
    position: absolute;
    margin:284px;
}
.item .container3{
    position: absolute;
    margin:284px;
}
</style>