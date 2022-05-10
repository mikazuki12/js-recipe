<template>
  <section>
    <h2>入力画面</h2>
    <input type="number" v-model="nyuryokugaku" />
    <div>入力額: {{ nyuryokugaku }} 円</div>
    <div>
      <button v-on:click="nyukin" v-bind:disabled="!validateNyuryokugaku">
        入金
      </button>
      <button
        v-on:click="shukin"
        v-bind:disabled="!(validateNyuryokugaku && hasZandaka)"
      >
        出金
      </button>
    </div>
  </section>
  <section>
    <h2>口座残高</h2>
    <div>残高: {{ zandaka }}円</div>
  </section>
  <section>
    <h2>取引記録</h2>
    <div v-if="logs.length > 0">
      <div v-for="(log, index) in logs" v-bind:key="index">
        <div>日付: {{ log.date }}</div>
        <div>操作: {{ log.type }}</div>
        <div>金額: {{ log.money }}</div>
      </div>
    </div>
    <div v-else>取引記録はありません。</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nyuryokugaku: 0,
      zandaka: 0,
      logs: [],
    }
  },
  methods: {
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: Number(this.nyuryokugaku),
      })
    },
    shukin: function () {
      this.zandaka -= Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: Number(this.nyuryokugaku),
      })
    },
  },
  computed: {
    hasZandaka() {
      return this.zandaka >= this.nyuryokugaku
    },
    validateNyuryokugaku() {
      return this.nyuryokugaku > 0
    },
  },
}
</script>
