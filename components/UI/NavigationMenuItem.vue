<template>
  <nuxt-link
    role="menuitem"
    aria-expanded="false"
    class="bottom-navigation-item"
    :class="classObject"
    :to="to"
    exact
    :event="disabled ? '' : 'click'"
    :tabindex="tabindex"
    draggable="false"
    @mousedown.native="rippleEffect"
    @touchstart.native="rippleEffect"
    @focus.native="onFocus"
    @blur.native="onBlur"
  >
    <div class="inner">
      <div v-if="showBadge" class="badge">
        <span class="pill"></span>
      </div>
      <div :class="{ icon: !avatar, avatar: avatar }" :style="styleObject">
        <slot></slot>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Ripple from '@/components/UI/Ripple.vue'

@Component
export default class BottomNavigationItem extends Vue {
  @Prop({ default: '' })
  name!: string

  @Prop({ default: '' })
  to!: string

  @Prop({ default: null })
  focusedItem!: string | null

  @Prop(Boolean)
  firstItem!: boolean

  @Prop(Boolean)
  avatar!: boolean

  @Prop(Boolean)
  primary!: boolean

  @Prop(Boolean)
  disabled!: boolean

  @Prop(Boolean)
  showBadge!: boolean

  @Prop({ default: 0 })
  size!: number

  get classObject() {
    return {
      primary: this.primary,
      disabled: this.disabled,
    }
  }

  get styleObject() {
    return this.size
      ? {
          height: this.size + 'px',
          width: this.size + 'px',
        }
      : {}
  }

  get tabindex(): number {
    if (this.focusedItem) {
      return this.focusedItem === this.name ? 0 : -1
    }

    return this.firstItem ? 0 : -1
  }

  @Emit('focus')
  onFocus(): string {
    return this.name
  }

  @Emit('blur')
  onBlur(): string {
    return this.name
  }

  rippleEffect(event: MouseEvent | TouchEvent): void {
    const element = <HTMLElement>this.$el

    let positionX, positionY

    if (event instanceof TouchEvent) {
      positionX = event.touches[0].pageX - element.offsetLeft
      positionY = event.touches[0].pageY - element.offsetTop
    } else {
      positionX = event.pageX - element.offsetLeft
      positionY = event.pageY - element.offsetTop
    }

    const elementWidth = element.offsetWidth

    const ripple = new Ripple({
      propsData: {
        positionX,
        positionY,
        width: elementWidth,
      },
    })
    ripple.$mount()
    element.appendChild(ripple.$el)

    setTimeout(() => {
      element.removeChild(ripple.$el)
      ripple.$destroy()
    }, 500)
  }
}
</script>

<style lang="postcss">
.bottom-navigation-item {
  @apply relative overflow-hidden flex items-center justify-center h-full w-full;
  -webkit-tap-highlight-color: transparent;
  z-index: 100;

  & .inner {
    @apply relative flex items-center justify-center;
    background: #ffffff;
    border-radius: 12px;
    height: 2.5rem;
    transition: background 0.3s ease-in-out, border 0.4s ease;
    width: 2.5rem;

    & .badge {
      @apply absolute flex top-0 right-0;
      padding: 7px 7px 0 0;
      z-index: 102;

      & .pill {
        background: #2573d5;
        border-radius: 50%;
        height: 9px;
        width: 9px;
      }
    }

    & .icon {
      @apply relative flex items-center justify-center object-cover overflow-hidden;
      height: 1rem;

      & svg {
        @apply h-full w-full;
        fill: #515151;
        color: #515151;
      }
    }

    & .avatar {
      @apply relative h-6 w-6 bg-gray-400 overflow-hidden;
      border-radius: 50%;
      object-fit: cover;

      & img {
        @apply object-cover w-full h-full;
      }
    }
  }

  &:focus,
  &:hover,
  &.nuxt-link-active {
    @apply outline-none;
    & .inner {
      border: solid 1px #f7f9fc;
    }
  }

  &.nuxt-link-active {
    & .inner {
      background: #f7f9fc;

      & .icon {
        & > * {
          color: #2573d5;
        }

        & svg {
          fill: #2573d5;
        }
      }
    }
  }

  &.primary {
    & .inner {
      border: solid 1px #2573d5 !important;
      background: #2573d5;

      & .icon {
        & > * {
          color: #ffffff;
        }

        & svg {
          fill: #ffffff;
        }
      }
    }

    &:hover {
      & .inner {
        background: #2573d5;
      }
    }
  }

  &.disabled {
    @apply cursor-not-allowed;

    & .inner {
      border: none !important;
    }
  }
}
</style>
