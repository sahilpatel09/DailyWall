<template>
  <div class="mx-auto bg-gray-900">
    <section class="body-font">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-col text-center w-full">
          <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Bing Wallpapers</h2>
          <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">DailyWall</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Welcome to the DailyWall Wallpapers Viewer, a
            dynamic platform designed to bring you daily doses of visual
            inspiration. Created with the intent of mastering Axios with Vue 3, our application taps into the Bing daily
            image archive API, delivering a curated selection of captivating wallpapers straight to your screen.</p>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-2 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4" v-for="i, item in imageList" :key="item">
            <div class="rounded-lg overflow-hidden">
              <div class="text-center py-5">
                <p class="text-xl font-semibold leading-loose text-gray-900 dark:text-white font-sans">
                  {{ capitalizeFirstLetter(i.title) }}</p>
                <img alt="content" class="object-cover object-center h-full w-full" :src="'https://bing.com' + i.url">
                <p class="text-md text-gray-900 dark:text-white p-2">{{ i.copyright }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const imageList = ref()
const numberofImages = ref()
const zone = "en-US"

onMounted(async () => {
  const { data } = await useFetch('/api/hello?n=9')
  imageList.value = data.value
})

function getImgUrl(imagePath) {
  return "https://bing.com" + imagePath;
}

function capitalizeFirstLetter(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  let capitalizedSentence = words.join(" ");
  return capitalizedSentence;
}

</script>