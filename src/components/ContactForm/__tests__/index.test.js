import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('About component', () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('shows contact form header', () => {
        const {getByTestId} = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
    it('shows submit button', () => {
        const {getByTestId} = render(<ContactForm />)
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
    })
})
