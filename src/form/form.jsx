import React from "react";

export const Form = ({ newBook, setNewBook }) => {
  return (
    <form>
      <p>
        Title:
        <input
          value={newBook.title}
          onChange={(e) => {
            setNewBook({
              ...newBook,
              title: { ...newBook.title },
            });
          }}
        />
      </p>
    </form>
  );
};
