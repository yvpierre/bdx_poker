export class Player {
    // A Player is only instanciated whilst in a game, otherwise
    // A user is most likely the way to go
    nom:string;
    stack:number;
    state:boolean;

    constructor(name:string, stack:number, active:boolean) {
        if(name.length>=12){
            alert("error, name too long")
            this.nom = "error"
        }else{
            this.nom = name;
        }
        this.stack = stack;
        this.state = active;
    }


    getNom():string {
        return this.nom;
    }

    getStack():number {
        return this.stack
    }

    getState():boolean {
        return this.state
    }

    show():void {
        console.log("Utilisateur : "+this.nom+"\nStack : "+this.stack);
    }

}