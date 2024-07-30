import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [active, setActive] = useState(false);

	let changeColor = (color) => {
		setColor(color);
	}

	useEffect (() => {
		if (active) {
			const interval = setInterval(() => {
				if (color == "red"){
					setColor("yellow")
				} else if (color == "yellow"){
					setColor("green")
				} else if (color == "green"){
					setColor("red")
				}
			}, 1000)
			return () => {clearInterval(interval)}
		}
	}, [active, color])
	
	return (
		<main>
		<div className="text-center">
			<div className="container mt-5 m-auto bg-black d-flex flex-column" style={{width: "150px", height: "350px", borderRadius: "10px"}}>
				<div className={`red light ${color == "red" ? "selected" : ""}`} onClick={() => {
					changeColor("red");
				}}></div>
				<div className={`yellow light ${color == "yellow" ? "selected" : ""}`} onClick={() => {
					changeColor("yellow");
				}}></div>
				<div className={`green light ${color == "green" ? "selected" : ""}`} onClick={() => {
					changeColor("green");
				}}></div>
			</div>
			
		</div>
		<div className="container-fluid d-flex justify-content-center mt-5">
		<button className="btn btn-success" onClick={() => {
				setActive(!active)}}>Activar</button>
			</div>
		</main>
	);
}

export default Home;
