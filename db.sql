  CREATE TABLE book_chapters (
  chapterID SERIAL PRIMARY KEY,
  chapterNumber INTEGER(1000),
  chapterTitle VARCHAR(1000),
  chapterDescription VARCHAR(10000),
  FOREIGN KEY(bookid) REFERENCES books(bookid)
);
