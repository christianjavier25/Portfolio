
<template>
  <div id="app">
    <header>
      <div class="wrapper"></div>
    </header>

    <main class="main">
      <!-- <div class="TopNav">
        <TopNav/>
      </div> -->
        <div class="profileIntro">
          <ProfileIntro />
        </div>

        <div class="aboutMe">
          <AboutMe />
        </div>

        <div class="skillsExp">
          <SkillsAndExp />
        </div>
        <div class="portfolioProject">
          <portfolio-project/>
        </div>
        <div class="AcadandAchievement">
          <AcadandAchievement/>
        </div>
        <div class="footer">
          <Footer />
        </div>
    </main>
  </div>
</template>
<script setup>
// import TopNav from "./components/TopNav.vue"
import ProfileIntro from "./components/ProfileIntro.vue";
import AboutMe from "./components/AboutMe.vue";
import SkillsAndExp from "./components/SkillsAndExp.vue";
import PortfolioProject from "./components/portfolioProject.vue";
import AcadandAchievement from "./components/Acadandachievement.vue";
import Footer from "./components/ContactMe.vue";

</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Poppons", sans-serif;
  overflow: hidden;
}

</style>
