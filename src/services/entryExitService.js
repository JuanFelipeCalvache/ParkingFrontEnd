import BASE_URL from "../config/apiConfig";

const ENTRY_EXIT_URL = `${BASE_URL}/Api/EntryExit`;

export async function GetEntryExitsRegisters (){
    try{
        const response = await fetch(ENTRY_EXIT_URL);
        if(!response.ok) throw new Error("Error fetching entry-extis");
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error fetching entry-exits Data", error.message);
        return[];
    }
}

