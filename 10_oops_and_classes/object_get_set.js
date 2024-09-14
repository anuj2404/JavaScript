const User = {
    _email: 'anuj@gmail.com',
    _password: "abc@A145",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);