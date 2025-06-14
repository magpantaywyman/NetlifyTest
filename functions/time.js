export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({ time: new Date().toISOString() }),
  };
}