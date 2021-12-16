interface IUser{
    id: string;
    email: string;
}

interface IAdmin extends IUser{
    cargo: 'super'| 'normal';
}

function redirect(user: IUser | IAdmin){
    if('cargo' in user){
        console.log('Liberado acesso pra área de Administração');
    }
    else{
        console.log('Liberado área de usuário');
    }
}