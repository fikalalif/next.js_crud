
const CreateForm = () => {
  return (
    <div>
        <form action="">
            <div className="mb-5">
                <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
                >
                    full name
                </label>
                <input 
                type="text" 
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Full Name.."
                />
            </div>
        </form>
    </div>
  )
}

export default CreateForm;