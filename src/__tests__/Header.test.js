import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Header from '../components/Header'

it('does not show dropdown when mounted', () => {
    const component = render(<Header/>)

    const dropdown = component.queryByTestId('dropdown')

    expect(dropdown).not.toBeTruthy()
})

it('shows dropdown when hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header/>)

    const hamburger = getByTestId('hamburger-button')

    fireEvent.click(hamburger)

    expect(container.textContent).toContain('Dropdown menu')
})