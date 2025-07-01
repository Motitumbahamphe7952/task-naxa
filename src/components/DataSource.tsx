const DataSource = () => {
  return (
    <div className="min-h-screen bg-[#dcf1fe] mt-10 rounded-md p-20 gap-4">
        <div className="flex flex-col items-center text-center mx-36">
            <h1 className="text-5xl font-semibold pb-6">DataSource</h1>
            <p className="text-lg text-gray-700 mt-2">This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</p>
        </div>
        <div className="text-center p-10">
            <p className="uppercase text-red-500 text-sm font-semibold">Federal Government</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
                <div className="bg-blue-200 p-4">Item 2</div>
                <div className="bg-green-200 p-4">Item 3</div>
                <div className="bg-yellow-200 p-4">Item 4</div>
            </div>
            <p className="uppercase text-red-500 text-sm font-semibold mt-10">Provincial Government</p>
            <div className="grid grid-cols-3 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
                <div className="bg-blue-200 p-4">Item 2</div>
                <div className="bg-green-200 p-4">Item 3</div>
            </div>
            <p className="uppercase text-red-500 text-sm font-semibold mt-10">Municipal Government</p>
            <div className="grid grid-cols-1 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
            </div>
        </div>
        
    </div>
  )
}

export default DataSource