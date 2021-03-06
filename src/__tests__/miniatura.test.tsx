import React from 'react'
import Miniatura from '../components/Miniatura'
import { render } from '@testing-library/react'

describe('O componente de miniatura', () => {
    it('Deve mostrar corretamente o cadastro passada', () => {
        const cadastro = {nome: 'nome', idade:'10', raca:'raça teste', subraca:'sub teste', cor:'#FFFFF'}
        const { getByTestId } = render(<Miniatura cadastro={cadastro} />)
        expect(getByTestId('mini_nome').innerHTML).toContain('nome')
        expect(getByTestId('mini_idade').innerHTML).toContain('Idade: 10')
        expect(getByTestId('mini_raca').innerHTML).toContain('raça teste')
        expect(getByTestId('mini_subraca').innerHTML).toContain('sub teste')
    })
})