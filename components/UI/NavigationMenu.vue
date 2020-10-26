<template>
  <nav class="bottom-navigation" aria-label="Sabido">
    <ul class="inner" role="menubar" aria-label="Sabido">
      <li role="none">
        <BottomNavigationItem
          name="index"
          to="/"
          size="18"
          aria-label="Ir para a página inicial"
          title="Início"
          :focused-item="focusedItem"
          first-item
          @click.native="scrollToTop('index')"
          @blur="onBlur"
          @focus="onFocus"
        >
          <font-awesome-icon icon="chart-line" aria-hidden="true" />
        </BottomNavigationItem>
      </li>
      <li role="none">
        <BottomNavigationItem
          name="search"
          to="/search"
          primary
          size="18"
          aria-label="Ir para a página de busca"
          title="Abrir busca"
          :focused-item="focusedItem"
          @blur="onBlur"
          @focus="onFocus"
        >
          <font-awesome-icon icon="user-secret" aria-hidden="true" />
        </BottomNavigationItem>
      </li>
      <li role="none">
        <BottomNavigationItem
          name="seed-new"
          to="/seed/new"
          size="18"
          aria-label="Ir para a página de criação de pergunta"
          title="Criar pergunta"
          :focused-item="focusedItem"
          @blur="onBlur"
          @focus="onFocus"
        >
          <font-awesome-icon icon="chart-line" aria-hidden="true" />
        </BottomNavigationItem>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    BottomNavigationItem: () => import('@/components/UI/NavigationMenuItem.vue')
  }
})
export default class BottomNavigation extends Vue {
  focusedItem: string | null = null;
  get avatarUrl(): string {
    return this.$store.getters['profile/avatar'] || '';
  }
  scrollToTop(routeName: string) {
    if (this.$route.name === routeName) {
      const contentElement = document.getElementById('content') as HTMLElement;
      contentElement &&
        contentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
  }
  onFocus(focusedItem: string) {
    this.focusedItem = focusedItem;
  }
  onBlur(bluredItem: string) {
    setTimeout(() => {
      if (this.focusedItem === bluredItem) {
        this.focusedItem = null;
      }
    }, 300);
  }
}
</script>

<style lang="postcss" scoped>
.bottom-navigation {
  @apply select-none fixed bottom-0 left-0 right-0 mx-auto;
  max-width: 512px;
  background-color: #ccc;
  height: 60px;
  z-index: 100;
  & .inner {
    @apply flex items-stretch h-full;
    & li {
      @apply flex-1;
    }
  }
}
</style>
