import React, { useEffect, useState } from "react";
import { GetEntrysRegisters } from "../services/entryExitService";
import EntryList from "../components/EntryComponents/EntryList";

const Entrys = () => {
    const [entries, setEntries] = useState([]);

    const fetchData = async () => {
        const data = await GetEntrysRegisters();
        setEntries(data);
    };

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div>
            <EntryList entries={entries} onRefresh={fetchData} />
        </div>
    );
};

export default Entrys;
