<template>
  <div>
    <h1>CloudLogger Nuxt.js Demo</h1>
    <button @click="clickHandler">Click to send log</button>
  </div>
</template>

<script>
import { CloudLogger } from "@viovnl/cloudlogger";

export default {
  mounted() {
    CloudLogger.Create("your_project_secret");
  },
  methods: {
    async clickHandler() {
      try {
        await CloudLogger.Log([
          { Name: "Date", Value: "22-10-1994" },
          { Name: "Country", Value: "Netherlands" },
        ]);
        this.logSent = true;
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>
