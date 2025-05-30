import { useState } from "react";
import { deleteRecord } from "../../services/entryExitService";

const RecordTable = ({data, onRefresh}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPages = 7;

    const indexOfLastRecords = currentPage * recordsPerPages;
    const indexOfFirstRecord = indexOfLastRecords - recordsPerPages;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecords);

    const totalPages = Math.ceil(data.length / recordsPerPages);

    
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this record?")
        if(!confirmDelete) return;

        const success = await deleteRecord(id);
        if(success){
            alert("record deleted successfully!");
            onRefresh();
        }else{
            alert("Error deleiting record");
        }

    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviusPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    return(
        <div className="max-w-6xl mx-auto max-auto p-6 bg-gray-800/80  rounded-3xl border-fuchsia-600/40 border-4">
            <h2 className="text-2x1 font-bold mb-4 text-white ">Historical records of parking lot exits</h2>
            <div className="overflow-x-auto rounded-3xl shadow-md border-2 border-gray-200/60">
                <table className="min-w-full table-auto">
                    <thead className="bg-slate-600 text-white">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Vehciel plate</th>
                            <th className="px-4 py-2">Space</th>
                            <th className="px-4 py-2">Entry Time</th>
                            <th className="px-4 py-2">Exit Time</th>
                            <th className="px-4 py-2">Fee paid</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm text-white">
                        {currentRecords.length > 0 ?(
                            currentRecords.map((record, index) => (
                                <tr
                                
                                    key={record.id}
                                    className="border-t hover:bg-gray-100/80 transition-colors"

                                >
                                    <td className="px-4 py-2">{index +1}</td>
                                    <td className="px-4 py-2">{record.vehiclePlate}</td>
                                    <td className="px-4 py-2">{record.spaceCode}</td>
                                    <td className="px-4 py-2">{new Date(record.entryTime).toLocaleString()}</td>
                                    <td className="px-4 py-2">{record.exitTime? new Date(record.exitTime).toLocaleString(): '-'}</td>
                                    <td className="px-4 py-2">${record.amountToPay?.toFixed(2)}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(record.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr colSpan="7" className="px-4 py-4 text-gray-500">
                                    The're not records
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Paginate Control */}
            <div className="flex justify-between items-center mt-4 text-white">
                <button
                    onClick={goToPreviusPage}
                    disabled={currentPage == 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}

                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={goToNextPage}
                    disabled={currentPage == totalPages}
                    className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}

                >
                    Next
                </button>

            </div>



        </div>
    )

};

export default RecordTable;