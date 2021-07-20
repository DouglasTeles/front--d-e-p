import React, { useEffect, useState } from 'react'
import api from '../services/api'

function Compmenu() {

    const [users, setusers] = useState('')
    console.log(users[1])

    useEffect(() =>{
        
        async function getUsers(){

            try {
                const allUsers  = await api.get('sarc/user')
                
                const {data} = allUsers
                setusers(data)               
                    
            } catch (error) {
            alert("user not found"+error.message)  
            }
        }       
        getUsers()
        
    }, [])

    return (        
        <div>
        
        

           <div>Menu </div>
            <div className = "card-container">
        

        <table className = "table-sarc">
            <thead className = "name-cont">Nome/contas  

            {/* {users.map(name=>(<th className = "user-name">Douglas</th>))} */}
            

                    
                    
                <thead className = "title-total">Total</thead>
                    
            </thead>
            
              
            <div className = "cont_name">Água</div>                    
            
            <div className = "total-morador">Total Morador</div>
            
            
        
            <th className = "valor-cont">100</th> 
             
            <div className = "total-conta"> Total da Conta</div>
            
        </table>
    </div>
        </div>
    )
}

export default Compmenu
