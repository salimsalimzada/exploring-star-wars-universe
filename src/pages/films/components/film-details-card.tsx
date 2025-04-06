import Button from "@ui/button";
import Card from "@ui/card";
import { useNavigate, useParams } from "react-router";

function FilmDetailsCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log({ id });
  return (
    <div className="p-4 flex justify-center">
      <Card
        title={
          <div className="text-lg font-roboto-mono flex justify-between items-center w-full">
            <Button variant="text" onClick={() => navigate("/films")}>
              Back
            </Button>
            <p>Film Details: The Empire Strikes Back</p>
          </div>
        }
        className="font-roboto-mono text-sm max-w-4xl"
        footer={
          <div className="mt-2 pt-2 border-t border-gray-300 text-xs text-gray-700 space-y-1 text-center">
            <div>Created At: 2014-12-12</div>
            <div>API URL: https://swapi.dev/api/films/2/</div>
          </div>
        }
      >
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Basic Info</h3>
              <ul className="space-y-1">
                <li>
                  <strong>Title:</strong> The Empire Strikes Back
                </li>
                <li>
                  <strong>Episode:</strong> 5
                </li>
                <li>
                  <strong>Director:</strong> Irvin Kershner
                </li>
                <li>
                  <strong>Producer:</strong> Gary Kurtz, Rick McCallum
                </li>
                <li>
                  <strong>Release Date:</strong> 1980-05-17
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold">Characters</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Character 1</li>
                  <li>Character 2</li>
                  <li>Character 3</li>
                  <li>Character 4</li>
                  <li>Character 5</li>
                  <li>Character 6</li>
                  <li>Character 7</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Vehicles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vehicle 1</li>
                  <li>Vehicle 2</li>
                  <li>Vehicle 3</li>
                  <li>Vehicle 4</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Species</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Species 1</li>
                  <li>Species 2</li>
                  <li>Species 3</li>
                  <li>Species 5</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Opening Crawl</h3>
              <p className="whitespace-pre-wrap">
                It is a dark time for the Rebellion. Although the Death Star has been destroyed,
                Imperial troops have driven the Rebel forces from their hidden base and pursued them
                across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom
                fighters led by Luke Skywalker has established a new secret base on the remote ice
                world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has
                dispatched thousands of remote probes into the far reaches of space...
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FilmDetailsCard;
