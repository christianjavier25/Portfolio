<template>
  <v-footer class="footer" padless>
    <section class="left">
      <img class="back-img" src="./img/email-ga6a8f43ad_1280.png" />
    </section>
     <v-card class="contact-Form">
      <form @submit.prevent="sendEmail">
        <h3>GET IN TOUCH</h3>
        <div class="form-group">
          <span
            ><label><h4>Name</h4></label></span
          ><br />
          <v-text-field v-model="name" filled outlined dense />
        </div>
        <div class="form-group">
          <span
            ><label><h4>Email</h4></label></span
          ><br />
          <v-text-field v-model="email" filled dense outlined />
        </div>
        <div class="form-group">
          <span
            ><label><h4>Contact Number</h4></label></span
          ><br />
          <v-text-field v-model="contactNumber" filled dense outlined number />
        </div>

        <div class="form-group">
          <span
            ><label><h4>Message</h4></label></span
          ><br />
          <v-textarea v-model="message" filled outlined />
        </div>
        <v-btn type="submit">Send</v-btn>
      </form>
    </v-card>
    <v-card dark class="copyright" width="100%">
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Christian Javier</strong>
      </v-card-text>
    </v-card>
    <v-dialog v-if="success" v-model="isSuccess" max-width="600px">
      <v-card>
        <v-card-text>
          <div class="text-h2 pa-12">
            Thank You {{ name }} for your Awesome Message
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="closeSuccessEmail()">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
  </v-footer>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  name: "contact-footer",
  data() {
    return {
      name: null,
      email: null,
      contactNumber: null,
      message: null,
      success: null,
      isSuccess: true,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_u0h9m6b",
          "template_og50m9j",
          {
            from_name: this.name,
            email_id: this.email,
            contact_number: this.contactNumber,
            message: this.message,
          },
          "Cxsk023GgFWUdFtEO"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.text);
          
            this.success = response.text;
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    closeSuccessEmail() {
      this.name = null;
      this.email = null;
      this.contactNumber = null;
      this.message = null;
      this.success = false;
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 700px;
}
.teal {
  background-color: teal;
}

.contact-Form{
 position: absolute;
  right: 50px;
  background-color: white;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 400px;
}

.form-group h4 {
  position: absolute;
}
.copyright {
  position: absolute;
  bottom: 0;
}
.back-img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

@media only screen and (max-width: 500px) {
.contact-Form{
  right: auto;
  width: 350px;
}
}
@media only screen and (max-width: 380px) {
.contact-Form{
  right: auto;
  width: 300px;
}
}
@media only screen and (max-width: 315px) {
.contact-Form{
  right: auto;
  width: 270px;
}
}
@media only screen and (max-width: 275px) {
.contact-Form{
  right: auto;
  width: 250px;
}
}
</style>