type NoResultsProps = {
  message?: string;
};

const NoResults = ({ message = "No results found" }: NoResultsProps) => {
  return (
    <div className="text-center">
      <h3 className="text-xl text-gray-800">{message}</h3>
    </div>
  );
};

export default NoResults;
