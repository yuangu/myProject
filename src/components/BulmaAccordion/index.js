import BulmaAccordion from './components/BulmaAccordion.vue'
import BulmaAccordionItem from './components/BulmaAccordionItem.vue'

// 定义插件对象
const Accordion = {};
// vue的install方法,用于定义vue插件

export function install (Vue) {
  Vue.component('bulma-accordion', BulmaAccordion)
  Vue.component('bulma-accordion-item', BulmaAccordionItem)
}

export {
  BulmaAccordion,
  BulmaAccordionItem,
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
