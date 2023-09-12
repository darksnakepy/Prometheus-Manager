export default interface ViewDataProps{
    id?: string
    link?: string //link of the site for the account
    icon?: string //base64 of the image or the site + /favicon.ico
    email?: string
    password?: string // view password
    date?: string //date the account was created
    passwordSecurity?: string
    notes?: string
    token?: string
    onCrossClick?: () => void
}