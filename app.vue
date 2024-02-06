<template>
  <div class="container mx-auto">
    <div class="flex justify-content-center mainRow">
      <div class="col-md-6">
        <h2>Bing Wallpapers Viewer</h2>
        <p> I have made this just to learn axios with vue 3. It uses the Bing daily image archive API. I could max fetch
          only 8 images from the api. Feel free to use it and contribute to design. </p>
      </div>

      <div class="col-md-6">
        <form class="form-inline" @submit.prevent="newSearch">
          <div class="form-group form-inline">
            <label class="sr-only" for="pwd">Zones</label>
            <select class="form-control" v-model="zone">
              <option>en-US</option>
              <option>en-CA</option>
            </select>
          </div>
          <div class="form-group form-inline pt-3">
            <label class="sr-only" for="pwd">No of Images ( Max 8 )</label>
            <select class="form-control" v-model="numberofImages">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <button type="submit" class="btn btn-danger ml-3 mt-2" @submit.prevent="newSearch">Submit</button>
        </form>
      </div>
    </div>
    <section class="text-gray-600 body-font">
      <div class="px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-2 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4" v-for="i, item in imageList" :key="item">
            <div class="rounded-lg overflow-hidden">
              <p class="max-w-lg text-xl font-semibold leading-loose text-gray-900 dark:text-white text-left">{{ i.title
              }}</p>
              <p class="text-md text-gray-900 dark:text-white text-left">{{ i.copyright }}</p>
              <img alt="content" class="object-cover object-center h-full w-full" :src="'https://bing.com' + i.url">
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
</script>