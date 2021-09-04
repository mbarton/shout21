<script>
    // TODO MRB: currently causes a flash of unstyled content but only in dev
    // Have temporarily replaced it with a CDN-hosted build in app.html
    // https://github.com/sveltejs/kit/issues/915 
    //import "bulma";
    //import "@fortawesome/fontawesome-free/css/all.min.css";

    import NewRoomModal from '../components/NewRoomModal.svelte';
    import { rooms } from '../stores/rooms';

    let newRoomModal;
</script>

<div class="buttons are-large">
    <div class="tile is-3 is-info">
        <button
            class="button is-primary"
            on:click={() => newRoomModal.open()}>
            New
        </button>
    </div>
    { #each $rooms.rooms as room }
        <div class="tile is-3">
            <button class="button is-light">{room.name}</button>
        </div>
    { /each }
</div>

<NewRoomModal
    bind:this={newRoomModal}
/>