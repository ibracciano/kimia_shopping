import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <div className="flex items-center gap-2 mb-4 text-3xl font-bold">
        <h1 className="text-3xl font-bold">Error 404 | </h1>
        <p>Page not found</p>
      </div>

      <button onClick={() => window.history.back()} className="text-red-500">
        &larr; Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
