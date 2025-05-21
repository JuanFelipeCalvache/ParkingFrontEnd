import React, { useEffect, useState } from "react";
import { GetEntryExitsRegisters } from "../services/entryExitService";
import EntryExitList from "../components/EntryExitList";



const Entrys = () => {
    const [entries, setEntries] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getAllEntrys();
            setEntries(data);
        };

        fetchData();
    }, []);


    return(
        <div>
            
            <EntryExitList entries={entries} />
        </div>
    )
}

export default Entrys;