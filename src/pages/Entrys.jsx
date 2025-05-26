import React, { useEffect, useState } from "react";
import { GetEntryExitsRegisters } from "../services/entryExitService";
import EntryExitList from "../components/EntryExitList";

const Entrys = () => {
    const [entries, setEntries] = useState([]);

    const fetchData = async () => {
        const data = await GetEntryExitsRegisters();
        setEntries(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <EntryExitList entries={entries} onRefresh={fetchData} />
        </div>
    );
};

export default Entrys;
