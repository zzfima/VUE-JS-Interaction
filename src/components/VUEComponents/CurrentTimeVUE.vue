<script>
import Vue from "vue";


export default class CurrentTimeVUE extends Vue {
    
  created() {
    console.log(this.count);
  }

  get_current_time() {
    return Date.now();
  }

  increment() {
    this.count++;
  }
}
</script>