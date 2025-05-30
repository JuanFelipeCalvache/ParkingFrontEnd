import React, { useState } from "react";
import { registerExit } from "../../services/entryExitService";




const EntryTable = ({data, onRefresh}) => {

    const [plate, setPlate] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleExit = async (record) => {
        setError(null);
        try {
        const exitData = {
            entryExitId: record.entryExitId,
            exitTime: new Date().toISOString(),
            tariffDTO: {
            id: record.tariff?.id ?? 0,
            vehicleType: record.tariff?.vehicleType ?? "unknown",
            ratePerHour: record.tariff?.ratePerHour ?? 0
            }
        };

        await registerExit(record.vehiclePlate.trim().toUpperCase(), exitData);

        // ✅ Refresca los datos después de registrar la salida
        if (onRefresh) {
            await onRefresh();
        }

        } catch (err) {
        console.error("Error registering exit:", err);
        setError(err.message || "Failed to register vehicle Exit");
        }
    };



    return (
        <div className="max-w-6xl max-auto p-6 bg-gray-800/80 shadow-md rounded-3xl border-fuchsia-600/40 border-4" >
            <h2 className="text-2x1 font-bold mb-4 text-white ">Parking lot entry history</h2>
            <div className="overflow-x-auto rounded-3xl shadow border-2 border-gray-200/60">
                <table className="min-w-full table-auto ">
                    <thead className="bg-slate-600 text-white">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Vehicle Plate</th>
                            <th className="px-4 py-2">Space</th>
                            <th className="px-4 py-2">Entry Time</th>
                            <th className="px-4 py-2">Exit</th>
                            <th className="px-4 py-2">Fee to paid</th>
                            <th className="px-4 py-2">Exit?</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm text-white">
                        {data && data.length > 0 ?(
                            data.map((record, index ) => (
                                <tr
                                    key={record.id}
                                    className="border-t hover:bg-gray-100/80 transition-colors"
                                >
                                    <td className="px-4 py-2" >{index + 1}</td>
                                    <td className="px-4 py-2" >{record.vehiclePlate}</td>
                                    <td className="px-4 py-2" >{record.spaceCode}</td>
                                    <td className="px-4 py-2" >{new Date(record.entryTime).toLocaleString()}</td>
                                    <td className="px-4 py-2" >{record.exitTime? new Date(record.exitTime).toLocaleString(): '—'}</td>
                                    <td className="px-4 py-2" >${record.amountToPay?.toFixed(2)}</td>
                                    <td className="px-4 py-2">
                                       {record.exitTime ? (
                                        new Date(record.exitTime).toLocaleString()
                                       ) : (
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-black text-xs font-bold py-1 px-3  rounded"
                                            onClick={() => handleExit(record)}
                                        >
                                            Exit
                                        </button>
                                       )}
                                       {error && (
                                        <p className="text-red-500 font-semibold mt-4">
                                            Error: {error}
                                        </p>
                                        )}

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr colSpan="7" className="px-4 py-4 text-gray-500">
                                There are not records

                            </tr>
                            
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default EntryTable;

