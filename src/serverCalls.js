export async function getProjects() {
  try {
    const response = await fetch("http://localhost:3500/projects");
    if (!response.ok) {
      throw new Error("Failed to get projects");
    }

    const json = await response.json();
    return json;
  } catch (err) {
    console.error("Error fetching operation:", err);
  }
}
