const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getAllServices() {
  const data = await fetch(`${endpoint}/services`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getServiceByid(id: string) {
  const data = await fetch(`${endpoint}/services/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
