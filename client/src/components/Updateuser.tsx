import { UserData } from "../interfaceUsers";
import "../index.css";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUser } from "../services/dataUsers";

type UpdateUserPropsWithVisibility = Partial<UserData> & {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setSelecteduser: (value: null) => void;
};

const Updateuser = ({
  name,
  _id,
  isVisible,
  setIsVisible,
  setSelecteduser,
}: UpdateUserPropsWithVisibility) => {
  const { register, handleSubmit } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    const formatData = {
      ...data,
      _id,
    };
    updateUser(formatData);
    window.location.reload();
  };

  useEffect(() => {
    setIsVisible(!isVisible);
  }, []);

  return (
    <div className={`slide-in-panel p-4 ${isVisible ? "visible" : ""}`}>
      <div className="bg-white rounded p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold mb-4">Actualizar Usuario {name}</h1>
          <div className="flex flex-col gap-4 mb-6">
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("name")}
              placeholder="Name"
            />

            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("username")}
              placeholder="Username"
            />

            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("email")}
              placeholder="Email"
            />

            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("city")}
              placeholder="City"
            />

            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("phone")}
              placeholder="Phone number"
            />
          </div>
          <div className="flex justify-between">
            <input
              type="submit"
              className="cursor-pointer hover:bg-blue-300 bg-blue-500 py-2 px-4 rounded"
            />
            <button
              className="cursor-pointer bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded"
              onClick={() => {
                setIsVisible(!isVisible);
                setSelecteduser(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
