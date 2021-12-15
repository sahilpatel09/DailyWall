<template>
  <div class="container">
    <div class="row d-flex justify-content-center mainRow">
    <div class="col-md-6">
      <h2>Bing Wallpapers Viewer</h2>
      <p> I have made this just to learn axios with vue 3. It uses the Bing daily image archive API. I could max fetch only 8 images from the api. Feel free to use it and contribute to design. </p>
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
  <div v-if="imageList" class="row">
  <div v-for="image in imageList" :key="image" class="col-md-6 px-2 col-sm-6 col-xs-6">
      <div class="card p-1" style="width: 100%">
        <img :src="getImgUrl(image.url)" class="card-img-top" alt="">
        <!-- <img :src="getImgUrl(image.url)" class="image">  -->
        <div class="card-body">
          <h3 class="card-text">{{image.title}}</h3>
          <p class="text-muted">{{image.copyright}}</p>
          <a :href="getImgUrl(image.url)" download="getImgUrl(image.url)">
            <button class="btn btn-danger" type="submit">Download</button>
          </a>
          </div>
        </div>
      </div>
    </div>
    <img v-else alt="Vue logo" src="./assets/loading.gif" class="rounded mx-auto d-block">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      imageList: null,
      numberofImages : 2,
      zone: "en-US"
    };
  },
  methods: {

    getImgUrl: function (imagePath) {
          return "https://bing.com" + imagePath;
        },

    newSearch: function () {
      var api = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n="+ this.numberofImages +"&mkt="+ this.numberofImages
    axios.get(api).then((response) => {
      this.imageList = response.data.images
      console.log(response.data.images)
    })
          
        },


  },
  created(){
    
    var api = "https://api.codetabs.com/v1/proxy?quest=https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=2&mkt=en-US"
    axios.get(api).then((response) => {
      this.imageList = response.data.images
      console.log(response.data.images)
    })



  }
}
</script>

<style>


.mainRow{

  padding: 20px;

}



</style>
