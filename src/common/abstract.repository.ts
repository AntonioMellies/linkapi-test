
export abstract class AbstractRepository<T> {

    private COLLECTION;

    constructor(protected collection: String) {
        this.COLLECTION = collection;
    }

    list() {
    }

    loadByID(id: string) {
    }

    create(record: T) {
    }

    update(record: T) {
    }

    delete(id: string) {
    }
}