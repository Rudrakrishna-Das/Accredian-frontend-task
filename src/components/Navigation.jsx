const Navigation = () => {
  return (
    <section>
      <nav className=" flex justify-between max-lg:hidden">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-blue-500">accredian</h1>
            <p className="text-sm">credentials </p>
          </div>
          <button className="bg-blue-600 px-3 py-2 text-white rounded-lg">
            Courses &dArr;
          </button>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-6">
            <li>Refer & Earn</li>
            <li>Resources</li>
            <li>About us</li>
          </ul>
          <div className="flex gap-3 items-center">
            <button className="bg-slate-400 px-3 py-2 rounded-lg">Login</button>
            <button className="bg-blue-500 px-3 py-2 text-white rounded-lg">
              Try for free
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
