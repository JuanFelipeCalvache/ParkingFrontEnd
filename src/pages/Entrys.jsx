import React, { useEffect, useState } from "react";
import { GetEntrysRegisters } from "../services/entryExitService";
import EntryExitList from "../components/EntryExitList";

const Entrys = () => {
    const [entries, setEntries] = useState([]);

    const fetchData = async () => {
        const data = await GetEntrysRegisters();
        setEntries(data);
    };

    useEffect(() => {
        fetchData();

        const interval  = setInterval(() => {
            fetchData();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <EntryExitList entries={entries} onRefresh={fetchData} />
        </div>
    );
};

export default Entrys;
