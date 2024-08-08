import React from 'react';
import DataTableWithPagination from './DataTableWithPagination'; // Adjust the import path as necessary

function App() {
  const apiUrl = 'https://izx6gd29li.execute-api.eu-north-1.amazonaws.com/Read/delete_lambda'; // Replace with your Lambda function URL

  return (
    <div className="App">
      <h1>Data Table with Pagination</h1>
      <DataTableWithPagination apiUrl={apiUrl} />
    </div>
  );
}

export default App;
