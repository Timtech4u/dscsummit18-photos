<template>
  <div>
    <div class="logo-container">
      <img class="logo" :src="logo" />
      <h1>DSC SSA SUMMIT 2018</h1>
      <p class="page-description"><em>Let's go global.</em></p>
    </div>

    <div class="tz-gallery">
      <h3>Day 1</h3>
        <div class="row">
            <photo-card v-for="(selectedImage, key) in selectedImages" :key=key  :photo=selectedImage />
        </div>

      <div class="col-md-12 text-center">
        <button class="btn btn-danger" @click="loadMorePhotos">
          <i class="fas fa-sync-alt"></i>
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoService from "@/services/photosService";
import Logo from "@/assets/img/logo-min.png";
import { PhotoCard } from "@/components/index.js";

export default {
  name: "home",
  created() {
    this.images = PhotoService.getAllAsShuffled();
    this.selectedImages = this.images.splice(0, 25);
  },
  components: {
    PhotoCard
  },
  data() {
    return {
      images: [],
      selectedImages: [],
      logo: Logo
    };
  },
  methods: {
    loadMorePhotos: function() {
      this.selectedImages = this.selectedImages.concat(
        this.images.splice(0, 25)
      );
    }
  }
};
</script>


<style lang="scss" scoped>
.logo-container {
  margin: 0px;
  padding: 30px 0 0 0;

  h1,
  p {
    margin: 10px;
  }
  .logo {
    margin: 0px !important;
    max-width: 80px;
    max-height: 80px;
  }
}
</style>
