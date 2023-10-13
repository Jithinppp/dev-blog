//   GET LATEST POSTS
export const fetchLatestPosts = async (limit) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_DB_URI}/posts?pagination[limit]=${limit}`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAllPosts = async (page) => {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_DB_URI
      }/posts?pagination[page]=${page}&pagination[pageSize]=10`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
