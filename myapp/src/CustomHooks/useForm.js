import React, { useState } from 'react'

function useForm(initialData, API_END_POINT) {

    const [data, setData] = useState(initialData);

    function handleChange(event) {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        try {
            console.log("Form submitted successfully:", data);
            const response = await fetch(API_END_POINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const jsonResponse = await response.json();
            if (response.status !== 200) {
                throw new Error(jsonResponse.message || 'Failed to submit form');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return [data, handleChange, handleSubmit];
}

export default useForm;