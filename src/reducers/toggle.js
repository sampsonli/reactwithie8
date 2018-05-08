
export default function toggle(state = 0, action) {
    switch (action.type) {
        case 'ON':
            return 1;
        case 'OFF':
            return 0;
        case 'TOGGLE':{
            console.log(action.payload)
            return +!state;
        }
        default:
            return state;
    }
}
