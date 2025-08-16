async function getProducts() {
  const res = await fetch('https://dummyjson.com/products/1')
  return res.json()
}

export default async function Home() {
  const data = await getProducts()
  console.log(data)

  return (
    <>
      <h1>hello {data.title}</h1>
    </>
  );
}
