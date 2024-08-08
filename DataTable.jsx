// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import './table.css'; // Ensure this file exists and has appropriate styles

// const DataTable = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [pageCount, setPageCount] = useState(0);
//     const itemsPerPage = 10;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://pvfurmhnl0.execute-api.eu-north-1.amazonaws.com/dev/read');
//                 console.log('API Response:', response.data); // Log the full API response

//                 // Safely extract docs or default to empty array
//                 const docs = response.data?.body?.docs || [];
//                 console.log('Extracted Docs:', docs); // Log the extracted docs

//                 setData(docs);
//                 setPageCount(Math.ceil(docs.length / itemsPerPage));
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const handlePageClick = (event) => {
//         setCurrentPage(event.selected);
//     };

//     const displayData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen bg-gray-100">
//                 <h2 className="font-semibold text-2xl italic text-gray-800">Loading...</h2>
//             </div>
//         );
//     }

//     if (data.length === 0) {
//         return (
//             <div className="flex justify-center items-center min-h-screen bg-gray-100">
//                 <h2 className="font-semibold text-2xl italic text-gray-800">No Data Available</h2>
//             </div>
//         );
//     }

//     return (
//         <div className="container py-4 px-5 overflow-auto bg-white max-h-[400px] p-4 shadow-md">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-slate-300 uppercase bg-blue-300 text-gray-400">
//                     <tr>
//                         <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-black uppercase">Name</th>
//                         <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-black uppercase">Language</th>
//                         <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-black uppercase">Id</th>
//                         <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-black uppercase">Bio</th>
//                         <th scope="col" className="px-6 py-3 text-end text-sm font-bold text-black uppercase">Version</th>
//                         <th scope="col" className="px-6 py-3 text-end text-sm font-bold text-black uppercase">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                     {displayData.map((item) => (
//                         <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100">
//                             <td className="px-6 py-4 whitespace text-sm font-medium text-gray-800">{item.name}</td>
//                             <td className="px-6 py-4 whitespace text-sm font-medium text-gray-800">{item.language}</td>
//                             <td className="px-6 py-4 whitespace text-sm font-medium text-gray-800">{item.id}</td>
//                             <td className="px-6 py-4 whitespace text-sm font-medium text-gray-800">{item.bio}</td>
//                             <td className="px-6 py-4 whitespace text-sm font-medium text-gray-800">{item.version}</td>
//                             <td className="px-6 py-4 whitespace text-end text-sm font-medium relative">
//                                 <div className="dropdown inline-block relative pb-5 cursor-pointer group">
//                                     <span className="text-gray-800 text-2xl inline-block">⋮</span>
//                                     <div className="dropdown-content absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <ReactPaginate
//                 previousLabel={'previous'}
//                 nextLabel={'next'}
//                 breakLabel={'...'}
//                 breakClassName={'break-me'}
//                 pageCount={pageCount}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination'}
//                 subContainerClassName={'pages pagination'}
//                 activeClassName={'active'}
//             />
//         </div>
//     );
// };

// export default DataTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './DataTable.css'; // Make sure to create this CSS file for styling

const DataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pvfurmhnl0.execute-api.eu-north-1.amazonaws.com/dev/read');
                setData(response.data.body.docs);
                setPageCount(Math.ceil(response.data.body.docs.length / itemsPerPage));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const displayData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>ID</th>
                        <th>Bio</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.language}</td>
                            <td>{item.id}</td>
                            <td>{item.bio}</td>
                            <td>{item.version}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default DataTable;

// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import ReactPaginate from 'react-paginate';
// // // // import './DataTable.css'; // Ensure this file exists and has appropriate styles

// // // // const DataTable = () => {
// // // //     const [data, setData] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [currentPage, setCurrentPage] = useState(0);
// // // //     const [pageCount, setPageCount] = useState(0);
// // // //     const itemsPerPage = 10;

// // // //     useEffect(() => {
// // // //         const fetchData = async () => {
// // // //             try {
// // // //                 const response = await axios.get('https://izx6gd29li.execute-api.eu-north-1.amazonaws.com/Read/delete_lambda');
// // // //                 console.log('API Response:', response.data); // Log response
// // // //                 const docs = response.data.body.docs || [];
// // // //                 setData(docs);
// // // //                 setPageCount(Math.ceil(docs.length / itemsPerPage));
// // // //                 setLoading(false);
// // // //             } catch (error) {
// // // //                 console.error('Error fetching data:', error);
// // // //                 setLoading(false);
// // // //             }
// // // //         };

// // // //         fetchData();
// // // //     }, []);

// // // //     const handlePageClick = (event) => {
// // // //         setCurrentPage(event.selected);
// // // //     };

// // // //     const displayData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
// // // //     console.log('Display Data:', displayData); // Log data to be displayed

// // // //     if (loading) {
// // // //         return <div>Loading...</div>;
// // // //     }

// // // //     return (
// // // //         <div>
// // // //             <table>
// // // //                 <thead>
// // // //                     <tr>
// // // //                         <th>Name</th>
// // // //                         <th>Language</th>
// // // //                         <th>ID</th>
// // // //                         <th>Bio</th>
// // // //                         <th>Version</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {displayData.map((item) => (
// // // //                         <tr key={item.id}>
// // // //                             <td>{item.name}</td>
// // // //                             <td>{item.language}</td>
// // // //                             <td>{item.id}</td>
// // // //                             <td>{item.bio}</td>
// // // //                             <td>{item.version}</td>
// // // //                         </tr>
// // // //                     ))}
// // // //                 </tbody>
// // // //             </table>
// // // //             <ReactPaginate
// // // //                 previousLabel={'previous'}
// // // //                 nextLabel={'next'}
// // // //                 breakLabel={'...'}
// // // //                 breakClassName={'break-me'}
// // // //                 pageCount={pageCount}
// // // //                 marginPagesDisplayed={2}
// // // //                 pageRangeDisplayed={5}
// // // //                 onPageChange={handlePageClick}
// // // //                 containerClassName={'pagination'}
// // // //                 subContainerClassName={'pages pagination'}
// // // //                 activeClassName={'active'}
// // // //             />
// // // //         </div>
// // // //     );
// // // // };

// // // // export default DataTable;

// // // import React, { useEffect, useState } from 'react';

// // // function App() {
// // //   const [data, setData] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   useEffect(() => {
// // //     fetch("https://izx6gd29li.execute-api.eu-north-1.amazonaws.com/Read/delete_lambda")
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         setData(data);
// // //         setIsLoading(false);
// // //       })
// // //       .catch(error => {
// // //         console.error("Error fetching data:", error);
// // //         setIsLoading(false);
// // //       });
// // //   }, []);

// // //   return (
// // //     <div className="App">
// // //       {isLoading ? (
// // //         <div>Loading...</div>
// // //       ) : (
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>NAME</th>
// // //               <th>LANGUAGE</th>
// // //                 <th>BIO</th>
// // //                 <th>VERSION</th>
// // //                 <th>ID</th>
// // //                 <th>ACTION</th>

// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {data.map(item => (
// // //               <tr key={item.id}>
// // //                 <td>{item.name}</td>
// // //                 <td>{item.language}</td>
// // //                 <td>{item.bio}</td>
// // //                 <td>{item.version}</td>
// // //                 <td>{item.id}</td>

// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import './List.css'; // Ensure this file exists and has appropriate styles

// const DataTable = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://pvfurmhnl0.execute-api.eu-north-1.amazonaws.com/dev/read');
//                 // console.log('API Response:', response.data); // Log response data
//                 setData(response.data); // Set the data
//                 setLoading(false); // Set loading to false once data is fetched
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError('Failed to fetch data'); // Set error message
//                 setLoading(false); // Set loading to false in case of error
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <h2>Loading...</h2>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="error-container">
//                 <h2>{error}</h2>
//             </div>
//         );
//     }

//     return (
//         <div className="list-container">
//             <h2>Data List</h2>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id} className="list-item">
//                         <strong>Name:</strong> {item.name} <br />
//                         <strong>Language:</strong> {item.language} <br />
//                         <strong>ID:</strong> {item.id} <br />
//                         <strong>Bio:</strong> {item.bio} <br />
//                         <strong>Version:</strong> {item.version}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DataTable;

// import React, { useEffect, useState } from "react";

// export default function DataTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://pvfurmhnl0.execute-api.eu-north-1.amazonaws.com/dev/read", {
//       method: "POST"
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok' + response.statusText);
//       }
//       return response.json();
//     })
//     .then(data => setData(data.read))
//     .catch(err => console.log(err));
//   }, []);

//   return (
//     <>
//       <div>Data</div>
//       {
// <div>
// state.map((read)=>
// )
// </div>
      

//       }
      
//     </>
//   );
// }

