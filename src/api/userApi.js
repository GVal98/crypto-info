const fetchUser = async (options) => {
  const response = await fetch('http://127.0.0.1:3001/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(options),
  })
  const data = await response.json()
  return data
}

export { fetchUser }
