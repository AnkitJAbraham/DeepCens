import React, {useState} from 'react';

const TextInput = ({onFileSelect}) => {
	const [prediction, setPrediction] = useState('');

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append('script', file);
	  
		try {
		  const response = await fetch('http://localhost:5000/predict', {
			method: 'POST',
			body: JSON.stringify({ script: formData }), // Send FormData as JSON
			headers: {
			  'Content-Type': 'application/json' // Set Content-Type to application/json
			}
		  });
	  
		  if (!response.ok) {
			throw new Error(`Network response was not ok (status: ${response.status})`);
		  }
	  
		  const data = await response.json();
		  setPrediction(data.prediction);
		} catch (error) {
		  console.error('Error:', error);
		}
	  };
	  
	  

	return (
		<div>
			<input
				type="file"
				accept=".txt"
				onChange={handleFileUpload}
				className="hidden"
				id="fileInput"
			/>
			{prediction && <p>Prediction: {prediction}</p>}
			<label
				htmlFor="fileInput"
				className="block hover:bg-teal-500 bg-blue-500 text-white font-semibold px-4 py-2 rounded cursor-pointer"
			>
				Upload Text File
			</label>
		</div>
	);
};

export default TextInput;
