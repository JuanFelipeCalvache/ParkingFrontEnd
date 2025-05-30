import BASE_URL from "../config/apiConfig";

const ENTRY_EXIT_URL = BASE_URL;

export async function GetEntryExitsRegisters (){
    try{
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/EntryExit`);
        if(!response.ok) throw new Error("Error fetching entry-extis");
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error fetching entry-exits Data", error.message);
        return[];
    }
}

export async function GetEntrysRegisters(){
    try{
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/EntryExit/entrysInParking`);
        if(!response.ok) throw new Error("Error fetching entrys");
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error("Eror fetching entry Data", error.message);
        return[]
    }
}

export async function registerEntry(entryData) {
    try {
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/EntryExit/Entry`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryData)
        });

        if (!response.ok) throw new Error("Failed to register vehicle entry");

        return await response.json();
    } catch (error) {
        console.error("Error register entry: ", error.message);
        throw error;
    }
}

export async function getAvailableSpaces(){
    try{
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/Space`);
        if(!response.ok) throw new Error("Failed to fecth parking spaces");
        const data = await response.json();
        console.log(data);
        return data.filter(space => !space.isOccupied);
    }catch(error){
        console.error("error fetching parking spaces: ", error.message);
        return [];
    }
}

export async function registerExit(plate, data){
    try{
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/EntryExit/exit/${plate}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            const errorText = await response.text(); // <- leer texto plano
            throw new Error(errorText || "Failed to register vehicle Exit");
        }
        return await response.json();

    }catch(error){
        console.error("error fetching parking spaces: ", error.message);
        return [];
    }
}

export async function deleteRecord(id){
    try {
        const response = await fetch(`${ENTRY_EXIT_URL}/Api/EntryExit/entry-exit/${id}`, {
            method: "DELETE",
        });

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(errorText || "Error deleting record");
        }

        return true;

    } catch (error) {
        console.error("Error deleting record: ", error.message);
        return false;
    }

}