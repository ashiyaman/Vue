Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Velit incidunt quasi est numquam eveniet earum illum repellendus
            placeat suscipit tempora, explicabo assumenda, possimus,
            perspiciatis officia voluptates eligendi, nemo dolor magnam.</p>
        </div>
      </div>
      <button @click="$emit('close')" class="modal-close is-large"></button>
    </div>
  `,
  /* <button @click="showModal=false" class="modal-close is-large"></button>
      on line13 wont work
      coz showModal is not in that scope */
  /* we need to say that when you click on close button, notify the root element
      that the status of modal has changed */
  /* The root instance is then responsible for changing the showModal property */
  /* This is communicating btw components */

  /* Here emit is for custom event
     It say when you are clicked emit a custom event called 'close' */
})

new Vue({
  el: '#vue-app',
  data: {
    showModal: false
  }
})
