class SignInController extends BaseFormController {
    constructor() {
        super(false)
        this.svc = new UserAccountAPI()
    }
    async signin() {
        let displayname = this.validateRequiredField('#fieldDisplayname', 'Nom affiché')
        let login = this.validateRequiredField('#fieldLogin', 'Nom d\'utilisateur')
        let password = this.validateRequiredField('#fieldPassword', 'Mot de passe')
        if ((login != null) && (password != null)) {
            if (await this.svc.insert(new UserAccount(displayname, login, password)) === 200) {
                this.toast("L'utilisateur a bien été créé")
                window.location.replace("index.html")
            } else {
                this.displayServiceError()
            }
        }
    }
}

window.signInController = new SignInController()
