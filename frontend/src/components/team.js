import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {fetchTeam} from '../actions/team/index'
import placeholder from '../assets/images/placeholder.jpg'


function Team ({teamData, fetchTeam}){

    const intialPos = 0;
    const [move, setMove] = useState(intialPos)

    useEffect(() =>{
        fetchTeam()
        console.log(teamData)
    }, [])

    const moveBox = ()=>{
        setMove(prevMove => prevMove + 200)
        //console.log(prevMove)
    }

    return(
        
        teamData.loading ? (
            <h2>loading...</h2>
        )
        : teamData.error ? (
            <h2>data not found</h2>
        )
        : (
            <div className="teamContainer commonClass col-md-12">
                

                <h2>Meet the Team</h2>
                <hr className="borderBottom"/>
                <div className="teamDetails col-md-12 col-lg-12 noPadding">
                    <div className="teamList col-md-9 col-lg-9 noPadding">
                        <ul>
                        { teamData.team && 
                        teamData.team.map((tdata) => 
                            <li key={tdata.id}>{tdata.name}</li>
                            )
                        }
                        </ul>
                    </div>
                    <div className="teamPicture col-md-3 col-lg-3 noPadding">
                       <img src={placeholder} alt="team" onClick={() => setMove(intialPos)}/>
                   </div>
                </div>
             </div>
           ) 
        
    )
}

const mapStateToProps = state =>{
    return{
        teamData:state.team
    }
    
}
const mapDispatchToProps = dispatch => {
    return{
        fetchTeam: () => dispatch(fetchTeam())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)