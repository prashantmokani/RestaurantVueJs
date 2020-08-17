<template>
    <div>
        <header class="header_area">
            
        </header>

        <!--================ Start Portfolio Area =================-->
       <!--  <section class="banner-area owl-carousel" id="home">
                <div class="single_slide_banner slide_bg4">
                <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            <h3><b>Book Now</b></h3>
                            </div>
                    </div>
                </div>
            </div>
            <div class="single_slide_banner slide_bg8">
                <div class="container">
                    <div class="row fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            </div>
                    </div>
                </div>
            </div>
            <div class="single_slide_banner slide_bg9">
                <div class="container">
                    <div class="row fullscreen justify-content-endd-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single_slide_banner slide_bg10">
                <div class="container">
                    <div class="row fullscreen justify-content-endd-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
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
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            <h3><b>Book Now</b></h3>
                            </div>
                    </div>
                </div>
      <img src="../images/22.jpg" alt="Los Angeles">
    </div>

    <div class="item">
		 <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            </div>
                    </div>
                </div>
      <img src="../images/5.jpg" alt="Chicago">
    </div>
    <div class="item">
		 <div class="container2">
                    <div class="row2 fullscreen d-flex align-items-center">
                        <div class="banner-content col-lg-12 justify-content-center">
                            <h1>Masala Cheat</h1>
                            </div>
                    </div>
                </div>
      <img src="../images/3.jpg" alt="Chicago">
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

        <section>
           <div class="frmdd text-center" style="color: black"><h1>Admin Panel (Hall Bookings)</h1></div>
           <div style="width:60%;margin-bottom:10px;max-width: 1000px;margin: auto;">
            <div class="divan" style="text-align:left !important">Select Date<br/>
                <input v-model="date" type="date" id="bookingDate" name="bookingDate" class="form-control inp2" @change="showBooking"/>
            </div>
           </div>
            <v-data-table :headers="headers" :items="tableData" style="width:60%;margin-bottom:10px;max-width: 1000px;margin: auto;"></v-data-table>
			<!-- <form style="padding-left: 400px;" method="post" action="http://localhost:8080/api/v1/table/tableReservation" onSubmit="return validateForm();" id="tableFormId">
				<div class="frmd">
				</div>
                <br>
                    <div class="frmdd text-center" style="color: black"><h1>Tables Reservation</h1></div>
                    <div class="divfr">We would be glad to reserve a Hall for you at our restaurant!</div>
				    <div class="divan">Name<span class="divsp"> *</span>
                <br/>
				<input type="text" id="customerName" name="customerName" class="form-control inp"/>
				</div>
				<div class="divan">Phone<br/>
				<input type="text" id="phoneNumber" name="phoneNumber" class="form-control inp"/>
				</div>
				<div class="divan">Email<br/>
				<input type="text" id="emailId" name="emailId" class="form-control inp"/>
				    </div>
				             <div class="divan">Date<span class="divsp"> *</span><br/>
				<input type="date" id="bookingDate" name="bookingDate" class="form-control inp2"/>
				</div>
				            <div style="padding-bottom: 18px;">Time<span style="color: red;"> *</span><br/>
				<input type="time" id="startTime" name="startTime" step="1">
				    </div>
				<div style="padding-bottom: 18px;">Number of Attendees<span style="color: red;"> *</span><br/>
				    <input type="text" id="noOfAttendees" name="noOfAttendees" style="max-width : 400px;" class="form-control"/>
				</div>
				             <div style="padding-bottom: 18px;">Comments / Special Requests<br/>
				<textarea id="specialRequest" false name="specialRequest" style="max-width : 400px;" rows="6" class="form-control"></textarea>
				</div>
                <div style="padding-bottom: 18px;"><input class="text-center" name="skip_Submit" value="Submit" type="submit"/></div>
           </form> -->
            <!-- <v-form ref="form" v-model="valid" :lazy-validation="lazy" style="width:20%;margin-bottom:10px;max-width: 500px;margin: auto;">
                <v-text-field v-model="name" :rules="nameRules"  label="Name" required></v-text-field>
                <v-text-field v-model="phone" :rules="nameRules"  label="Phone" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <div class="divan" style="text-align:left !important">Date<br/>
				    <input v-model="date" type="date" id="bookingDate" name="bookingDate" class="form-control inp2"/>
				</div>
                <div class="time-label" style="text-align:left !important">Time<br/>
				    <input v-model="time" type="time" step="1">
                </div>
                <v-text-field v-model="attendees" :rules="nameRules" label="Number of Attendees" required></v-text-field>
                <v-textarea v-model="specialRequest" label="Comments/ Special Requests"></v-textarea>
                <v-btn :disabled="!valid" style="background-color:green;margin-bottom:7px;" class="mr-4" @click="onSubmit">Submit</v-btn>
           </v-form> -->
           

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
Copyright  All rights reserved | This template is made with <img src="../images/hrt.png" style="height: 20px; width: 20px;"> and <img src="../images/hwp.png" style="height: 20px; width: 20px;"> by <a href="https://about.html" target="_blank">Anju, Lovleen & Nisarg</a></p>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AdminHall',
    data(){
        return{
            date: '',
            headers: [
                {
                text: 'Date',
                align: 'start',
                sortable: false,
                value: 'bookingDate',
                },
                { text: 'Name', value: 'customerName' },
                { text: 'Email', value: 'emailId' },
                { text: 'Phone', value: 'phoneNumber' },
                { text: 'Instruction', value: 'specialRequest' },
                { text: 'Start Time', value: 'fromTime'},
                {text: 'End Time', value: 'toTime'}
            ],
            tableData: []
        }
    },
    mounted(){
        
    },
    methods: {
        showBooking(){
            let self = this
            let config = {
            method: 'get',
            url: process.env.VUE_APP_domainkey + '/api/hall/showAllHall/' + this.date,
            headers: { 
                'Content-Type': 'application/json'
            },
            };

            axios(config)
            .then(function (response) {
                if(response.data.data !== null){
                    self.tableData=response.data.data
                } else{
                    self.tableData = []
                }
            })
            .catch(function (error) {
            console.log(error);
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
.item-active .container2{
    position: absolute;
    margin:284px;
}
.item .container2{
    position: absolute;
    margin:284px;
}
</style>