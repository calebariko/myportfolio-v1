import Button from "./Button";
import "../assets/css/NotFoundPage.css"

const NotFoundPage = () => {

  return (
    <section className="not-found">
        <div className="not-found-content">
            <p className="not-found-msg">404 | page not found</p>
            <Button label="home" clickPath="/" />
        </div>
    </section>
  )
}

export default NotFoundPage