'use client';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  const login = () => {
    return signIn('google');
  };

  if (status === 'loading') return <h1 className="text-5xl mt-5"> Loading... please wait</h1>;
  if (status === 'unauthenticated') {
    return <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl  mt-5">Unauthenticated</h1>
      <button onClick={login} className="px-28 py-2 mt-10 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Login
      </button>
    </div>
  };
  if (status === 'authenticated') {
    return <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl  mt-5">Authenticated</h1>
      <button onClick={() => signOut()} className="px-28 py-2 mt-10 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Logout
      </button>
    </div>
  }

}
