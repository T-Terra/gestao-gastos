import { toast } from "sonner";

export const ShowToastSuccess = (msg: string) => {
  toast.custom((t) => (
      <div className="flex items-center justify-between bg-green-500 text-white p-4 rounded shadow">
        <span>{msg}</span>
        <button onClick={() => toast.dismiss(t)} className="ml-4 font-bold">X</button>
      </div>
  ))
}

export const ShowToastError = (msg: string) => {
  toast.custom((t) => (
      <div className="flex items-center justify-between bg-red-500 text-white p-4 rounded shadow">
        <span>{msg}</span>
        <button onClick={() => toast.dismiss(t)} className="ml-4 font-bold">X</button>
      </div>
  ))
}