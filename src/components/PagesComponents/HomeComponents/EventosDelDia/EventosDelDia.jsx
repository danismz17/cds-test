import React from 'react'
import './EventosDelDia.css'

const EventosDelDia = () => {
  return (
    <>
    <div className="EventosDelDia-container">
    <div className="EventosDelDia-container-title-container">
        <h2>Eventos del dia</h2>
    </div>
    <div className="evento-container">
    
        <div className="eventoDate-box">
            <p><span>Miercoles 18/10</span></p>
    
        </div>
    
        <div className="evento-info">

            <span>Horario</span>

            <span>-</span>
            <span>Evento</span>
            <span>-</span>
            <span>Señal
                
            </span>
    
        </div>
    
        <div className="evento-info">
            <span>19:30</span>
            <span>a</span>
            <span>21:00</span>
            <span>-</span>
            <span>Uruguay vs Brasil</span>
            <span>-</span>
            <span>Latu 1</span>
    
        </div>
    
        <div className="evento-info">
            <span>21:00</span>
            <span>a</span>
            <span>23:30</span>
            <span>-</span>
            <span>Argentina vs Peru</span>
            <span>-</span>
            <span>Latu 2</span>
        </div>
    
        <div className="evento-info">
            <span>23:45</span>
            <span>a</span>
            <span>01:30</span>
            <span>-</span>
            <span>Venezuela vs Chile</span>
            <span>-</span>
            <span>Latu 3</span>
        </div>
    
    </div>
        
    </div>
    </>
  )
}

export default EventosDelDia