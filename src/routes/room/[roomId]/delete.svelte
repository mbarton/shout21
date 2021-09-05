<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { deleteRoom, rooms } from '$lib/stores/rooms';

    const room = $rooms.rooms.find(({ id }) => id === $page.params.roomId);

    function onSubmit() {
        if(room) {
            deleteRoom(room.id);
            goto("/");
        }
    }

    function onCancel() {
        goto("/");
    }
</script>

{#if room}
    <form on:submit|preventDefault={onSubmit}>
        <input
            type="submit"
            class="button is-danger"
            value="Delete" />
        <button
            class="button"
            on:click={onCancel}>
            Cancel
        </button>
    </form>
{:else}
    <h2>Not Found</h2>
{/if}