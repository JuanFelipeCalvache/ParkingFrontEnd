import { useEffect, useState } from "react";
import { GetEntryExitsRegisters } from "../../services/entryExitService";
import RecordTable from "./RecordTable";

export default function RecordList(){
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEntries = async () => {
        try {
            setLoading(true);
            const data = await GetEntryExitsRegisters();
            setEntries(data);
        } catch (error) {
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() =>{
        fetchEntries();
    }, []);

    if (loading) return <p className="text-center text-gray-600">Cagando registros...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error}</p>;
    if (entries.length === 0) return <p>No hay registros ome</p>;

    return(
        <div className="p-4">
            <RecordTable data={entries} onRefresh={fetchEntries}/>
        </div>
    )
}