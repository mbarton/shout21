import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';
export const rooms = writable({
    rooms: [
        { id: '1', name: 'mtest 1' },
        { id: '2', name: 'mtest 2' }
    ]
});
export function createRoom(name) {
    rooms.update(({ rooms: existing }) => {
        return {
            rooms: [...existing, {
                    id: uuid(),
                    name
                }]
        };
    });
}
//# sourceMappingURL=rooms.js.map