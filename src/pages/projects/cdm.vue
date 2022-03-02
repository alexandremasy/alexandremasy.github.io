<template>
  <div class="flow">
    <!-- Intro -->
    <section class="intro">
      <div class="container-col-2 flow-s">
        <h1 class="h1 text-light-90">
          <div>A digital home for</div>
          <div class="text-cdm-50">La Cité des Métiers of Brussels</div>
        </h1>

        <p class="body1 text-light-60  md:pr-col-2">The project was initiated in 2018 by Actiris as an answer to the need for a place to give guidance to all, no matter your professional situation, age, status, level of qualification. I help create a digital home for all.</p>

        <div class="flex flex-column md:flex-row md:gap-28">
          <div class="item">
            <h2 class="h4 text-light-70">Role</h2>
            <ul class="mt-4 flow-xs2">
              <li class="body3 text-light-60">User Experience Design</li>
              <li class="body3 text-light-60 mt-1">Visual Design</li>
              <li class="body3 text-light-60 mt-1">Web Design</li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h4 text-light-70">Context</h2>
            <ul class="mt-4 flow-xs2">
              <li class="body3 text-light-60">Consultant</li>
              <li class="body3 text-light-60 mt-1">8 months</li>
              <li class="body3 text-light-60 mt-1">02/2019 - 10/2019</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo -->
    <media-image
      container-classes="bg-cdm-50"
      spread="12cols"
      src="/statics/projects/cdm/cdm-splash.png"
      />

    <!-- Approach -->
    <section>
      <div class="container-col-2 flow">
        <h2 class="h1 text-light-90 flow-xs2">
          <div>Acknowledging <em>savoir-faire</em></div>
          <div class="text-light-50">Welcome everyone as one</div>
        </h2>

        <div class="flow-xs">
          <h3 class="h3 text-light-80">Challenges</h3>
          <p class="body2 text-light-60  md:pr-col-2">As part of an external consultant team included in the existing Actiris workforce, the first objective was to help everyone get on board, from management to the developer team, with the design methodology (discover, explore, test, listen).</p>
          <p class="body2 text-light-60  md:pr-col-2">The second task was creating the digital experience needed for La cité des métiers. I had to team up with a UX Architect and a brand designer.</p>
          <p class="body2 text-light-60  md:pr-col-2">Lastly, I was requested to include the design and development team alongside the process to let them grow experience.</p>
        </div>

        <div class="flow-xs">
          <div class="h3 text-light-80">Approach</div>
          <div class="flow-xs">
            <p class="body2 text-light-60 md:pr-col-2">With the help of some colleagues, we organised multiple workshops to help the Actiris team understand the in and out of the design methodology. We started with some theory and quickly moved on with the real-world example of our previous experiences. The closer we get to their use case, the more east it was for them to get on board with the idea and the added value of the methodology.</p>
            <p class="body2 text-light-60 md:pr-col-2">With the UX Architect, we conducted multiple ideation meetings. Leveraging the insight gathered, I created an online and in-situ digital experience (with some kiosks). I started with a lo-fi wireframe to gradually increase the complexity, finally reaching the mobile and desktop final design. I worked closely with the brand designer to connect the digital and physical experience. </p>
            <p class="body2 text-light-60 md:pr-col-2">As the project unfold, I coached the Actiris team on the new design practices and mindset, allowing them to produce and maintain the project over time.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Branding -->
    <section>
      <div class="container-col-2 flow-xs">
        <h2 class="h1 text-light-90 flow-xs2">
          <div>Include the branding</div>
          <div class="text-light-50">Create link between worlds</div>
        </h2>

        <div>
          <div class="flow-xs2">
            <div class="flex flex-column md:flex-row gap-4">
              <media-image 
                class="grow"
                container-classes="bg-light-00 flex justify-center align-middle"
                spread="full"
                src="/statics/projects/cdm/cdm-icons.svg"
                />
              <media-image 
                class="grow"
                container-classes="bg-light-00 flex justify-center align-middle"
                spread="full"
                src="/statics/projects/cdm/cdm-illustration.svg"
                />
            </div>
            <div class="body4 text-light-40 text-center">Connect iconography to the branding with tick strokes and the dot accent</div>
          </div>

          <media-image 
            class="grow"
            container-classes="bg-light-00"
            legend="A small design system to build upon"
            spread="full"
            src="/statics/projects/cdm/cdm-dsm.png"
            />

          <media-image 
            class="grow"
            container-classes="bg-light-00"
            legend="Give a human touch with all it’s diversity"
            spread="full"
            src="/statics/projects/cdm/cdm-photo.png"
            />
        </div>
      </div>
    </section>

    <section class="border-solid border-t border-light-10 py-20">
      <div class="container-col-2 flow-xs">
        <h2 class="h1 text-light-90 flow-xs2">
          <div>Create the story</div>
        </h2>

        <div class="flex flex-column md:flex-row gap-4">
          <media-image 
            class="grow"
            spread="full"
            src="/statics/projects/cdm/cdm-wireframe.png"
            />
          <media-image 
            class="grow"
            spread="full"
            src="/statics/projects/cdm/cdm-flow.png"
            />
        </div>
        
        <div class="flex flex-column md:flex-row gap-4">
          <media-image 
            class="grow bg-cdm-50"
            spread="full"
            src="/statics/projects/cdm/cdm-desktop.png"
            />
          <media-image 
            class="grow bg-cdm-50"
            spread="full"
            src="/statics/projects/cdm/cdm-mobile.png"
            />
        </div>

        <media-image 
          class="grow"
          spread="full"
          src="/statics/projects/cdm/cdm-preview.png"
          />

      </div>
    </section>
  </div>
</template>

<script>
import MediaImage from '../../components/media/image.vue'

export default {
  components: {
    MediaImage
  }
}
</script>