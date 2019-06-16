export function resolveConnectionResponse(connection) {
  if (connection) {
    const { results, info } = connection;
    return { results, info };
  }
  return { results: [], info: null };
}
