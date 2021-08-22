import React from 'react'
import {cleanup, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
    it('renders', () => {
        const {asFragment} = render(<PhotoList/>)
        expect(asFragment()).toMatchSnapshot()
    })
})