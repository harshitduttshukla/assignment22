import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-100 h-screen w-64 p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>

      <div className="space-y-4">
        <NavLink
          to="/Api1"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Service 1 for Car
        </NavLink>

        <NavLink
          to="/Api2"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Service for Scan Car
        </NavLink>
        <NavLink
          to="/Customcommands1"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Custom commands
        </NavLink>
        <NavLink
          to="/ActuationFetcher"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          ActuationFetcher
        </NavLink>
        <NavLink
          to="/CommandFetcher"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          CommandFetcher
        </NavLink>
        <NavLink
          to="/ModelListPage"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Model List Page
        </NavLink>
        <NavLink
          to="/BikeMakeList"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Bike Make List
        </NavLink>
        <NavLink
          to="/OdometerDetails"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Odometer Details
        </NavLink>
        <NavLink
          to="/Updatecommand"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-500 text-white shadow'
                : 'text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          Update commands
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;


