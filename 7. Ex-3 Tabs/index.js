Vue.component('tab-list', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tab-details">
        <slot></slot>
      </div>
    </div>
  `,
  data() {
    return {
      tabs: []
    }
  },
  created() {
    //to loop through each tab
    this.tabs = this.$children
  },
  methods: {
    //loop through all the tabs and set only selcted tabs's isActive
    //property to true
    selectTab(selectedTab) {
      this.tabs.forEach(tab =>
        tab.isActive = (tab == selectedTab)
      )
    }
  }
})

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data() {
    return {
      //cannot mutate property selected
      //hence need another property isActive
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected
  },
  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  }
})



new Vue({
  el: '#vue-app',
  data: {

  }
})
