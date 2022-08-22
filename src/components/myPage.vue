<template>
<div>
      <!-- <div class="my-resume">
          <pdf src="/public/JAVIER-CHRISTIAN.pdf" :page="1" />
        </div> -->
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
        <!-- <div class="AcadandAchievement">
          <AcadandAchievement/>
        </div> -->
        <div class="footer">
          <Footer />
        </div>
  </div>
</template>
<script setup>
// import TopNav from "./components/TopNav.vue"
import ProfileIntro from "./Pages/ProfileIntro.vue";
import AboutMe from "./Pages/AboutMe.vue";
import SkillsAndExp from "./Pages/SkillsAndExp.vue";
import PortfolioProject from "./Pages/portfolioProject.vue";
// import AcadandAchievement from "./Pages/Acadandachievement.vue";
import Footer from "./Pages/ContactMe.vue";

</script>

