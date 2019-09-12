<template>
  <div
    class="vuepress-canvas-nest-element"
    ref="nest"
  >
  </div>
</template>

<script>
  import addDOMEventListener from "add-dom-event-listener";

  export default {
    name: "VuePress-Nest",
    data() {
      return {
        events: [
          "resize",
          "scroll",
          "touchstart",
          "touchmove",
          "touchend",
          "pageshow",
          "load",
          "DOMMouseScroll",
          "mousewheel"
        ],
        eventHandlers: {},
        nest: null
      };
    },
    mounted() {
      // see https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
      const CanvasNest = require("canvas-nest.js");
      const elm = document.querySelector(".vuepress-canvas-nest-element");
      this.nest = new CanvasNest(elm, {
        color: COLOR,
        pointColor: POINT_COLOR,
        opacity: OPACITY,
        count: COUNT,
        zIndex: Z_INDEX
      });

      const target = typeof window !== "undefined" ? window : null;
      this.setTargetEventListeners(target);
    },
    beforeDestroy() {
      this.nest.destroy();
      this.clearEventListeners();
    },
    methods: {
      addEventListener(target, eventType, cb, option) {
        return addDOMEventListener(target, eventType, cb, option);
      },
      clearEventListeners() {
        this.events.forEach(eventName => {
          const handler = this.eventHandlers[eventName];
          if (handler && handler.remove) {
            handler.remove();
          }
        });
      },
      setTargetEventListeners(target) {
        if (!target) {
          return;
        }
        this.events.forEach(eventName => {
          this.eventHandlers[eventName] = this.addEventListener(
            target,
            eventName,
            this.updateNestTop
          );
        });
      },
      updateNestTop() {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        this.$refs.nest.style.top = `${scrollTop}px`;
      }
    }
  };
</script>

<style>
  .vuepress-canvas-nest-element {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
</style>