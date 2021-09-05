<script>
    import { page } from '$app/stores';
    import { rooms } from '$lib/stores/rooms';

    const room = $rooms.rooms.find(({ id }) => id === $page.params.roomId);
</script>

<h2>{room ? room.name : 'Not found'}</h2>