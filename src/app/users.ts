export class users
{
    id:string;
    username:string;
    password:string;
    regno:Number;
    options:Number;
    email:String;

    constructor(id,username,password,regno,options,email)
    {
        this.id=id;
        this.username=username;
        this.password=password;
        this.regno=regno;
        this.options = options;
        this.email = email;
    }
}