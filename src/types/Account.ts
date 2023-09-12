export default interface Account {
    id: string
    webSiteLink: string
    username: string
    encryptedPass: string
    notes: string
    createdAt: Date
    updatedAt: Date
    passwordSecurity: string
}