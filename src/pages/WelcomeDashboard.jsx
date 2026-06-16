
import { Link } from 'react-router';

export default function WelcomeDashboard() {
  return (
    <Link to="/welcomedashboard">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gray-200"></div>

          <h1 className="text-2xl font-bold">tipu</h1>
          <p className="text-gray-600"> Navigator</p>
        </div>
      </div>
    </Link>
  );
}