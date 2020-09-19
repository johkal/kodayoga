const cloudProviders = require.context('./products/socks/types', true, /\.(png|jpe?g|svg)$/)

const obj = []

cloudProviders.keys().forEach((key) => {
  let temp = {}
  const img = key.split('./').pop() // remove the first 2 characters
    .substring(0, key.length - 6) // remove the file extension
  temp[img] = cloudProviders(key)
  obj.push(temp)
});

export default obj