<template>
  <div id="app">
    <InformationManagerJS />
    <InformationManagerVUE/>
  </div>
</template>

<script>
import InformationManagerJS from "./components/JSComponents/InformationManagerJS";
import InformationManagerVUE from "./components/VUEComponents/InformationManagerVUE"

export default {
  name: "App",
  components: {
    InformationManagerJS,
    InformationManagerVUE,
  },
};
</script>