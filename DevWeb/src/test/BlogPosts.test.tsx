import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';


const postModules = import.meta.glob('../pages/posts/*.tsx', { eager: true });

describe("Blog Post Checks", () => {
    for (const path in postModules) {
        if (path.includes('.test.tsx') || path.includes('_Registry')) continue;

        const mod = postModules[path] as any;

        const Component = mod.default;

        it(`Render post: ${path}`, () => {
            if (!Component) throw new Error(`File ${path} does not export a default component!`);

            render(
                <MemoryRouter>
                    <Component></Component>
                </MemoryRouter>
            );

            expect(screen.getByText(/cd \.\./i)).toBeInTheDocument();

            expect(screen.getByText(/EOF/i)).toBeInTheDocument();
            expect(screen.getByText(/Read Only/i)).toBeInTheDocument();

            const navLinks = screen.getAllByRole('link');
            expect(navLinks.length).toBeGreaterThan(0);
        })
    }
})