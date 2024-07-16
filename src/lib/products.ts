const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getAllProducts() {
  const data = await fetch(`${endpoint}/products`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getProductByid(id: string) {
  const data = await fetch(`${endpoint}/products/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
