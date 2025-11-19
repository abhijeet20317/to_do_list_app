import React, { useState } from "react";
import NoteCard from "./NoteCard"; 

function InputNotes() {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setDetails(details + "\n");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || details.trim() === "") return;

    
    const newTask = { id: Date.now(), title, details };
    setTask([newTask, ...task]);

    // clear input fields
    setTitle("");
    setDetails("");
  };

  const deleteNote=(index)=>{
     
     
  setTask(task.filter((_, i) => i !== index))

   
     
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md mt-10 transition-all">
        <form
          className="flex flex-col gap-4"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            onKeyDown={handleKeyPress}
            rows="3"
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 active:bg-blue-700 transition-all"
          >
            ➕ Add Note
          </button>
        </form>
      </div>

      {/* Notes Display */}
      <div className="w-full max-w-md flex flex-col gap-4 mt-6 px-2">
        {task.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No notes yet. Add your first one! ✨
          </p>
        ) : (
          task.map((item,idx) => (
            
            <NoteCard key={item.id} heading={item.title} details={item.details} onDelete={()=>deleteNote(idx)}   />



 
            
          ))
        )}
      </div>
    </div>
  );
}

export default InputNotes;

