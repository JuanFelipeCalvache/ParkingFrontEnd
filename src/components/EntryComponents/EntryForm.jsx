import React, {useEffect, useState} from "react";
import { registerEntry, getAvailableSpaces } from "../../services/entryExitService";

const EntryForm = () => {
    const [formData, setFormData] = useState({
        plate: "",
        type: "",
        owner: "",
        spaceId: ""
    });

    const [availableSpaces, setAvailableSpaces] = useState([]);

    useEffect (() =>{
        const fetchSpaces = async () => {
            const spaces = await getAvailableSpaces();
            setAvailableSpaces(spaces);
        };
        fetchSpaces();

    }, []);

    const handleChange = (e) => {
        setFormData (prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const entryData = {
            entryDTO: {
                spaceId: parseInt(formData.spaceId)
            },
            vehicleDTO: {
                plate: formData.plate,
                type: formData.type,
                owner: formData.owner
            }
        };

        try{
            await registerEntry(entryData);
            alert("Vehicle registered successfully!");
            setFormData({plate: "", type: "", owner: "", spaceId: ""});

            window.location.reload();
        } catch (error){
            alert("Failed to registered vehicle.");
        }
    };

    return(
        <div className=" max-w-xl mx-auto  bg-gray-800/80 p-2 rounded-xl shadow-lg border-4 border-fuchsia-600/30 text-white">
            <h2 className="text-2x1 font-bold mb-4">Register vehicle entry</h2>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-md border-4 p-8">

                <div>
                    <label className="block mb-1 p-1 mt-6">Vehicle Plate:</label>
                    <input 
                    type="text"
                    name="plate"
                    value={formData.plate}
                    onChange={handleChange}
                    className="p-1 rounded w-full max-w-50 bg-gray-700 border border-gray-600"
                    required
                    />
                </div>

                <div>
                    <label className="block  p-1 mb-1">Type:</label>
                    <input 
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className=" p-1 rounded w-full max-w-50 bg-gray-700 border border-gray-600"
                    required
                    />
                </div>

                <div>
                    <label className="block p-1 mb-1">Owner:</label>
                    <input 
                    type="text"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                    className=" p-1 rounded w-full max-w-50 bg-gray-700 border border-gray-600"
                    required
                    />
                </div>

                <div className="pb-2">
                    <label className="block p-1 mb-1">Parking space:</label>
                    <select
                        name="spaceId"
                        value={formData.spaceId}
                        onChange={handleChange}
                        className="p-1 rounded w-full max-w-50 bg-gray-700 border border-gray-600 text-white"
                        required
                    >
                        <option value="">Select a space</option>
                        {availableSpaces.map((space) => (
                        <option key={space.id} value={space.id}>
                            Space #{space.id}
                        </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-gray-200/90 hover:bg-gray-500 px-4 py-2 tounded text-black"
                >
                    Register Entry
                </button>
            </form>
        </div>
    );
};

export default EntryForm;