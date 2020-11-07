export class TaskStatus
{
    taskStatusID: number;// primary key in TaskStatuses table in DB
    taskStatusName: string;

    constructor()
    {
        this.taskStatusID = null;
        this.taskStatusName = null;
    }
}
