const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error("Erro ao carregar os posts.");
  return response.json();
}

export async function fetchPostById(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) throw new Error("Post não encontrado.");
  return response.json();
}

export { BASE_URL };
