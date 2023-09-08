import Link from "next/link";
import { useContext, useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <aside className="sidebar">
      <header>
        <div className="logo text-black opacity-100 font-bold pb-40">
          <Link href="/">ROH</Link>
        </div>
      </header>

      <div className="sidebar-items">
        <ul>
          <li
            className={`${
              selectedItem === 0 ? "text-black" : "text-gray-500"
            } cursor-pointer m-3`}
            onClick={() => setSelectedItem(0)}
          >
            <div className="sidebar-item">
              <Link href="/artist">ARTIST</Link>
            </div>
          </li>
          <li
            className={`${
              selectedItem === 1 ? "text-black" : "text-gray-500"
            } cursor-pointer m-3`}
            onClick={() => setSelectedItem(1)}
          >
            <div className="sidebar-item">
              <Link href="/exhibition">EXHIBITION</Link>
            </div>
          </li>
          <li
            className={`${
              selectedItem === 2 ? "text-black" : "text-gray-500"
            } cursor-pointer m-3`}
            onClick={() => setSelectedItem(2)}
          >
            <div className="sidebar-item">
              <Link href="/info">INFO</Link>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .text-black {
          color: black;
        }
        .text-gray-500 {
          color: gray;
        }
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
