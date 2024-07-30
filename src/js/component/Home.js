import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [active, setActive] = useState(false);
	const [addColor, setAddColor] = useState(false);

	useEffect(() => {
		if (active) {
			const interval = setInterval(() => {
				if (color == "red") {
					setColor("yellow")
				} else if (color == "yellow") {
					setColor("green")
				} else if (color == "green") {
					setColor("red")
				}
			}, 1000)
			return () => { clearInterval(interval) }
		}
	}, [active, color])

	return (
		<div>
			<div className="text-center">
				<div className="container mt-5 m-auto bg-black d-flex flex-column" style={{ width: "150px", height: "350px", borderRadius: "10px" }}>
					<div className={`red light ${color == "red" ? "selected" : ""}`} onClick={() => {
						setColor("red");
					}}></div>
					<div className={`yellow light ${color == "yellow" ? "selected" : ""}`} onClick={() => {
						setColor("yellow");
					}}></div>
					<div className={`green light ${color == "green" ? "selected" : ""}`} onClick={() => {
						setColor("green");
					}}></div>
				</div>

			</div>
			<p className="container-fluid d-flex justify-content-center mt-5">Para activar primero presiona algún color</p>
			<div className="container-fluid d-flex justify-content-center mt-1">
				
				<button className="btn btn-success" onClick={() => {
					setActive(!active)
				}}>Activar</button>
			</div>
			<div className="container-fluid d-flex justify-content-center mt-5">
				<button className="btn btn-info" onClick={() => {
					setAddColor();
				}}>Añadir púrpura</button>
			</div>
		</div>
	);
}

export default Home;
