import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");
	const [active, setActive] = useState(false);
	let changeColor = (color) => {
		setSelected(color);
	};

	useEffect (() => {
		if (active) {
			const interval = setInterval(() => {
				if (selected == "red"){
					setSelected("yellow")
				} else if (selected == "yellow"){
					setSelected("green")
				} else if (selected == "green"){
					setSelected("red")
				}
			}, 1000)
			return () => {clearInterval(interval)}
		}
	}, [active, selected])
	
	return (
		<main>
		<div className="text-center">
			<div className="container mt-5 m-auto bg-black d-flex flex-column" style={{width: "150px", height: "350px", borderRadius: "10px"}}>
				<div className={`red light ${selected == "red" ? "selected" : ""}`} onClick={() => {
					changeColor("red");
				}}></div>
				<div className={`yellow light ${selected == "yellow" ? "selected" : ""}`} onClick={() => {
					changeColor("yellow");
				}}></div>
				<div className={`green light ${selected == "green" ? "selected" : ""}`} onClick={() => {
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
