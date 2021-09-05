<script>
    // TODO MRB: currently causes a flash of unstyled content but only in dev
    // Have temporarily replaced it with a CDN-hosted build in app.html
    // https://github.com/sveltejs/kit/issues/915 
    //import "bulma";
    //import "@fortawesome/fontawesome-free/css/all.min.css";

    import { rooms } from '$lib/stores/rooms';
</script>

<div class="buttons are-large">
    <a
        class="button is-primary"
        href="/room/create">
        New
    </a>
    { #each $rooms.rooms as room }
        <div class="buttons has-addons are-large">
            <a
                class="button is-light"
                href="/room/{room.id}">
                {room.name}
            </a>
            <a
                class="button is-danger"
                href="/room/{room.id}/delete">
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </a>
        </div>
    { /each }
</div>