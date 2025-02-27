export class User {
    
    constructor (
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ) {}

    public getId():string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getName():string {
        return this.name
    }

    public setName(value: string) {
        this.name = value
    }

    public getEmail():string {
        return this.email
    }

    public setEmail(value: string) {
        this.email = value
    }

    public getPassword():string {
        return this.password
    }

    public setPassword(value: string) {
        this.password = value
    }

    public getcreatedAt():string {
        return this.createdAt
    }

    public setcreatedAt(value: string) {
        this.createdAt = value
    }
}