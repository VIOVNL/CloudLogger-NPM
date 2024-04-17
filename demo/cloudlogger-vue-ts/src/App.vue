<template>
  <div class="main">
    <div class="content">
      <div>
        <h1>CloudLogger Vue CLI 3 + TypeScript Demo</h1>
        <button @click="clickHandler">Click to send log</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { CloudLogger, CloudLoggerItem } from "@viovnl/cloudlogger";

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      CloudLogger.Create('your_project_secret');
    });

    const clickHandler = (): void => {
      try {
        const logs: CloudLoggerItem[] = [
          { Name: 'Date', Value: '22-10-1994' },
          { Name: 'Country', Value: 'Netherlands' },
        ];
        CloudLogger.Log(logs);
      } catch (e) {
        console.log('error', e);
      }
    };

    return {
      clickHandler,
    };
  },
});
</script>

<style scoped lang="scss">

.main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: inherit;
    position: relative;
}

.content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    max-width: 700px;
    margin-bottom: 3rem;
}

.content h1 {
    margin-top: 1.75rem;
}

.content button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: #fff;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}
</style>
