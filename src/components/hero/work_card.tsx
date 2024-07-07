export default function WorkCard() {
    return (
        <>
            <div className="bg-white border rounded-xl shadow-sm sm:flex">
                <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                    <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
                </div>
                <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-800">
                            Card title
                        </h3>
                        <p className="mt-1 text-gray-500">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <div className="mt-5 sm:mt-auto">
                            <p className="text-xs text-gray-500">
                                Last updated 5 mins ago
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}