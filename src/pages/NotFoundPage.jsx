import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center h-screen -mt-20">
        <div className="text-white flex items-center capitalize flex-col gap-4">
            <p className="text-2xl sm:text-3xl">404 | page not found</p>
            <button onClick={() => navigate("/")} className="border-2 py-2 px-4 cursor-pointer capitalize font-bold hover:border-accent hover:text-accent">home</button>
        </div>
    </section>
  )
}

export default NotFoundPage