import React, { useEffect, useState } from "react";
import { GetEntryExitsRegisters } from "../services/entryExitService";
import EntryExitTable from "./EntryExitTable";

export default function EntryExitList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetEntryExitsRegisters()
      .then((data) => {
        setEntries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Cargando registros...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  if (entries.length === 0) return <p>No hay registros</p>;

  return (
    <div className="p-4">
      <EntryExitTable data={entries} />
    </div>
  );
}
