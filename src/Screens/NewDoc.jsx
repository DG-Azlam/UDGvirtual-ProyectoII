import React from "react";

const NewDoc = () => {
    return (
        <div className ="App">
            <label>
            Institución
            <textarea name="postContent"/>
            </label>

            <label>
            Equipo
            <textarea name="postContent"/>
            </label>

            <label>
            No. Inventario
            <textarea name="postContent"/>
            </label>
            
            <label>
            Marca
            <textarea name="postContent"/>
            </label>
            
            <label>
            Modelo
            <textarea name="postContent"/>
            </label>
            
            <label>
            Serie
            <textarea name="postContent"/>
            </label>
            
            <label>
            Ubicación
            <textarea name="postContent"/>
            </label>
            
            <label>
            Estado
            <textarea name="postContent"/>
            </label>
            
            <label>
            Fecha
            <textarea name="postContent"/>
            </label>

            <label>
            ID documento
            <textarea name="postContent"/>
            </label>
            <hr />
        </div>
    );
}

export default NewDoc;