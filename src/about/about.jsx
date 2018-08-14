import React from 'react'
import PageHeader from '../template/pageHeader'

export default (props) => (
    <div>
        <PageHeader name='Sobre'  small='o app'/>
        <div>
            <p>Esse app e um criador de atividades, 
                não esta separado por usuarios, ou seja, se você colocar uma atividade todos os usuarios irão ver
            </p>

            <p>
                Esse app foi desenvolvido por <a href="https://github.com/carloscacho">@carloscacho</a> como forma de estudo na linguagem React com Redux
            </p>
        </div>

    </div>
    
)
