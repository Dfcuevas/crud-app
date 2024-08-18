import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "../services/dataUsers";
import { UserData } from "../interfaceUsers";
import toast from "react-hot-toast";

const CreateUserModal = ({
  setIsActiveModal,
  isActiveModal,
}: {
  isActiveModal: boolean;
  setIsActiveModal: (value: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    createUser(data);
    toast.success(`Usuario ${data.name} ha sido creado correctamente`);
    setIsActiveModal(!isActiveModal);
    window.location.reload();
  };

  return (
    <section className=" absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-400 bg-opacity-50 ">
      <div className="bg-white rounded p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold mb-4">Crear Usuario</h2>
          <div className="flex flex-col gap-4 mb-6">
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <span className="text-red-600" role="alert">
                Name is required
              </span>
            )}
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("username", { required: true })}
              placeholder="Username"
            />
            {errors.username?.type === "required" && (
              <span className="text-red-600" role="alert">
                Username is required
              </span>
            )}
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-600" role="alert">
                Email is required
              </span>
            )}
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("city", { required: true })}
              placeholder="City"
            />
            {errors.city?.type === "required" && (
              <span className="text-red-600" role="alert">
                City is required
              </span>
            )}
            <input
              className="border border-gray-300 rounded p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              {...register("phone", { required: true })}
              placeholder="Phone number"
            />
            {errors.phone?.type === "required" && (
              <span className="text-red-600" role="alert">
                Phone number is required
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <input
              type="submit"
              className="cursor-pointer hover:bg-blue-300 bg-blue-500 py-2 px-4 rounded"
            />
            <button
              onClick={() => {
                setIsActiveModal(!isActiveModal);
              }}
              className="cursor-pointer bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateUserModal;
