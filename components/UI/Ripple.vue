<template>
  <span class="ripple" :style="styleObject"></span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Ripple extends Vue {
  @Prop({ default: 0, required: true })
  positionX!: number;

  @Prop({ default: 0, required: true })
  positionY!: number;

  @Prop({ default: 0, required: true })
  width!: number;

  get styleObject() {
    return {
      left: this.positionX + 'px',
      top: this.positionY + 'px'
    };
  }

  mounted() {
    const element = <HTMLElement>this.$el;

    setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = `scale(${this.width})`;
    }, 10);
  }
}
</script>

<style lang="postcss" scoped>
.ripple {
  @apply absolute;
  width: 2px;
  height: 2px;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease-in-out;
}
</style>