export function resolveConnectionResponse(connection) {
  if (connection) {
    const { results, info } = connection;
    return { results, pageInfo: info };
  }
  return { results: [], pageInfo: {} };
}
