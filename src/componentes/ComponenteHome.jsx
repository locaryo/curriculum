import React from 'react'
import imgl from '../assets/img/l.png'
import {Link} from 'react-router-dom'

const ComponenteHome = () => {

	const handleClickAbrir = () => {
		var x = document.getElementById("cabecera-home-responsive");
    	if(x.className === ""){
        	x.className += "responsive";
    	}else{
    		x.className = "";
    	}
	}

	return(
		<div className='cuerpo-home'>
			<div className='cabecera-home'>
				<div>
					<Link to="/about" className='deslizar-animate'><i className="fa fa-user"/> About</Link>
				</div>
				<div>
					<Link to="/portafolio" className='deslizar-animate'><i className="fa fa-folder"/> Portafolio</Link>
				</div>
				<div>
					<Link to="/skills" className='deslizar-animate'><i className="fa fa-terminal"/> Skills</Link>
				</div>
			</div>
			<div id="cabecera-home-responsive">
				<div>
					<Link to="/about" className='link-responsive'><i className="fa fa-user"/> About</Link>
				</div>
				<div>
					<Link to="/portafolio" className='link-responsive'><i className="fa fa-folder"/> Portafolio</Link>
				</div>
				<div>
					<Link to="/skills" className='link-responsive'><i className="fa fa-terminal"/> Skills</Link>
				</div>
				<div>
					<button href="#" className='icon-responsive' onClick={handleClickAbrir}><i className="fa fa-list"/></button>
				</div>
			</div>
			<div className='logo'>
				<img src={imgl} alt=""  className='sacudir-animate' />
			</div>
			<div className='footer'>
			<div className='copy'>
				<p><strong>
					&copy; Copyright 2021 - ALBO
				</strong></p>
				<p><strong>
					Para la creación de esta pagina se utilizo React.js 
				</strong></p>
			</div>
		</div>
		</div>
	);
}

export default ComponenteHome