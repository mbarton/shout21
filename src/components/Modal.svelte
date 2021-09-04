<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let title;
  export let action;

  let isOpen = false;

  export function open() {
    isOpen = true;
  }

  function submit() {
    dispatch("submit");
  }

  export function close() {
    isOpen = false;
    dispatch("close");
  }

  function onKeyDown({ key }) {
    switch(key) {
      case 'Enter':
        submit();
        break;

      case 'Esc': // Apparently IE/Edge send Esc lol
      case 'Escape':
        close();
        break;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown}/>

<div class="modal {isOpen ? "is-active" : ""}">
  <div class="modal-background"></div>
  <div class="modal-card">
      <header class="modal-card-head">
          <p class="modal-card-title">{title}</p>
          <button
              class="modal-close is-large"
              aria-label="close"
              on:click={close}>
          </button>
      </header>
      <section class="modal-card-body">
          <slot></slot>
      </section>
      <footer class="modal-card-foot">
          <button
              class="button is-success"
              on:click={submit}>
              {action}
          </button>
          <button
              class="button"
              on:click={close}>
              Cancel
          </button>
      </footer>
  </div>
</div>