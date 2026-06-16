
import { Link } from 'react-router';

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gray-200"></div>

          <h1 className="text-2xl font-bold">Envorobo</h1>
          <p className="text-gray-600">Gps Navigator</p>
        </div>
      </div>
    </Link>
  );
}