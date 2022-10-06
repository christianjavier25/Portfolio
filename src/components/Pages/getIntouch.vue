<!-- <template>
    <v-footer class="footer" padless>
      <section class="left">
        <img class="back-img" src="../img/email-ga6a8f43ad_1280.png" />
      </section>
      <v-card class="contact-Form">
        <form @submit.prevent="sendEmail">
          <h3>GET IN TOUCH</h3>
          <v-alert class="successMessage" dense type="success" v-if="senderName"
            >Thank You {{ senderName }}</v-alert
          >
          <v-alert class="successMessage" dense type="error" v-if="formError"
            >Thank You {{ formError }}</v-alert
          >
          <div class="form-inputs">
            <div class="form-group">
              <span
                ><label><h5>Name:</h5></label></span
              >
              <b-form-input
                v-model="name"
                required
                placeholder="Enter your fullname ..."
              />
            </div>
            <div class="form-group">
              <span
                ><label><h5>Email:</h5></label></span
              >
              <b-form-input
                type="email"
                v-model="email"
                required
                placeholder="Enter your email ..."
              />
            </div>
            <div class="form-group">
              <span
                ><label><h5>Phone Number:</h5></label></span
              >
              <VuePhoneNumberInput
                v-model="phoneNumber"
                fetch-country
                :only-countries="['PH']"
                required
              />
            </div>
            <div class="form-group">
              <span
                ><label><h5>Message:</h5></label></span
              >
              <b-textarea
                v-model="message"
                required
                placeholder="Write your message ..."
              />
            </div>
          </div>
          <br />
  
          <v-btn class="send" color="#f5751f" type="submit"
            ><strong>Send</strong></v-btn
          >
          <v-btn class="resetBtn" color="#a8b0b6" @click="reset()"
            ><strong>Reset</strong></v-btn
          >
        </form>
      </v-card>
      <v-card dark class="copyright" width="100%">
        <v-card-text class="py-2 white--text text-center align-items-center">
          <div class="icons">
            <a href="https://www.facebook.com/kulokoy999" target="_blank"
              ><img
                class="socialMedia"
                src="../img/socialmedia-icon/facebook.png"
            /></a>
            <a href="https://github.com/christianjavier25/" target="_blank"
              ><img class="socialMedia" src="../img/socialmedia-icon/github.png"
            /></a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=javierchristian2512@gmail.com"
              target="_blank"
              ><img
                class="socialMedia"
                src="../img/socialmedia-icon/gmail.png"
                alt=""
            /></a>
          </div>
          <v-divider></v-divider>
          {{ new Date().getFullYear() }} — <strong>Christian Javier</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>
  <script>
  import emailjs from "@emailjs/browser";
  import VuePhoneNumberInput from "vue-phone-number-input";
  
  export default {
    name: "contact-footer",
    components: {
      VuePhoneNumberInput,
    },
    data() {
      return {
        name: null,
        senderName: null,
        phoneNumber: null,
        email: null,
        message: null,
        success: null,
        isSuccess: true,
        formError: null,
      };
    },
    methods: {
      sendEmail() {
        if (this.phoneNumber.error == true) {
          this.formError = "Your Phone number is invalid !";
          setTimeout(() => (this.basketAddSuccess = false), 2000);
        } else {
          emailjs
            .send(
              "service_u0h9m6b",
              "template_og50m9j",
              {
                from_name: this.name,
                email_id: this.email,
                contact_number: this.phoneNumber,
                message: this.message,
              },
              "Cxsk023GgFWUdFtEO"
            )
            .then(
              (response) => {
                console.log("SUCCESS!", response.text);
                this.senderName = this.name;
                setTimeout(() => (this.senderName = null), 3000);
                this.name = null;
                this.email = null;
                this.phoneNumber = null;
                this.message = null;
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
        }
      },
      reset() {
        this.senderName = null;
        this.name = null;
        this.email = null;
        this.phoneNumber = null;
        this.message = null;
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
    height: 800px;
  }
  .teal {
    background-color: teal;
  }
  .resetBtn {
    margin-left: 50px;
  }
  .resetBtn:hover {
    opacity: 70%;
  }
  .send:hover {
    opacity: 70%;
  }
  .successMessage {
    background-color: rgb(147, 255, 147);
    color: black;
  }
  .form-inputs {
    text-align: left;
  }
  .form-group {
    margin-top: 20px;
  }
  .form-control {
    border: 1px solid;
  }
  .form-control:focus {
    box-shadow: none;
    border-color: black;
  }
  .contact-Form {
    position: absolute;
    right: 50px;
    background-color: white;
    padding: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 110px;
    width: 400px;
  }
  .vue-phone-number-input {
    border: 1px solid;
    border-radius: 5px;
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
  .socialMedia {
    width: 50px;
    margin-left: 20px;
  }
  .socialMedia:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 500px) {
    .contact-Form {
      right: auto;
      width: 350px;
    }
  }
  @media only screen and (max-width: 380px) {
    .contact-Form {
      right: auto;
      width: 300px;
    }
    .resetBtn {
      margin-left: 10px;
    }
    button {
      width: 50px;
    }
  }
  @media only screen and (max-width: 315px) {
    .contact-Form {
      right: auto;
      width: 270px;
    }
  }
  @media only screen and (max-width: 275px) {
    .contact-Form {
      right: auto;
      width: 250px;
    }
  }
  </style> -->