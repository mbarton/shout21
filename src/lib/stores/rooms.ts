import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

type Room = {
    id: string,
    name: string
}

type Rooms = {
    rooms: Room[]
}

export const rooms: Writable<Rooms> = writable({
    rooms: []
});

export function createRoom(name: string) {
    rooms.update(({ rooms: existing }) => {
            return {
                rooms: [...existing, {
                    id: uuid(),
                    name
                }]
            }
        }
    );
}