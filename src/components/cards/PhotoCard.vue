<template>
  <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
          <a class="lightbox" :href="photo.url">
              <div class="card-image" :style="'background-image: url(' + photo.url + ');'">
                <div class="card-image-icons">
                  <i class="fas fa-heart"></i>
                  <i class="fas fa-retweet"></i>
                  <!-- <i class="fas fa-download"></i> -->
                </div>
              </div>
          </a>
          <div class="caption">
              <h3>{{ photo.title }} </h3>
              <p>{{ photo.description }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "photo-card",
  props: {
    photo: {
      required: true,
      type: Object
    }
  }
};
</script>


<style lang="scss" scoped>
.card-image {
  height: 320px;
  border-radius: 4px 4px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.card-image-icons {
  right: 0;
  position: absolute;
  bottom: 5px;
  background: rgb(78, 77, 77);
  margin-right: 5px;
  padding: 4px;
  border-radius: 10px;

  i {
    margin: 0 5px;
  }

  i.fa-heart {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff6b6b;
  }

  i.fa-heart:hover {
    -webkit-text-fill-color: #ff6b6b;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff6b6b;
  }

  i.fa-retweet {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
  }

  i.fa-retweet:hover {
    -webkit-text-fill-color: #0084b4;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0084b4;
  }

  i.fa-download {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
  }

  i.fa-download:hover {
    -webkit-text-fill-color: #0eeb33;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0eeb33;
  }
}
</style>
