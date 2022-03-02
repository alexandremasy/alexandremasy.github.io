<template>
  <div class="flow">
    <!-- Intro -->
    <section class="intro">
      <div class="container-col-2 flow-s">
        <h1 class="h1 text-light-90">
          <div>International Duty Free</div>
          <div class="text-ground-40">Lagardere Travel Retail Belgium</div>
        </h1>

        <p class="body1 text-light-60">Historical travel retail leader in Belgium and second oldest duty-free operator in the world, Lagardère Travel Retail Belgium, was at the origin of the first Duty-Free boutiques of Brussels Zaventem and Brussels-South Charleroi airports and is also present in Brussels South train station.</p>

        <div class="flex flex-column md:flex-row md:gap-28">
          <div class="item">
            <h2 class="h4 text-light-70">Services</h2>
            <ul class="mt-4">
              <li class="body2 text-light-60">User Experience Design</li>
              <li class="body2 text-light-60 mt-1">Visual Design</li>
              <li class="body2 text-light-60 mt-1">Web Design</li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h4 text-light-70">Context</h2>
            <ul class="mt-4">
              <li class="body2 text-light-60">Startup - Scale Up</li>
              <li class="body2 text-light-60 mt-1">8 months</li>
              <li class="body2 text-light-60 mt-1">02/2019 - 10/2019</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo -->
    <section class="demo">
      <div class="container">
        <media-image 
          backdrop-classes="bg-ground-30"
          img-classes="w-col-10 pt-12"
          legend='A special home for a dutty free e-shop'
          src="/statics/projects/sayl/sayl-home.png"
          />
      </div>
    </section>

    <!-- Approach -->
    <section>
      <div class="container-col-2 flow">
        <h2 class="h1 text-light-90 flow-xs2">
          <div class="text-light-50">Create room for a luxary experience</div>
          <div>In a fast user journey </div>
        </h2>

        <div class="flow-xs">
          <h3 class="h3 text-light-80">Challenges</h3>
          <p class="body2 text-light-60">What if you could plan ahead of your trip your purchase in a dutty free and have the items ready when you are in the airport? Or when you land back home after your holliday? </p>
          <p class="body2 text-light-60">As a concept, dutty free is at the confluence of many luxury branding with some special tax regulation. What a cocktail to mix in an online e-shop! </p>
          <p class="body2 text-light-60">In this project I had multiple aspects to take into consideration:</p>
          <ul>
            <li class="body2 text-light-60">Create a consistent online shopping experience (web, mobile, kiosk) with a very wide range of products and categories.</li>
            <li class="body2 text-light-60">Incorporate the specificities of a dutty free e-commerce like double pricing or specific purchase flows.</li>
            <li class="body2 text-light-60">Provide a very premium esthetic and customer experience </li>
          </ul>
        </div>

        <div class="flow-xs">
          <div class="h3 text-light-80">Approach</div>
          <div class="flow-xs">
            <p class="body2 text-light-60">I decided to embrace the beautiful material the fashion industry provides to offer a contrast between brand appeal and product display. Combining that with a dark and light pattern throughout the e-shop makes the products stand out. The navigation is shared between Zara’s alike menu and categories cards to ease the flow from one side to the other. </p>
            <p class="body2 text-light-60">By providing first a set of wireframes and UI intent (demo of one webpage) I was quickly able to get feedback and then approval from all the stakeholders (Lagadère, Airports, Brands). I then move on the do the proper design of the overall website. </p>
            <p class="body2 text-light-60">I worked closely with the development team to ensure accurate execution from start to finish. </p>
            <p class="body2 text-light-60">It results in a highly graphical e-shop still praised by travellers today. The very selective brand Dior has approved this e-shop as one of few allowed to resell it’s products!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MediaImage from '../../components/media/image.vue'
</script>