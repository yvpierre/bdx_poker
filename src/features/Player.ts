export class Player {
    // A Player is only instanciated whilst in a game, otherwise
    // A user is most likely the way to go
    nom:string;
    stack:number;

    constructor(name:string, stack:number) {
        this.nom = name;
        this.stack = stack;
    }


    getNom():string {
        return this.nom;
    }

    getStack():number {
        return this.stack
    }

    show():void {
        console.log("Utilisateur : "+this.nom+"\nStack : "+this.stack);
    }

}