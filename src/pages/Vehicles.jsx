
import { Link } from 'react-router';
import { Car } from 'lucide-react';
export default function Vehicles() {
  return (
    <Link to="/login">
      <div className="flex h-screen w-full items-center justify-center">
        <div className=''>
 <Car />
      <div className=''>
        <h2>Login</h2>
        <p>Enter Your mobile no. below!</p>
      </div>
      </div>

<div>
<label>Number</label>
<input type="number" />
<button className='bg-green-200'>Send OTP</button>

</div>



      </div>
    </Link>
  );
}