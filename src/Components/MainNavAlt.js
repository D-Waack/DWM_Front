import React from 'react'

export default function MainNavAlt () {
    return (
        <div className='MainNav'>
            <div className='PlanoIcon'>
                <img className='Vector_11' src = {ImgAsset.CadastrodeExerccio_Vector_11} />
            </div>
            <div className='ExercicioIcon'>
                <img className='Vector_12' src = {ImgAsset.CadastrodeExerccio_Vector_12} />
            </div>
            <div className='AlunoIcon'>
                <img className='Vector_13' src = {ImgAsset.CadastrodeExerccio_Vector_13} />
            </div>
            <div className='Logo'>
                <img className='_Path_' src = {ImgAsset.CadastrodeExerccio__Path_} />
                <img className='_Path_3' src = {ImgAsset.CadastrodeExerccio__Path_3} />
                <img className='_Path_5' src = {ImgAsset.CadastrodeExerccio__Path_5} />
            </div>
            <img className='Indicator' src = {ImgAsset.CadastrodeExerccio_Indicator} />
    </div>
    );
}