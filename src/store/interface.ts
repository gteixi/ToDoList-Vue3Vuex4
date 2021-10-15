interface State {
    tasks: Tasks[];
    dates: String;
}

interface Tasks {
    id: number;
    title: string;
    completed: boolean;
}

interface Task {
    String: "";
}

export {
    State,
    Tasks,
    Task
}