type LoadingIndicatorProps = {
  loading: boolean;
};
export const LoadingIndicator = ({ loading }: LoadingIndicatorProps) => {
  if (!loading) return null;
  return (
    <div className="flex justify-center text-gray-600 font-roboto-mono text-lg">Loading...</div>
  );
};
