import { useRouteError } from "react-router-dom"
import notfound from '../../assets/notfound.jpg'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex justify-center items-center container mx-auto h-screen flex-col md:flex-row">
            <div>
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p >Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <img src={notfound} alt="" className=" md:w-1/2" />
        </div>
    )
}