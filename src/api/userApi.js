const fetchUser = async (options) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/accessToken`, {
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
