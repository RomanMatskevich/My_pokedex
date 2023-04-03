import React from "react";
import '../App.css';


const DrawInfo = (props) => {
    return(
        <div className= 'info'>
            <div className='info-image'>
                <div><img  src= {props.info.sprites?.other.dream_world.front_default}/></div>
                <div>{props.info.name}</div>
            </div>    
        <div >

            <table className="stats-table">
                <thead>
                    <tr>
                    <th>Stat</th>
                    <th>Value</th>
                    <th>Indicator</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                        <td>HP</td>
                        <td>{props.info.stats[0].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width: `${props.info.stats[0].base_stat}%`, backgroundColor: "red"  }}></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>attack</td>
                        <td>{props.info.stats[1].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width:`${props.info.stats[1].base_stat}%`, backgroundColor: "violet" }}></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>defense</td>
                        <td>{props.info.stats[2].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width: `${props.info.stats[2].base_stat}%`, backgroundColor: "blue" }}></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Special Attack</td>
                        <td>{props.info.stats[3].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width: `${props.info.stats[3].base_stat}%`, backgroundColor: "cyan" }}></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Special Defense</td>
                        <td>{props.info.stats[4].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width: `${props.info.stats[4].base_stat}%`, backgroundColor: "greenyellow" }}></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Speed</td>
                        <td>{props.info.stats[5].base_stat}</td>
                        <td>
                            <div className="indicator">
                            <div className="indicator-bar" style={{ width: `${props.info.stats[5].base_stat}%`, backgroundColor: "mistyrose" }}></div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    }
export default DrawInfo;
