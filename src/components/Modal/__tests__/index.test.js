import {fireEvent, render} from '@testing-library/react'
import Modal from '../../Modal'
import React from 'react'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

const mockToggleModal = jest.fn()

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>)
    })
    // snapshot test
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Modal onClose={mockToggleModal}
                                           currentPhoto={currentPhoto}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const {getByText} = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        fireEvent.click(getByText('Close this modal'))
        expect(mockToggleModal).toHaveBeenCalledTimes(1)
    })
})