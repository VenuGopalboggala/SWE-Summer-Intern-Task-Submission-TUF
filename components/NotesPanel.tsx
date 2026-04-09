"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function NotesPanel({ range }: any) {
  const [note, setNote] = useState("");

  const getKey = () => {
    if (!range.start) return "note-default";
    return `note-${format(range.start, "yyyy-MM-dd")}-${format(
      range.end || range.start,
      "yyyy-MM-dd"
    )}`;
  };

  const key = getKey();

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [key]);

  const saveNote = () => {
    localStorage.setItem(key, note);
    alert("Saved ✅");
  };

  return (
  <div className="p-5 flex flex-col h-full bg-blue-50">
    
    <h2 className="text-xl font-bold text-blue-900 mb-4">
      📝 Notes
    </h2>

    <textarea
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="Write your notes..."
      className="flex-1 bg-white text-gray-900 border border-blue-200 rounded-xl p-3 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      onClick={saveNote}
      className="mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-semibold shadow"
    >
      Save Note
    </button>
  </div>
);
}