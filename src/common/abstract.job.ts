export abstract class AbstractJob {

    cron: string;

    abstract toSchedule(): void;
    abstract execute(): void;

    constructor(cron: string) {
        this.cron = cron;
    }
}