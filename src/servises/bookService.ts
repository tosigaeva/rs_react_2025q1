import { Book } from '../types.tsx';

const BASE_URL = 'https://stapi.co/api/v1/rest/book/search';

export const fetchBooks = async (title: string): Promise<Book[]> => {
  const body = new URLSearchParams();
  if (title) {
    body.append('title', title);
  }

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const json = await response.json();
  return json.books;
};

/*import { Book } from "../types.tsx";

const BASE_URL = "https://stapi.co/api/v1/rest/book/search?pageNumber=0";

export const fetchBooks = async (title: string): Promise<Book[]> => {
    const requestURL = title ? `${BASE_URL}&title=${title}` : BASE_URL;
    const response = await fetch(requestURL);
    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }
    const json = await response.json();
    return json.books;
};*/
