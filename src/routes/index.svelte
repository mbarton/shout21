<script>
    // TODO MRB: currently causes a flash of unstyled content but only in dev
    // Have temporarily replaced it with a CDN-hosted build in app.html
    // https://github.com/sveltejs/kit/issues/915 
    //import "bulma";
    //import "@fortawesome/fontawesome-free/css/all.min.css";

    import { createRoom, rooms } from '../stores/rooms';

    let modalOpen = false;
    
    let newRoomName = '';
    $: newRoomNameValid = newRoomName.length > 0;

    function closeModal() {
        modalOpen = false;
        newRoomName = '';
    }

    function createNewRoom() {
        if(newRoomNameValid) {
            createRoom(newRoomName);
            closeModal();
        }
    }
</script>

<div class="buttons are-large">
    <div class="tile is-3 is-info">
        <button
            class="button is-primary"
            on:click={() => modalOpen = true}>
            New
        </button>
    </div>
    { #each $rooms.rooms as room }
        <div class="tile is-3">
            <button class="button is-light">{room.name}</button>
        </div>
    { /each }
</div>

<div class="modal {modalOpen ? "is-active" : ""}">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Create new room</p>
            <button
                class="modal-close is-large"
                aria-label="close"
                on:click={closeModal}>
            </button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label" for="room-name">Name</label>
                <div class="control has-icons-right">
                    <input
                        id="room-name"
                        class="input {newRoomNameValid ? "" : "is-danger"}"
                        type="text"
                        placeholder="Room name"
                        bind:value={newRoomName} />
                    {#if !newRoomNameValid }
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    {/if}
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button
                class="button is-success"
                on:click={createNewRoom}>
                Create
            </button>
            <button
                class="button"
                on:click={closeModal}>
                Cancel
            </button>
        </footer>
    </div>
</div>