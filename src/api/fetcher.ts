export const fetcher = {
  get: async <T>(url: string) => {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + url);
    if (!response.ok) {
      throw new Error("An error occurred while fetching the data.");
    }

    return (await response.json()) as T;
  },
};
