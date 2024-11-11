import { error } from "console";

export default async function fetchData(endpoint:string): Promise<any>{
    const response = await fetchData(`https://api.socialverseapp.com/admin/dashboard${endpoint}`);
    if (!response.ok) throw new Error ("Failed to fetch data");
    return response.json();
    
}