import { Client,Account } from "appwrite";


const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e346356ddeac62c8ca');

    
export const account = new Account(client)