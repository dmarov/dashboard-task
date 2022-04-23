import { ApiAddress, ApiCompany } from ".";

export class ApiUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: ApiAddress;
    phone: string;
    website: string;
    company: ApiCompany;
}
