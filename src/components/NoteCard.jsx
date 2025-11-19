import React from "react";

function NoteCard({ heading, details, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {heading}
        </h2>
        {/* Delete Button */}
        <button
          onClick={onDelete}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 active:bg-red-700 transition-all duration-200 shadow-sm"
        >
          🗑 Delete
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line mt-1">
        {details}
      </p>
    </div>
  );
}

export default NoteCard;
