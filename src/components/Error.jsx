const Error = ({ children }) => {
  return (
    <div className="bg-red-500 text-white mt-5 font-bold text-center p-3 uppercase rounded-md">
      <p>{children}</p>
    </div>
  );
};

export default Error;
