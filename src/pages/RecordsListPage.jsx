import React, {useEffect, useState} from "react";
import EntryList from "../components/EntryComponents/EntryList";
import { GetEntryExitsRegisters } from "../services/entryExitService";
import RecordList from "../components/RecordComponents/RecordList";


const RecordListPage = () => {
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
            <RecordList entries={entries} onRefresh={fetchData} />
        </div>
    );

};

export default RecordListPage;