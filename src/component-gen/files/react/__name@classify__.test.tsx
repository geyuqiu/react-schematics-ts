import React from "react";
import { render, screen } from '@testing-library/react';
import <%= classify(name) %> from "./<%= classify(name) %>";

describe('<%= classify(name) %>', () => {
    test('renders ', () => {
        render(<<%= classify(name) %> />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
