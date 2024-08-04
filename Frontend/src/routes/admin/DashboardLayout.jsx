import { NavLink, Outlet } from "react-router-dom";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiDashboardFill, RiAddCircleFill } from "react-icons/ri";
const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="mt-[13vh] border md:w-[15%] w-full overflow-hidden pt-5  bg-white ">

        {/* navigation for desktop */}
        <div className="flex-col hidden bg-white md:flex">
          <NavLink
            to={"/dashboard"}
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1 p-4 text-[10px]"
            }
          >
            <RiDashboardFill className="text-2xl text-pink-500" />
            <p className="text-lg font-semibold text-gray-300">All Products </p>
          </NavLink>

          <NavLink
            to={"/dashboard/add-product"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1  p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1  p-4 text-[10px]"
            }
          >
            <RiAddCircleFill className="text-2xl text-pink-500" />
            <p className="text-lg font-semibold text-gray-300">Add Product </p>
          </NavLink>

          <NavLink
            to={"/dashboard/purchases"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1  p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1  p-4 text-[10px]"
            }
          >
            <BiSolidPurchaseTag className="text-2xl text-pink-500" />
            <p className="text-lg font-semibold text-gray-300">Purchases</p>
          </NavLink>
        </div>

        {/* navigation for mobile */}
        <div className="flex items-center justify-between bg-white md:hidden">
          <NavLink
            to={"/dashboard"}
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1 p-4 text-[10px]"
            }
          >
            <RiDashboardFill className="text-lg text-pink-500" />
            <p className="text-sm font-semibold text-gray-400">Products</p>
          </NavLink>

          <NavLink
            to={"/dashboard/add-product"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1  p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1  p-4 text-[10px]"
            }
          >
            <RiAddCircleFill className="text-lg text-pink-500" />
            <p className="text-sm font-semibold text-gray-300">Add</p>
          </NavLink>

          <NavLink
            to={"/dashboard/purchases"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1  p-4 bg-slate-200 border-r-4 border-slate-600 font-[500] text-[10px]"
                : "flex items-center gap-1  p-4 text-[10px]"
            }
          >

            <BiSolidPurchaseTag className="text-lg text-pink-500" />
            <p className="text-sm font-semibold text-gray-300">Purchases</p>
          </NavLink>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[80%] border-t-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
