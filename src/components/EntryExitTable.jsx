import React from "react";

const EntryExitTable = ({data}) => {
    return (
        <div className="max-w-6xl max-auto p-6 bg-gray-800 shadow-md rounded-3xl border-fuchsia-600/40 border-4" >
            <h2 className="text-2x1 font-bold mb-4 text-white ">Parking lot entry history</h2>
            <div className="overflow-x-auto rounded-3xl shadow border-2 border-gray-200/60">
                <table className="min-w-full table-auto ">
                    <thead className="bg-slate-600 text-white">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Vehicle Plate</th>
                            <th className="px-4 py-2">Space</th>
                            <th className="px-4 py-2">Entry Time</th>
                            <th className="px-4 py-2">Entry Exit</th>
                            <th className="px-4 py-2">Fee to paid</th>
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
                                        <span 
                                            className={`px-2 py-1 rounded-full text-xs font-semibold${
                                                record.exitTime
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-200 text-yellow-700'
                                            }`}
                                        
                                        >

                                        </span>
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

export default EntryExitTable;

