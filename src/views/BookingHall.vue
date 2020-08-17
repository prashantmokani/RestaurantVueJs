<template>
    <div>
        <header class="header_area">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <a class="navbar-brand" href="index.html"><img style="height: 94px; width: 100px;"
                                                                    src="../Logo/logo_transparent.png" alt=""></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
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
                                <li class="nav-item submenu dropdown active">
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
        <!-- <section class="banner-area owl-carousel" id="home">
            <div class="single_slide_banner slide_bg7">
                <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            <h3><b>Book Now</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!---- start new carousel area ---->
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
                            <h1 style="color:white;">Masala Cheat</h1>
                            <h3><b>Book Now</b></h3>
                        </div>
                    </div>
                </div>
      <img src="../images/5211.jpg" alt="Los Angeles">
    </div>

    <div class="item">
		 <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1 style="color:white;">Masala Cheat</h1>
                            <h3><b>Book Now</b></h3>
                        </div>
                    </div>
                </div>
      <img src="../images/5211.jpg" alt="Chicago">
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
        <section>
            <div class="frmdd text-center" style="color: black"><h1>Hall Reservation</h1></div>
            <div class="divfr">We would be glad to reserve a Hall for you at our restaurant!</div>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy" style="width:20%;margin-bottom:10px;max-width: 500px;margin: auto;">
                <v-text-field v-model="name" :rules="nameRules"  label="Name" required></v-text-field>
                <v-text-field v-model="phone" :rules="nameRules"  label="Phone" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="event" :rules="nameRules" label="Event" required></v-text-field>
                <div class="divan" style="text-align:left !important">Date<br/>
				    <input v-model="date" type="date" id="bookingDate" name="bookingDate" class="form-control inp2"/>
				</div>
                <div class="time-label" style="text-align:left !important">Start Time<br/>
				    <input v-model="startTime" type="time" step="1">
                </div>
                <div class="time-label" style="text-align:left !important">End Time<br/>
				    <input v-model="endTime" type="time" step="1">
                </div>
                <v-text-field v-model="attendees" :rules="nameRules" label="Number of Attendees" required></v-text-field>
                <v-textarea v-model="specialRequest" label="Comments/ Special Requests"></v-textarea>
                <v-btn :disabled="!valid" style="background-color:green;margin-bottom:7px;" class="mr-4" @click="onSubmit">Submit</v-btn>
           </v-form>
           
            <!-- <table>
                <tr>
                    <td>
                        <form style="padding-left: 400px;" method="post" id="hallFormId"
                            action="http://localhost:8080/api/v1/hall/hallReservation" onSubmit="return validateForm();">
                            <div class="frmd">
                            </div>
                            <br>
                            <div class="divan">Name<span class="divsp"> *</span><br/>
                                <input type="text" id="customerName" name="customerName" class="form-control inp"/>
                            </div>
                            <div class="divan">Phone<br/>
                                <input type="text" id="phoneNumber" name="phoneNumber" class="form-control inp"/>
                            </div>
                            <div class="divan">Email<br/>
                                <input type="text" id="emailId" name="emailId" class="form-control inp"/>
                            </div>
                            <div class="divan">Event<span class="divsp"> *</span><br/>
                                <input type="text" id="eventName" name="eventName" class="form-control inp"/>
                            </div>
                            <div class="divan">Date<span class="divsp"> *</span><br/>
                                <input type="date" id="bookingDate" name="bookingDate" class="form-control inp2"/>
                            </div> -->

                            <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/css/pikaday.min.css"
                                rel="stylesheet" type="text/css"/>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/pikaday.min.js"
                                    type="text/javascript"></script>
                            <script type="text/javascript">new Pikaday({field: document.getElementById('bookingDate')});</script> -->

                            <!-- <div style="padding-bottom: 18px;">Start Time:<span style="color: red;"> *</span><br/>
                                <input type="time" id="fromTime" name="fromTime" step="1">
                            </div>
                            <div style="padding-bottom: 18px;">End Time:<span style="color: red;"> *</span><br/>
                                <input type="time" id="toTime" name="toTime" step="1">
                            </div>
                            <div style="padding-bottom: 18px;">Number of Attendees<span style="color: red;"> *</span><br/>
                                <input type="text" id="noOfAttendees" name="noOfAttendees" style="max-width : 400px;"
                                    class="form-control"/>
                            </div>
                            <div style="padding-bottom: 18px;">Comments / Special Requests<br/>
                                <textarea id="specialRequest" false name="specialRequest" style="max-width : 400px;" rows="6"
                                        class="form-control"></textarea>
                            </div>
                            <div style="padding-bottom: 18px;"><input name="skip_Submit" value="Submit" type="submit"/></div>
                        </form>
                    </td>
                </tr>
            </table> -->
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
                                <li><a href="https://github.com/anjubala28/Web-Designing-II"><img src="../images/gt1.png"
                                                                                                style="height: 40px; width: 40px;"></a>
                                </li>
                                <li><a href="#"><img src="../images/lnk.png" style="height: 40px; width: 40px;"></a></li>
                            </ul>
                        </aside>
                        <div class="copyright">
                            <p>
                                Copyright All rights reserved | This template is made with 
                                <img src="../images/hrt.png" style="height: 20px; width: 20px;"> and
                                <img src="../images/hwp.png" style="height: 20px; width: 20px;"> by <a href="https://about.html" target="_blank">Anju,
                                Lovleen & Nisarg</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Booking',
   data() {
       return{
            valid: true,
            name: '',
            phone: '',
            event: '',
            attendees: '',
            nameRules: [
            v => !!v || 'This is required field',
            ],
            email: '',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            date: '',
            startTime: '',
            endTime: '',
            lazy: false,
        }
   } ,
   methods: {
        onSubmit(){
            let self = this
        console.log("Submit Clicked", typeof this.time)
            var axios = require('axios');
            var data = JSON.stringify(
            {
                "customerName":this.name,
                "phoneNumber":this.phone,
                "emailId":this.email,
                "eventName":this.event,
                "bookingDate":this.date,
                "fromTime":this.startTime,
                "toTime":this.endTime,
                "noOfAttendees": this.attendees,
                "specialRequest":this.specialRequest
            });

            var config = {
              method: 'post',
              url: process.env.VUE_APP_domainkey + '/api/hall/hallReservation',
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
@import '../css/style.css';
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
/* @import '../vendors/nice-select/css/nice-select.css'; */
.item-active .container2{
	position: absolute;
    bottom: 570px;
    width: 62%;
    text-align: right;
}
.item .container2{
	position: absolute;
    bottom: 570px;
    width: 62%;
    text-align: right;
}
.carousel-inner>.item>img {
    width: 100%;
}
</style>