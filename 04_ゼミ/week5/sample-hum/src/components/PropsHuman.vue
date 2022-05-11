<template>
  <div class="human">
    <div class="atama">
      <div>{{ person.face }}</div>
    </div>
    <div class="karada" v-on:click="makeLaugh">
      <div>💪{{ person.cloth }}💪</div>
    </div>
    <div class="ashi">
      <div>🦵🦵</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"],
}
</script>

<style>
.human {
  width: 10rem;
  font-size: 3rem;
  text-align: center;
}
</style>
