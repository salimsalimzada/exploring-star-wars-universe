import { useNavigate } from "react-router";
import Button from "@ui/button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-roboto-mono space-y-4">
      <h1 className="text-3xl font-semibold text-gray-800 ">Page Not Found</h1>
      <p className="text-gray-500">The page you're looking for doesn't exist</p>
      <Button onClick={() => navigate("/films")}>Go to Home</Button>
    </div>
  );
}

export default NotFound;
