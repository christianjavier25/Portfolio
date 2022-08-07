<template>
  <v-card class="aboutMe" width="100%" height="600px" color="#ded5bd">
    <section class="left">
      <v-card-text>
        <div class="about">
          <span
            ><label> <h1>About Me</h1></label></span
          >
          <span
            ><p>
              I am an independent and self-motivated BS Information Technology
              graduate looking for an entry-level position in Web development
              where I can utilize my skills and the extensive knowledge I have
              gained during my course. good at analytical
              thinking and problem solving.
            </p></span
          >
        </div>
      </v-card-text>
    </section>
    <section class="right">
      <v-card-text>
        <div class="mypic">
          <span>
            <img src="./img/formalpic.jpg" />
          </span>
        </div>
      </v-card-text>
    </section>
  </v-card>
</template>
<script>
export default {
  name: "About-Me",
};
</script>
<style scoped>
.aboutMe {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.about {
  width: 400px;
  text-align: justify;
}
.about h1 {
  font-size: 40px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
}
.about p {
  font-size: 50px;
  font-weight: 50;
}
.right {
  position: absolute;
  right: 80px;
}
.left {
  position: absolute;
  left: 150px;
}
.mypic img {
  width: 350px;
  border-radius: 5%;
  right: 100px;
}
@media only screen and (max-width: 875px) {
  .mypic img {
    width: 300px;
  }
  .about {
    width: 380px;
  }
}
  .right {
  right: 20px;
  }
  .left {
    left: 20px;
  }

@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .about {
    width: 400px;
  }
  .right {
    right: auto;
    bottom: 30px;
  }
  .left {
    left: auto;
    top: 30px;
  }
  .mypic img {
    width: 200px;
    border-radius: 5%;
  }
}
.about h1 {
  font-size: 30px;
}

@media only screen and (max-width: 400px) {
  /* For mobile phones: */
  .about {
    width: 280px;
  }
  .right {
    right: auto;
    bottom: 10px;
  }
  .left {
    left: auto;
    top: 30px;
  }
  .mypic img {
    width: 200px;
    border-radius: 5%;
  }
}
.about h1 {
  font-size: 30px;
}
.about p {
  font-size: 14px;
}
@media only screen and (max-width: 280px) {
  /* For mobile phones: */
  .about {
    width: 200px;
  }

  .about h1 {
    font-size: 28px;
  }
  .about p {
    font-size: 16px;
  }
  .mypic img {
    width: 150px;
    border-radius: 5%;
  }

}

</style>