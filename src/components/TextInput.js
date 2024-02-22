import React, {useState} from 'react';

const TextInput = ({onFileSelect}) => {
	const [prediction, setPrediction] = useState('');

	const handleFileUpload = async event => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append('file', file);

		const response = await fetch('/predict', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
		setPrediction(data.prediction);
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
