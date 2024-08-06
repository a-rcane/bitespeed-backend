export type reqInfo = {
    email?:string,
    phoneNumber?:number
};

export type resInfo = {
    primaryContactId: number,
    emails: string[],
    phoneNumbers: string[], 
    secondaryContactIds: number[] 
}