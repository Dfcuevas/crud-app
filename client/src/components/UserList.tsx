import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../services/dataUsers";
import { UserData } from "../interfaceUsers";
import Pagination from "./Pagination";
import CreateUserModal from "./CreateUserModal";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Updateuser from "./Updateuser";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedUser, setSelecteduser] = useState<UserData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const usersPerPage = 3;

  useEffect(() => {
    const data = getUsers();
    data.then((response) => {
      setUsers(response);
    });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDelete = (user: UserData) => {
    deleteUser(user._id).then(() => {
      const updatedUsers = users.filter(
        (userFiltered) => userFiltered._id !== user._id
      );
      toast.success(`Usuario ${user.name} borrado con exito`);
      setUsers(updatedUsers);
    });
  };

  const handleEditUser = (user: UserData) => {
    !isVisible ? setSelecteduser(user) : setSelecteduser(null);
  };

  return (
    <div className="w-full mx-auto p-10 relative h-screen">
      {isActiveModal && (
        <CreateUserModal
          setIsActiveModal={setIsActiveModal}
          isActiveModal={isActiveModal}
        />
      )}
      <div className="flex justify-between mb-10 items-center">
        <input
          type="text"
          placeholder="search users by name..."
          className="p-2 mb-4 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setIsActiveModal(!isActiveModal)}
          className="bg-blue-500 rounded px-4 py-2 text-white"
        >
          Create new user
        </button>
      </div>

      <table className="text-center table-auto w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody className="">
          {currentUsers.map((user, index) => (
            <tr key={user._id} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 flex justify-around">
                <MdEdit
                  onClick={() => handleEditUser(user)}
                  className="hover:text-blue-500 cursor-pointer"
                />
                <FaTrash
                  onClick={() => handleDelete(user)}
                  className="hover:text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
      {selectedUser && (
        <Updateuser
          name={selectedUser.name}
          _id={selectedUser._id}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setSelecteduser={setSelecteduser}
        />
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
