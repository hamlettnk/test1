import "./App.css";

export default function BlogHomePage() {
    return (
        <div className="whole-blog">
            <img className="home-logo" src={require("./images/termux-photo.jpg")} alt="logo" />
            <h1 className="logo-name">quarks</h1>
            <a href="https://www.quarks.ml/how-to-termux-part-1">Learn Termux</a>
        </div>
    )
}