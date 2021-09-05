<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { createRoom } from '$lib/stores/rooms';

    let name = '';
    let nameInput;

    $: nameValid = name.length > 0;

    onMount(() => {
       nameInput.focus(); 
    });

    function onSubmit() {
        if(nameValid) {
            const { id } = createRoom(name);
            goto(`/room/${id}`);
        }
    }

    function onCancel() {
        goto("/");
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="field">
        <label class="label" for="room-name">Name</label>
        <div class="control has-icons-right">
            <input
                id="room-name"
                class="input {nameValid ? "" : "is-danger"}"
                type="text"
                placeholder="Room name"
                bind:value={name}
                bind:this={nameInput}/>
            {#if !nameValid }
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            {/if}
        </div>
    </div>
    <input
        type="submit"
        class="button is-success"
        value="Create" />
    <button
        class="button"
        on:click={onCancel}>
        Cancel
    </button>
</form>