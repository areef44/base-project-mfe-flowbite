import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

function Home() {

    return(
        <>
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={viteLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className='flex justify-center'>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>
        </div>
      </>
    )
}

function InputForm(){
    return (
    <>
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>

        <div className="mb-6">
          <label htmlFor="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Your name
          </label>
          <input
            type="text"
            id="success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Success input"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Well done!</span> Some success message.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
            Your name
          </label>
          <input
            type="text"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Error input"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oh, snap!</span> Some error message.
          </p>
        </div>

    </div>
    </>
    );
};

function MultipleComponent() {
    return (
        <>
            <Home />
            <InputForm />
        </>
    )
}

export default MultipleComponent

