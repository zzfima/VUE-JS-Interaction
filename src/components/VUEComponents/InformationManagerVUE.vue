<template>
  <div class="hello">
    <h1>{{ current_time }}</h1>
    <button @click="request_currentTimeVUE">Change</button>
  </div>
</template>

<script>
import CurrentTimeVUE from "./CurrentTimeVUE";

export default {
  name: "InformationManagerVUE",
  data() {
    return {
      current_time: "",
    };
  },
  created() {
    this.currentTimeVUE = new CurrentTimeVUE();
    this.current_time = this.currentTimeVUE.get_current_time();
  },
  methods: {
    request_currentTimeVUE: function () {
      this.current_time = this.currentTimeVUE.get_current_time();
    },
  },

};
</script>