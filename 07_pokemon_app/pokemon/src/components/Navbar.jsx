

const Navbar = () => {
    return (
        <>
            <div className="navbar px-[10%] bg-gray-900">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold text-3xl">pokemon </a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-slate-700" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24836298/pikachu_artwork.jpg?quality=90&strip=all&crop=3.125%2C0%2C93.75%2C100&w=750" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    );
};

export default Navbar;