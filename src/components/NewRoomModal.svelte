<script>
    import { tick } from 'svelte';
    import { createRoom } from '../stores/rooms';
    import Modal from '../components/Modal.svelte';

    let newRoomName = '';
    $: newRoomNameValid = newRoomName.length > 0;

    let modal;
    let newRoomInput;

    export async function open() {
        modal.open();
        
        await tick();
        newRoomInput.focus();
    }

    function resetNewRoom() {
        newRoomName = '';
    }

    function createNewRoom() {
        if(newRoomNameValid) {
            createRoom(newRoomName);
            modal.close();
            resetNewRoom();
        }
    }
</script>

<Modal
    title='Create new room'
    action='Create'
    bind:this={modal}
    on:submit={createNewRoom}
    on:close={resetNewRoom}
    >
    <div class="field">
        <label class="label" for="room-name">Name</label>
        <div class="control has-icons-right">
            <input
                id="room-name"
                class="input {newRoomNameValid ? "" : "is-danger"}"
                type="text"
                placeholder="Room name"
                bind:value={newRoomName}
                bind:this={newRoomInput}/>
            {#if !newRoomNameValid }
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            {/if}
        </div>
    </div>
</Modal>