<template>
  <div class="aboutMe">
    <section class="left-aboutMe">
      <div class="about">
        <span
          ><label> <h1>About Me</h1></label></span
        >
        <span
          ><p>
            Hello, I'm Christian Javier an independent and self-motivated BS
            Information Technology fresh graduate, a web developer, good at
            analytical thinking and problem-solving. I love coding, creating
            functions, and debugging.
          </p></span
        >
      </div>
    </section>
    <section class="right-aboutMe">
      <div class="mypic"><img src="../img/formalpic.jpg" /></div>
    </section>
  </div>
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
  justify-content: space-evenly;
  background-color: #daece4;
  height: 600px;
  width: 100%;
}
.about {
  width: 450px;
  text-align: justify;
  color: #242c64;
}
.about h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
}
.about p {
  font-size: 25px;
  font-weight: 50;
}

.mypic img {
  display: flex;
  width: 350px;
  border-radius: 5%;
  right: 100px;
}
@media only screen and (max-width: 1015px) {
  .about {
    width: 400px;
  }
  .mypic img {
    width: 300px;
    border-radius: 5%;
  }

  .about h1 {
    font-size: 30px;
  }
  .about p {
    font-size: 20px;
  }
}

@media only screen and (max-width: 875px) {
  .about {
    width: 400px;
  }

  .about h1 {
    font-size: 35px;
  }
  .about p {
    font-size: 24px;
  }
}

@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .about {
    width: 300px;
  }

  .about h1 {
    font-size: 30px;
  }
  .about p {
    font-size: 20px;
  }
}

@media only screen and (max-width: 400px) {
  /* For mobile phones: */
  .about {
    width: 280px;
  }

  .mypic img {
    width: 200px;
    border-radius: 5%;
  }
  .about h1 {
    font-size: 30px;
  }
  .about p {
    font-size: 14px;
  }
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