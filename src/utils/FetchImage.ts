/**
 * 
 * @param url: Url of the site, Format: site.com
 * @returns The sites favicon, if the site has one, else returns the default icon
 */
export const fetchImage = (url?: string): string => {
    const regex = /\w+\.\w+/
    if(url != null && url.match(regex) != null){
        return `https://www.google.com/s2/favicons?sz=64&domain=${url}`
    }

    return "/SideBarIcons/Password.svg"
}