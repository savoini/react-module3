const INITIAL_STATE = [
    { id: 1, text: "Fazer café" },
    { id: 2, text: "Estudar react" },
    { id: 3, text: "Estudar node" }
];

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
