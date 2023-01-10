export enum TodoState {
    DELETED = 'Deleted',
    DONE = 'Done',
    NORMAL = 'Normal',
}

export interface Todo {
    id: number;
    todo: string;
    state: string;
}

