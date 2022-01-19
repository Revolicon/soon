<template>
  <div class="w-full h-full flex justify-center items-center overflow-hidden px-4 relative overflow-hidden">
    <div class="circle select-none pointer-events-none">
      <div class="circle__inner">
        <img src="/circle.png" alt="Circle">
      </div>
    </div>
    <div class="max-w-138 w-full flex flex-col items-center gap-18">
      <div class="flex flex-col items-center gap-4 text-center">
        <img class="select-none" src="/logo.svg" alt="Logo">
        <div class="text-white text-opacity-72 text-lg leading-6 mb-2">Beautifully crafted open source icons.</div>
        <div class="flex gap-3">
          <a href="https://twitter.com/revolicon" class="inline-flex items-center justify-center px-6 py-2.5 bg-white rounded-full text-base font-medium leading-6 select-none">Follow us</a>
          <template v-for="item in social">
            <a :href="item.url" target="_blank" class="h-11 w-11 flex justify-center items-center rounded-full transition-all duration-300 border border-transparent hover:(border-white/[.08] bg-white/[.03])">
              <img :src="require(`../static/icons/${item.icon}.svg`)" :alt="item.icon">
            </a>
          </template>
        </div>
      </div>
      <div class="flex flex-col p-6 bg-white bg-opacity-5 rounded-3xl w-full border border-white/[.08] backdrop-blur-26 gap-4">
        <div class="flex flex-col text-base text-white">
          <div class="font-medium">Join the waitlist</div>
          <div class="text-white text-opacity-50">Sign up to be one of the first to use Revolicon.</div>
        </div>
        <form class="flex gap-3 <sm:flex-col">
          <input
            type="email"
            class="h-13 <sm:flex-none flex rounded-xl border border-white border-opacity-8 flex-1 bg-white/[.03] outline-none px-5 placeholder-white/[.48] text-white backdrop-blur-26 transition-colors duration-300 hover:border-opacity-18 focus:(outline-none border-opacity-30)"
            placeholder="Email adress"
          >
          <button class="h-13 px-6 flex items-center justify-center border border-transparent text-white backdrop-blur-26 rounded-xl transition-all duration-300 hover:(border-white/[.08] bg-white/[.03])">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        social: [
          {
            icon: 'twitter',
            url: 'https://twitter.com/revolicon',
          },
          {
            icon: 'github',
            url: 'https://github.com/revolicon',
          },
          {
            icon: 'dribbble',
            url: 'https://dribbble.com/revolicon',
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  html {
    @apply min-h-full h-full;
  }
  body {
    @apply bg-black min-h-full h-full;
  }
  #__nuxt, #__layout {
    @apply min-h-full h-full;
  }
  .circle {
    top: 0;
    left: 0;
    z-index: -1;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: absolute;

    &__inner {
      position: absolute;
      width: 1920px;

      @keyframes circle {
        from {
          transform: translateY(-30%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      img {
        position: absolute;
        top: -1080px;
        width: 1920px;
        height: 1920px;
        display: block;
        object-fit: cover;
        transform: translateY(-30%) rotate(0deg);
        animation: circle 2s .4s ease, rotating 40s ease infinite;
        animation-fill-mode: both;
        transition: all 1650ms ease;
      }
    }
    &__noise {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
