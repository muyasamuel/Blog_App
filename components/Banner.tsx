
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5  lg:items-center justify-between font-bold py-10 px-4 mb-10">
        <div>
            <h1 className="text-6xl"> Njomos Blog Posts</h1>
            <h2 className="mt-3 md:mt-0"> Welcome to everyones favorite Blog</h2>

        </div>
        <p className="text-gray-300 max-w-sm">
            New Product Features | Latest of news | Weekly blog updates
        </p>
    </div>
  )
}

export default Banner;