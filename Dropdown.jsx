// Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css'; // Assuming you will use this CSS file for styling

const Dropdown = ({ buttonText, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none"
            >
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="block px-4 py-2 hover:bg-gray-100">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
