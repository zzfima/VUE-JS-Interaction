<template>
  <div class="hello">
    <h1>{{ current_time }}</h1>
    <button @click="request_currentTimeJS">Change</button>
  </div>
</template>

<script>
import { CurrentTimeJS } from "./CurrentTimeJS";

export default {
  name: "InformationManagerJS",
  data() {
    return {
      current_time: "",
    };
  },
  created() {
    this.currentTimeJS = new CurrentTimeJS();
    this.currentTimeJS.addListener(this.messager_event_handler);
    this.update_current_time();
  },
  methods: {
    update_current_time() {
      this.current_time = this.currentTimeJS.get_current_time();
    },
    request_currentTimeJS: function () {
      this.currentTimeJS.time_request();
    },
    messager_event_handler: function () {
      this.update_current_time();
    },
  },
};
</script>