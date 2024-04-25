const serviceBaseUrl = "https://www.main-bvxea6i-7tlqdtpb3i5hm.fr-3.platformsh.site"

class BaseAPIService {
    constructor(url) {
        this.url = `${serviceBaseUrl}/${url}`
        this.token = sessionStorage.getItem("token")
        this.headers = new Headers()
        if (this.token !== undefined) {
            this.headers.append("Authorization", `Bearer ${this.token}`)
        }
    }
}